import type { Metadata } from "next";
import { SEO_KEYWORDS, getAllKeywordsForRoute, type SeoRoute } from "./keywords";
import { absoluteUrl } from "@/lib/site";

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
	const seoData = getSEOData(route);

	return {
		title: config.title,
		description: config.description,
		keywords: seoData.keywords,
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
	const description = config.descriptionTemplate
		? config.descriptionTemplate(seoData.primary, seoData.secondary[0])
		: `${seoData.primary}. ${config.title}`;

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
