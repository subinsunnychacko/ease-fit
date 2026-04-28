import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/contact/ContactFooter";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { absoluteUrl } from "@/lib/site";
import { generateMetadataWithSEO } from "@/lib/seo/useSEO";

export const metadata = generateMetadataWithSEO("/contact", {
	title: "Book a Gym Management Software Demo",
	descriptionTemplate: (primary, secondary) =>
		`Book a ${primary} or schedule an ${secondary} to claim a founding-member spot — no contracts, no setup fees, cancel anytime.`,
	ogTitle: "Get Started — EaseFIT",
	ogDescription:
		"Stop losing members. Start growing your gym. 10 founding spots at 50% off. Book a 2-minute demo today.",
	twitterDescription:
		"Claim a founding spot at 50% off for 3 months. No contracts, no setup fees. Book your gym software demo now.",
	ogImage: {
		url: "/og-contact.png",
		alt: "Get started with EaseFIT gym management software - claim founding member spot at 50% off with no contracts",
	},
});

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Get Started with EaseFIT",
	url: absoluteUrl("/contact"),
	description: "Reserve a founding spot or book a 2-minute demo of EaseFIT.",
};

const trustBadges = [
	"Free Member Tier Forever",
	"No Contracts",
	"Members Import",
	"Cancel Anytime",
];

const demoPoints = [
	"Class booking flow from a member's perspective",
	"QR attendance check-in in real time",
	"AI voice receptionist answering a live call",
	"Member engagement dashboard & at-risk alerts",
	"AI monthly performance report walkthrough",
	"Pricing walkthrough — which tier fits your gym",
];

const faqs = [
	{
		question: "Is there really a free tier?",
		answer: "Yes. Gym members always use EaseFIT for free — workout logging, class booking, progress tracking. The paid tiers are for gym owners and operators.",
	},
	{
		question: "Do I need to sign a contract?",
		answer: "No contracts on any tier. Cancel anytime, no questions asked. Annual plans are available at 2 months free if you want to lock in the discount.",
	},
	{
		question: "What is the founding member offer exactly?",
		answer: "The first 10 gym owners who sign up get 50% off their chosen tier for the first 3 months. After that, your price locks in at the standard rate — no surprise increases.",
	},
	{
		question: "How does the AI voice receptionist work?",
		answer: "It answers inbound calls to your gym, greets callers, answers common questions, books available class slots, and logs every inquiry to your dashboard. Available 24/7 on the Premium tier ($299/mo).",
	},
	{
		question: "Can I switch tiers later?",
		answer: "Absolutely. You can upgrade or downgrade at any time. Moving up is instant. Moving down takes effect at the start of the next billing cycle.",
	},
	{
		question: "Is my members' data secure?",
		answer: "Yes. EaseFIT uses industry-standard encryption for all member data. We are GDPR-aligned and never sell or share member data with third parties.",
	},
	{
		question: "What if I'm already using Vagaro or Mindbody?",
		answer: "We make migration easy. Our onboarding team will help you import your member list and class schedule. Most gyms are fully switched over within a week.",
	},
	{
		question: "Do I need technical skills to set this up?",
		answer: "No. Basic and Pro tiers are fully self-serve — setup takes under 30 minutes. Premium and Growth tiers include guided onboarding with a dedicated team member.",
	},
];

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-[#070b14] font-(family-name:--font-dm-sans)">
			<main>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>

				{/* ── Hero ── */}
				<section className="px-6 pt-28 pb-4 text-center md:pt-36 md:pb-6 lg:px-8">
					<p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
						Get Started
					</p>
					<h1 className="mx-auto max-w-150 text-[32px] font-bold tracking-tight text-white md:text-[44px] md:leading-[1.15]">
						Stop losing members.
						<br />
						Start growing your gym.
					</h1>
					<p className="mx-auto mt-4 max-w-115 text-[13px] leading-[1.7] text-slate-400">
						10 founding spots available at 50% off for 3 months. No
						contracts. No setup fees. Cancel anytime.
					</p>
				</section>

				{/* ── Trust badges ── */}
				<section
					className="px-6 py-5 lg:px-8"
					aria-label="Trust guarantees">
					<div className="mx-auto flex max-w-300 flex-wrap items-center justify-center gap-3">
						{trustBadges.map((badge) => (
							<span
								key={badge}
								className="rounded-full border border-emerald-500/15 bg-emerald-500/5 px-4 py-1.5 text-[11px] font-medium text-emerald-400/70">
								{badge}
							</span>
						))}
					</div>
				</section>

				{/* ── Two-column: Form + Demo ── */}
				<section
					className="px-6 py-10 md:py-14 lg:px-8"
					aria-label="Get started options">
					<div className="mx-auto grid max-w-300 gap-10 md:grid-cols-2 md:gap-12">
						{/* Left — Founding spot form */}
						<div>
							<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
								Claim a Founding Spot
							</p>
							<h2 className="mb-1.5 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
								Join at 50% off
							</h2>
							<p className="mb-6 max-w-100 text-[13px] leading-[1.7] text-slate-400">
								Lock in half-price access for 3 months. We'll reach
								out within 24 hours to get you set up.
							</p>
							<ContactForm />
						</div>

						{/* Right — Demo */}
						<div>
							<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
								Book a 2-Minute Demo
							</p>
							<h2 className="mb-1.5 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
								See it before you commit
							</h2>
							<p className="mb-6 max-w-100 text-[13px] leading-[1.7] text-slate-400">
								Watch a live walkthrough of EaseFIT — booking, AI calls,
								and dashboards — in under 2 minutes.
							</p>

							{/* Demo card */}
							<div className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
								<p className="mb-4 text-[14px] font-bold text-white">
									What you'll see in the demo:
								</p>
								<ul className="space-y-3.5">
									{demoPoints.map((point) => (
										<li
											key={point}
											className="flex items-start gap-3 text-[12.5px] text-slate-300">
											<span className="mt-1.25 block h-1.75 w-1.75 shrink-0 rounded-full bg-emerald-400" />
											{point}
										</li>
									))}
								</ul>

								{/* Demo CTA */}
								<Link
									href="#demo"
									className="mt-7 flex items-center justify-center gap-1.5 rounded-lg border border-purple-600 px-5 py-3 text-[13px] font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20">
									Book a 2-Minute Demo
									<span aria-hidden="true">→</span>
								</Link>

								<p className="mt-3 text-center text-[11px] text-slate-500">
									Takes 2 minutes. No commitment.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* ── FAQ ── */}
				<section
					className="px-6 py-12 md:py-16 lg:px-8"
					aria-labelledby="faq-heading">
					<div className="mx-auto max-w-300">
						<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
							Frequently Asked Questions
						</p>
						<h2
							id="faq-heading"
							className="mb-10 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
							Quick answers before you commit
						</h2>

						<FaqAccordion items={faqs} />
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
