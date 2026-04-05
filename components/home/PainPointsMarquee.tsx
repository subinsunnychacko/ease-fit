"use client";

const painPoints = [
	"\u201CMore time on admin than coaching\u201D",
	"\u201CMembers ghost me\u201D",
	"\u201CMindbody costs more than rent\u201D",
	"\u201CCan\u2019t answer calls while teaching\u201D",
	"\u201CNo idea which classes make money\u201D",
];

export default function PainPointsMarquee() {
	const items = [...painPoints, ...painPoints];

	return (
		<div
			className="relative overflow-hidden border-y border-white/5 bg-[#070b14] py-3.5"
			aria-label="Common pain points from gym owners"
			role="marquee">
			{/* Fade edges */}
			<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-[#070b14] to-transparent" />
			<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-[#070b14] to-transparent" />

			<div className="flex w-max animate-[marquee_35s_linear_infinite] gap-6">
				{items.map((point, i) => (
					<span
						key={i}
						className="flex items-center gap-6 text-[12px] whitespace-nowrap text-slate-500">
						{point}
						<span className="text-slate-700" aria-hidden="true">
							·
						</span>
					</span>
				))}
			</div>

			<style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
		</div>
	);
}
