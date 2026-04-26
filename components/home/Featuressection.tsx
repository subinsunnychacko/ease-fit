type Feature = {
	tag: string;
	tagColor: string;
	title: string;
	quote: string;
	description: string;
};

const features: Feature[] = [
	{
		tag: "Pain Point",
		tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
		title: "Unified Book & Track Engine",
		quote: "What if one app replaced five?",
		description:
			"Class booking software and workout logging in one dashboard. No more juggling Vagaro, TrueCoach, and spreadsheets.",
	},
	{
		tag: "Retention AI",
		tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
		title: "Proactive Retention AI",
		quote: "What if your gym called before members quit?",
		description:
			"Gym member retention features with attendance pattern tracking that flags at-risk members. AI calls reach out before they disappear.",
	},
	{
		tag: "AI Voice",
		tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
		title: "24/7 AI Voice Receptionist",
		quote: "Never miss a booking call — even while coaching.",
		description:
			"AI receptionist for gyms that answers calls, books classes, and captures leads around the clock. Your front desk always on.",
	},
	{
		tag: "Insights",
		tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
		title: "AI Performance Reports",
		quote: "What if your gym told you what's working?",
		description:
			"Auto-generated weekly reports, real-time occupancy, class fill rates — gym management software features that need no spreadsheets.",
	},
];

export default function FeaturesSection() {
	return (
		<section
			id="features"
			className="px-6 pt-8 pb-10 md:pt-10 md:pb-12 lg:px-8"
			aria-labelledby="features-heading">
			<div className="mx-auto max-w-300">
				{/* Section header */}
				<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
					Features
				</p>
				<h2
					id="features-heading"
					className="mb-10 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
					Built around your biggest pain points
				</h2>

				{/* Cards grid */}
				<div className="grid gap-5 md:grid-cols-2">
					{features.map((feature) => (
						<article
							key={feature.title}
							className="rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors duration-300 hover:border-emerald-500/15">
							{/* Tag */}
							<span
								className={`inline-block rounded border px-2.5 py-0.75 text-[10px] font-semibold ${feature.tagColor}`}>
								{feature.tag}
							</span>

							<h3 className="mt-4 text-[15px] font-bold text-white">
								{feature.title}
							</h3>

							<p className="mt-1 text-[12.5px] font-medium text-emerald-400">
								{feature.quote}
							</p>

							<p className="mt-4 text-[12px] leading-[1.6] text-slate-300">
								{feature.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
