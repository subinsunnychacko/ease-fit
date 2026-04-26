"use client";

import { useState } from "react";

type FaqItem = {
	question: string;
	answer: string;
};

type FaqAccordionProps = {
	items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="space-y-3">
			{items.map((faq, index) => (
				<article
					key={faq.question}
					className="rounded-xl border border-white/6 bg-[#0c1018] overflow-hidden transition-colors hover:border-white/10">
					<button
						onClick={() =>
							setOpenIndex(openIndex === index ? null : index)
						}
						className="w-full px-5 py-5 text-left flex items-center justify-between hover:bg-[#11131d] transition-colors">
						<h3 className="text-[13px] font-bold text-white flex-1">
							{faq.question}
						</h3>
						<span
							className={`ml-3 shrink-0 text-emerald-400 transition-transform duration-200 ${
								openIndex === index ? "rotate-180" : ""
							}`}
							aria-hidden="true">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M6 8l4 4 4-4" />
							</svg>
						</span>
					</button>

					{openIndex === index && (
						<div className="px-5 pb-5 border-t border-white/6">
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								{faq.answer}
							</p>
						</div>
					)}
				</article>
			))}
		</div>
	);
}
