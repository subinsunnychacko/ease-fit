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
		primary: "AI gym management software",
		secondary: [
			"all-in-one gym software",
			"gym management platform",
			"AI gym software for small gyms",
			"boutique gym management software",
			"gym booking and retention platform",
		],
		longTail: [
			"all-in-one AI gym management software for solo gym owners",
			"affordable gym management platform for personal trainers",
			"AI-powered gym software for boutique fitness studios",
			"gym software to replace booking and CRM tools",
			"best gym management software under $50 a month",
		],
	},

	"/features": {
		primary: "gym management software features",
		secondary: [
			"AI gym software features",
			"gym CRM features",
			"class booking software features",
			"gym member retention features",
			"AI voice receptionist features",
		],
		longTail: [
			"gym management software features for boutique studios",
			"AI receptionist and member retention features for personal trainers",
			"class booking and workout logging features for solo gym owners",
			"gym software with built-in AI performance reports",
			"engagement scoring and at-risk member alerts for small gyms",
		],
	},

	"/pricing": {
		primary: "gym management software pricing",
		secondary: [
			"affordable gym software",
			"gym software cost",
			"free gym management software",
			"gym software with no contracts",
			"AI gym receptionist pricing",
		],
		longTail: [
			"cheap gym management software for personal trainers",
			"gym management software pricing for boutique studios",
			"free gym management app for solo gym owners",
			"monthly gym software pricing with no setup fees",
			"founding member discount on gym management software",
		],
	},

	"/why-easefit": {
		primary: "Mindbody alternative",
		secondary: [
			"Vagaro alternative",
			"TrueCoach alternative",
			"TeamUp alternative",
			"best gym software for solo owners",
			"integrated gym management platform",
		],
		longTail: [
			"best Mindbody alternative for boutique fitness studios",
			"simpler Vagaro alternative for solo gym owners",
			"TrueCoach alternative with built-in class booking for personal trainers",
			"gym software that combines booking, logging, and AI receptionist",
			"affordable Mindbody alternative for studios under 200 members",
		],
	},

	"/contact": {
		primary: "gym management software demo",
		secondary: [
			"EaseFIT demo",
			"gym software free trial",
			"book a gym software demo",
			"AI gym receptionist demo",
			"gym CRM demo",
		],
		longTail: [
			"free trial of gym management software for boutique studios",
			"schedule a gym software demo for personal trainers",
			"gym management demo for solo gym owners switching from Vagaro",
			"try AI gym receptionist software free for 30 days",
			"founding member signup for AI gym management software",
		],
	},

	"/gym-management-software": {
		primary: "gym management software for solo gym owners",
		secondary: [
			"small gym management software",
			"boutique studio management software",
			"personal trainer management software",
			"gym operations software",
			"all-in-one gym management system",
		],
		longTail: [
			"gym management software for personal trainers with under 50 clients",
			"boutique fitness studio software for owners with 50 to 200 members",
			"gym software to replace spreadsheets and missed-call voicemails",
			"lightweight gym management system without enterprise bloat",
			"class scheduling and attendance software for solo gym owners",
		],
	},

	"/ai-gym-receptionist": {
		primary: "AI gym receptionist",
		secondary: [
			"24/7 gym call answering software",
			"virtual receptionist for gyms",
			"AI phone answering for fitness studios",
			"missed call recovery for gyms",
			"automated booking by voice for gyms",
		],
		longTail: [
			"AI receptionist for boutique fitness studios after hours",
			"24/7 AI phone answering for personal trainers",
			"automated voice booking system for solo gym owners",
			"AI tool to recover missed calls and book gym classes",
			"after-hours lead capture software for small gyms",
		],
	},

	"/gym-member-retention-software": {
		primary: "gym member retention software",
		secondary: [
			"gym churn prevention software",
			"member retention tools for gyms",
			"gym engagement tracking software",
			"at-risk member alerts for gyms",
			"AI gym CRM for retention",
		],
		longTail: [
			"member retention software for boutique fitness studios",
			"churn prevention tools for personal trainers with small client lists",
			"gym member engagement tracking for solo gym owners",
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
