import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { generateMetadataWithSEO } from "@/lib/seo/useSEO";

export const metadata = generateMetadataWithSEO("/why-easefit", {
	title: "Mindbody Alternative for Boutique Fitness Studios",
	descriptionTemplate: (primary, secondary) =>
		`EaseFIT is the ${primary} — a ${secondary} built for solo gym owners that combines class booking, workout logging, and AI voice automation.`,
	ogTitle: "Why EaseFIT — Not Just Another Gym App",
	ogDescription:
		"The only platform combining class booking, workout logging, and AI voice automation for solo practitioners — at a fraction of Mindbody's cost.",
	twitterDescription:
		"The only platform combining class booking, workout logging, and AI voice automation at a price that makes sense for solo gym owners.",
	ogImage: {
		url: "/og-why-easefit.png",
		alt: "Why EaseFIT - the only all-in-one platform combining gym booking software, member retention tools, and AI receptionist for solo gym owners",
	},
});

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "Why EaseFIT",
	url: absoluteUrl("/why-easefit"),
	description:
		"EaseFIT occupies a genuinely defensible market position: the only platform combining class booking, workout logging, and AI voice automation for solo practitioners.",
};

/* ─── Data ─── */

const marketCards = [
	{
		icon: "📅",
		title: "Class Booking",
		competitors: "TeamUp · Vagaro · Glofox",
	},
	{
		icon: "🏋️",
		title: "Workout Logging",
		competitors: "TrueCoach · Wodify · TrainHeroic",
	},
	{
		icon: "🤖",
		title: "AI Voice Automation",
		competitors: "Nobody — this is EaseFIT\u2019s whitespace",
	},
];

const profiles = [
	{
		title: "Boutique Studio Owner",
		rows: [
			{
				label: "Business",
				value: "CrossFit, Zumba, Yoga, Dance, or Pilates studio",
			},
			{ label: "Members", value: "50\u2013200 active members" },
			{
				label: "Current Tech",
				value: "WhatsApp groups + spreadsheets or basic booking software",
			},
			{
				label: "Core Pain",
				value: "Missing calls, losing bookings, no engagement data",
			},
			{ label: "Budget", value: "$50\u2013$300/month for software" },
			{
				label: "Decision Maker",
				value: "Owner-operator \u2014 single decision maker",
			},
		],
	},
	{
		title: "Solo Personal Trainer",
		rows: [
			{
				label: "Business",
				value: "Independent personal trainer or group-class instructor",
			},
			{ label: "Members", value: "20\u201350 active clients" },
			{
				label: "Current Tech",
				value: "Mindbody/Vagaro \u2014 frustrated with cost and complexity",
			},
			{
				label: "Core Pain",
				value: "Can\u2019t afford a receptionist, doing everything manually",
			},
			{
				label: "Budget",
				value: "$0\u2013$50/month today, ready to invest in growth",
			},
			{ label: "Decision Maker", value: "Owner-operator" },
		],
	},
];

const advantages = [
	{
		icon: "🔗",
		title: "Integrated Value Stack",
		description:
			"The only platform combining booking + workout logging + AI voice for solo practitioners. Adding workout logging to a booking platform requires fundamental re-engineering.",
	},
	{
		icon: "🤖",
		title: "AI Value Ladder",
		description:
			"Graduated AI: monthly report call \u2192 accountability calls \u2192 full receptionist. Eliminates adoption friction. Retrofitting AI tiers onto a flat-price product breaks positioning entirely.",
	},
	{
		icon: "📊",
		title: "Data Network Effect",
		description:
			"Free member app creates bottom-up adoption pressure. Each active member enriches the owner\u2019s dashboard and increases switching costs. Competitors can\u2019t offer free tiers without cannibalizing revenue.",
	},
	{
		icon: "💰",
		title: "Variable Cost Model",
		description:
			"90.9% gross margin with $0 founder salary. Profitable from $65K revenue. Can undercut established competitors indefinitely \u2014 they carry offices, staff, and enterprise overhead.",
	},
	{
		icon: "🎯",
		title: "Vertical Specialisation",
		description:
			"Purpose-built for solo gym owners, Zumba instructors, and dance studios. Every feature speaks their language. Mindbody serves multiple verticals and can\u2019t specialise this deeply.",
	},
];

