import type { Metadata } from "next";
import PricingCard from "@/components/pricing/PricingCard";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
	title: "Pricing",
	description:
		"EaseFIT pricing starts free for gym members and scales from $49/mo for gym owners. Six tiers, no contracts, 50% off for the first 10 founding members.",
	keywords: [
		"gym software pricing",
		"affordable gym management",
		"gym CRM pricing",
		"fitness studio software cost",
		"free gym member app",
		"AI gym receptionist pricing",
		"gym management plans",
	],
	openGraph: {
		title: "Pricing — EaseFIT",
		description:
			"A value ladder that grows with you. Start free, upgrade when you see results. First 10 founding members get 50% off.",
		url: absoluteUrl("/pricing"),
		images: [
			{
				url: "/og-pricing.png",
				width: 1200,
				height: 630,
				alt: "EaseFIT Pricing Plans",
			},
		],
	},
	twitter: {
		title: "Pricing — EaseFIT",
		description:
			"Six tiers from free to $599/mo. No contracts, no setup fees on self-serve tiers.",
	},
	alternates: {
		canonical: absoluteUrl("/pricing"),
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "EaseFIT Pricing",
	url: absoluteUrl("/pricing"),
	mainEntity: {
		"@type": "Product",
		name: "EaseFIT",
		offers: [
			{
				"@type": "Offer",
				name: "Member Free",
				price: "0",
				priceCurrency: "USD",
				description: "Free tier for gym members",
			},
			{
				"@type": "Offer",
				name: "Basic",
				price: "49",
				priceCurrency: "USD",
				description: "For new gym owners",
			},
			{
				"@type": "Offer",
				name: "Pro",
				price: "99",
				priceCurrency: "USD",
				description: "For growing studios",
			},
			{
				"@type": "Offer",
				name: "Pro+",
				price: "149",
				priceCurrency: "USD",
				description: "For retention-focused owners",
			},
			{
				"@type": "Offer",
				name: "Premium",
				price: "299",
				priceCurrency: "USD",
				description: "For serious operators",
			},
			{
				"@type": "Offer",
				name: "Growth",
				price: "599",
				priceCurrency: "USD",
				description: "Multi-location / scaling",
			},
		],
	},
};

const tierProgression = [
	{ tier: "Free", hook: "Data Hook" },
	{ tier: "Basic", hook: "Operational Dependency" },
	{ tier: "Pro", hook: "AI Exposure" },
	{ tier: "Pro+", hook: "Retention Engine" },
	{ tier: "Premium", hook: "Full Automation" },
	{ tier: "Growth", hook: "Scale" },
];

const plans = [
	{
		name: "Member Free",
		price: "$0",
		period: "/mo",
		audience: "For Gym Members",
		description:
			"Track workouts, book classes, and see your progress \u2014 free.",
		features: [
			"Workout logging & records",
			"Class booking",
			"Exercise library with video demos",
		],
		cta: "Start Free",
		highlighted: false,
		bulletColor: "bg-slate-500",
	},
	{
		name: "Basic",
		price: "$49",
		period: "/mo",
		audience: "For New Gym Owners",
		description:
			"Everything to run your gym \u2014 for less than a coffee subscription.",
		features: [
			"Member management",
			"Class scheduling",
			"QR smart attendance",
			"Workout publishing",
		],
		cta: "Start Free",
		highlighted: false,
		bulletColor: "bg-slate-500",
	},
	{
		name: "Pro",
		price: "$99",
		period: "/mo",
		audience: "For Growing Studios",
		description:
			"Monthly AI performance report call \u2014 like having a business analyst on call.",
		features: [
			"Everything in Basic",
			"Monthly AI voice report call",
			"Advanced analytics",
		],
		cta: "Get Started \u2192",
		highlighted: true,
		bulletColor: "bg-purple-400",
	},
	{
		name: "Pro+",
		price: "$149",
		period: "/mo",
		audience: "For Retention-Focused Owners",
		description:
			"Your gym calls members before they quit. AI accountability keeps community strong.",
		features: [
			"Everything in Pro",
			"50 AI accountability calls/month",
			"Member engagement scoring",
		],
		cta: "Get Started",
		highlighted: false,
		bulletColor: "bg-slate-500",
	},
	{
		name: "Premium",
		price: "$299",
		period: "/mo",
		audience: "For Serious Operators",
		description:
			"24/7 AI receptionist that answers calls, books classes, captures leads.",
		features: [
			"Everything in Pro+",
			"24/7 AI voice receptionist",
			"Call dashboard & transcripts",
		],
		cta: "Get Started",
		highlighted: false,
		bulletColor: "bg-slate-500",
	},
	{
		name: "Growth",
		price: "$599",
		period: "/mo",
		audience: "Multi-Location / Scaling",
		description:
			"Enterprise-grade management at a fraction of Mindbody\u2019s price.",
		features: [
			"Everything in Premium",
			"Multi-location support",
			"Unlimited AI calls",
			"White-glove onboarding",
		],
		cta: "Get Started",
		highlighted: false,
		bulletColor: "bg-slate-500",
	},
];

