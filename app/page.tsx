import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/common/SocialProof";
import OutcomesSection from "@/components/home/Outcomessection";
import FeaturesSection from "@/components/home/Featuressection";
import SearchIntentSection from "@/components/home/SearchIntentSection";
import CTASection from "@/components/common/CTASection";
import { generateMetadataWithSEO } from "@/lib/seo/useSEO";

export const metadata = generateMetadataWithSEO("/", {
	title: "AI Gym Management Software",
	descriptionTemplate: (primary, secondary) =>
		`EaseFIT is ${primary} and ${secondary} for solo gym owners — booking, attendance, retention, and AI receptionist in one platform.`,
	ogTitle: "EaseFIT | AI Gym Management Software for Solo Gym Owners",
	ogDescription:
		"Replace disconnected booking, attendance, retention, and receptionist tools with one AI-powered gym management platform built for solo operators.",
	twitterDescription:
		"All-in-one AI gym management for solo gym owners. Booking, attendance, member retention, and AI receptionist in one platform.",
	ogImage: {
		url: "/og-home.png",
		alt: "EaseFIT - AI gym management software combining class booking, member retention, AI receptionist, and attendance tracking for solo gym owners and boutique fitness studios",
	},
});

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
