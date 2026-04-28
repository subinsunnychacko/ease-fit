import type { Metadata } from "next";
import { SEO_KEYWORDS, getAllKeywordsForRoute, type SeoRoute } from "./keywords";
import { getPrioritizedKeywords } from "./trends";
import { analyzeMetadata } from "./authority";
import { runDevValidation, validatePageKeywords } from "./validation";
import { enrichDescription } from "./queries";
import { absoluteUrl } from "@/lib/site";

export { getTrendingKeywords } from "./trends";
export { getQueries, getQueryFaqs } from "./queries";

export interface SEOConfig {
	title: string;
	description: string;
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: {
		url: string;
		alt: string;
	};
	twitterDescription?: string;
	priority?: number;
}

export interface SEOData {
	keywords: ReturnType<typeof getAllKeywordsForRoute>;
	primary: string;
	secondary: readonly string[];
	longTail: readonly string[];
}

/**
 * Get SEO data (keywords) for a route
 */
export function getSEOData(route: SeoRoute): SEOData {
	const keywords = SEO_KEYWORDS[route];

	return {
		keywords: getAllKeywordsForRoute(route),
		primary: keywords.primary,
		secondary: keywords.secondary,
		longTail: keywords.longTail,
	};
}

/**
 * Generate canonical URL for a route
 */
export function getCanonical(route: SeoRoute): string {
	return absoluteUrl(route);
}

/**
 * Generate OpenGraph metadata object
 */
export function getOGMetadata(
	route: SeoRoute,
	config: SEOConfig,
): Metadata["openGraph"] {
	const ogImage = config.ogImage
		? [
				{
					url: config.ogImage.url,
					width: 1200,
					height: 630,
					alt: config.ogImage.alt,
				},
			]
		: undefined;

	return {
		title: config.ogTitle || config.title,
		description: config.ogDescription || config.description,
		url: absoluteUrl(route),
		type: "website",
		...(ogImage && { images: ogImage }),
	};
}

/**
 * Generate Twitter metadata object
 */
export function getTwitterMetadata(
	config: SEOConfig,
): Metadata["twitter"] {
	return {
		title: config.ogTitle || config.title,
		description: config.twitterDescription || config.ogDescription || config.description,
		card: "summary_large_image",
	};
}

/**
 * Generate full metadata object for a page
 */
export function generateMetadata(
	route: SeoRoute,
	config: SEOConfig,
): Metadata {
	return {
		title: config.title,
		description: config.description,
		keywords: getPrioritizedKeywords(route),
		openGraph: getOGMetadata(route, config),
		twitter: getTwitterMetadata(config),
		alternates: {
			canonical: getCanonical(route),
		},
	};
}

/**
 * Generate metadata with custom description that includes primary keyword
 * Useful for pages using SEO keywords in the description
 */
export function generateMetadataWithSEO(
	route: SeoRoute,
	config: Omit<SEOConfig, "description"> & {
		descriptionTemplate?: (primary: string, secondary: string) => string;
	},
): Metadata {
	const seoData = getSEOData(route);
	const rawDescription = config.descriptionTemplate
		? config.descriptionTemplate(seoData.primary, seoData.secondary[0])
		: `${seoData.primary}. ${config.title}`;
	const description = enrichDescription(rawDescription, route);

	if (process.env.NODE_ENV === "development") {
		runDevValidation(); // global duplicate/structure checks — runs once per process

		const keywords = getPrioritizedKeywords(route);
		const { score, issues } = analyzeMetadata(config.title, description, keywords);
		const badge = score >= 80 ? "✓" : score >= 60 ? "~" : "✗";
		console.log(`[SEO:${route}] metadata ${badge} ${score}/100`);
		issues.forEach((issue) => console.warn(`  ↳ ${issue}`));

		// Per-page: check primary keyword in H1 (config.title is used as H1 by SeoLandingPage)
		const { warnings: pageWarnings } = validatePageKeywords(route, config.title);
		pageWarnings.forEach((w) => console.warn(`  ↳ [${w.type}] ${w.message}`));
	}

	return generateMetadata(route, {
		...config,
		description,
	});
}

/**
 * Get all long-tail keywords for a route (useful for FAQ sections)
 */
export function getLongTailKeywords(route: SeoRoute): readonly string[] {
	return getSEOData(route).longTail;
}

/**
 * Get secondary keywords for a route
 */
export function getSecondaryKeywords(route: SeoRoute): readonly string[] {
	return getSEOData(route).secondary;
}

/**
 * Get primary keyword for a route
 */
export function getPrimaryKeyword(route: SeoRoute): string {
	return getSEOData(route).primary;
}
