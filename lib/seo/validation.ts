/**
 * Keyword validation for EaseFIT SEO routes.
 *
 * Two entry points:
 *   validateKeywords()                        – static global check (cross-route duplicates,
 *                                               within-route overlap, missing long-tails)
 *   validatePageKeywords(route, h1, content?) – per-page check (H1 keyword presence,
 *                                               optional content density)
 *
 * Dev-mode logging:
 *   runDevValidation()  – call once per process; logs global issues grouped by type
 *   Both functions are wired into generateMetadataWithSEO in useSEO.ts automatically.
 */

import { SEO_KEYWORDS, type SeoRoute } from "./keywords";

// ─── Types ───────────────────────────────────────────────────────────────────

export type WarningType =
	| "duplicate-primary"      // Two routes share the same primary keyword
	| "cross-route-duplicate"  // A secondary/longTail on route A = primary on route B
	| "within-route-duplicate" // A keyword appears in both primary and secondary of the same route
	| "missing-longtail"       // Route has an empty longTail array
	| "missing-h1"             // Primary keyword not found in the page H1
	| "density-high"           // Primary keyword overused in content (> 4%)
	| "density-low";           // Primary keyword absent from content

export interface ValidationWarning {
	type: WarningType;
	route: SeoRoute;
	keyword: string;
	message: string;
}

export interface ValidationResult {
	/** True when no warnings were produced. */
	valid: boolean;
	warnings: ValidationWarning[];
}

// ─── Static global checks ────────────────────────────────────────────────────

function checkDuplicatePrimaries(): ValidationWarning[] {
	const warnings: ValidationWarning[] = [];
	const seen = new Map<string, SeoRoute>();

	for (const [route, kw] of Object.entries(SEO_KEYWORDS) as Array<
		[SeoRoute, (typeof SEO_KEYWORDS)[SeoRoute]]
	>) {
		const normalized = kw.primary.toLowerCase();
		const existing = seen.get(normalized);
		if (existing) {
			warnings.push({
				type: "duplicate-primary",
				route,
				keyword: kw.primary,
				message: `Primary keyword "${kw.primary}" on "${route}" duplicates "${existing}" — each route needs a unique primary`,
			});
		} else {
			seen.set(normalized, route);
		}
	}

	return warnings;
}

function checkCrossRouteDuplicates(): ValidationWarning[] {
	const warnings: ValidationWarning[] = [];

	// Build primary keyword → route map
	const primaryMap = new Map<string, SeoRoute>();
	for (const [route, kw] of Object.entries(SEO_KEYWORDS) as Array<
		[SeoRoute, (typeof SEO_KEYWORDS)[SeoRoute]]
	>) {
		primaryMap.set(kw.primary.toLowerCase(), route);
	}

	// Flag any secondary/longTail that exactly matches a primary on another route
	for (const [route, kw] of Object.entries(SEO_KEYWORDS) as Array<
		[SeoRoute, (typeof SEO_KEYWORDS)[SeoRoute]]
	>) {
		for (const candidate of [...kw.secondary, ...kw.longTail]) {
			const conflictRoute = primaryMap.get(candidate.toLowerCase());
			if (conflictRoute && conflictRoute !== route) {
				warnings.push({
					type: "cross-route-duplicate",
					route,
					keyword: candidate,
					message: `"${candidate}" on "${route}" (secondary/longTail) is the primary keyword on "${conflictRoute}" — may split ranking signals`,
				});
			}
		}
	}

	return warnings;
}

function checkWithinRouteDuplicates(): ValidationWarning[] {
	const warnings: ValidationWarning[] = [];

	for (const [route, kw] of Object.entries(SEO_KEYWORDS) as Array<
		[SeoRoute, (typeof SEO_KEYWORDS)[SeoRoute]]
	>) {
		const primaryLower = kw.primary.toLowerCase();

		for (const candidate of [...kw.secondary, ...kw.longTail]) {
			if (candidate.toLowerCase() === primaryLower) {
				warnings.push({
					type: "within-route-duplicate",
					route,
					keyword: candidate,
					message: `"${candidate}" appears as both primary and secondary on "${route}" — remove the duplicate`,
				});
			}
		}
	}

	return warnings;
}

