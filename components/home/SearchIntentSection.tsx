import Link from "next/link";

const solutionPages = [
	{
		href: "/gym-management-software",
		title: "Gym Management Software for Solo Gym Owners",
		description:
			"All-in-one gym management platform — unify bookings, attendance, workouts, and member operations in one system for small gyms and boutique studios.",
	},
	{
		href: "/ai-gym-receptionist",
		title: "AI Gym Receptionist",
		description:
			"24/7 gym call answering software — capture missed calls, answer common questions, and book classes with 24/7 AI phone answering that works after hours.",
	},
	{
		href: "/gym-member-retention-software",
		title: "Gym Member Retention Software",
		description:
			"Gym churn prevention tool — spot member retention risk earlier, re-engage members faster, and turn attendance data into retention actions.",
	},
];

export default function SearchIntentSection() {
	return (
		<section
			className="px-6 pt-8 pb-10 md:pt-10 md:pb-12 lg:px-8"
			aria-labelledby="solution-pages-heading">
			<div className="mx-auto max-w-300">
				<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
					Popular Searches
				</p>
				<h2
					id="solution-pages-heading"
					className="mb-3 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
					Explore the problems EaseFIT solves
				</h2>
				<p className="mb-8 max-w-150 text-[13px] leading-[1.7] text-slate-400">
					These focused pages are built for the exact searches gym
					owners make when they need booking software, retention tools,
					or an AI receptionist.
				</p>

				<div className="grid gap-5 md:grid-cols-3">
					{solutionPages.map((page) => (
						<Link
							key={page.href}
							href={page.href}
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors duration-200 hover:border-[#7C3AED]/50">
							<p className="text-[15px] font-bold text-white transition-colors duration-200 group-hover:text-[#C4B5FD]">
								{page.title}
							</p>
							<p className="mt-3 text-[12.5px] leading-[1.7] text-slate-400">
								{page.description}
							</p>
							<p className="mt-5 text-[12px] font-semibold text-[#A78BFA]">
								Read more
							</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
