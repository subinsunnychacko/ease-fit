export type RouteKeywords = {
	primary: string;
	secondary: readonly string[];
	longTail: readonly string[];
};

export type SeoRoute =
	| "/"
	| "/features"
	| "/pricing"
	| "/why-easefit"
	| "/contact"
	| "/gym-management-software"
	| "/ai-gym-receptionist"
	| "/gym-member-retention-software";

export type SeoKeywordMap = Record<SeoRoute, RouteKeywords>;

export const SEO_KEYWORDS: SeoKeywordMap = {
	"/": {
		// volume: medium | competition: medium | cpc: $12–20
		primary: "AI gym management software",
		secondary: [
			"all-in-one gym software", // volume: medium | cpc: $10–18
			"boutique gym management software", // volume: low    | cpc: $8–14 | low competition
		],
		longTail: [
			"all-in-one AI gym management software for solo gym owners",
			"AI-powered gym software for boutique fitness studios",
		],
	},

	"/features": {
		// volume: low-medium | competition: medium | cpc: $5–9
		primary: "gym management software features",
		secondary: [
			"gym CRM features", // volume: low | cpc: $6–10
			"class booking software features", // volume: low | cpc: $4–8  | low competition
		],
		longTail: [
			"gym management software features for boutique studios",
			"class booking and workout logging features for solo gym owners",
		],
	},

	"/pricing": {
		// volume: low-medium | competition: medium-high | cpc: $10–18
		primary: "gym management software pricing",
		secondary: [
			"free gym management software", // volume: medium | cpc: $8–15
			"affordable gym software", // volume: low    | cpc: $7–12
		],
		longTail: [
			"gym management software pricing for boutique studios",
			"free gym management app for solo gym owners",
		],
	},

	"/why-easefit": {
		// volume: medium-high | competition: high | cpc: $15–30 — highest CPC in set
		primary: "Mindbody alternative",
		secondary: [
			"Vagaro alternative", // volume: medium     | cpc: $12–22
			"TrueCoach alternative", // volume: low-medium | cpc: $8–15  | personal trainer niche
		],
		longTail: [
			"best Mindbody alternative for boutique fitness studios",
			"simpler Vagaro alternative for solo gym owners",
			"TrueCoach alternative with built-in class booking for personal trainers",
		],
	},

	"/contact": {
		// volume: low | competition: low | cpc: $12–20 — bottom-of-funnel, highest intent
		primary: "gym management software demo",
		secondary: [
			"gym software free trial", // volume: low-medium | cpc: $8–15
			"gym CRM demo", // volume: low        | cpc: $10–16 | low competition
		],
		longTail: [
			"free trial of gym management software for boutique studios",
			"schedule a gym software demo for personal trainers",
		],
	},

	"/gym-management-software": {
		// volume: medium | competition: medium | cpc: $10–15
		primary: "gym management software for solo gym owners",
		secondary: [
			"small gym management software", // volume: medium     | cpc: $7–12
			"boutique studio management software", // volume: low-medium | cpc: $6–10 | low competition
			"personal trainer management software", // volume: medium     | cpc: $7–12
		],
		longTail: [
			"boutique fitness studio software for owners with 50 to 200 members",
			"class scheduling and attendance software for solo gym owners",
		],
	},

	"/ai-gym-receptionist": {
		// volume: low-medium (fast-growing) | competition: low | cpc: $12–20
		primary: "AI gym receptionist",
		secondary: [
			"virtual receptionist for gyms", // volume: low | cpc: $8–15
			"24/7 gym call answering software", // volume: low | cpc: $6–10
		],
		longTail: [
			"AI receptionist for boutique fitness studios after hours",
			"24/7 AI phone answering for personal trainers",
			"AI tool to recover missed calls and book gym classes",
		],
	},

	"/gym-member-retention-software": {
		// volume: low-medium | competition: low-medium | cpc: $7–12
		primary: "gym member retention software",
		secondary: [
			"gym churn prevention software", // volume: low | cpc: $6–10 | high commercial intent
			"member retention tools for gyms", // volume: low | cpc: $5–9
		],
		longTail: [
			"member retention software for boutique fitness studios",
			"software to flag at-risk gym members before they quit",
			"automated re-engagement campaigns for boutique studios",
		],
	},
};

export function getKeywordsForRoute(route: SeoRoute): RouteKeywords {
	return SEO_KEYWORDS[route];
}

export function getAllKeywordsForRoute(route: SeoRoute): string[] {
	const k = SEO_KEYWORDS[route];
	return [k.primary, ...k.secondary, ...k.longTail];
}