function checkMissingLongTail(): ValidationWarning[] {
	const warnings: ValidationWarning[] = [];

	for (const [route, kw] of Object.entries(SEO_KEYWORDS) as Array<
		[SeoRoute, (typeof SEO_KEYWORDS)[SeoRoute]]
	>) {
		if (kw.longTail.length === 0) {
			warnings.push({
				type: "missing-longtail",
				route,
				keyword: kw.primary,
				message: `Route "${route}" has no long-tail keywords — add 2–3 to improve topical depth`,
			});
		}
	}

	return warnings;
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Run all static keyword validation checks across every route.
 * No HTML or page content required — works from keywords.ts alone.
 *
 * Checks performed:
 *  • Duplicate primary keywords across routes
 *  • Secondary/longTail keywords on one route matching a primary on another
 *  • Keywords duplicated within the same route (primary = secondary)
 *  • Routes missing long-tail keywords entirely
 */
export function validateKeywords(): ValidationResult {
	const warnings = [
		...checkDuplicatePrimaries(),
		...checkCrossRouteDuplicates(),
		...checkWithinRouteDuplicates(),
		...checkMissingLongTail(),
	];

	return { valid: warnings.length === 0, warnings };
}

/**
 * Per-page keyword validation.
 * Checks whether the primary keyword appears in the H1 and, optionally,
 * whether keyword density in the full content is within healthy bounds.
 *
 * @param route    The SeoRoute for this page
 * @param h1       The text content of the page's H1 (pass config.title from generateMetadataWithSEO)
 * @param content  Optional stripped page text for density analysis
 */
export function validatePageKeywords(
	route: SeoRoute,
	h1: string,
	content?: string,
): ValidationResult {
	const kw = SEO_KEYWORDS[route];
	const warnings: ValidationWarning[] = [];

	// H1 check
	if (!h1.toLowerCase().includes(kw.primary.toLowerCase())) {
		const truncated = h1.length > 70 ? `${h1.slice(0, 70)}…` : h1;
		warnings.push({
			type: "missing-h1",
			route,
			keyword: kw.primary,
			message: `Primary keyword "${kw.primary}" not in H1 "${truncated}"`,
		});
	}

	// Density check (only when content is provided)
	if (content) {
		const lowerContent = content.toLowerCase();
		const escaped = kw.primary
			.toLowerCase()
			.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		const occurrences = (lowerContent.match(new RegExp(escaped, "g")) ?? [])
			.length;
		const wordCount = content.split(/\s+/).filter((w) => w.length > 0).length;
		const density = wordCount > 0 ? occurrences / wordCount : 0;

		if (density > 0.04) {
			warnings.push({
				type: "density-high",
				route,
				keyword: kw.primary,
				message: `Keyword density for "${kw.primary}" is ${(density * 100).toFixed(1)}% — keep under 4% to avoid over-optimisation penalties`,
			});
		} else if (occurrences === 0) {
			warnings.push({
				type: "density-low",
				route,
				keyword: kw.primary,
				message: `Primary keyword "${kw.primary}" not found anywhere in page content`,
			});
		}
	}

	return { valid: warnings.length === 0, warnings };
}

// ─── Dev-mode auto-run ───────────────────────────────────────────────────────

let _globalValidationDone = false;

/**
 * Runs validateKeywords() once per server process in development and prints
 * any warnings grouped by type. Subsequent calls are no-ops.
 * Called automatically by generateMetadataWithSEO.
 */
export function runDevValidation(): void {
	if (process.env.NODE_ENV !== "development" || _globalValidationDone) return;
	_globalValidationDone = true;

	const { valid, warnings } = validateKeywords();

	if (valid) {
		console.log("[SEO Validation] ✓ All keyword rules pass");
		return;
	}

	// Group by type for readability
	const grouped = warnings.reduce<Record<string, ValidationWarning[]>>(
		(acc, w) => {
			(acc[w.type] ??= []).push(w);
			return acc;
		},
		{},
	);

	console.warn(
		`\n[SEO Validation] ${warnings.length} issue${warnings.length !== 1 ? "s" : ""} found:`,
	);
	for (const [type, group] of Object.entries(grouped)) {
		console.warn(`\n  ${type}:`);
		group.forEach((w) => console.warn(`    ↳ ${w.message}`));
	}
	console.warn("");
}
