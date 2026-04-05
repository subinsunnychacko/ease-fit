import Link from "next/link";

const bottomCtaClass =
	"inline-flex min-h-[45px] w-full items-center justify-center gap-1.5 rounded-[10px] bg-[#7C3AED] px-5 py-3 text-[13px] font-semibold leading-[17px] text-white transition-all duration-200 hover:bg-[#6D28D9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] sm:w-auto";

const bottomSecondaryCtaClass =
	"inline-flex min-h-[45px] w-full items-center justify-center rounded-[10px] border border-[#24263A] bg-[#090B14] px-5 py-3 text-[13px] font-medium leading-[17px] text-white transition-all duration-200 hover:border-[#343753] hover:bg-[#0D1020] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD] sm:w-auto";

export default function BottomCTA() {
	return (
		<section
			className="px-6 pt-8 pb-12 md:pt-10 md:pb-16 lg:px-8"
			aria-labelledby="cta-heading">
			<div className="mx-auto max-w-300 rounded-[18px] border border-[#181C2B] bg-[#0c1018] px-6 py-10 text-center md:px-12 md:py-9 lg:px-16">
				{/* Urgency label */}
				<p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-emerald-400 uppercase">
					Limited Early Access — 10 Founding Spots
				</p>

				<h2
					id="cta-heading"
					className="mb-6 text-[22px] font-bold tracking-tight text-white md:text-[28px]">
					Stop Losing Members. Start Growing Your Gym.
				</h2>

				<div className="mx-auto flex w-full max-w-110 flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
					<Link href="#start" className={bottomCtaClass}>
						Claim a Founding Spot
						<span aria-hidden="true">&rarr;</span>
					</Link>
					<Link href="#demo" className={bottomSecondaryCtaClass}>
						Book a 2-Min Demo
					</Link>
				</div>
			</div>
		</section>
	);
}
