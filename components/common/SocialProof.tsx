type Stat = {
	value: string;
	label: string;
};

type Logo = {
	name: string;
};

type SocialProofProps = {
	headline?: string;
	stats?: Stat[];
	logos?: Logo[];
};

const DEFAULT_STATS: Stat[] = [
	{ value: "100+", label: "Gym owners onboarded" },
	{ value: "10K+", label: "Bookings managed" },
	{ value: "30%", label: "Avg. churn reduction" },
	{ value: "6×", label: "Tools replaced" },
];

const DEFAULT_LOGOS: Logo[] = [
	{ name: "Iron Peak Gym" },
	{ name: "FitFlow Studio" },
	{ name: "Peak Form Training" },
	{ name: "Apex Fitness" },
	{ name: "ProFit Studio" },
];

export default function SocialProof({
	headline = "Trusted by 100+ gym owners & boutique studios",
	stats = DEFAULT_STATS,
	logos = DEFAULT_LOGOS,
}: SocialProofProps) {
	return (
		<section
			className="border-t border-white/6 px-6 py-10 md:py-12 lg:px-8"
			aria-label="Trust signals">
			<div className="mx-auto max-w-300">
				<p className="mb-8 text-center text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
					{headline}
				</p>

				<div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center">
							<p className="text-[32px] font-bold leading-none text-white md:text-[38px]">
								{stat.value}
							</p>
							<p className="mt-2 text-[11px] font-medium tracking-[0.06em] text-slate-500 uppercase">
								{stat.label}
							</p>
						</div>
					))}
				</div>

				{logos.length > 0 && (
					<div className="mt-10 border-t border-white/6 pt-8">
						<p className="mb-5 text-center text-[10px] font-medium tracking-[0.12em] text-slate-600 uppercase">
							Early access studios
						</p>
						<div className="flex flex-wrap items-center justify-center gap-3">
							{logos.map((logo) => (
								<div
									key={logo.name}
									className="rounded-lg border border-white/6 bg-[#0c1018] px-4 py-2.5">
									<span className="text-[12px] font-medium text-slate-500">
										{logo.name}
									</span>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
