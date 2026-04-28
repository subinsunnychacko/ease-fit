/**
 * EaseFIT Google Ads — campaign configuration.
 *
 * Import `CAMPAIGNS` or individual campaign objects wherever you need
 * ad copy, keyword lists, or targeting data (scripts, dashboards, exports).
 *
 * Google Ads RSA character limits enforced by type:
 *   Headline    ≤ 30 characters
 *   Description ≤ 90 characters
 *   URL path    ≤ 15 characters per segment
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type MatchType = "broad" | "phrase" | "exact";
export type BidStrategy =
	| "MAXIMIZE_CONVERSIONS"
	| "TARGET_CPA"
	| "TARGET_ROAS"
	| "MANUAL_CPC";

export type AdKeyword = {
	text: string;
	matchType: MatchType;
	/** Optional manual CPC bid override in USD. Only used with MANUAL_CPC. */
	bid?: number;
};

export type NegativeKeyword = {
	text: string;
	matchType: Exclude<MatchType, "broad">;
};

export type ResponsiveSearchAd = {
	/** 3–15 headlines. Each ≤ 30 chars. Google rotates and picks best combinations. */
	headlines: string[];
	/** 2–4 descriptions. Each ≤ 90 chars. */
	descriptions: string[];
	/** Final destination URL. */
	finalUrl: string;
	/** Two URL path segments shown in the display URL. Each ≤ 15 chars. */
	displayPath: [string, string];
};

export type AdGroup = {
	name: string;
	keywords: AdKeyword[];
	negativeKeywords?: NegativeKeyword[];
	ads: ResponsiveSearchAd[];
	/** Target CPA in USD for this ad group (overrides campaign-level if set). */
	targetCpa?: number;
};

export type Targeting = {
	/** Country or region names. */
	locations: string[];
	languages: string[];
	devices: Array<"desktop" | "mobile" | "tablet">;
	/** ISO weekday + time ranges, e.g. "Monday-Friday 07:00-22:00". */
	adSchedule?: string[];
	/** Google Audience segment names for observation or targeting. */
	audienceSegments?: string[];
};

export type Campaign = {
	name: string;
	/** Daily budget in USD. */
	dailyBudget: number;
	bidStrategy: BidStrategy;
	/** Target CPA in USD — used when bidStrategy is TARGET_CPA. */
	targetCpa?: number;
	targeting: Targeting;
	negativeKeywords: NegativeKeyword[];
	adGroups: AdGroup[];
};

// ─── Shared targeting ─────────────────────────────────────────────────────────

const CORE_TARGETING: Targeting = {
	locations: ["United States", "Canada", "United Kingdom", "Australia"],
	languages: ["English"],
	devices: ["desktop", "mobile", "tablet"],
	adSchedule: ["Monday-Friday 06:00-22:00", "Saturday-Sunday 07:00-20:00"],
	audienceSegments: [
		"Small Business Owners",
		"Fitness & Wellness Enthusiasts (B2B intent)",
		"In-market: Business Software",
	],
};

/** Negative keywords applied to every campaign to block irrelevant traffic. */
const GLOBAL_NEGATIVES: NegativeKeyword[] = [
	{ text: "jobs", matchType: "phrase" },
	{ text: "careers", matchType: "phrase" },
	{ text: "hiring", matchType: "phrase" },
	{ text: "salary", matchType: "phrase" },
	{ text: "resume", matchType: "phrase" },
	{ text: "course", matchType: "phrase" },
	{ text: "certification", matchType: "phrase" },
	{ text: "workout plan", matchType: "phrase" },
	{ text: "home gym", matchType: "phrase" },
	{ text: "gym membership", matchType: "phrase" },
	{ text: "gym near me", matchType: "phrase" },
	{ text: "personal trainer", matchType: "exact" },
	{ text: "exercise", matchType: "phrase" },
	{ text: "diet", matchType: "phrase" },
];

// ─── Campaign 1 — Core (Gym Management Software) ─────────────────────────────

