import Link from "next/link";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { generateMetadataWithSEO } from "@/lib/seo/useSEO";
import { absoluteUrl } from "@/lib/site";

const ROUTE = "/gym-member-retention-software" as const;

export const metadata = generateMetadataWithSEO(ROUTE, {
	title: "Gym Member Retention Software",
	descriptionTemplate: (primary, secondary) =>
		`EaseFIT ${primary} pairs ${secondary} with attendance-based engagement scoring to flag at-risk members before they quit.`,
	ogTitle: "Gym Member Retention Software for At-Risk Members | EaseFIT",
	ogDescription:
		"Track attendance, spot at-risk members sooner, and act before silent churn damages gym growth.",
	twitterDescription:
		"EaseFIT helps gyms use attendance and engagement signals to act earlier on member churn risk.",
	ogImage: {
		url: "/og-gym-member-retention-software.png",
		alt: "Gym member retention software with at-risk member alerts, attendance tracking, and automated re-engagement campaigns - churn prevention tool for boutique fitness studios and solo gym owners",
	},
});

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Gym Member Retention Software for At-Risk Members",
		url: absoluteUrl("/gym-member-retention-software"),
		description:
			"EaseFIT helps gym owners act earlier on churn risk with gym member retention software.",
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What is gym member retention software and how does it work?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Member retention software for boutique fitness studios helps gym owners identify churn risk using attendance patterns and engagement signals. It flags at-risk gym members before they quit, enabling proactive re-engagement campaigns.",
				},
			},
			{
				"@type": "Question",
				name: "Why is gym member engagement tracking important?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Gym member engagement tracking monitors attendance patterns and visit frequency to spot early signs of disengagement. Attendance is the clearest signal of churn risk — when visits fall, churn often follows.",
				},
			},
			{
				"@type": "Question",
				name: "Can churn prevention tools help solo gym owners?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. Churn prevention tools for personal trainers and solo gym owners work best when they automate the detection of at-risk members and suggest clear next steps, reducing friction in retention workflows.",
				},
			},
			{
				"@type": "Question",
				name: "How do automated re-engagement campaigns work?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Automated re-engagement campaigns for boutique studios trigger personalized outreach when members show early churn signals. EaseFIT makes AI accountability calls and sends targeted messages to flag at-risk gym members before silent cancellations occur.",
				},
			},
			{
				"@type": "Question",
				name: "Does retention software integrate with gym management systems?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Absolutely. Retention gets stronger when member retention software integrates with bookings, attendance, and communication tools. EaseFIT's gym member engagement tracking connects to your full gym workflow for seamless action.",
				},
			},
		],
	},
];

export default function GymMemberRetentionSoftwarePage() {
	return (
		<>
			<SeoLandingPage
			eyebrow="Gym Member Retention Software"
			title="Gym member retention software for spotting churn before it happens"
			description="EaseFIT's gym member retention software and gym churn prevention tool helps gym owners and boutique studios use attendance and engagement signals to spot at-risk members earlier and trigger retention workflows."
			intro="Most gym churn is silent — members simply stop showing up. Retention software is valuable when it turns early attendance signals into at-risk member alerts and actions a solo operator can actually take."
			highlights={[
				{
					title: "Earlier churn visibility",
					description:
						"Use gym engagement tracking to see who may be drifting before cancellations become final — powered by at-risk member alerts.",
				},
				{
					title: "More proactive follow-up",
					description:
						"Create better timing for outreach instead of reacting only after members have already disengaged using gym CRM automation.",
				},
				{
					title: "Stronger member consistency",
					description:
						"Build better habits and accountability by connecting attendance data, member engagement, communication, and owner action.",
				},
			]}
			painPoints={[
				"Gym owners often learn about member churn too late — when cancellation notices arrive.",
				"Attendance data exists, but gym churn prevention tools don't make it actionable for solo operators.",
				"Manual follow-up and re-engagement campaigns are easy to skip when the operator is busy coaching.",
			]}
			capabilities={[
				"Attendance pattern tracking and gym engagement tracking",
				"Real-time visibility into member engagement shifts",
				"Automated at-risk member alerts and prioritization",
				"Retention workflows and re-engagement campaigns for solo operators",
				"Integrated gym CRM for member communication and follow-up",
			]}
			faqs={[
				{
					question: "What is gym member retention software and how does it work?",
					answer:
						"Member retention software for boutique fitness studios helps gym owners identify churn risk using attendance patterns and engagement signals. It flags at-risk gym members before they quit, enabling proactive re-engagement campaigns.",
				},
				{
					question: "Why is gym member engagement tracking important?",
					answer:
						"Gym member engagement tracking monitors attendance patterns and visit frequency to spot early signs of disengagement. Attendance is the clearest signal of churn risk — when visits fall, churn often follows.",
				},
				{
					question: "Can churn prevention tools help solo gym owners?",
					answer:
						"Yes. Churn prevention tools for personal trainers and solo gym owners work best when they automate the detection of at-risk members and suggest clear next steps, reducing friction in retention workflows.",
				},
				{
					question: "How do automated re-engagement campaigns work?",
					answer:
						"Automated re-engagement campaigns for boutique studios trigger personalized outreach when members show early churn signals. EaseFIT makes AI accountability calls and sends targeted messages to flag at-risk gym members before silent cancellations occur.",
				},
				{
					question: "Does retention software integrate with gym management systems?",
					answer:
						"Absolutely. Retention gets stronger when member retention software integrates with bookings, attendance, and communication tools. EaseFIT's gym member engagement tracking connects to your full gym workflow for seamless action.",
				},
			]}
			jsonLd={jsonLd}
			/>

			{/* Related Solutions */}
			<section className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]">
				<div className="mx-auto max-w-300">
					<h2 className="mb-8 text-center text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Explore complementary gym solutions
					</h2>
					<div className="grid gap-5 md:grid-cols-3">
						<Link
							href="/gym-management-software"
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
							<h3 className="font-bold text-white group-hover:text-emerald-400">
								Gym Management Software
							</h3>
							<p className="mt-2 text-sm text-slate-400">
								All-in-one gym management system for solo gym owners and studios.
							</p>
						</Link>
						<Link
							href="/ai-gym-receptionist"
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
							<h3 className="font-bold text-white group-hover:text-emerald-400">
								AI Gym Receptionist
							</h3>
							<p className="mt-2 text-sm text-slate-400">
								24/7 call answering for gyms to capture missed calls and leads.
							</p>
						</Link>
						<Link
							href="/pricing"
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
							<h3 className="font-bold text-white group-hover:text-emerald-400">
								Pricing Plans
							</h3>
							<p className="mt-2 text-sm text-slate-400">
								Affordable gym management software pricing starting at $49/mo.
							</p>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
