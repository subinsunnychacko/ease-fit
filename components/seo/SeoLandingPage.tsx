import Link from "next/link";
import FaqAccordion from "@/components/faq/FaqAccordion";
import SocialProof from "@/components/common/SocialProof";
import CTASection from "@/components/common/CTASection";
import { analyzeReadability, composePageText } from "@/lib/seo/readability";
import { checkContent, buildPropsHtml } from "@/lib/seo/contentCheck";

type ContentCard = {
	title: string;
	description: string;
};

type FaqItem = {
	question: string;
	answer: string;
};

type SeoLandingPageProps = {
	eyebrow: string;
	title: string;
	description: string;
	intro: string;
	highlights: ContentCard[];
	painPoints: string[];
	capabilities: string[];
	faqs: FaqItem[];
	jsonLd: Record<string, unknown> | Array<Record<string, unknown>>;
};

const primaryCtaClass =
	"inline-flex min-h-[48px] items-center justify-center rounded-[10px] bg-[#7C3AED] px-5 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#6D28D9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD]";

const secondaryCtaClass =
	"inline-flex min-h-[48px] items-center justify-center rounded-[10px] border border-[#24263A] bg-[#090B14] px-5 py-3 text-[14px] font-medium text-white transition-all duration-200 hover:border-[#343753] hover:bg-[#0D1020] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD]";

export default function SeoLandingPage({
	eyebrow,
	title,
	description,
	intro,
	highlights,
	painPoints,
	capabilities,
	faqs,
	jsonLd,
}: SeoLandingPageProps) {
	if (process.env.NODE_ENV === "development") {
		const pageText = composePageText({ description, intro, highlights, painPoints, capabilities });
		const readabilityScore = analyzeReadability(pageText);
		console.log(`[Readability:${eyebrow}]`, readabilityScore);

		const propsHtml = buildPropsHtml({ title, description, intro, highlights, painPoints, capabilities, faqs });
		const contentCheckResult = checkContent(propsHtml, {
			wordCountThreshold: 300,
			requireH3: true,
			partialContentNote: "template props only — page-level sections not included",
		});
		console.log(`[ContentCheck:${eyebrow}]`, contentCheckResult);
	}

	return (
		<div className="min-h-screen bg-[#070b14] font-(family-name:--font-dm-sans)">
			<main>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>

				<section className="px-6 pt-28 pb-10 md:pt-36 md:pb-12 lg:px-8">
					<div className="mx-auto max-w-300">
						<p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
							{eyebrow}
						</p>
						<h1 className="max-w-180 text-[34px] leading-[1.1] font-bold tracking-tight text-white md:text-[48px]">
							{title}
						</h1>
						<p className="mt-4 max-w-145 text-[14px] leading-[1.75] text-slate-400">
							{description}
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link href="/contact" className={primaryCtaClass}>
								Book a 2-Min Demo
							</Link>
							<Link href="/pricing" className={secondaryCtaClass}>
								See Pricing
							</Link>
						</div>
					</div>
				</section>

				<SocialProof />

				<section className="px-6 py-8 md:py-10 lg:px-8">
					<div className="mx-auto grid max-w-300 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
						<div className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
								Why This Search Matters
							</p>
							<p className="text-[13px] leading-[1.75] text-slate-400">
								{intro}
							</p>
							<ul className="mt-6 space-y-3">
								{painPoints.map((pain) => (
									<li
										key={pain}
										className="flex items-start gap-3 text-[12.5px] text-slate-300">
										<span className="mt-1.5 block h-1.75 w-1.75 shrink-0 rounded-full bg-[#7C3AED]" />
										{pain}
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
								What EaseFIT Includes
							</p>
							<ul className="space-y-3">
								{capabilities.map((item) => (
									<li
										key={item}
										className="flex items-start gap-3 text-[12.5px] text-slate-300">
										<span className="mt-1.5 block h-1.75 w-1.75 shrink-0 rounded-full bg-emerald-400" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section className="px-6 py-10 md:py-12 lg:px-8">
					<div className="mx-auto max-w-300">
						<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
							What Improves
						</p>
						<h2 className="mb-8 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
							Operational gains that show up quickly
						</h2>
						<div className="grid gap-5 md:grid-cols-3">
							{highlights.map((item) => (
								<article
									key={item.title}
									className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
									<h3 className="text-[15px] font-bold text-white">
										{item.title}
									</h3>
									<p className="mt-3 text-[12.5px] leading-[1.7] text-slate-400">
										{item.description}
									</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section
					className="px-6 py-10 md:py-12 lg:px-8"
					aria-labelledby="seo-faq-heading">
					<div className="mx-auto max-w-300">
						<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
							Questions Gym Owners Ask
						</p>
						<h2
							id="seo-faq-heading"
							className="mb-8 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
							Frequently asked questions
						</h2>
						<FaqAccordion items={faqs} />
					</div>
				</section>

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