const coreCampaign: Campaign = {
	name: "EaseFIT — Core | Gym Management Software",
	dailyBudget: 30,
	bidStrategy: "TARGET_CPA",
	targetCpa: 40,
	targeting: CORE_TARGETING,
	negativeKeywords: GLOBAL_NEGATIVES,
	adGroups: [
		{
			name: "Solo Gym Owners",
			keywords: [
				{ text: "gym management software for solo gym owners", matchType: "exact" },
				{ text: "gym software for solo gym owner", matchType: "phrase" },
				{ text: "gym management app for one person gym", matchType: "phrase" },
				{ text: "solo gym owner software", matchType: "broad" },
				{ text: "small gym management software", matchType: "phrase" },
				{ text: "gym management software small gym", matchType: "broad" },
			],
			ads: [
				{
					headlines: [
						"AI Gym Management Software",
						"For Solo Gym Owners",
						"All-in-One Gym Platform",
						"Booking, Retention & AI",
						"Replace 4–6 Gym Tools",
						"No Contracts. Free Trial.",
						"AI Receptionist Included",
						"Member Retention Built-In",
						"Start Free. Scale Fast.",
						"Runs While You Coach",
						"Try EaseFIT Free Today",
						"Gym CRM + Scheduling",
						"Manage Your Gym Smarter",
					],
					descriptions: [
						"Replace booking, attendance & CRM with one AI platform. Free trial, no setup fees.",
						"Book members, track attendance & retain them automatically. Built for solo gym owners.",
						"AI receptionist handles missed calls. Retention workflows flag at-risk members early.",
						"No contracts. No setup fees. First 10 founding members get 50% off for 3 months.",
					],
					finalUrl: "https://ease.fit/gym-management-software",
					displayPath: ["gym-software", "solo-owner"],
				},
			],
		},
		{
			name: "Boutique Fitness Studios",
			keywords: [
				{ text: "boutique fitness studio software", matchType: "exact" },
				{ text: "boutique studio management software", matchType: "phrase" },
				{ text: "fitness studio management app", matchType: "phrase" },
				{ text: "small fitness studio software", matchType: "broad" },
				{ text: "boutique gym management system", matchType: "phrase" },
			],
			ads: [
				{
					headlines: [
						"Boutique Studio Software",
						"Built for Small Studios",
						"AI Gym Management Platform",
						"Booking + Retention + AI",
						"Replace Studio Spreadsheets",
						"No Setup Fees. Free Trial.",
						"AI Receptionist Included",
						"Member Retention Auto-Runs",
						"Try Free for 14 Days",
						"Gym CRM + Class Booking",
						"For Studios 20–200 Members",
					],
					descriptions: [
						"EaseFIT is boutique studio software that replaces booking, CRM & retention tools.",
						"Class scheduling, attendance & retention — no enterprise bloat or disconnected apps.",
						"AI answers calls after hours. Retention triggers fire when check-ins drop.",
						"Purpose-built for boutique studios 20–200 members. No contracts, free trial.",
					],
					finalUrl: "https://ease.fit/gym-management-software",
					displayPath: ["studio-software", "free-trial"],
				},
			],
		},
		{
			name: "All-in-One Gym Platform",
			keywords: [
				{ text: "all-in-one gym management software", matchType: "exact" },
				{ text: "all in one gym software", matchType: "phrase" },
				{ text: "gym software that does everything", matchType: "broad" },
				{ text: "gym platform booking and retention", matchType: "broad" },
				{ text: "replace multiple gym tools one app", matchType: "broad" },
			],
			ads: [
				{
					headlines: [
						"One App. Every Gym Task.",
						"All-in-One Gym Software",
						"Booking + CRM + AI Desk",
						"Replace 4–6 Gym Tools",
						"No More App Juggling",
						"AI Gym Platform",
						"Scheduling to Retention",
						"Solo Gym Owners Love Us",
						"Free 14-Day Trial",
						"Grow Your Gym Smarter",
					],
					descriptions: [
						"EaseFIT replaces booking, CRM, attendance tracker & receptionist with one app.",
						"Solo gym owners who switch to EaseFIT typically replace 4–6 disconnected tools.",
						"Booking, check-in, workout logging & 24/7 AI receptionist — all in one dashboard.",
						"Start free, no contracts. Founding members get 50% off the first 3 months.",
					],
					finalUrl: "https://ease.fit/",
					displayPath: ["gym-software", "all-in-one"],
				},
			],
		},
	],
};

