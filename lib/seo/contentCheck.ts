/**
 * Structural content checks for EaseFIT landing pages.
 *
 * Two entry points:
 *   checkContent(html, options?)   – full-page HTML check (tests / scripts)
 *   buildPropsHtml(props)          – assemble approximate HTML from SeoLandingPage
 *                                    props for dev-mode logging
 *
 * Thresholds (defaults):
 *   wordCount < 1200  → warn   (pass a lower value via options for partial checks)
 *   h2Count  === 0    → warn
 *   h3Count  === 0    → warn   (optional; disable via requireH3: false)
 *
 * Full-page usage (integration test / fetch script):
 *   const html = await fetch("http://localhost:3000/gym-management-software").then(r => r.text());
 *   const result = checkContent(html);
 *   console.log(result);
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ContentCheckOptions {
	/** Minimum word count before a warning is issued. Default: 1200. */
	wordCountThreshold?: number;
	/**
	 * When true, zero H3 tags triggers a warning.
	 * Default false — not all pages require H3s.
	 */
	requireH3?: boolean;
	/**
	 * Appended to the word-count warning when the HTML is known to be partial
	 * (e.g., assembled from component props rather than the full rendered page).
	 */
	partialContentNote?: string;
}

export interface ContentCheckResult {
	wordCount: number;
	h2Count: number;
	h3Count: number;
	warnings: string[];
}

// ─── HTML helpers ─────────────────────────────────────────────────────────────

function stripToText(html: string): string {
	return html
		.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
		.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&[a-z]+;/gi, " ")
		.replace(/\s+/g, " ")
		.trim();
}

function countWords(text: string): number {
	return text.split(/\s+/).filter((w) => w.length > 1).length;
}

function countTag(html: string, tag: "h2" | "h3"): number {
	return (html.match(new RegExp(`<${tag}[\\s>]`, "gi")) ?? []).length;
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Check a full or partial HTML string for word count and heading structure.
 *
 * @param html     Raw HTML to analyse
 * @param options  Override thresholds or add a partial-content note
 */
export function checkContent(
	html: string,
	options: ContentCheckOptions = {},
): ContentCheckResult {
	const {
		wordCountThreshold = 1200,
		requireH3 = false,
		partialContentNote,
	} = options;

	const wordCount = countWords(stripToText(html));
	const h2Count = countTag(html, "h2");
	const h3Count = countTag(html, "h3");
	const warnings: string[] = [];

	if (wordCount < wordCountThreshold) {
		const note = partialContentNote ? ` — ${partialContentNote}` : "";
		warnings.push(
			`Word count is ${wordCount} (threshold: ${wordCountThreshold})${note}`,
		);
	}

	if (h2Count === 0) {
		warnings.push(
			"No H2 tags found — add section headings to improve structure and crawlability",
		);
	}

	if (requireH3 && h3Count === 0) {
		warnings.push(
			"No H3 tags found — consider adding H3 sub-headings for content depth",
		);
	}

	return { wordCount, h2Count, h3Count, warnings };
}

/**
 * Build an approximate HTML representation from SeoLandingPage component props.
 * Includes all text-bearing props (title, description, intro, pain points,
 * capabilities, highlights, FAQ answers) with correct heading tags so the
 * structural checks remain meaningful.
 *
 * Note: does NOT include content from page-level sections added outside
 * SeoLandingPage (e.g., the feature sections in gym-management-software/page.tsx).
 * Word counts from this HTML will be lower than the full rendered page.
 */
export function buildPropsHtml(props: {
	title: string;
	description: string;
	intro: string;
	highlights: Array<{ title: string; description: string }>;
	painPoints: string[];
	capabilities: string[];
	faqs: Array<{ question: string; answer: string }>;
}): string {
	const lines: string[] = [
		`<h1>${props.title}</h1>`,
		`<p>${props.description}</p>`,
		`<p>${props.intro}</p>`,
		...props.painPoints.map((p) => `<p>${p}</p>`),
		...props.capabilities.map((c) => `<p>${c}</p>`),
		"<h2>Operational gains</h2>",
		...props.highlights.flatMap((h) => [
			`<h3>${h.title}</h3>`,
			`<p>${h.description}</p>`,
		]),
		"<h2>Frequently asked questions</h2>",
		...props.faqs.flatMap((f) => [
			`<p><strong>${f.question}</strong></p>`,
			`<p>${f.answer}</p>`,
		]),
	];

	return lines.join("\n");
}
