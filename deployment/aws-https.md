# AWS HTTPS Deployment — EaseFIT

Static export hosted on S3, served via CloudFront, secured with an ACM certificate.

> **Stack**: Next.js `output: "export"` → `out/` → S3 bucket → CloudFront distribution → ACM TLS cert
>
> This project already has `output: "export"`, `trailingSlash: true`, and `images: { unoptimized: true }` in `next.config.ts`, so all pages render as plain HTML files compatible with S3.

---

## Prerequisites

- AWS CLI configured (`aws configure`) with an IAM user that has S3, CloudFront, ACM, and Route 53 permissions.
- A registered domain (e.g. `ease.fit`) with its nameservers pointing to Route 53 or with the ability to add CNAME records.
- Node.js 18+ installed locally.

---

## 1. Build the Static Site

```bash
npm run build
```

Output lands in `out/`. Verify it contains `index.html` and a `_next/` folder before proceeding.

---

## 2. S3 Bucket Setup

### 2a. Create the bucket

```bash
aws s3 mb s3://ease-fit-prod --region us-east-1
```

> Use your actual domain name as the bucket name if you plan to use S3 static website hosting as an origin (not recommended — use OAC instead; see step 4).

### 2b. Block all public access

Keep the bucket private. CloudFront will access it via an Origin Access Control (OAC), not a public URL.

```bash
aws s3api put-public-access-block \
  --bucket ease-fit-prod \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
```

### 2c. Upload the build

```bash
aws s3 sync out/ s3://ease-fit-prod --delete
```

`--delete` removes stale files from previous deployments.

### 2d. Set correct content types (optional but recommended)

`aws s3 sync` infers MIME types automatically. If you see CSS or JS served as `application/octet-stream`, add `--content-type` overrides per extension or use the following:

```bash
aws s3 cp out/ s3://ease-fit-prod \
  --recursive \
  --exclude "*" \
  --include "*.css" \
  --content-type "text/css"

aws s3 cp out/ s3://ease-fit-prod \
  --recursive \
  --exclude "*" \
  --include "*.js" \
  --content-type "application/javascript"
```

---

## 3. ACM Certificate

> **Important**: CloudFront only accepts ACM certificates created in **us-east-1** (N. Virginia), regardless of where your bucket or users are.

### 3a. Request the certificate

```bash
aws acm request-certificate \
  --domain-name ease.fit \
  --subject-alternative-names "www.ease.fit" \
  --validation-method DNS \
  --region us-east-1
```

Note the `CertificateArn` from the output.

### 3b. Add DNS validation records

```bash
aws acm describe-certificate \
  --certificate-arn <CertificateArn> \
  --region us-east-1 \
  --query "Certificate.DomainValidationOptions"
```

This returns a `ResourceRecord` block with a CNAME `Name` and `Value`. Add both records (one for the apex, one for `www`) to your DNS provider.

If using Route 53:

```bash
# AWS Console: Route 53 → Hosted zones → ease.fit → Create record
# Type: CNAME | Name: _abc123.ease.fit | Value: _xyz456.acm-validations.aws
```

Validation typically completes within 5–30 minutes. Wait until status is `ISSUED`:

```bash
aws acm wait certificate-validated \
  --certificate-arn <CertificateArn> \
  --region us-east-1
```

---

## 4. CloudFront Distribution

### 4a. Create an Origin Access Control (OAC)

OAC replaces the older Origin Access Identity (OAI) and is the current AWS recommendation.

In the AWS Console:
1. Go to **CloudFront → Origin access → Create control setting**
2. Name: `ease-fit-oac`
3. Signing behavior: **Sign requests (recommended)**
4. Origin type: **S3**

Note the OAC ID.

### 4b. Create the distribution

In the AWS Console (**CloudFront → Create distribution**), or via CLI with a config JSON:

**Key settings:**

| Setting | Value |
|---|---|
| Origin domain | `ease-fit-prod.s3.us-east-1.amazonaws.com` |
| Origin access | Use the OAC created above |
| Viewer protocol policy | **Redirect HTTP to HTTPS** |
| Allowed HTTP methods | GET, HEAD |
| Default root object | `index.html` |
| Alternate domain names (CNAMEs) | `ease.fit`, `www.ease.fit` |
| Custom SSL certificate | Select the ACM cert from step 3 |
| Price class | Use all edge locations (or restrict to reduce cost) |
| Compress objects | Yes |

**Custom error responses** (required for SPA-style routing with `trailingSlash: true`):

| HTTP error code | Response page path | HTTP response code |
|---|---|---|
| 403 | `/index.html` | 200 |
| 404 | `/404/index.html` | 404 |

> The 403 rule handles S3's "no such key" response for direct URL access. The 404 rule serves Next.js's generated error page.

### 4c. Grant the OAC permission to read the bucket

After the distribution is created, attach this bucket policy to `ease-fit-prod` (replace `<DistributionId>` and `<AccountId>`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontOAC",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ease-fit-prod/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::<AccountId>:distribution/<DistributionId>"
        }
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-policy \
  --bucket ease-fit-prod \
  --policy file://bucket-policy.json
```

---

## 5. HTTP → HTTPS Redirect

The redirect is enforced at the CloudFront viewer level — no S3 redirects needed.

In the distribution's **Behaviors** tab:
- **Viewer Protocol Policy**: `Redirect HTTP to HTTPS`

This returns a `301` to any `http://ease.fit/...` request, pointing the client at `https://ease.fit/...`. CloudFront handles both protocols but only serves over TLS.

To verify:

```bash
curl -I http://ease.fit
# Expected: HTTP/1.1 301 Moved Permanently
# Location: https://ease.fit/
```

---

## 6. Point DNS to CloudFront

In Route 53 (or your DNS provider):

```
ease.fit      A      ALIAS → <distribution>.cloudfront.net
www.ease.fit  CNAME  → <distribution>.cloudfront.net
```

For Route 53, use an **A record with Alias** targeting the CloudFront distribution. For other providers, use a CNAME (note: some providers don't support CNAME on the apex — use ALIAS or ANAME if available).

---

## 7. Deployment Workflow (Ongoing)

After every production push:

```bash
npm run build
aws s3 sync out/ s3://ease-fit-prod --delete
aws cloudfront create-invalidation \
  --distribution-id <DistributionId> \
  --paths "/*"
```

The invalidation clears CloudFront's edge cache so users see the latest build immediately. Invalidations are free for the first 1,000 paths per month.

---

## Cost Estimate (Low Traffic)

| Service | Estimated monthly cost |
|---|---|
| S3 storage (< 1 GB) | < $0.03 |
| S3 requests | < $0.01 |
| CloudFront (first 1 TB free tier) | $0 – $2 |
| ACM certificate | Free |
| Route 53 hosted zone | $0.50 |
| **Total** | **< $3 / month** |

---

## Troubleshooting

**403 on direct page URLs** — The custom error response for 403 → `/index.html` is missing or not deployed yet. Wait for the distribution to finish deploying after adding it.

**CSS/JS not loading** — Check MIME types (step 2d) and that the `_next/` folder uploaded correctly.

**Certificate not found in CloudFront** — The ACM cert was created in the wrong region. It must be in `us-east-1`.

**www redirects not working** — Ensure `www.ease.fit` is listed as an alternate domain name on the distribution AND is covered by the ACM cert's SANs.