// ─── Campaign 2 — AI Gym Receptionist ─────────────────────────────────────────

const aiReceptionistCampaign: Campaign = {
	name: "EaseFIT — AI Gym Receptionist",
	dailyBudget: 20,
	bidStrategy: "TARGET_CPA",
	targetCpa: 45,
	targeting: CORE_TARGETING,
	negativeKeywords: [
		...GLOBAL_NEGATIVES,
		{ text: "human receptionist", matchType: "phrase" },
		{ text: "hire receptionist", matchType: "phrase" },
		{ text: "receptionist job", matchType: "phrase" },
	],
	adGroups: [
		{
			name: "AI Call Answering",
			keywords: [
				{ text: "AI gym receptionist", matchType: "exact" },
				{ text: "AI receptionist for gym", matchType: "phrase" },
				{ text: "AI call answering gym", matchType: "phrase" },
				{ text: "automated gym phone answering", matchType: "broad" },
				{ text: "AI answering service for gym", matchType: "phrase" },
				{ text: "gym answering service AI", matchType: "broad" },
				{ text: "24/7 gym call answering software", matchType: "phrase" },
			],
			ads: [
				{
					headlines: [
						"AI Gym Receptionist",
						"Answer Every Gym Call — 24/7",
						"Never Miss a Gym Lead Again",
						"AI Books Classes By Phone",
						"Handles Calls While You Coach",
						"24/7 Gym Call Answering",
						"Virtual Receptionist for Gyms",
						"No Front Desk Hire Needed",
						"Misses Zero Leads. Ever.",
						"Try AI Receptionist Free",
						"Gym Answering Service — AI",
					],
					descriptions: [
						"EaseFIT AI answers calls 24/7, books classes & routes inquiries. No staff required.",
						"Missed calls meant lost memberships. AI answers every call — after hours and weekends.",
						"AI qualifies callers, answers FAQs, books tours & texts you a summary of every call.",
						"No front-desk hire. No missed leads. AI handles reception while you coach. Free trial.",
					],
					finalUrl: "https://ease.fit/ai-gym-receptionist",
					displayPath: ["ai-receptionist", "gyms"],
				},
			],
		},
		{
			name: "Missed Calls & Leads",
			keywords: [
				{ text: "never miss a gym call", matchType: "phrase" },
				{ text: "gym missed call recovery", matchType: "broad" },
				{ text: "how to answer gym calls automatically", matchType: "broad" },
				{ text: "gym call answering service", matchType: "phrase" },
				{ text: "virtual receptionist boutique gym", matchType: "phrase" },
			],
			ads: [
				{
					headlines: [
						"Stop Missing Gym Calls",
						"AI Answers Your Gym Phone",
						"Every Lead Captured — 24/7",
						"No More Missed Memberships",
						"AI Gym Call Answering",
						"Books Members While You Coach",
						"After-Hours Call Coverage",
						"Runs Nights & Weekends Too",
						"Try EaseFIT Free Today",
					],
					descriptions: [
						"EaseFIT AI answers every gym call — after hours included — so no lead goes unanswered.",
						"Missed calls cost memberships. AI books tours, answers pricing & logs every inquiry.",
						"Set up in under a day. AI answers, qualifies & books callers directly into your schedule.",
						"Free trial. No contracts. Built for solo gym owners who can't staff a front desk.",
					],
					finalUrl: "https://ease.fit/ai-gym-receptionist",
					displayPath: ["missed-calls", "ai-answer"],
				},
			],
		},
	],
};

// ─── Campaign 3 — Member Retention ────────────────────────────────────────────

