type Capability = string;

type FeatureBlockProps = {
	tagColor: string;
	title: string;
	pain: string;
	painColor: string;
	description: string;
	capabilities: Capability[];
	bulletColor: string;
};

export default function FeatureBlock({
	tagColor,
	title,
	pain,
	painColor,
	description,
	capabilities,
	bulletColor,
}: FeatureBlockProps) {
	return (
		<div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
			{/* Left — content */}
			<div>
				{/* Colored tag bar */}
				<div className={`mb-5 h-1.5 w-13 rounded-full ${tagColor}`} />

				<h2 className="text-[22px] font-bold tracking-tight text-white md:text-[26px]">
					{title}
				</h2>

				<p className={`mt-2 text-[12.5px] font-semibold ${painColor}`}>
					{pain}
				</p>

				<p className="mt-3 text-[13px] leading-[1.7] text-slate-400">
					{description}
				</p>

				{/* Green gradient glow bar */}
				<div className="mt-5 h-1.5 w-full overflow-hidden rounded-full">
					<div className="h-full w-full rounded-full bg-linear-to-r from-emerald-500 to-emerald-400" />
				</div>
			</div>

			{/* Right — capabilities card */}
			<div className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
				<ul className="space-y-3.5">
					{capabilities.map((cap) => (
						<li
							key={cap}
							className="flex items-start gap-3 text-[13px] text-slate-300">
							<span
								className={`mt-1.25 block h-1.75 w-1.75 shrink-0 rounded-full ${bulletColor}`}
							/>
							{cap}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
