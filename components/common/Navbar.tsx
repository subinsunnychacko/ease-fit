"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Features", href: "/features" },
	{ label: "Pricing", href: "/pricing" },
	{ label: "Why EaseFIT", href: "/why-easefit" },
	{ label: "Contact", href: "/contact" },
];

const headerCtaClass =
	"inline-flex min-h-10 items-center justify-center rounded-[8px] bg-[#7C3AED] px-4 py-3 text-[13px] font-semibold leading-[16px] text-white transition-all duration-200 hover:bg-[#6D28D9] hover:shadow-[0_16px_36px_rgba(124,58,237,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD]";

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = usePathname();

	const isActiveLink = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}

		return pathname === href || pathname.startsWith(`${href}/`);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
			<nav
				className="mx-auto flex max-w-300 items-center justify-between px-6 py-4 lg:px-8"
				aria-label="Primary navigation">
				{/* Logo */}
				<Link
					href="/"
					className="text-[15px] font-bold tracking-tight text-white"
					aria-label="EaseFIT Home">
					ease.fit
				</Link>

				{/* Desktop nav */}
				<ul className="hidden items-center gap-7 md:flex">
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								aria-current={
									isActiveLink(link.href) ? "page" : undefined
								}
								className={`relative inline-flex items-center pb-2 text-[13px] transition-colors duration-200 ${
									isActiveLink(link.href)
										? "text-white"
										: "text-slate-400 hover:text-white"
								}`}>
								{link.label}
								<span
									aria-hidden="true"
									className={`absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#7C3AED] transition-opacity duration-200 ${
										isActiveLink(link.href)
											? "opacity-100"
											: "opacity-0"
									}`}
								/>
							</Link>
						</li>
					))}
				</ul>

				{/* Desktop CTA */}
				<Link
					href="#start"
					className={`${headerCtaClass} hidden md:inline-flex`}>
					Start Free Today
				</Link>

				{/* Mobile hamburger */}
				<button
					type="button"
					className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white md:hidden"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-expanded={mobileOpen}
					aria-label="Toggle navigation menu">
					{mobileOpen ? (
						<svg
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							strokeWidth="2">
							<path d="M5 5l10 10M5 15L15 5" />
						</svg>
					) : (
						<svg
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							strokeWidth="2">
							<path d="M3 5h14M3 10h14M3 15h14" />
						</svg>
					)}
				</button>
			</nav>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="border-t border-white/5 bg-[#070b14] px-6 pb-6 md:hidden">
					<ul className="flex flex-col gap-4 pt-4">
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									aria-current={
										isActiveLink(link.href) ? "page" : undefined
									}
									className={`relative inline-flex pb-2 text-[13px] transition-colors duration-200 ${
										isActiveLink(link.href)
											? "text-white"
											: "text-slate-400 hover:text-white"
									}`}
									onClick={() => setMobileOpen(false)}>
									{link.label}
									<span
										aria-hidden="true"
										className={`absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#7C3AED] transition-opacity duration-200 ${
											isActiveLink(link.href)
												? "opacity-100"
												: "opacity-0"
										}`}
									/>
								</Link>
							</li>
						))}
						<li>
							<Link
								href="#start"
								className={`${headerCtaClass} mt-2 w-full`}
								onClick={() => setMobileOpen(false)}>
								Start Free Today
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
