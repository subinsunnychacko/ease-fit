/**
 * SEO authority scoring for EaseFIT pages.
 *
 * Two entry points:
 *   analyzePageSEO(html, keywords?)  – full-page HTML analysis (use in tests / scripts)
 *   analyzeMetadata(title, desc, kw) – metadata-only check (used in dev-mode logging via useSEO.ts)
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SEOBreakdown {
	wordCount: number;
	internalLinkCount: number;
	keywordsFound: string[];
	keywordsMissing: string[];
	headings: { h1: number; h2: number; h3: number };
	contentScore: number;
	linksScore: number;
	keywordsScore: number;
	headingScore: number;
}

export interface SEOAnalysisResult {
	score: number;      // 0–100
	issues: string[];
	breakdown: SEOBreakdown;
}

export interface MetadataAnalysisResult {
	score: number;      // 0–100
	issues: string[];
}

// ─── HTML parsing helpers ────────────────────────────────────────────────────

function stripHtml(html: string): string {
	return html
		.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
		.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&apos;|&#39;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/\s+/g, " ")
		.trim();
}

function countWords(text: string): number {
	return text.split(/\s+/).filter((w) => w.length > 1).length;
}

function countInternalLinks(html: string): number {
	// Matches href="/" href="/foo" href="/foo?bar" — excludes http(s):// and mailto:
	const matches = html.match(
		/<a\s[^>]*href=["'](\/[^"']*|#[^"']*)["'][^>]*>/gi,
	);
	return matches ? matches.length : 0;
}

function extractHeadings(html: string): { h1: number; h2: number; h3: number } {
	return {
		h1: (html.match(/<h1[\s>]/gi) ?? []).length,
		h2: (html.match(/<h2[\s>]/gi) ?? []).length,
		h3: (html.match(/<h3[\s>]/gi) ?? []).length,
	};
}

function partitionKeywords(
	keywords: string[],
	text: string,
): { found: string[]; missing: string[] } {
	const lower = text.toLowerCase();
	const found: string[] = [];
	const missing: string[] = [];
	for (const kw of keywords) {
		(lower.includes(kw.toLowerCase()) ? found : missing).push(kw);
	}
	return { found, missing };
}

// ─── Per-dimension scoring ───────────────────────────────────────────────────

function scoreContent(
	wordCount: number,
): { score: number; issue: string | null } {
	if (wordCount >= 1500) return { score: 25, issue: null };
	if (wordCount >= 1000) return { score: 20, issue: null };
	if (wordCount >= 600)
		return {
			score: 14,
			issue: `Content is ${wordCount} words — aim for 1000+ for stronger page authority`,
		};
	if (wordCount >= 300)
		return {
			score: 8,
			issue: `Content is ${wordCount} words — thin content risks lower rankings`,
		};
	return {
		score: 3,
		issue: `Content is only ${wordCount} words — expand significantly (300+ minimum, 1000+ ideal)`,
	};
}

function scoreLinks(
	count: number,
): { score: number; issue: string | null } {
	if (count >= 5) return { score: 20, issue: null };
	if (count >= 3) return { score: 15, issue: null };
	if (count >= 2)
		return {
			score: 10,
			issue: `Only ${count} internal links — add more to improve crawlability and site structure`,
		};
	if (count === 1)
		return {
			score: 5,
			issue: "Only 1 internal link — aim for 3+ to support crawl depth",
		};
	return {
		score: 0,
		issue: "No internal links found — critical gap for site structure and crawl depth",
	};
}

function scoreKeywords(
	foundCount: number,
	totalCount: number,
): { score: number; issue: string | null } {
	if (totalCount === 0)
		return {
			score: 15,
			issue: "No keywords passed to analyzePageSEO — keyword scoring skipped (pass keywords[] for full analysis)",
		};
	const ratio = foundCount / totalCount;
	if (ratio >= 0.8) return { score: 30, issue: null };
	if (ratio >= 0.6)
		return {
			score: 22,
			issue: `${foundCount}/${totalCount} target keywords present — minor coverage gaps`,
		};
	if (ratio >= 0.4)
		return {
			score: 14,
			issue: `${foundCount}/${totalCount} target keywords found — several missing from content`,
		};
	if (ratio >= 0.2)
		return {
			score: 7,
			issue: `Low keyword coverage: only ${foundCount}/${totalCount} keywords in content`,
		};
	return {
		score: 0,
		issue: `Very low keyword coverage: ${foundCount}/${totalCount} — content may be misaligned with target terms`,
	};
}

function scoreHeadings(
	h1: number,
	h2: number,
	h3: number,
): { score: number; issues: string[] } {
	let score = 25;
	const issues: string[] = [];

	if (h1 === 0) {
		score -= 15;
		issues.push("Missing H1 — every page must have exactly one H1 tag");
	} else if (h1 > 1) {
		score -= 8;
		issues.push(
			`${h1} H1 tags found — should be exactly one per page (currently ${h1})`,
		);
	}

	if (h2 === 0) {
		score -= 10;
		issues.push("No H2 headings — add section headings to improve content structure");
	} else if (h2 === 1) {
		score -= 4;
		issues.push("Only 1 H2 heading — two or more H2s recommended for content depth");
	}

	if (h2 === 0 && h3 > 0) {
		score -= 4;
		issues.push("H3 used without any H2 — heading levels should not be skipped");
	}

	return { score: Math.max(0, score), issues };
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Analyse a full rendered HTML string for SEO quality.
 * Scores content length, internal links, keyword coverage, and heading structure.
 *
 * @param htmlContent  Rendered HTML of the page (or a section of it)
 * @param keywords     Target keywords to check for — use getPrioritizedKeywords(route)
 *
 * @example
 * import { analyzePageSEO } from "@/lib/seo/authority";
 * import { getPrioritizedKeywords } from "@/lib/seo/trends";
 *
 * const html = await fetch("http://localhost:3000/gym-management-software").then(r => r.text());
 * const result = analyzePageSEO(html, getPrioritizedKeywords("/gym-management-software"));
 * console.log(result.score, result.issues);
 */
