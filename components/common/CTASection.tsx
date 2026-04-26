import Link from "next/link";

type CtaLink = {
	label: string;
	href: string;
};

type CTASectionProps = {
	eyebrow?: string;
	headline?: string;
	subtext?: string;
	primaryCta?: CtaLink;
	secondaryCta?: CtaLink;
	trustNote?: string;
};

const primaryCtaClass =
	"inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[10px] bg-[#7C3AED] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#6D28D9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] sm:w-auto";

const secondaryCtaClass =
	"inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] border border-[#24263A] bg-[#090B14] px-6 py-3 text-[14px] font-medium text-white transition-all duration-200 hover:border-[#343753] hover:bg-[#0D1020] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] sm:w-auto";

export default function CTASection({
	eyebrow = "Limited Early Access — 10 Founding Spots at 50% Off",
	headline = "Start Your Free Trial",
	subtext = "Replace scattered gym tools with one platform built for solo owners. No setup fees, no contracts — just a cleaner way to run bookings, members, and retention from day one.",
	primaryCta = { label: "Book a Demo", href: "/contact" },
	secondaryCta = { label: "Start Free Trial", href: "/pricing" },
	trustNote = "No credit card required · Cancel anytime",
}: CTASectionProps) {
	return (
		<section
			className="px-6 pt-8 pb-16 md:pt-10 md:pb-20 lg:px-8"
			aria-labelledby="cta-section-heading">
			<div className="relative mx-auto max-w-175 overflow-hidden rounded-[18px] border border-[#181C2B] bg-[#0c1018] px-6 py-12 text-center md:px-12 md:py-14">
				{/* Subtle emerald glow behind headline */}
				<div
					className="pointer-events-none absolute -top-20 left-1/2 z-0 h-72 w-72 -translate-x-1/2 rounded-full opacity-[0.12] blur-3xl"
					style={{
						background: "radial-gradient(circle, #10b981, transparent)",
					}}
					aria-hidden="true"
				/>

				<div className="relative">
					<p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-emerald-400 uppercase">
						{eyebrow}
					</p>

					<h2
						id="cta-section-heading"
						className="text-[26px] font-bold tracking-tight text-white md:text-[32px]">
						{headline}
					</h2>

					<p className="mx-auto mt-4 max-w-120 text-[13px] leading-[1.75] text-slate-400">
						{subtext}
					</p>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Link href={primaryCta.href} className={primaryCtaClass}>
							{primaryCta.label}
							<span aria-hidden="true">&rarr;</span>
						</Link>
						<Link href={secondaryCta.href} className={secondaryCtaClass}>
							{secondaryCta.label}
						</Link>
					</div>

					{trustNote && (
						<p className="mt-5 text-[11px] text-slate-500">{trustNote}</p>
					)}
				</div>
			</div>
		</section>
	);
}
