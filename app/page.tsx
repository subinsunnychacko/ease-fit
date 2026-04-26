import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/common/SocialProof";
import OutcomesSection from "@/components/home/Outcomessection";
import FeaturesSection from "@/components/home/Featuressection";
import SearchIntentSection from "@/components/home/SearchIntentSection";
import CTASection from "@/components/common/CTASection";
import { SEO_KEYWORDS, getAllKeywordsForRoute } from "@/lib/seo/keywords";

const seo = SEO_KEYWORDS["/"];

export const metadata: Metadata = {
	title: "AI Gym Management Software",
	description: `EaseFIT is ${seo.primary} and ${seo.secondary[0]} for solo gym owners — booking, attendance, retention, and AI receptionist in one platform.`,
	keywords: getAllKeywordsForRoute("/"),
	openGraph: {
		images: [
			{
				url: "/og-home.png",
				width: 1200,
				height: 630,
				alt: "EaseFIT - AI gym management software combining class booking, member retention, AI receptionist, and attendance tracking for solo gym owners and boutique fitness studios",
			},
		],
	},
};

export default function Home() {
	return (
		<div className="min-h-screen bg-[#070b14] font-(family-name:--font-dm-sans)">
			<main>
				<HeroSection />
				<SocialProof />
				<OutcomesSection />
				<FeaturesSection />
				<SearchIntentSection />
				<CTASection />
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
