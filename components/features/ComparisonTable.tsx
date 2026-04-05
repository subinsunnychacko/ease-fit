const competitors = [
	"EaseFIT",
	"Vagaro",
	"TeamUp",
	"Glofox",
	"TrueCoach",
	"Wodify",
];

type Row = {
	capability: string;
	values: (boolean | string)[];
};

const rows: Row[] = [
	{
		capability: "Class Booking",
		values: [true, true, true, true, false, false],
	},
	{
		capability: "Workout Logging",
		values: [true, false, false, false, true, true],
	},
	{
		capability: "Smart Attendance",
		values: [true, false, true, true, false, false],
	},
	{
		capability: "AI Chatbot",
		values: [true, false, "Limited", false, false, false],
	},
	{
		capability: "AI Voice Receptionist",
		values: [true, false, false, false, false, false],
	},
	{
		capability: "AI Performance Reports",
		values: [true, false, false, false, false, false],
	},
	{
		capability: "Solo-Practitioner Focus",
		values: [true, false, true, false, true, false],
	},
];

const prices = ["$0 / $49", "$25+", "$89+", "$110+", "$30+", "$99+"];

function CellValue({ value }: { value: boolean | string }) {
	if (value === true) {
		return (
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				className="text-emerald-400">
				<path
					d="M3.5 8.5L6.5 11.5L12.5 5"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}
	if (typeof value === "string") {
		return <span className="text-[11px] text-slate-400">{value}</span>;
	}
	return <span className="text-[12px] text-slate-600">—</span>;
}

export default function ComparisonTable() {
	return (
		<section
			className="px-6 py-12 md:py-16 lg:px-8"
			aria-labelledby="comparison-heading">
			<div className="mx-auto max-w-300">
				<p className="mb-2.5 text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
					Competitive Edge
				</p>
				<h2
					id="comparison-heading"
					className="mb-10 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
					The only platform at this intersection
				</h2>

				{/* Table wrapper — horizontal scroll on mobile */}
				<div className="overflow-x-auto">
					<table className="w-full min-w-160 border-collapse text-left">
						{/* Header */}
						<thead>
							<tr className="border-b border-white/6">
								<th className="py-3 pr-4 text-[12px] font-medium text-slate-400">
									Capability
								</th>
								{competitors.map((name) => (
									<th
										key={name}
										className={`px-3 py-3 text-center text-[12px] font-semibold ${
											name === "EaseFIT"
												? "text-emerald-400"
												: "text-slate-400"
										}`}>
										{name}
									</th>
								))}
							</tr>
						</thead>

						{/* Body */}
						<tbody>
							{rows.map((row) => (
								<tr
									key={row.capability}
									className="border-b border-white/4">
									<td className="py-3 pr-4 text-[12.5px] text-slate-300">
										{row.capability}
									</td>
									{row.values.map((val, i) => (
										<td
											key={i}
											className={`px-3 py-3 text-center ${
												i === 0 ? "bg-emerald-500/4" : ""
											}`}>
											<span className="inline-flex items-center justify-center">
												<CellValue value={val} />
											</span>
										</td>
									))}
								</tr>
							))}

							{/* Price row */}
							<tr>
								<td className="py-3 pr-4 text-[12.5px] font-medium text-slate-300">
									Starting Price
								</td>
								{prices.map((price, i) => (
									<td
										key={i}
										className={`px-3 py-3 text-center text-[12px] font-semibold ${
											i === 0
												? "bg-emerald-500/4 text-emerald-400"
												: "text-slate-400"
										}`}>
										{price}
									</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
