import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/contact/ContactFooter";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get started with EaseFIT — claim one of 10 founding spots at 50% off for 3 months. Book a 2-minute demo or reserve your spot today. No contracts, no setup fees.",
	keywords: [
		"EaseFIT demo",
		"gym software free trial",
		"EaseFIT contact",
		"gym management demo",
		"founding member gym software",
		"EaseFIT sign up",
	],
	openGraph: {
		title: "Get Started — EaseFIT",
		description:
			"Stop losing members. Start growing your gym. 10 founding spots at 50% off.",
		url: "https://ease.fit/contact",
		images: [
			{
				url: "/og-contact.png",
				width: 1200,
				height: 630,
				alt: "Get Started with EaseFIT",
			},
		],
	},
	twitter: {
		title: "Get Started — EaseFIT",
		description:
			"Claim a founding spot at 50% off for 3 months. No contracts, no setup fees.",
	},
	alternates: {
		canonical: "https://ease.fit/contact",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Get Started with EaseFIT",
	url: "https://ease.fit/contact",
	description: "Reserve a founding spot or book a 2-minute demo of EaseFIT.",
};

const trustBadges = [
	"Free Member Tier Forever",
	"No Contracts",
	"Members Import",
	"Cancel Anytime",
];

const demoPoints = [
	"Class booking flow from a member\u2019s perspective",
	"QR attendance check-in in real time",
	"AI voice receptionist answering a live call",
	"Member engagement dashboard & at-risk alerts",
	"AI monthly performance report walkthrough",
	"Pricing walkthrough \u2014 which tier fits your gym",
];

const faqs = [
	{
		q: "Is there really a free tier?",
		a: "Yes. Gym members always use EaseFIT for free \u2014 workout logging, class booking, progress tracking. The paid tiers are for gym owners and operators.",
	},
	{
		q: "Do I need to sign a contract?",
		a: "No contracts on any tier. Cancel anytime, no questions asked. Annual plans are available at 2 months free if you want to lock in the discount.",
	},
	{
		q: "What is the founding member offer exactly?",
		a: "The first 10 gym owners who sign up get 50% off their chosen tier for the first 3 months. After that, your price locks in at the standard rate \u2014 no surprise increases.",
	},
	{
		q: "How does the AI voice receptionist work?",
		a: "It answers inbound calls to your gym, greets callers, answers common questions, books available class slots, and logs every inquiry to your dashboard. Available 24/7 on the Premium tier ($299/mo).",
	},
	{
		q: "Can I switch tiers later?",
		a: "Absolutely. You can upgrade or downgrade at any time. Moving up is instant. Moving down takes effect at the start of the next billing cycle.",
	},
	{
		q: "Is my members\u2019 data secure?",
		a: "Yes. EaseFIT uses industry-standard encryption for all member data. We are GDPR-aligned and never sell or share member data with third parties.",
	},
	{
		q: "What if I\u2019m already using Vagaro or Mindbody?",
		a: "We make migration easy. Our onboarding team will help you import your member list and class schedule. Most gyms are fully switched over within a week.",
	},
	{
		q: "Do I need technical skills to set this up?",
		a: "No. Basic and Pro tiers are fully self-serve \u2014 setup takes under 30 minutes. Premium and Growth tiers include guided onboarding with a dedicated team member.",
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
								Lock in half-price access for 3 months. We&apos;ll reach
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
									What you&apos;ll see in the demo:
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
									<span aria-hidden="true">&rarr;</span>
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

						<div className="grid gap-5 md:grid-cols-2">
							{faqs.map((faq) => (
								<article
									key={faq.q}
									className="rounded-xl border border-white/6 bg-[#0c1018] p-5">
									<h3 className="flex items-start gap-2.5 text-[13px] font-bold text-white">
										<span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
										{faq.q}
									</h3>
									<p className="mt-2.5 text-[12px] leading-[1.7] text-slate-400">
										{faq.a}
									</p>
								</article>
							))}
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
