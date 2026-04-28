import { SEO_KEYWORDS, type SeoRoute } from "./keywords";

// ─── Types ────────────────────────────────────────────────────────────────────

export type QueryEntry = {
	/** Raw search query as typed by users. */
	query: string;
	/** Short phrase (≤ 60 chars) safe to append to a meta description. */
	hook: string;
	/** Answer paragraph for FAQ injection. */
	answer: string;
};

export type SeoQueryMap = Record<SeoRoute, readonly QueryEntry[]>;

// ─── Query data ───────────────────────────────────────────────────────────────

export const SEARCH_QUERIES: SeoQueryMap = {
	"/": [
		{
			query: "best AI gym management software for small gym",
			hook: "purpose-built AI gym management for small gyms",
			answer:
				"EaseFIT is designed specifically for solo gym owners and boutique studios. It combines AI-powered booking, attendance tracking, member retention, and an AI receptionist in one platform — no enterprise bloat, no stitched-together tools.",
		},
		{
			query: "how to manage a gym without multiple apps",
			hook: "replace multiple tools with one gym platform",
			answer:
				"EaseFIT consolidates scheduling, attendance, member CRM, retention workflows, and AI call answering into a single platform. Solo gym owners typically replace 4–6 disconnected tools when they switch to EaseFIT.",
		},
		{
			query: "all-in-one gym software for solo gym owner",
			hook: "all-in-one operations software for solo operators",
			answer:
				"Yes — EaseFIT is built end-to-end for solo operators. It handles bookings, check-ins, workout logs, member communication, and AI receptionist duties so you can run your gym without a front-desk team.",
		},
		{
			query: "gym software that includes booking and member retention",
			hook: "gym software with built-in member retention tools",
			answer:
				"EaseFIT includes booking, attendance, and automated member retention in one system. When attendance drops, retention workflows trigger automatically — no manual follow-up required.",
		},
	],

	"/features": [
		{
			query: "what features does gym management software include",
			hook: "complete gym management feature set in one platform",
			answer:
				"EaseFIT includes class scheduling, slot management, attendance tracking, workout logging, member dashboards, AI-powered reporting, retention workflows, and an AI gym receptionist. All features are active from day one — no add-ons required.",
		},
		{
			query: "gym software with class booking and attendance tracking",
			hook: "combined class booking and attendance in one view",
			answer:
				"EaseFIT links class bookings directly to attendance records. When a member books a class, their check-in is tracked automatically and reflected in their engagement score — giving you full visibility without manual data entry.",
		},
		{
			query: "does gym software have CRM and workout logging",
			hook: "gym CRM, workout logging, and scheduling combined",
			answer:
				"EaseFIT includes both. The member CRM tracks attendance history, retention risk, and communication logs. Workout logging lets trainers record and review session data per member — all accessible from the same dashboard.",
		},
		{
			query: "gym management platform with scheduling and reporting",
			hook: "scheduling and AI-generated reporting in one dashboard",
			answer:
				"EaseFIT's reporting surfaces class fill rates, member engagement trends, and retention signals automatically. You get weekly summaries without building your own reports from spreadsheet data.",
		},
	],

	"/pricing": [
		{
			query: "how much does gym management software cost per month",
			hook: "transparent gym software pricing starting at $49/mo",
			answer:
				"EaseFIT starts at $49 per month for solo gym owners and boutique studios. The plan includes all core features — booking, attendance, retention workflows, and AI receptionist. No per-member fees, no hidden setup costs.",
		},
		{
			query: "is there a free gym management software",
			hook: "start with a free trial — no credit card required",
			answer:
				"EaseFIT offers a free trial so you can run your gym on the full platform before committing. After the trial, plans start at $49/month — significantly less than maintaining separate booking, CRM, and receptionist tools.",
		},
		{
			query: "affordable gym software for boutique studio",
			hook: "affordable pricing built for boutique studio budgets",
			answer:
				"EaseFIT is priced for boutique fitness operators, not enterprise chains. The flat monthly rate replaces multiple subscription costs (booking software, CRM, receptionist service) that typically add up to $150–400/month for solo operators.",
		},
		{
			query: "gym software pricing comparison",
			hook: "compare EaseFIT vs Mindbody and Vagaro pricing",
			answer:
				"EaseFIT typically costs 60–80% less than Mindbody for solo operators while covering the same core workflows. Unlike Mindbody, there are no per-location fees or complex tier unlocks — one plan covers everything.",
		},
	],

	"/why-easefit": [
		{
			query: "is there a cheaper alternative to Mindbody",
			hook: "cheaper Mindbody alternative built for solo operators",
			answer:
				"Yes. EaseFIT is a Mindbody alternative that covers booking, attendance, member retention, and AI receptionist at a fraction of the cost. Solo operators who switch typically save $100–300/month while reducing tool complexity.",
		},
		{
			query: "Mindbody alternative for boutique fitness studio",
			hook: "Mindbody alternative designed for boutique studios",
			answer:
				"EaseFIT is purpose-built for boutique studios with 20–200 members. It delivers the core workflows Mindbody covers — scheduling, check-in, member management — without the enterprise pricing, onboarding complexity, or feature bloat.",
		},
		{
			query: "why switch from Vagaro to another gym software",
			hook: "why boutique studios switch away from Vagaro",
			answer:
				"Studio owners switch from Vagaro when they need tighter retention automation and AI receptionist capabilities beyond basic booking. EaseFIT adds engagement scoring, churn detection, and 24/7 AI call handling that Vagaro doesn't natively include.",
		},
		{
			query: "simpler Mindbody replacement for solo gym owner",
			hook: "simpler, leaner Mindbody replacement for solo owners",
			answer:
				"EaseFIT is designed for one-person operations. Where Mindbody requires dedicated staff to manage and configure, EaseFIT is set up in under a day and runs autonomously — AI handles reception, retention triggers fire automatically.",
		},
	],

	"/contact": [
		{
			query: "how to get a gym management software demo",
			hook: "book a 2-minute gym software demo today",
			answer:
				"You can book a 2-minute demo directly from the EaseFIT contact page. The demo covers your gym's core workflows — booking, retention, and AI reception — with no sales pressure and no lengthy presentation.",
		},
		{
			query: "can I try gym management software for free",
			hook: "start a free trial with no credit card required",
			answer:
				"Yes. EaseFIT offers a free trial so you can run live bookings, attendance, and retention workflows before committing. No credit card required to start — just fill out the demo form and we'll get you set up.",
		},
		{
			query: "how to book a demo for gym software",
			hook: "schedule your gym software demo in 60 seconds",
			answer:
				"Submit the short form on the EaseFIT contact page with your gym size and main pain point. We'll reach out within one business day to schedule a focused 15-minute walkthrough tailored to your workflow.",
		},
		{
			query: "EaseFIT free trial how to start",
			hook: "start your EaseFIT free trial in under 5 minutes",
			answer:
				"Getting started with EaseFIT takes under 5 minutes. Book a demo via the contact page, and we'll provision your account the same day — with your class schedule, member list, and retention workflows ready to configure.",
		},
	],

	"/gym-management-software": [
		{
			query: "best gym management software for solo gym owner",
			hook: "top-rated gym management software for solo operators",
			answer:
				"EaseFIT is consistently the top choice for solo gym owners because it covers every operational workflow — bookings, attendance, member retention, and AI reception — without requiring a team to manage. It's lightweight, fast to set up, and built for one-person operations.",
		},
		{
			query: "small gym management software for boutique studio",
			hook: "gym management software built for small gyms",
			answer:
				"EaseFIT is designed for gyms with 20–200 members, not enterprise chains. The platform scales up as you grow but stays simple enough for a solo owner to run without dedicated admin staff or technical support.",
		},
		{
			query: "gym scheduling and attendance tracking software",
			hook: "class scheduling and attendance tracking in one system",
			answer:
				"EaseFIT links class scheduling directly to attendance records. Members book online, check in via QR code or kiosk, and attendance data flows into the retention dashboard automatically — no manual reconciliation needed.",
		},
		{
			query: "gym management app to replace spreadsheets",
			hook: "replace gym spreadsheets with automated workflows",
			answer:
				"EaseFIT replaces the spreadsheets most solo operators use to track attendance, unpaid memberships, and class fill rates. Automated reporting and AI-generated summaries give you the same visibility in a fraction of the time.",
		},
	],

	"/ai-gym-receptionist": [
		{
			query: "can AI answer gym phone calls automatically",
			hook: "AI that answers and routes gym calls automatically",
			answer:
				"Yes. EaseFIT's AI gym receptionist answers inbound calls 24/7, handles membership inquiries, books classes, and routes complex questions to you as a text summary. No staff required, no calls go unanswered.",
		},
		{
			query: "AI receptionist for boutique fitness studio",
			hook: "AI gym receptionist built for boutique fitness studios",
			answer:
				"EaseFIT's AI receptionist is trained on gym-specific call flows — membership questions, class availability, pricing, and tour scheduling. It sounds natural, handles after-hours calls, and passes warm leads directly to your calendar.",
		},
		{
			query: "how to never miss a gym call again",
			hook: "never miss a gym call or membership inquiry again",
			answer:
				"EaseFIT's 24/7 AI call answering means every call — including after-hours and weekend inquiries — gets answered instantly. Missed calls that used to result in lost memberships now convert to booked tours and trials automatically.",
		},
		{
			query: "AI call answering software for gym owners",
			hook: "AI call answering that books members while you coach",
			answer:
				"EaseFIT handles inbound calls while you're with clients. The AI qualifies the caller, answers common questions, and books them directly into your schedule — all without interrupting your sessions or requiring a front-desk hire.",
		},
	],

	"/gym-member-retention-software": [
		{
			query: "how to reduce gym member cancellations",
			hook: "automated workflows that reduce member cancellations",
			answer:
				"EaseFIT tracks attendance patterns and triggers retention workflows before members cancel. When engagement drops — fewer check-ins, missed bookings — automated messages re-engage them before they've decided to leave.",
		},
		{
			query: "software to keep gym members from leaving",
			hook: "member retention software that acts before members quit",
			answer:
				"EaseFIT's retention engine flags at-risk members based on declining attendance and sends personalized re-engagement messages automatically. Most retention tools react after a cancellation — EaseFIT acts days or weeks before.",
		},
		{
			query: "how to re-engage inactive gym members automatically",
			hook: "automated re-engagement for inactive members",
			answer:
				"EaseFIT detects members who've gone quiet — no bookings in 7–14 days — and automatically sends a re-engagement sequence via SMS or email. You see who responded, who re-booked, and who needs a personal follow-up.",
		},
		{
			query: "gym retention tool to spot at-risk members",
			hook: "spot at-risk gym members before they cancel",
			answer:
				"EaseFIT scores every member's engagement weekly based on check-in frequency, booking patterns, and communication history. Members below the risk threshold surface in a dedicated dashboard so you can intervene before they churn.",
		},
	],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Return all query entries for a route. */
export function getQueries(route: SeoRoute): readonly QueryEntry[] {
	return SEARCH_QUERIES[route];
}

/**
 * Return query entries as FAQ items compatible with SeoLandingPage's `faqs` prop.
 * Each query becomes a question; the stored answer becomes the answer.
 *
 * Usage: spread into `faqs` after static entries, or pass as a standalone FAQ block.
 *   faqs={[ ...staticFaqs, ...getQueryFaqs(ROUTE) ]}
 */
export function getQueryFaqs(
	route: SeoRoute,
): Array<{ question: string; answer: string }> {
	return SEARCH_QUERIES[route].map((entry) => ({
		question: normalizeQuestion(entry.query),
		answer: entry.answer,
	}));
}

/**
 * Append the route's primary search query hook to a description if the
 * combined length stays within the 155-char metadata limit.
 *
 * Usage inside a descriptionTemplate:
 *   descriptionTemplate: (primary, secondary) =>
 *     enrichDescription(`EaseFIT is ${primary}...`, ROUTE)
 */
export function enrichDescription(base: string, route: SeoRoute): string {
	const queries = SEARCH_QUERIES[route];
	if (!queries.length) return base;

	const primary = SEO_KEYWORDS[route].primary.toLowerCase();
	const firstUnique = queries.find(
		(e) => !base.toLowerCase().includes(primary),
	);
	const hook = (firstUnique ?? queries[0]).hook;
	const suffix = ` — ${hook}.`;

	return base.length + suffix.length <= 155 ? base + suffix : base;
}

// ─── Internal ─────────────────────────────────────────────────────────────────

function normalizeQuestion(query: string): string {
	const trimmed = query.trim();
	const startsAsQuestion =
		/^(how|what|why|when|where|who|which|can|does|is|are|do|should|will|would)\b/i.test(
			trimmed,
		);
	const sentence = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
	return startsAsQuestion
		? sentence.endsWith("?") ? sentence : `${sentence}?`
		: `What is ${sentence.charAt(0).toLowerCase()}${sentence.slice(1)}?`;
}
