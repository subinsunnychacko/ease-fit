const outcomes = [
	{
		number: "01",
		title: "Simplify",
		subtitle: "One Platform, Zero Chaos",
		description:
			"Replace 3\u20135 disconnected tools. Booking, tracking, attendance, billing and communication \u2014 all connected.",
		stat: "Up to 70% admin time reduction",
	},
	{
		number: "02",
		title: "Retain",
		subtitle: "Keep Members Coming Back",
		description:
			"AI tracks attendance patterns, flags at-risk members, and proactively calls them before they silently churn.",
		stat: "20\u201340% retention improvement with AI calls",
	},
	{
		number: "03",
		title: "Grow",
		subtitle: "Never Miss an Opportunity",
		description:
			"AI voice receptionist answers every call 24/7, books classes, and captures leads \u2014 even while you coach.",
		stat: "62% of voicemail callers never call back",
	},
];

export default function OutcomesSection() {
	return (
		<section
			id="why-easefit"
			className="px-6 pt-12 pb-8 md:pt-16 md:pb-10 lg:px-8"
			aria-labelledby="outcomes-heading">
			<div className="mx-auto max-w-300">
				{/* Section header */}
				<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
					Why EaseFIT
				</p>
				<h2
					id="outcomes-heading"
					className="mb-1.5 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
					Three outcomes that change everything
				</h2>
				<p className="mb-10 max-w-105 text-[13px] leading-[1.7] text-slate-400">
					Every feature maps to one of three business outcomes solo
					operators actually care about.
				</p>

				{/* Cards */}
				<div className="grid gap-5 md:grid-cols-3">
					{outcomes.map((item) => (
						<article
							key={item.number}
							className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors duration-300 hover:border-emerald-500/15">
							<div>
								{/* Number */}
								<span className="mb-4 block text-[40px] font-black leading-none text-emerald-500/15">
									{item.number}
								</span>
								<h3 className="text-[16px] font-bold text-white">
									{item.title}
								</h3>
								<p className="mt-0.5 text-[12px] text-slate-400">
									{item.subtitle}
								</p>
								<p className="mt-3.5 text-[12.5px] leading-[1.65] text-slate-400">
									{item.description}
								</p>
							</div>

							{/* Bottom stat badge */}
							<div className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/6 px-3.5 py-2">
								<p className="text-[11px] font-medium text-emerald-400">
									{item.stat}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
