import Link from "next/link";

type PricingCardProps = {
	name: string;
	price: string;
	period: string;
	audience: string;
	description: string;
	features: string[];
	cta: string;
	highlighted?: boolean;
	bulletColor?: string;
};

export default function PricingCard({
	name,
	price,
	period,
	audience,
	description,
	features,
	cta,
	highlighted = false,
	bulletColor = "bg-slate-500",
}: PricingCardProps) {
	return (
		<article
			className={`relative flex flex-col rounded-xl border p-6 transition-colors duration-300 ${
				highlighted
					? "border-purple-500/40 bg-[#0c1018] shadow-lg shadow-purple-500/5"
					: "border-white/6 bg-[#0c1018] hover:border-white/10"
			}`}>
			{/* Most Popular badge */}
			{highlighted && (
				<div className="absolute -top-3 right-5 rounded-md bg-purple-500 px-3 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
					Most Popular
				</div>
			)}

			{/* Tier name */}
			<p className="text-[13px] font-medium text-slate-400">{name}</p>

			{/* Price */}
			<p className="mt-2 text-[40px] font-bold leading-none tracking-tight text-white">
				{price}
			</p>

			{/* Period + audience */}
			<p className="mt-1.5 text-[11px] text-slate-500">
				{period} · {audience}
			</p>

			{/* Description */}
			<p className="mt-4 text-[12.5px] leading-[1.65] text-slate-400">
				{description}
			</p>

			{/* Divider */}
			<div className="my-5 h-px bg-white/6" />

			{/* Features */}
			<ul className="flex-1 space-y-3">
				{features.map((feature) => (
					<li
						key={feature}
						className="flex items-start gap-2.5 text-[12.5px] text-slate-300">
						<span
							className={`mt-1.25 block h-1.5 w-1.5 shrink-0 rounded-full ${bulletColor}`}
						/>
						{feature}
					</li>
				))}
			</ul>

			{/* CTA button */}
			<Link
				href="#start"
				className={`mt-6 flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
					highlighted
						? "bg-purple-600 text-white hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
						: "border border-white/8 bg-[#151b28] text-slate-300 hover:border-white/15 hover:text-white"
				}`}>
				{cta}
			</Link>
		</article>
	);
}
