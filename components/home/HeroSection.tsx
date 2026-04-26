import Link from "next/link";

const stats = [
	{ value: "$49", label: "Starting / mo" },
	{ value: "70%", label: "Less Admin" },
	{ value: "24/7", label: "AI Receptionist" },
	{ value: "6", label: "Tools Replaced" },
];

const heroCtaClass =
	"inline-flex min-h-[52px] w-full items-center justify-center rounded-[10px] bg-[#7C3AED] px-5 py-3 text-[14px] font-semibold leading-5 text-white transition-all duration-200 hover:bg-[#6D28D9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] sm:w-[188px]";

const heroSecondaryCtaClass =
	"inline-flex min-h-[52px] w-full items-center justify-center rounded-[18px] border border-[#24263A] bg-[#090B14] px-5 py-3 text-[14px] font-medium leading-5 text-white transition-all duration-200 hover:border-[#343753] hover:bg-[#0D1020] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] sm:w-[188px]";

export default function HeroSection() {
	return (
		<section
			className="relative overflow-hidden px-6 pt-28 pb-10 md:pt-36 md:pb-12 lg:px-8"
			aria-labelledby="hero-heading">
			{/* Subtle radial gradient glow */}
			<div
				className="pointer-events-none absolute top-0 left-1/2 -z-10 h-125 w-175 -translate-x-1/2"
				style={{
					background:
						"radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 70%)",
				}}
				aria-hidden="true"
			/>

			<div className="mx-auto max-w-300 text-center">
				{/* Early Access Badge */}
				<div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
					<span className="text-xs text-emerald-400">✦</span>
					<span className="text-xs font-medium text-emerald-300">
						Early Access — 10 Founding Spots at 50% Off
					</span>
				</div>

				{/* Headline */}
				<h1
					id="hero-heading"
					className="mx-auto mb-5 max-w-170 text-[40px] leading-[1.05] font-black tracking-tight text-white uppercase sm:text-[52px] md:text-[64px] lg:text-[72px]">
					One Platform.
					<br />
					<span className="bg-linear-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
						Zero Chaos.
					</span>
				</h1>

				{/* Subtext */}
				<p className="mx-auto mb-8 max-w-115 text-[14px] leading-[1.7] text-slate-400 md:text-[15px]">
					The all-in-one gym management platform and AI gym software that
					replaces booking tools, workout loggers, and missed-call voicemails
					for solo gym owners and boutique studios — starting free, scaling
					with you.
				</p>

				{/* CTAs */}
				<div className="mx-auto flex w-full max-w-105 flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
					<Link href="#start" className={heroCtaClass}>
						Start Free Today
					</Link>
					<Link href="#how-it-works" className={heroSecondaryCtaClass}>
						See How It Works
					</Link>
				</div>

				{/* Stats */}
				<div className="mx-auto mt-10 grid max-w-150 grid-cols-2 gap-6 sm:grid-cols-4 md:mt-12">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center">
							<p className="text-[26px] font-bold leading-none text-emerald-400 md:text-[30px]">
								{stat.value}
							</p>
							<p className="mt-1.5 text-[10px] font-medium tracking-[0.08em] text-slate-500 uppercase">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
