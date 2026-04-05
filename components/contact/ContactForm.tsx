"use client";

import { useState, type FormEvent } from "react";

const planOptions = [
	"Member Free — $0/mo",
	"Basic — $49/mo",
	"Pro — $99/mo  (Most Popular)",
	"Pro+ — $149/mo",
	"Premium — $299/mo",
	"Growth — $599/mo",
];

export default function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		studio: "",
		email: "",
		phone: "",
		plan: planOptions[2],
	});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		// TODO: wire up to API route / SendGrid / etc.
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
				<p className="text-[18px] font-bold text-white">
					You&apos;re in! 🎉
				</p>
				<p className="mt-2 text-[13px] text-slate-400">
					We&apos;ll contact you within 24 hours to confirm your founding
					spot.
				</p>
			</div>
		);
	}

	const inputClass =
		"w-full rounded-lg border border-white/[0.08] bg-[#0a0f1a] px-4 py-2.5 text-[13px] text-white placeholder-slate-600 outline-none transition-colors focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20";

	return (
		<form
			onSubmit={handleSubmit}
			className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
			<div className="space-y-5">
				{/* Full Name */}
				<div>
					<label
						htmlFor="name"
						className="mb-1.5 block text-[11px] font-medium text-slate-400">
						Full Name
					</label>
					<input
						id="name"
						type="text"
						required
						placeholder="Your name"
						className={inputClass}
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
					/>
				</div>

				{/* Gym / Studio Name */}
				<div>
					<label
						htmlFor="studio"
						className="mb-1.5 block text-[11px] font-medium text-slate-400">
						Gym / Studio Name
					</label>
					<input
						id="studio"
						type="text"
						required
						placeholder="Your studio name"
						className={inputClass}
						value={form.studio}
						onChange={(e) => setForm({ ...form, studio: e.target.value })}
					/>
				</div>

				{/* Email */}
				<div>
					<label
						htmlFor="email"
						className="mb-1.5 block text-[11px] font-medium text-slate-400">
						Email Address
					</label>
					<input
						id="email"
						type="email"
						required
						placeholder="your@email.com"
						className={inputClass}
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>
				</div>

				{/* Phone */}
				<div>
					<label
						htmlFor="phone"
						className="mb-1.5 block text-[11px] font-medium text-slate-400">
						Phone Number
					</label>
					<input
						id="phone"
						type="tel"
						required
						placeholder="+1 (555) 000-0000"
						className={inputClass}
						value={form.phone}
						onChange={(e) => setForm({ ...form, phone: e.target.value })}
					/>
				</div>

				{/* Plan select */}
				<div>
					<label
						htmlFor="plan"
						className="mb-1.5 block text-[11px] font-medium text-slate-400">
						Which plan are you interested in?
					</label>
					<select
						id="plan"
						className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-size-[12px] bg-position-[right_16px_center] bg-no-repeat pr-10`}
						value={form.plan}
						onChange={(e) => setForm({ ...form, plan: e.target.value })}>
						{planOptions.map((p) => (
							<option key={p} value={p}>
								{p}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Submit */}
			<button
				type="submit"
				className="mt-6 w-full rounded-lg bg-[#7C3AED] py-3 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25">
				Claim My Founding Spot
			</button>

			<p className="mt-4 text-[11px] leading-[1.6] text-slate-500">
				We&apos;ll contact you within 24 hours to confirm your spot.
				<br />
				No payment required to reserve.
			</p>
		</form>
	);
}
