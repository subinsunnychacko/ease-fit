import Link from "next/link";

const footerLinks = [
	{ label: "Features", href: "/features" },
	{ label: "Pricing", href: "/pricing" },
	{ label: "Why EaseFIT", href: "/why-easefit" },
	{ label: "Contact", href: "/contact" },
];

export default function Footer() {
	return (
		<footer className="border-t border-white/5 px-6 py-8 lg:px-8">
			<div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-6 md:flex-row">
				{/* Logo + byline */}
				<div>
					<Link href="/" className="text-[15px] font-bold text-white">
						ease.fit
					</Link>
					<p className="mt-0.5 text-[10px] text-slate-600">
						by CodSphere Technologies
					</p>
				</div>

				{/* Nav links */}
				<nav aria-label="Footer navigation">
					<ul className="flex flex-wrap items-center gap-6">
						{footerLinks.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="text-[12px] text-slate-500 transition-colors hover:text-white">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Copyright */}
				<p className="text-[10px] text-slate-600">
					&copy; {new Date().getFullYear()} CodSphere Technologies. All
					rights reserved.
				</p>
			</div>
		</footer>
	);
}