const mindsets = [
	{
		title: "Efficiency-Obsessed",
		description:
			"They entered fitness to coach \u2014 not do admin. They value member outcomes over software features. The 8\u201312 hr/week admin burden is their #1 frustration and the thing EaseFIT directly eliminates.",
	},
	{
		title: "Fear of Silent Churn",
		description:
			"Members leave without warning. No cancellation, no feedback. Just silence. They know it\u2019s happening but have no data to detect or intervene in time. EaseFIT flags at-risk members proactively.",
	},
	{
		title: "Guilt Over Missed Leads",
		description:
			"Every call that hits voicemail after 7 PM is revenue slipping away. They feel it. The 24/7 AI voice receptionist is the direct solution to this emotional pain point \u2014 not a feature, a relief.",
	},
	{
		title: "Aspiration for Professionalism",
		description:
			"They want their solo studio to feel like a brand \u2014 seamless booking, progress tracking, personalised communication of a premium chain gym. EaseFIT delivers this credibility at a solo budget.",
	},
];

const bottomCtaClass =
	"inline-flex min-h-[45px] w-full items-center justify-center gap-1.5 rounded-[10px] bg-[#7C3AED] mt-7 px-5 py-3 text-[13px] font-semibold leading-[17px] text-white transition-all duration-200 hover:bg-[#6D28D9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] sm:w-auto";

/* ─── Page ─── */