const retentionCampaign: Campaign = {
	name: "EaseFIT — Member Retention Software",
	dailyBudget: 20,
	bidStrategy: "TARGET_CPA",
	targetCpa: 45,
	targeting: CORE_TARGETING,
	negativeKeywords: [
		...GLOBAL_NEGATIVES,
		{ text: "customer retention course", matchType: "phrase" },
		{ text: "loyalty program", matchType: "phrase" },
	],
	adGroups: [
		{
			name: "Churn Prevention",
			keywords: [
				{ text: "gym member retention software", matchType: "exact" },
				{ text: "gym churn prevention software", matchType: "phrase" },
				{ text: "reduce gym member cancellations", matchType: "phrase" },
				{ text: "keep gym members from leaving", matchType: "broad" },
				{ text: "software to reduce gym churn", matchType: "broad" },
				{ text: "member retention tools for gyms", matchType: "phrase" },
			],
			ads: [
				{
					headlines: [
						"Gym Member Retention Software",
						"Stop Members From Quitting",
						"Spot At-Risk Members Early",
						"Cut Gym Churn Automatically",
						"Retention Runs on Autopilot",
						"Flag Inactive Members Fast",
						"Re-Engage Before They Quit",
						"AI-Powered Gym Retention",
						"Members Stay. Revenue Grows.",
						"Built for Solo Gym Owners",
						"Try EaseFIT Free Today",
					],
					descriptions: [
						"EaseFIT flags at-risk members before they cancel. Automated re-engagement included.",
						"Check-ins drop? Retention workflows fire automatically before members decide to leave.",
						"Engagement scoring surfaces members below the risk threshold in a daily dashboard view.",
						"No contracts. Free trial. Built for boutique gyms and solo operators.",
					],
					finalUrl: "https://ease.fit/gym-member-retention-software",
					displayPath: ["retention", "reduce-churn"],
				},
			],
		},
		{
			name: "Re-engagement Campaigns",
			keywords: [
				{ text: "re-engage inactive gym members", matchType: "phrase" },
				{ text: "gym win-back automation", matchType: "broad" },
				{ text: "automated gym member follow-up", matchType: "phrase" },
				{ text: "gym SMS re-engagement", matchType: "phrase" },
				{ text: "gym email automation retention", matchType: "broad" },
			],
			ads: [
				{
					headlines: [
						"Re-Engage Inactive Members",
						"Auto Win-Back Campaigns",
						"SMS & Email for Gym Retention",
						"Members Go Quiet? We Act.",
						"Automated Gym Follow-Up",
						"No-Show Re-Engagement AI",
						"Run Retention on Autopilot",
						"Book Lapsed Members Back",
						"Try Free — No Credit Card",
					],
					descriptions: [
						"EaseFIT detects members gone quiet (7–14 days) & sends automated re-engagement sequences.",
						"See who responded, re-booked, or needs a personal follow-up — in one retention dashboard.",
						"SMS and email re-engagement triggers automatically when attendance patterns change.",
						"Retain more members without more admin. Free trial for solo gym owners.",
					],
					finalUrl: "https://ease.fit/gym-member-retention-software",
					displayPath: ["retention", "re-engage"],
				},
			],
		},
	],
};

// ─── Campaign 4 — Competitor (Mindbody / Vagaro) ──────────────────────────────

