import type { Metadata } from "next";
import Link from "next/link";
import FeatureBlock from "@/components/features/FeatureBlock";
import ComparisonTable from "@/components/features/ComparisonTable";
import { absoluteUrl } from "@/lib/site";
import { SEO_KEYWORDS, getAllKeywordsForRoute } from "@/lib/seo/keywords";

const seo = SEO_KEYWORDS["/features"];

export const metadata: Metadata = {
	title: "Gym Management Software Features",
	description: `Explore EaseFIT's ${seo.primary} and ${seo.secondary[0]} — booking, retention, AI receptionist, and performance reports in one platform.`,
	keywords: getAllKeywordsForRoute("/features"),
	openGraph: {
		title: "Features — EaseFIT",
		description:
			"One platform. Six tiers. Zero excuses for missing bookings, losing members, or working weekends.",
		url: absoluteUrl("/features"),
		images: [
			{
				url: "/og-features.png",
				width: 1200,
				height: 630,
				alt: "EaseFIT features overview showing gym management software capabilities including class booking, member retention, AI receptionist, and attendance tracking",
			},
		],
	},
	twitter: {
		title: "Features — EaseFIT",
		description:
			"AI-powered gym management: booking, retention, voice receptionist, and reports in one platform.",
	},
	alternates: {
		canonical: absoluteUrl("/features"),
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "EaseFIT Features",
	description:
		"Explore EaseFIT's complete feature set for solo gym owners — unified booking, AI retention, voice receptionist, and performance reports.",
	url: absoluteUrl("/features"),
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
			"EaseFIT merges class booking software (TeamUp/Vagaro-level) with workout programming and logging (TrueCoach/Wodify-level) into one dashboard, eliminating data silos.",
		capabilities: [
			"Class scheduling & slot management for gyms",
			"Workout logging & exercise library",
			"QR smart attendance tracking",
			"Member management dashboard",
			"Real-time class fill rates and analytics",
		],
		bulletColor: "bg-emerald-400",
	},
	{
		tagColor: "bg-purple-500",
		title: "Proactive Retention AI",
		pain: "Pain: 30–40% of gym members churn annually. Most leave silently — no warning.",
		painColor: "text-purple-400",
		description:
			"EaseFIT's gym member retention features track attendance patterns, flag at-risk members automatically, and make personalized AI accountability calls to members slipping away — before they quit.",
		capabilities: [
			"Attendance pattern tracking and engagement scoring",
			"At-risk member flagging and alerts",
			"AI accountability calls ($0/mo on Pro+)",
			"Member retention workflow automation",
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
			"EaseFIT's AI gym receptionist answers every call around the clock — greets callers, answers questions, books classes by voice, and logs every inquiry. Your front desk always on.",
		capabilities: [
			"24/7 gym call answering",
			"Automated booking by voice",
			"Lead capture and qualification",
			"Call transcripts and dashboard logging",
			"AI chatbot for digital inquiries and missed call recovery",
		],
		bulletColor: "bg-emerald-400",
	},
	{
		tagColor: "bg-emerald-500",
		title: "AI Performance Reports",
		pain: "Pain: Most gym owners make decisions by gut feeling. No data on peak hours, fill rates, or churn risk.",
		painColor: "text-emerald-400",
		description:
			"EaseFIT's gym management software features auto-generate weekly performance reports, track real-time occupancy, monitor class fill rates, and deliver AI insights that show exactly what's working.",
		capabilities: [
			"Auto-generated weekly gym reports",
			"Real-time occupancy and class fill tracking",
			"Member engagement analytics",
			"Performance insights and recommendations",
			"Churn risk visibility and alerts",
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
				<div className="mx-auto max-w-300 space-y-10 px-6 py-8 md:space-y-14 md:py-10 lg:px-8">
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

				{/* Related Solutions */}
				<div className="mx-auto max-w-300 px-6 py-10 md:py-12 lg:px-8">
					<hr className="mb-8 border-white/6" />
					<section aria-labelledby="related-heading">
						<h2
							id="related-heading"
							className="mb-8 text-center text-[24px] font-bold tracking-tight text-white md:text-[28px]">
							Explore specific solutions
						</h2>
						<div className="grid gap-5 md:grid-cols-3">
							<Link
								href="/gym-management-software"
								className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
								<h3 className="font-bold text-white group-hover:text-emerald-400">
									Gym Management Software
								</h3>
								<p className="mt-2 text-sm text-slate-400">
									Unified bookings, attendance, and member workflows for solo gym owners.
								</p>
							</Link>
							<Link
								href="/ai-gym-receptionist"
								className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
								<h3 className="font-bold text-white group-hover:text-emerald-400">
									AI Gym Receptionist
								</h3>
								<p className="mt-2 text-sm text-slate-400">
									24/7 call answering and lead capture for gyms and boutique studios.
								</p>
							</Link>
							<Link
								href="/gym-member-retention-software"
								className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
								<h3 className="font-bold text-white group-hover:text-emerald-400">
									Member Retention Software
								</h3>
								<p className="mt-2 text-sm text-slate-400">
									Gym churn prevention and re-engagement for at-risk members.
								</p>
							</Link>
						</div>
					</section>
				</div>
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