export default function WhyEaseFITPage() {
	return (
		<div className="min-h-screen bg-[#070b14] font-(family-name:--font-dm-sans)">
			<main>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>

				{/* ── Hero ── */}
				<section className="px-6 pt-28 pb-10 text-center md:pt-36 md:pb-14 lg:px-8">
					<p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
						Why EaseFIT
					</p>
					<h1 className="mx-auto max-w-150 text-[32px] font-bold tracking-tight text-white md:text-[44px]">
						Not just another gym app.
					</h1>
					<p className="mx-auto mt-4 max-w-130 text-[13px] leading-[1.7] text-slate-400">
						EaseFIT occupies a genuinely defensible market position: the
						only platform combining class booking, workout logging, and AI
						voice automation for solo practitioners — at a price that
						actually makes sense.
					</p>
				</section>

				{/* ── Market Position ── */}
				<section
					className="px-6 py-10 md:py-12 lg:px-8"
					aria-labelledby="market-heading">
					<div className="mx-auto max-w-300">
						<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
							Market Position
						</p>
						<h2
							id="market-heading"
							className="mb-8 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
							The gap nobody else fills
						</h2>

						{/* Competitive whitespace banner */}
						<div className="mb-8 rounded-xl border border-emerald-500/15 bg-emerald-500/4 p-5">
							<p className="mb-1 text-[11px] font-bold tracking-widest text-emerald-400/60 uppercase">
								Competitive Whitespace
							</p>
							<p className="text-[12.5px] leading-[1.65] text-slate-400">
								No existing platform combines class scheduling, workout
								logging, TrueCoach/Wodify-level programming, and AI
								voice automation in a single, vertically-focused
								solution. EaseFIT is built for this exact intersection.
							</p>
						</div>

						{/* Three market cards with + separators */}
						<div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
							{marketCards.map((card, i) => (
								<div key={card.title} className="contents">
									<div className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
										<p
											className="mb-3 text-[20px]"
											aria-hidden="true">
											{card.icon}
										</p>
										<h3 className="text-[15px] font-bold text-white">
											{card.title}
										</h3>
										<p className="mt-2 text-[11px] text-slate-500">
											Who does this today:
										</p>
										<p className="mt-0.5 text-[12px] text-slate-400">
											{card.competitors}
										</p>
									</div>
									{i < marketCards.length - 1 && (
										<div className="hidden items-center justify-center md:flex">
											<span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500/15 text-[14px] font-bold text-purple-400">
												+
											</span>
										</div>
									)}
								</div>
							))}
						</div>

						{/* Summary line */}
						<p className="mt-8 text-center text-[15px] font-bold tracking-tight text-white">
							EaseFIT = All Three. One Platform. One Price.
						</p>
					</div>
				</section>

				{/* ── Ideal Customer Profile ── */}
				<section
					className="px-6 py-10 md:py-12 lg:px-8"
					aria-labelledby="icp-heading">
					<div className="mx-auto max-w-300">
						<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
							Ideal Customer Profile
						</p>
						<h2
							id="icp-heading"
							className="mb-10 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
							Who gets the most out of EaseFIT
						</h2>

						<div className="grid gap-5 md:grid-cols-2">
							{profiles.map((profile) => (
								<article
									key={profile.title}
									className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
									{/* Colored tag bar */}
									<div className="mb-4 h-1.25 w-12 rounded-full bg-emerald-500" />
									<h3 className="mb-5 text-[16px] font-bold text-white">
										{profile.title}
									</h3>
									<dl className="space-y-3">
										{profile.rows.map((row) => (
											<div
												key={row.label}
												className="flex gap-4 text-[12px]">
												<dt className="w-25 shrink-0 font-medium text-slate-500">
													{row.label}
												</dt>
												<dd className="text-slate-300">
													{row.value}
												</dd>
											</div>
										))}
									</dl>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* ── Defensibility ── */}
				<section
					className="px-6 py-10 md:py-12 lg:px-8"
					aria-labelledby="defensibility-heading">
					<div className="mx-auto max-w-300">
						<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
							Defensibility
						</p>
						<h2
							id="defensibility-heading"
							className="mb-1.5 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
							Five advantages competitors can&apos;t copy
						</h2>
						<p className="mb-10 max-w-145 text-[13px] leading-[1.7] text-slate-400">
							These structural advantages form the basis of
							EaseFIT&apos;s long-term market position — built into the
							architecture from day one.
						</p>

						<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
							{advantages.map((adv) => (
								<article
									key={adv.title}
									className="rounded-xl border border-white/6 bg-[#0c1018] p-5">
									<p className="mb-3 text-[20px]" aria-hidden="true">
										{adv.icon}
									</p>
									<h3 className="mb-2.5 text-[13px] font-bold text-white">
										{adv.title}
									</h3>
									<p className="text-[11.5px] leading-[1.65] text-slate-400">
										{adv.description}
									</p>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* ── Customer Mindset ── */}
				<section
					className="px-6 py-10 md:py-12 lg:px-8"
					aria-labelledby="mindset-heading">
					<div className="mx-auto max-w-300">
						<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
							The Customer Mindset
						</p>
						<h2
							id="mindset-heading"
							className="mb-10 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
							What drives them. What they fear. What they want.
						</h2>

						<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
							{mindsets.map((m) => (
								<article
									key={m.title}
									className="flex flex-col rounded-xl border border-white/6 bg-[#0c1018] p-5">
									<h3 className="mb-3 text-[14px] font-bold text-white">
										{m.title}
									</h3>
									<p className="flex-1 text-[11.5px] leading-[1.65] text-slate-400">
										{m.description}
									</p>
									{/* Bottom gradient bar */}
									<div className="mt-5 h-1.25 w-full overflow-hidden rounded-full">
										<div className="h-full w-full rounded-full bg-linear-to-r from-emerald-500 to-emerald-400" />
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* ── Bottom CTA ── */}
				<section className="px-6 pt-6 pb-12 md:pt-8 md:pb-14 lg:px-8">
					<div className="mx-auto max-w-175 text-center">
						<h2 className="text-[24px] font-bold tracking-tight text-white md:text-[32px]">
							The model works. The market exists. The tech is proven.
						</h2>
						<p className="mx-auto mt-4 max-w-120 text-[13px] leading-[1.7] text-slate-400">
							EaseFIT is the only platform at the intersection of
							booking, logging, and AI voice automation. 50,000+ solo
							operators are waiting for exactly this.
						</p>
						<Link href="#start" className={bottomCtaClass}>
							Start Free Today
							<span aria-hidden="true">&rarr;</span>
						</Link>
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