const competitorCampaign: Campaign = {
	name: "EaseFIT — Competitor | Mindbody & Vagaro Alternative",
	dailyBudget: 25,
	bidStrategy: "MAXIMIZE_CONVERSIONS",
	targeting: CORE_TARGETING,
	negativeKeywords: [
		...GLOBAL_NEGATIVES,
		{ text: "mindbody stock", matchType: "phrase" },
		{ text: "mindbody login", matchType: "phrase" },
		{ text: "vagaro login", matchType: "phrase" },
		{ text: "mindbody support", matchType: "phrase" },
	],
	adGroups: [
		{
			name: "Mindbody Alternative",
			keywords: [
				{ text: "Mindbody alternative", matchType: "exact" },
				{ text: "alternative to Mindbody", matchType: "phrase" },
				{ text: "cheaper than Mindbody", matchType: "phrase" },
				{ text: "switch from Mindbody", matchType: "phrase" },
				{ text: "Mindbody alternative for boutique studio", matchType: "phrase" },
				{ text: "simpler Mindbody replacement", matchType: "broad" },
				{ text: "Mindbody vs small gym software", matchType: "broad" },
			],
			ads: [
				{
					headlines: [
						"Mindbody Alternative",
						"Half the Cost of Mindbody",
						"Simpler Than Mindbody",
						"Switch From Mindbody Today",
						"No Mindbody Complexity",
						"AI Included. Mindbody Isn't.",
						"Solo Owner? Skip Mindbody.",
						"Mindbody for Boutique Gyms",
						"Free Trial — No Setup Fee",
						"EaseFIT vs Mindbody",
						"Save $100+/Month vs Mindbody",
					],
					descriptions: [
						"EaseFIT is a Mindbody alternative — booking, retention & AI reception for less.",
						"Switch from Mindbody and save $100–300/month with far less setup and complexity.",
						"No enterprise pricing. No per-location fees. All the features Mindbody charges extra for.",
						"Free trial, no contracts, no setup fees. See why studios are switching from Mindbody.",
					],
					finalUrl: "https://ease.fit/why-easefit",
					displayPath: ["mindbody-alt", "compare"],
				},
			],
		},
		{
			name: "Vagaro Alternative",
			keywords: [
				{ text: "Vagaro alternative", matchType: "exact" },
				{ text: "alternative to Vagaro", matchType: "phrase" },
				{ text: "switch from Vagaro", matchType: "phrase" },
				{ text: "Vagaro alternative with AI", matchType: "phrase" },
				{ text: "better than Vagaro for solo gym", matchType: "broad" },
			],
			ads: [
				{
					headlines: [
						"Vagaro Alternative",
						"Better Than Vagaro for Gyms",
						"AI Retention. Vagaro Doesn't.",
						"Switch From Vagaro Today",
						"Vagaro vs EaseFIT",
						"Solo Gym? Try EaseFIT",
						"AI Receptionist Included",
						"Member Retention Built-In",
						"Free Trial. No Contracts.",
					],
					descriptions: [
						"EaseFIT adds AI retention & 24/7 AI receptionist that Vagaro doesn't natively include.",
						"Studio owners switch from Vagaro for churn detection & AI call answering built in.",
						"Vagaro's booking features plus automated retention, engagement scoring & AI reception.",
						"Free trial for boutique studios. No contracts, no setup fees, cancel anytime.",
					],
					finalUrl: "https://ease.fit/why-easefit",
					displayPath: ["vagaro-alt", "compare"],
				},
			],
		},
	],
};

// ─── Campaign 5 — Brand ───────────────────────────────────────────────────────

const brandCampaign: Campaign = {
	name: "EaseFIT — Brand",
	dailyBudget: 10,
	bidStrategy: "TARGET_CPA",
	targetCpa: 15,
	targeting: {
		...CORE_TARGETING,
		devices: ["desktop", "mobile"],
	},
	negativeKeywords: [],
	adGroups: [
		{
			name: "Brand — EaseFIT",
			keywords: [
				{ text: "EaseFIT", matchType: "exact" },
				{ text: "EaseFIT gym software", matchType: "phrase" },
				{ text: "EaseFIT gym management", matchType: "phrase" },
				{ text: "ease.fit", matchType: "exact" },
				{ text: "EaseFIT login", matchType: "phrase" },
				{ text: "EaseFIT pricing", matchType: "phrase" },
				{ text: "EaseFIT review", matchType: "phrase" },
			],
			ads: [
				{
					headlines: [
						"EaseFIT | AI Gym Software",
						"Official EaseFIT Site",
						"Start Your Free Trial Today",
						"Booking + Retention + AI",
						"Built for Solo Gym Owners",
						"No Contracts. Free Trial.",
						"AI Receptionist Included",
						"Founding Member Discount",
						"All-in-One Gym Platform",
					],
					descriptions: [
						"EaseFIT is AI gym management for solo gym owners — booking, retention & AI receptionist.",
						"Replace disconnected gym tools with one platform. Free trial, no contracts.",
						"Founding spots available: 50% off for 3 months. Book a 2-minute demo to start.",
						"Official site. AI-powered gym management for boutique studios and solo operators.",
					],
					finalUrl: "https://ease.fit/",
					displayPath: ["official", "free-trial"],
				},
			],
		},
	],
};

// ─── Campaign 6 — Demo / Bottom-of-Funnel ────────────────────────────────────

