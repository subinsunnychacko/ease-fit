# EaseFIT — Marketing Assets

Structured ad copy, keyword lists, and targeting config for EaseFIT's paid acquisition.

---

## Files

| File | Purpose |
|---|---|
| `googleAds.ts` | Google Ads campaign config — keywords, RSA headlines/descriptions, targeting, bid strategy |

---

## Google Ads (`googleAds.ts`)

### Campaigns

| Campaign | Daily Budget | Bid Strategy | Landing Page |
|---|---|---|---|
| Core — Gym Management Software | $30 | Target CPA ($40) | `/gym-management-software` |
| AI Gym Receptionist | $20 | Target CPA ($45) | `/ai-gym-receptionist` |
| Member Retention | $20 | Target CPA ($45) | `/gym-member-retention-software` |
| Competitor (Mindbody / Vagaro) | $25 | Maximize Conversions | `/why-easefit` |
| Brand — EaseFIT | $10 | Target CPA ($15) | `/` |
| Demo / Bottom of Funnel | $15 | Maximize Conversions | `/contact` |

**Total daily budget ceiling: $120 / ~$3,600/month**

---

### Importing campaign data

```ts
import { CAMPAIGNS, coreCampaign, validateAds, getAllKeywords } from "@/marketing/googleAds";

// All 6 campaigns as an array
console.log(CAMPAIGNS.map(c => c.name));

// Single campaign
console.log(coreCampaign.adGroups[0].keywords);

// Every keyword across all campaigns (deduped)
const keywords = getAllKeywords();

// Validate RSA character limits before uploading
const errors = validateAds();
if (errors.length) {
  console.error("Ad copy violations:", errors);
}
```

---

### Ad structure

Each campaign follows the Google Ads RSA (Responsive Search Ad) structure:

```
Campaign
└── Ad Group (keyword theme)
    ├── keywords[]        — with match type: exact | phrase | broad
    ├── negativeKeywords[]
    └── ads[]
        ├── headlines[]    — 3–15 per ad, each ≤ 30 chars
        ├── descriptions[] — 2–4 per ad, each ≤ 90 chars
        ├── finalUrl
        └── displayPath    — [segment1, segment2], each ≤ 15 chars
```

Google automatically tests headline + description combinations and surfaces the best-performing combinations. More headlines = more signals for the algorithm.

---

### Character limits

| Element | Max Length | Notes |
|---|---|---|
| Headline | 30 chars | Provide 10–15 per ad |
| Description | 90 chars | Provide 3–4 per ad |
| Display path segment | 15 chars | 2 segments max |
| Final URL | No limit | Should match keyword theme |

Use `validateAds()` to check all ads before uploading:

```ts
import { validateAds } from "@/marketing/googleAds";

const errors = validateAds();
// returns [] if all ads are within limits
// returns string[] of human-readable violations if not
```

---

### Match types

| Type | Syntax in Google Ads UI | When to use |
|---|---|---|
| `exact` | `[keyword]` | High-intent, low-volume; tightest control |
| `phrase` | `"keyword"` | Captures variations that include the phrase |
| `broad` | `keyword` | Wider reach; use with negative keywords |

The competitor and brand campaigns lean on `exact` and `phrase` to avoid wasted spend. The core campaign mixes all three.

---

### Targeting

All campaigns default to `CORE_TARGETING`:

- **Locations**: US, Canada, UK, Australia
- **Languages**: English
- **Devices**: Desktop, mobile, tablet
- **Schedule**: Mon–Fri 06:00–22:00, Sat–Sun 07:00–20:00 local
- **Audience observation**: Small Business Owners, In-market: Business Software

The brand campaign narrows devices to desktop + mobile (tablets less relevant for brand searches).

---

### Negative keywords

A shared `GLOBAL_NEGATIVES` list blocks irrelevant traffic across all campaigns:

- Job seekers: `jobs`, `careers`, `hiring`, `salary`, `resume`
- Consumer fitness: `gym membership`, `gym near me`, `home gym`, `workout plan`, `exercise`
- Education: `course`, `certification`

Competitor campaigns add extra negatives (`mindbody login`, `vagaro login`, etc.) to exclude existing customers searching for support.

---

### Recommended launch sequence

1. **Week 1–2**: Start with `brandCampaign` and `demoCampaign` only. Low spend, high intent — validates conversion tracking before scaling.
2. **Week 3–4**: Add `coreCampaign` with Maximize Conversions. Let Google gather 30–50 conversions before switching to Target CPA.
3. **Month 2**: Add `aiReceptionistCampaign` and `retentionCampaign` once core is stable.
4. **Month 2+**: Add `competitorCampaign` last — highest CPC, requires strong conversion data to stay profitable.

---

### Exporting for Google Ads Editor

To bulk-upload via Google Ads Editor, map the TypeScript types to the Editor CSV format:

| `googleAds.ts` field | Google Ads Editor column |
|---|---|
| `campaign.name` | Campaign |
| `adGroup.name` | Ad Group |
| `keyword.text` | Keyword |
| `keyword.matchType` → `exact` | `[keyword]` |
| `keyword.matchType` → `phrase` | `"keyword"` |
| `ad.headlines` | Headline 1–15 |
| `ad.descriptions` | Description 1–4 |
| `ad.finalUrl` | Final URL |
| `ad.displayPath[0]` | Path 1 |
| `ad.displayPath[1]` | Path 2 |

A conversion script (`scripts/exportAdsEditorCsv.ts`) can automate this if needed.