const trustItems = [
	{ text: "Free member tier forever", accent: true },
	{ text: "No contracts \u2014 cancel anytime", accent: false },
	{ text: "No setup fees on self-serve tiers", accent: true },
	{ text: "50% off for 10 founding members", accent: false },
];

export default function PricingPage() {
	return (
		<div className="min-h-screen bg-[#070b14] font-(family-name:--font-dm-sans)">
			<main>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>

				{/* Hero */}
				<section className="px-6 pt-28 pb-6 md:pt-36 md:pb-8 lg:px-8">
					<div className="mx-auto max-w-300">
						<h1 className="max-w-170 text-[36px] leading-[1.15] font-bold italic tracking-tight text-white md:text-[52px]">
							A value ladder that grows with you.
						</h1>
						<p className="mt-4 max-w-130 text-[13px] leading-[1.7] text-slate-400">
							Start free for your members. Upgrade when you see the
							results. The first 10 founding members get 50% off for 3
							months.
						</p>
					</div>
				</section>

				{/* Tier progression bar */}
				<section
					className="px-6 py-6 lg:px-8"
					aria-label="Pricing tier progression">
					<div className="mx-auto max-w-300">
						<div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 rounded-xl border border-white/6 bg-[#0c1018] px-5 py-3">
							{tierProgression.map((item, i) => (
								<span
									key={item.tier}
									className="flex items-center gap-1.5">
									<span className="text-[11px] font-semibold text-slate-300">
										{item.tier}
									</span>
									<span className="text-[11px] text-slate-600">
										&rarr;
									</span>
									<span className="text-[11px] text-slate-500">
										{item.hook}
									</span>
									{i < tierProgression.length - 1 && (
										<span className="mx-1 text-[11px] text-slate-700">
											·
										</span>
									)}
								</span>
							))}
						</div>
					</div>
				</section>

				{/* Pricing cards */}
				<section
					className="px-6 py-8 md:py-10 lg:px-8"
					aria-labelledby="pricing-heading">
					<h2 id="pricing-heading" className="sr-only">
						Pricing Plans
					</h2>
					<div className="mx-auto grid max-w-300 gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{plans.map((plan) => (
							<PricingCard key={plan.name} {...plan} />
						))}
					</div>
				</section>

				{/* Early Adopter Offer banner */}
				<section
					className="px-6 py-8 md:py-10 lg:px-8"
					aria-label="Early adopter offer">
					<div className="mx-auto flex max-w-300 flex-col items-start justify-between gap-6 rounded-2xl border border-white/6 bg-[#0c1018] px-8 py-8 sm:flex-row sm:items-center md:px-10">
						<div>
							<p className="mb-1.5 text-[15px] font-bold text-white">
								<span className="mr-1.5" aria-hidden="true">
									🎯
								</span>
								Early Adopter Offer
							</p>
							<p className="text-[13px] leading-[1.65] text-slate-400">
								First 10 founding members get 50% off for 3 months — no
								contracts, no setup fees.
							</p>
						</div>
						<a
							href="#start"
							className="shrink-0 rounded-lg bg-purple-600 px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
							Claim Your Founding Spot
						</a>
					</div>
				</section>

				{/* Trust bar */}
				<section
					className="px-6 py-8 md:py-10 lg:px-8"
					aria-label="Pricing guarantees">
					<div className="mx-auto grid max-w-300 gap-4 rounded-xl border border-white/6 bg-[#0c1018] px-6 py-5 sm:grid-cols-2 lg:grid-cols-4">
						{trustItems.map((item) => (
							<div key={item.text} className="flex items-center gap-2">
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									className="shrink-0 text-emerald-400">
									<path
										d="M3 7.5L5.5 10L11 4"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<span
									className={`text-[12px] font-medium ${
										item.accent
											? "text-emerald-400"
											: "text-slate-400"
									}`}>
									{item.text}
								</span>
							</div>
						))}
					</div>
				</section>
			</main>

			<footer className="border-t border-white/5 px-6 py-6">
				<div className="mx-auto max-w-300 text-center">
					<p className="text-[11px] text-slate-600">
						&copy; {new Date().getFullYear()} EaseFIT. All rights
						reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
