import HeroSection from "@/components/home/HeroSection";
import PainPointsMarquee from "@/components/home/PainPointsMarquee";
import OutcomesSection from "@/components/home/Outcomessection";
import FeaturesSection from "@/components/home/Featuressection";
import BottomCTA from "@/components/home/Bottomcta";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#070b14] font-(family-name:--font-dm-sans)">
			<main>
				<HeroSection />
				<PainPointsMarquee />
				<OutcomesSection />
				<FeaturesSection />
				<BottomCTA />
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