const demoCampaign: Campaign = {
	name: "EaseFIT — Demo | Bottom of Funnel",
	dailyBudget: 15,
	bidStrategy: "MAXIMIZE_CONVERSIONS",
	targeting: CORE_TARGETING,
	negativeKeywords: GLOBAL_NEGATIVES,
	adGroups: [
		{
			name: "Demo & Free Trial",
			keywords: [
				{ text: "gym management software demo", matchType: "exact" },
				{ text: "gym software free trial", matchType: "phrase" },
				{ text: "book gym management software demo", matchType: "phrase" },
				{ text: "try gym management software free", matchType: "phrase" },
				{ text: "gym CRM demo", matchType: "phrase" },
				{ text: "gym software trial", matchType: "broad" },
			],
			targetCpa: 25,
			ads: [
				{
					headlines: [
						"Book a Gym Software Demo",
						"Free 2-Minute Demo Today",
						"Try EaseFIT — Free Trial",
						"No Contracts. Start Free.",
						"See It Live in 2 Minutes",
						"Gym Software. Free to Try.",
						"Demo for Solo Gym Owners",
						"Founding Spots Still Open",
						"Get 50% Off — 3 Months",
					],
					descriptions: [
						"Book a 2-min demo and see booking, retention & AI reception in your gym workflow.",
						"Free trial — no credit card. Set up in under a day with your schedule and member list.",
						"10 founding member spots at 50% off. No contracts, no setup fees, cancel anytime.",
						"Solo gym owners and boutique studios: see why EaseFIT replaces 4–6 tools in one move.",
					],
					finalUrl: "https://ease.fit/contact",
					displayPath: ["free-demo", "get-started"],
				},
			],
		},
	],
};

// ─── Master export ────────────────────────────────────────────────────────────

export const CAMPAIGNS: Campaign[] = [
	coreCampaign,
	aiReceptionistCampaign,
	retentionCampaign,
	competitorCampaign,
	brandCampaign,
	demoCampaign,
];

export {
	coreCampaign,
	aiReceptionistCampaign,
	retentionCampaign,
	competitorCampaign,
	brandCampaign,
	demoCampaign,
};

// ─── Utility helpers ──────────────────────────────────────────────────────────

/** All unique keywords across every campaign, deduped and sorted. */
export function getAllKeywords(): AdKeyword[] {
	const seen = new Set<string>();
	const out: AdKeyword[] = [];
	for (const campaign of CAMPAIGNS) {
		for (const group of campaign.adGroups) {
			for (const kw of group.keywords) {
				const key = `${kw.matchType}:${kw.text.toLowerCase()}`;
				if (!seen.has(key)) {
					seen.add(key);
					out.push(kw);
				}
			}
		}
	}
	return out.sort((a, b) => a.text.localeCompare(b.text));
}

/** Return all keywords for a specific campaign by name. */
export function getKeywordsForCampaign(campaignName: string): AdKeyword[] {
	const campaign = CAMPAIGNS.find((c) => c.name === campaignName);
	if (!campaign) return [];
	return campaign.adGroups.flatMap((g) => g.keywords);
}

/** Validate RSA character limits. Returns a list of violations. */
export function validateAds(): string[] {
	const errors: string[] = [];
	for (const campaign of CAMPAIGNS) {
		for (const group of campaign.adGroups) {
			for (const ad of group.ads) {
				ad.headlines.forEach((h, i) => {
					if (h.length > 30)
						errors.push(
							`[${campaign.name} → ${group.name}] Headline ${i + 1} is ${h.length} chars (max 30): "${h}"`,
						);
				});
				ad.descriptions.forEach((d, i) => {
					if (d.length > 90)
						errors.push(
							`[${campaign.name} → ${group.name}] Description ${i + 1} is ${d.length} chars (max 90): "${d}"`,
						);
				});
				ad.displayPath.forEach((p, i) => {
					if (p.length > 15)
						errors.push(
							`[${campaign.name} → ${group.name}] Display path ${i + 1} is ${p.length} chars (max 15): "${p}"`,
						);
				});
			}
		}
	}
	return errors;
}
