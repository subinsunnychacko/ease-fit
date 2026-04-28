/**
 * Readability analysis for EaseFIT page content.
 * Designed for marketing/landing page copy — scores against that register,
 * not academic writing.
 *
 * Scoring breakdown (100 pts total):
 *   Sentence length  – 40 pts  (ideal ≤ 20 words avg, < 10% long sentences)
 *   Passive voice    – 35 pts  (conversion copy should be active; < 10% is fine)
 *   Paragraph length – 25 pts  (landing pages need short, scannable paragraphs)
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ReadabilityDetails {
	avgSentenceWords: number;
	longSentenceCount: number;    // sentences > 25 words
	totalSentences: number;
	passiveSentenceCount: number;
	longParagraphCount: number;   // paragraphs > 150 words
	totalParagraphs: number;
}

export interface ReadabilityResult {
	score: number;              // 0–100
	suggestions: string[];
	details: ReadabilityDetails;
}

// ─── Text normalisation ──────────────────────────────────────────────────────

/**
 * Convert HTML to plain text while preserving paragraph/line boundaries
 * so paragraph detection still works.
 */
function htmlToText(input: string): string {
	return input
		.replace(/<\/(p|li|h[1-6]|blockquote|div|section|article)>/gi, "\n\n")
		.replace(/<br\s*\/?>/gi, "\n")
		.replace(/<[^>]+>/g, "")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&apos;|&#39;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/[ \t]+/g, " ")      // collapse horizontal whitespace only
		.trim();
}

// ─── Sentence analysis ───────────────────────────────────────────────────────

/**
 * Split text into sentences. Uses punctuation + capital-letter heuristic —
 * reliable enough for marketing copy without a full NLP tokeniser.
 */