export function analyzePageSEO(
	htmlContent: string,
	keywords: string[] = [],
): SEOAnalysisResult {
	const text = stripHtml(htmlContent);
	const wordCount = countWords(text);
	const internalLinkCount = countInternalLinks(htmlContent);
	const headings = extractHeadings(htmlContent);
	const { found: keywordsFound, missing: keywordsMissing } = partitionKeywords(
		keywords,
		text,
	);

	const contentResult = scoreContent(wordCount);
	const linksResult = scoreLinks(internalLinkCount);
	const keywordsResult = scoreKeywords(keywordsFound.length, keywords.length);
	const headingResult = scoreHeadings(headings.h1, headings.h2, headings.h3);

	const score =
		contentResult.score +
		linksResult.score +
		keywordsResult.score +
		headingResult.score;

	const issues = [
		contentResult.issue,
		linksResult.issue,
		keywordsResult.issue,
		...headingResult.issues,
	].filter((i): i is string => i !== null);

	return {
		score,
		issues,
		breakdown: {
			wordCount,
			internalLinkCount,
			keywordsFound,
			keywordsMissing,
			headings,
			contentScore: contentResult.score,
			linksScore: linksResult.score,
			keywordsScore: keywordsResult.score,
			headingScore: headingResult.score,
		},
	};
}

/**
 * Lightweight metadata-only check — validates title length, description length,
 * and whether the primary keyword appears in both.
 * Used in generateMetadataWithSEO for dev-mode console logging.
 * Does not require rendered HTML.
 */
export function analyzeMetadata(
	title: string,
	description: string,
	keywords: string[],
): MetadataAnalysisResult {
	let score = 100;
	const issues: string[] = [];

	// Title length: ideal 50–60 chars
	if (title.length < 30) {
		score -= 15;
		issues.push(
			`Title too short (${title.length} chars) — aim for 50–60 chars`,
		);
	} else if (title.length > 65) {
		score -= 10;
		issues.push(
			`Title too long (${title.length} chars) — truncates in SERPs above ~60 chars`,
		);
	}

	// Description length: ideal 120–160 chars
	if (description.length < 100) {
		score -= 20;
		issues.push(
			`Meta description too short (${description.length} chars) — aim for 120–160 chars`,
		);
	} else if (description.length > 165) {
		score -= 10;
		issues.push(
			`Meta description too long (${description.length} chars) — truncates in SERPs above ~160 chars`,
		);
	}

	const primary = keywords[0];

	// Primary keyword in title
	if (primary && !title.toLowerCase().includes(primary.toLowerCase())) {
		score -= 15;
		issues.push(`Primary keyword "${primary}" not found in title`);
	}

	// Primary keyword in description
	if (primary && !description.toLowerCase().includes(primary.toLowerCase())) {
		score -= 15;
		issues.push(
			`Primary keyword "${primary}" not found in meta description`,
		);
	}

	// Secondary keyword coverage in description
	if (keywords.length > 1) {
		const secondaryInDesc = keywords
			.slice(1, 4)
			.filter((kw) => description.toLowerCase().includes(kw.toLowerCase()));
		if (secondaryInDesc.length === 0) {
			score -= 5;
			issues.push(
				"No secondary keywords found in meta description — consider working one in naturally",
			);
		}
	}

	return { score: Math.max(0, score), issues };
}
