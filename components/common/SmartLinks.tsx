"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ─── Link data ────────────────────────────────────────────────────────────────

const PRODUCT_LINKS = [
	{ href: "/features",    label: "Features" },
	{ href: "/pricing",     label: "Pricing" },
	{ href: "/why-easefit", label: "Why EaseFIT" },
	{ href: "/contact",     label: "Book a Demo" },
	{ href: "/",            label: "Home" },
];

const SOLUTION_LINKS = [
	{ href: "/gym-management-software",       label: "Gym Management Software" },
	{ href: "/ai-gym-receptionist",           label: "AI Gym Receptionist" },
	{ href: "/gym-member-retention-software", label: "Member Retention" },
];

const EXTERNAL_LINKS = [
	{
		href: "https://www.ihrsa.org/improve-your-club/industry-news/",
		label: "IHRSA Industry News",
	},
	{
		href: "https://www.acefitness.org/resources/everyone/blog/",
		label: "ACE Fitness Blog",
	},
	{
		href: "https://www.sba.gov/business-guide/grow-your-business",
		label: "SBA Business Guide",
	},
];

// ─── Component ────────────────────────────────────────────────────────────────

type SmartLinksProps = {
	/**
	 * Explicit current route for active-link highlighting.
	 * Defaults to usePathname() when not provided.
	 */
	currentRoute?: string;
};

export default function SmartLinks({ currentRoute }: SmartLinksProps) {
	const pathname = usePathname();
	const activeRoute = currentRoute ?? pathname;

	function isActive(href: string): boolean {
		if (href === "/") return activeRoute === "/";
		return activeRoute === href || activeRoute.startsWith(`${href}/`);
	}

	const linkClass = (href: string) =>
		`text-[13px] transition-colors duration-150 ${
			isActive(href)
				? "text-white"
				: "text-slate-400 hover:text-white"
		}`;

	return (
		<footer
			className="border-t border-white/5 bg-[#070b14]"
			aria-label="Site footer">
			<div className="mx-auto max-w-300 px-6 lg:px-8">

				{/* Main grid */}
				<div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

					{/* Brand */}
					<div className="col-span-2 lg:col-span-1">
						<Link
							href="/"
							className="text-[15px] font-bold tracking-tight text-white">
							ease.fit
						</Link>
						<p className="mt-3 max-w-55 text-[12.5px] leading-[1.75] text-slate-500">
							AI gym management for solo gym owners and boutique fitness studios.
						</p>
					</div>

					{/* Product */}
					<div>
						<p className="mb-4 text-[11px] font-semibold tracking-[0.12em] text-slate-600 uppercase">
							Product
						</p>
						<ul className="space-y-3">
							{PRODUCT_LINKS.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className={linkClass(link.href)}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Solutions */}
					<div>
						<p className="mb-4 text-[11px] font-semibold tracking-[0.12em] text-slate-600 uppercase">
							Solutions
						</p>
						<ul className="space-y-3">
							{SOLUTION_LINKS.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className={linkClass(link.href)}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<p className="mb-4 text-[11px] font-semibold tracking-[0.12em] text-slate-600 uppercase">
							Resources
						</p>
						<ul className="space-y-3">
							{EXTERNAL_LINKS.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-1 text-[13px] text-slate-400 transition-colors duration-150 hover:text-white">
										{link.label}
										<svg
											width="10"
											height="10"
											viewBox="0 0 10 10"
											fill="none"
											aria-hidden="true"
											className="shrink-0 text-slate-600">
											<path
												d="M1.5 8.5L8.5 1.5M8.5 1.5H4M8.5 1.5V6"
												stroke="currentColor"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</a>
								</li>
							))}
						</ul>
					</div>

				</div>

				{/* Bottom bar */}
				<div className="flex flex-col gap-1.5 border-t border-white/5 py-6 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-[11px] text-slate-700">
						&copy; {new Date().getFullYear()} EaseFIT. All rights reserved.
					</p>
					<p className="text-[11px] text-slate-700">
						Built for solo gym owners and boutique fitness studios.
					</p>
				</div>

			</div>
		</footer>
	);
}
