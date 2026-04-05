import type { Metadata } from "next";
import FeatureBlock from "@/components/features/FeatureBlock";
import ComparisonTable from "@/components/features/ComparisonTable";

export const metadata: Metadata = {
	title: "Features",
	description:
		"Explore EaseFIT's AI-powered features: unified booking & tracking, proactive retention AI, 24/7 voice receptionist, and automated performance reports — all built for solo gym owners.",
	keywords: [
		"gym management features",
		"AI voice receptionist gym",
		"gym member retention AI",
		"class booking software",
		"workout logging platform",
		"gym performance reports",
		"fitness studio automation",
		"gym CRM features",
	],
	openGraph: {
		title: "Features — EaseFIT",
		description:
			"One platform. Six tiers. Zero excuses for missing bookings, losing members, or working weekends.",
		url: "https://ease.fit/features",
		images: [
			{
				url: "/og-features.png",
				width: 1200,
				height: 630,
				alt: "EaseFIT Features Overview",
			},
		],
	},
	twitter: {
		title: "Features — EaseFIT",
		description:
			"AI-powered gym management: booking, retention, voice receptionist, and reports in one platform.",
	},
	alternates: {
		canonical: "https://ease.fit/features",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "EaseFIT Features",
	description:
		"Explore EaseFIT's complete feature set for solo gym owners — unified booking, AI retention, voice receptionist, and performance reports.",
	url: "https://ease.fit/features",
	mainEntity: {
		"@type": "SoftwareApplication",
		name: "EaseFIT",
		applicationCategory: "BusinessApplication",
		featureList: [
			"Unified Book & Track Engine",
			"Proactive Retention AI",
			"24/7 AI Voice Receptionist",
			"AI Performance Reports",
		],
	},
};

const features = [
	{
		tagColor: "bg-emerald-500",
		title: "Unified Book & Track Engine",
		pain: "Pain: Solo operators juggle 3–5 disconnected tools. Nothing talks to each other.",
		painColor: "text-emerald-400",
		description:
			"EaseFIT merges class scheduling (TeamUp/Vagaro-level) with workout programming and logging (TrueCoach/Wodify-level) into one dashboard, eliminating data silos.",
		capabilities: [
			"Class scheduling & slot management",
			"Workout logging & exercise library",
			"QR smart attendance",
			"Member management dashboard",
			"Real-time class fill rates",
		],
		bulletColor: "bg-emerald-400",
	},
	{
		tagColor: "bg-purple-500",
		title: "Proactive Retention AI",
		pain: "Pain: 30–40% of gym members churn annually. Most leave silently — no warning.",
		painColor: "text-purple-400",
		description:
			"EaseFIT tracks attendance patterns, flags at-risk members automatically, and makes personalized AI accountability calls to members who are slipping away — before they quit.",
		capabilities: [
			"Attendance pattern tracking",
			"At-risk member flagging",
			"AI accountability calls ($0/mo on Pro+)",
			"Engagement scoring",
			"Automated re-engagement campaigns",
		],
		bulletColor: "bg-purple-400",
	},
	{
		tagColor: "bg-emerald-500",
		title: "24/7 AI Voice Receptionist",
		pain: "Pain: 62% of callers who reach voicemail never call back. Each missed call = up to $2,000 lost.",
		painColor: "text-emerald-400",
		description:
			"EaseFIT's AI receptionist answers every call around the clock — greets callers, answers questions, books classes, and logs every inquiry. Your front desk. Always on.",
		capabilities: [
			"Answers calls 24/7",
			"Books classes via voice",
			"Lead capture & qualification",
			"Call transcripts & dashboard",
			"AI chatbot for digital inquiries",
		],
		bulletColor: "bg-emerald-400",
	},
	{
		tagColor: "bg-emerald-500",
		title: "AI Performance Reports",
		pain: "Pain: Most gym owners make decisions by gut feeling. No data on peak hours, fill rates, or churn risk.",
		painColor: "text-emerald-400",
		description:
			"EaseFIT auto-generates weekly performance reports, tracks real-time occupancy, monitors class fill rates, and delivers AI insights that tell you exactly what's working.",
		capabilities: [
			"Auto-generated weekly reports",
			"Real-time occupancy tracking",
			"Class fill rate analytics",
			"Member engagement scores",
			"AI-powered recommendations",
		],
		bulletColor: "bg-emerald-400",
	},
];

export default function FeaturesPage() {
	return (
		<div className="min-h-screen bg-[#070b14] font-(family-name:--font-dm-sans)">
			<main>
				{/* JSON-LD */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>

				{/* Hero */}
				<section className="px-6 pt-28 pb-10 text-center md:pt-36 md:pb-14 lg:px-8">
					<p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
						Features
					</p>
					<h1 className="mx-auto max-w-140 text-[32px] font-bold tracking-tight text-white md:text-[42px]">
						Everything your gym needs.
					</h1>
					<p className="mx-auto mt-3 max-w-110 text-[13px] leading-[1.7] text-slate-400">
						One platform. Six tiers. Zero excuses for missing bookings,
						losing members, or working weekends.
					</p>
				</section>

				{/* Feature blocks */}
				<div className="mx-auto max-w-300 space-y-16 px-6 py-8 md:space-y-24 md:py-12 lg:px-8">
					{features.map((feature) => (
						<FeatureBlock key={feature.title} {...feature} />
					))}
				</div>

				{/* Divider */}
				<div className="mx-auto max-w-300 px-6 lg:px-8">
					<hr className="border-white/6" />
				</div>

				{/* Comparison table */}
				<ComparisonTable />
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