function splitSentences(text: string): string[] {
	return text
		.replace(/\n+/g, " ")
		.split(/(?<=[.!?])\s+(?=[A-Z"'(])|(?<=[.!?])\s*$/)
		.map((s) => s.trim())
		.filter((s) => s.split(/\s+/).length >= 3); // drop fragments < 3 words
}

function countWords(text: string): number {
	return text.split(/\s+/).filter((w) => w.length > 0).length;
}

function scoreSentenceLength(
	sentences: string[],
): { score: number; suggestions: string[]; longCount: number; avg: number } {
	if (sentences.length === 0)
		return { score: 20, suggestions: [], longCount: 0, avg: 0 };

	const wordCounts = sentences.map(countWords);
	const avg = wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length;
	const longCount = wordCounts.filter((n) => n > 25).length;
	const longRatio = longCount / sentences.length;
	const suggestions: string[] = [];

	let score: number;
	if (longRatio <= 0.1) {
		score = 40;
	} else if (longRatio <= 0.2) {
		score = 30;
		suggestions.push(
			`${longCount} sentence${longCount > 1 ? "s" : ""} exceed 25 words — break them up to improve scannability`,
		);
	} else if (longRatio <= 0.3) {
		score = 20;
		suggestions.push(
			`${longCount} of ${sentences.length} sentences are long (>25 words) — aim to keep most under 20 words`,
		);
	} else if (longRatio <= 0.45) {
		score = 10;
		suggestions.push(
			`${Math.round(longRatio * 100)}% of sentences are too long — conversion copy should be punchy and direct`,
		);
	} else {
		score = 4;
		suggestions.push(
			`Over half the sentences exceed 25 words — significantly reduce sentence length throughout`,
		);
	}

	if (avg > 22) {
		suggestions.push(
			`Average sentence length is ${avg.toFixed(1)} words — aim for 15–20 for maximum readability`,
		);
	}

	return { score, suggestions, longCount, avg };
}

// ─── Passive voice detection ─────────────────────────────────────────────────

// Matches: to-be/get verb + optional adverb + past participle (regular -ed or
// common irregular forms found in marketing writing).
const PASSIVE_RE =
	/\b(is|are|was|were|be|been|being|am|get|gets|got|gotten)\s+(?:\w+ly\s+)?(\w+ed|built|done|made|found|given|known|taken|shown|told|seen|written|driven|broken|spoken|chosen|grown|blown|thrown|fallen|forgotten|hidden|risen|worn|born|begun|run|won|set|put|cut|hurt|let|hit|read|brought|bought|thought|caught|felt|kept|left|sent|spent|stood|paid|said|laid|led)\b/i;

function isPassive(sentence: string): boolean {
	return PASSIVE_RE.test(sentence);
}

function scorePassiveVoice(
	sentences: string[],
): { score: number; suggestions: string[]; passiveCount: number } {
	if (sentences.length === 0)
		return { score: 17, suggestions: [], passiveCount: 0 };

	const passiveCount = sentences.filter(isPassive).length;
	const ratio = passiveCount / sentences.length;
	const suggestions: string[] = [];

	let score: number;
	if (ratio <= 0.1) {
		score = 35;
	} else if (ratio <= 0.2) {
		score = 26;
		suggestions.push(
			`${passiveCount} passive-voice sentence${passiveCount > 1 ? "s" : ""} found — rewrite in active voice to strengthen conversion copy`,
		);
	} else if (ratio <= 0.3) {
		score = 17;
		suggestions.push(
			`${Math.round(ratio * 100)}% of sentences use passive voice — active voice is more persuasive in landing page copy`,
		);
	} else if (ratio <= 0.45) {
		score = 8;
		suggestions.push(
			`${passiveCount} passive-voice sentences out of ${sentences.length} — significant rewrite needed for active, compelling copy`,
		);
	} else {
		score = 2;
		suggestions.push(
			`Passive voice dominates (${Math.round(ratio * 100)}%) — this weakens authority and conversion potential throughout`,
		);
	}

	return { score, suggestions, passiveCount };
}

// ─── Paragraph analysis ──────────────────────────────────────────────────────

function splitParagraphs(text: string): string[] {
	return text
		.split(/\n\n+/)
		.map((p) => p.trim())
		.filter((p) => p.length > 0);
}

function scoreParagraphLength(
	paragraphs: string[],
): { score: number; suggestions: string[]; longCount: number } {
	if (paragraphs.length === 0)
		return { score: 12, suggestions: [], longCount: 0 };

	const wordCounts = paragraphs.map(countWords);
	const longCount = wordCounts.filter((n) => n > 150).length;
	const longRatio = longCount / paragraphs.length;
	const suggestions: string[] = [];

	let score: number;
	if (longRatio === 0) {
		score = 25;
	} else if (longRatio <= 0.1) {
		score = 20;
	} else if (longRatio <= 0.2) {
		score = 14;
		suggestions.push(
			`${longCount} paragraph${longCount > 1 ? "s" : ""} exceed 150 words — split them to improve scrollability on mobile`,
		);
	} else if (longRatio <= 0.35) {
		score = 8;
		suggestions.push(
			`${Math.round(longRatio * 100)}% of paragraphs are too long (>150 words) — landing page paragraphs should be short and scannable`,
		);
	} else {
		score = 3;
		suggestions.push(
			`Most paragraphs are over 150 words — restructure into shorter blocks; readers scan, they don't read walls of text`,
		);
	}

	return { score, suggestions, longCount };
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Analyse plain text or HTML for readability.
 * Accepts both HTML (from SeoLandingPage) and plain text (from scripts/tests).
 *
 * @example
 * import { analyzeReadability } from "@/lib/seo/readability";
 * const result = analyzeReadability(pageText);
 * // { score: 78, suggestions: ["3 sentences exceed 25 words…"], details: {…} }
 */
export function analyzeReadability(content: string): ReadabilityResult {
	const isHtml = /<[a-z][\s\S]*>/i.test(content);
	const text = isHtml ? htmlToText(content) : content;

	const sentences = splitSentences(text);
	const paragraphs = splitParagraphs(text);

	const sentenceResult = scoreSentenceLength(sentences);
	const passiveResult = scorePassiveVoice(sentences);
	const paragraphResult = scoreParagraphLength(paragraphs);

	const score =
		sentenceResult.score + passiveResult.score + paragraphResult.score;

	const suggestions = [
		...sentenceResult.suggestions,
		...passiveResult.suggestions,
		...paragraphResult.suggestions,
	];

	return {
		score,
		suggestions,
		details: {
			avgSentenceWords: Math.round(sentenceResult.avg * 10) / 10,
			longSentenceCount: sentenceResult.longCount,
			totalSentences: sentences.length,
			passiveSentenceCount: passiveResult.passiveCount,
			longParagraphCount: paragraphResult.longCount,
			totalParagraphs: paragraphs.length,
		},
	};
}

/**
 * Compose plain text from SeoLandingPage props for readability analysis.
 * Includes description, intro, pain points, capabilities, and highlight text.
 * Excludes FAQ answers (they are structured Q&A, not prose copy).
 */
export function composePageText(props: {
	description: string;
	intro: string;
	highlights: Array<{ title: string; description: string }>;
	painPoints: string[];
	capabilities: string[];
}): string {
	return [
		props.description,
		props.intro,
		...props.painPoints,
		...props.capabilities,
		...props.highlights.map((h) => `${h.title}. ${h.description}`),
	]
		.filter(Boolean)
		.join("\n\n");
}
