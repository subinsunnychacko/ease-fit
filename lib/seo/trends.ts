import { SEO_KEYWORDS, type SeoRoute } from "./keywords";

export type Trend = "up" | "down" | "stable";

export type KeywordTrend = {
	trend: Trend;
	// True when search volume spikes around Jan (New Year) and Sept (back-to-routine)
	seasonality: boolean;
};

export type RouteTrendData = {
	primary: KeywordTrend;
	secondary: readonly KeywordTrend[];
	longTail: readonly KeywordTrend[];
};

/**
 * Trend and seasonality data for every keyword in keywords.ts.
 * Entries align index-for-index with the secondary[] and longTail[] arrays
 * on the matching SeoRoute — keep them in sync when adding keywords.
 *
 * Trend rationale:
 *   "up"     – measurable YoY growth in query volume or category (AI tooling,
 *              boutique fitness, Mindbody price hike driving alternatives)
 *   "stable" – flat demand, no strong directional signal
 *   "down"   – declining query volume or superseded by broader term
 */
export const TREND_DATA: Record<SeoRoute, RouteTrendData> = {
	"/": {
		// "AI gym management software" — AI tooling queries growing rapidly
		primary:   { trend: "up",     seasonality: false },
		secondary: [
			{ trend: "stable", seasonality: false }, // all-in-one gym software
			{ trend: "up",     seasonality: false }, // boutique gym management software
		],
		longTail: [
			{ trend: "up", seasonality: false }, // all-in-one AI gym management software for solo gym owners
			{ trend: "up", seasonality: false }, // AI-powered gym software for boutique fitness studios
		],
	},

	"/features": {
		// Feature pages are informational — demand is steady, no strong trend
		primary:   { trend: "stable", seasonality: false },
		secondary: [
			{ trend: "stable", seasonality: false }, // gym CRM features
			{ trend: "stable", seasonality: false }, // class booking software features
		],
		longTail: [
			{ trend: "stable", seasonality: false }, // gym management software features for boutique studios
			{ trend: "stable", seasonality: false }, // class booking and workout logging features for solo gym owners
		],
	},

	"/pricing": {
		// Pricing queries stable; "free" and "affordable" rising with inflation pressure
		primary:   { trend: "stable", seasonality: true },
		secondary: [
			{ trend: "up", seasonality: false }, // free gym management software
			{ trend: "up", seasonality: false }, // affordable gym software
		],
		longTail: [
			{ trend: "stable", seasonality: true  }, // gym management software pricing for boutique studios
			{ trend: "up",     seasonality: false }, // free gym management app for solo gym owners
		],
	},

	"/why-easefit": {
		// Mindbody raised prices in 2023–24, driving strong "alternative" searches
		primary:   { trend: "up",     seasonality: false },
		secondary: [
			{ trend: "stable", seasonality: false }, // Vagaro alternative
			{ trend: "stable", seasonality: false }, // TrueCoach alternative
		],
		longTail: [
			{ trend: "up",     seasonality: false }, // best Mindbody alternative for boutique fitness studios
			{ trend: "stable", seasonality: false }, // simpler Vagaro alternative for solo gym owners
			{ trend: "stable", seasonality: false }, // TrueCoach alternative with built-in class booking for personal trainers
		],
	},

	"/contact": {
		// Demo/trial intent steady; "free trial" rising as buyers expect self-serve evaluation
		primary:   { trend: "stable", seasonality: true },
		secondary: [
			{ trend: "up",     seasonality: true  }, // gym software free trial
			{ trend: "stable", seasonality: false }, // gym CRM demo
		],
		longTail: [
			{ trend: "stable", seasonality: true  }, // free trial of gym management software for boutique studios
			{ trend: "stable", seasonality: false }, // schedule a gym software demo for personal trainers
		],
	},

	"/gym-management-software": {
		// Solo-owner segment growing; boutique studio positioning gaining traction
		primary:   { trend: "up",     seasonality: true },
		secondary: [
			{ trend: "stable", seasonality: true  }, // small gym management software
			{ trend: "up",     seasonality: false }, // boutique studio management software
			{ trend: "stable", seasonality: false }, // personal trainer management software
		],
		longTail: [
			{ trend: "stable", seasonality: false }, // boutique fitness studio software for owners with 50 to 200 members
			{ trend: "stable", seasonality: true  }, // class scheduling and attendance software for solo gym owners
		],
	},

	"/ai-gym-receptionist": {
		// Fastest-growing cluster — AI voice/phone tooling emerging category
		primary:   { trend: "up", seasonality: false },
		secondary: [
			{ trend: "up",     seasonality: false }, // virtual receptionist for gyms
			{ trend: "stable", seasonality: false }, // 24/7 gym call answering software
		],
		longTail: [
			{ trend: "up", seasonality: false }, // AI receptionist for boutique fitness studios after hours
			{ trend: "up", seasonality: false }, // 24/7 AI phone answering for personal trainers
			{ trend: "up", seasonality: false }, // AI tool to recover missed calls and book gym classes
		],
	},

	"/gym-member-retention-software": {
		// Post-COVID retention focus; churn prevention tools gaining awareness
		primary:   { trend: "up",     seasonality: true },
		secondary: [
			{ trend: "up",     seasonality: true  }, // gym churn prevention software
			{ trend: "stable", seasonality: true  }, // member retention tools for gyms
		],
		longTail: [
			{ trend: "stable", seasonality: false }, // member retention software for boutique fitness studios
			{ trend: "up",     seasonality: false }, // software to flag at-risk gym members before they quit
			{ trend: "stable", seasonality: false }, // automated re-engagement campaigns for boutique studios
		],
	},
};

/**
 * Returns only the keywords currently trending "up" for a route,
 * in order: primary → secondary → longTail.
 */
export function getTrendingKeywords(route: SeoRoute): string[] {
	const keywords = SEO_KEYWORDS[route];
	const trends = TREND_DATA[route];
	const result: string[] = [];

	if (trends.primary.trend === "up") {
		result.push(keywords.primary);
	}
	keywords.secondary.forEach((kw, i) => {
		if (trends.secondary[i]?.trend === "up") result.push(kw);
	});
	keywords.longTail.forEach((kw, i) => {
		if (trends.longTail[i]?.trend === "up") result.push(kw);
	});

	return result;
}

/**
 * Returns all keywords for a route sorted by trend signal:
 *   "up" keywords first, then "stable", then "down".
 * Within each group the original primary → secondary → longTail order is preserved.
 * Use this as the keywords array in <meta name="keywords"> so crawlers
 * see the highest-signal terms earliest.
 */
export function getPrioritizedKeywords(route: SeoRoute): string[] {
	const keywords = SEO_KEYWORDS[route];
	const trends = TREND_DATA[route];

	const all: { kw: string; trend: Trend }[] = [
		{ kw: keywords.primary, trend: trends.primary.trend },
		...keywords.secondary.map((kw, i) => ({
			kw,
			trend: trends.secondary[i]?.trend ?? ("stable" as Trend),
		})),
		...keywords.longTail.map((kw, i) => ({
			kw,
			trend: trends.longTail[i]?.trend ?? ("stable" as Trend),
		})),
	];

	return [
		...all.filter((e) => e.trend === "up").map((e) => e.kw),
		...all.filter((e) => e.trend === "stable").map((e) => e.kw),
		...all.filter((e) => e.trend === "down").map((e) => e.kw),
	];
}
