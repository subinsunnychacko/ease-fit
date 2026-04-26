# SEO Utilities

This directory contains all SEO-related helpers and keywords for the EaseFIT project.

## Files

- **keywords.ts** - Centralized keyword definitions for all routes
- **useSEO.ts** - Reusable SEO helper functions

## Using the SEO Helper

The `useSEO` module provides functions to avoid duplicating SEO metadata across pages.

### Quick Start

```typescript
import { generateMetadataWithSEO } from "@/lib/seo/useSEO";

const ROUTE = "/your-page" as const;

export const metadata = generateMetadataWithSEO(ROUTE, {
  title: "Your Page Title",
  descriptionTemplate: (primary, secondary) =>
    `EaseFIT is ${primary} and ${secondary} with your custom description.`,
  ogTitle: "OG Title | EaseFIT",
  ogDescription: "OG description for social sharing",
  twitterDescription: "Twitter-specific description",
  ogImage: {
    url: "/og-your-page.png",
    alt: "Descriptive alt text with keywords",
  },
});
```

### Available Functions

#### `generateMetadata(route, config)`
Generates full metadata with custom description.

#### `generateMetadataWithSEO(route, config)`
Generates metadata with description that includes primary and secondary keywords automatically.

#### `getSEOData(route)`
Returns keywords object with:
- `keywords`: Array of all keywords (for metadata.keywords)
- `primary`: Primary keyword
- `secondary`: Array of secondary keywords
- `longTail`: Array of long-tail keywords

#### `getCanonical(route)`
Returns canonical URL for a route.

#### `getOGMetadata(route, config)`
Generates OpenGraph metadata object.

#### `getTwitterMetadata(config)`
Generates Twitter metadata object.

#### `getPrimaryKeyword(route)`
Returns just the primary keyword string.

#### `getSecondaryKeywords(route)`
Returns just the secondary keywords array.

#### `getLongTailKeywords(route)`
Returns long-tail keywords for use in FAQ sections.

## SEO Route Types

All functions are type-safe and accept only valid SeoRoute values:
- `/`
- `/features`
- `/pricing`
- `/why-easefit`
- `/contact`
- `/gym-management-software`
- `/ai-gym-receptionist`
- `/gym-member-retention-software`

## Example: Full Page Implementation

```typescript
import Link from "next/link";
import PageComponent from "@/components/page";
import { generateMetadataWithSEO, getLongTailKeywords } from "@/lib/seo/useSEO";
import { absoluteUrl } from "@/lib/site";

const ROUTE = "/your-page" as const;

export const metadata = generateMetadataWithSEO(ROUTE, {
  title: "Your Page Title",
  descriptionTemplate: (primary) =>
    `${primary} for your business.`,
  ogImage: {
    url: "/og-your-page.png",
    alt: "Page description",
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Your Page Title",
  url: absoluteUrl(ROUTE),
};

export default function YourPage() {
  // Use getLongTailKeywords(ROUTE) to get keywords for FAQ sections
  const faqKeywords = getLongTailKeywords(ROUTE);
  
  return <PageComponent />;
}
```
