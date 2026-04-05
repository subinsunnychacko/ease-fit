import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
	title: "Gym Member Retention Software for At-Risk Members",
	description:
		"EaseFIT helps gym owners act earlier on churn risk with gym member retention software that connects attendance, engagement, and follow-up workflows.",
	keywords: [
		"gym member retention software",
		"gym retention software",
		"member churn software for gyms",
		"attendance based retention gym",
	],
	openGraph: {
		title: "Gym Member Retention Software for At-Risk Members | EaseFIT",
		description:
			"Track attendance, spot at-risk members sooner, and act before silent churn damages gym growth.",
		url: absoluteUrl("/gym-member-retention-software"),
		type: "website",
	},
	twitter: {
		title: "Gym Member Retention Software for At-Risk Members | EaseFIT",
		description:
			"EaseFIT helps gyms use attendance and engagement signals to act earlier on member churn risk.",
	},
	alternates: {
		canonical: absoluteUrl("/gym-member-retention-software"),
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "Gym Member Retention Software for At-Risk Members",
	url: absoluteUrl("/gym-member-retention-software"),
	description:
		"EaseFIT helps gym owners act earlier on churn risk with gym member retention software.",
};

export default function GymMemberRetentionSoftwarePage() {
	return (
		<SeoLandingPage
			eyebrow="Gym Member Retention Software"
			title="Gym member retention software for spotting churn before it happens"
			description="EaseFIT helps gym owners use attendance and engagement signals to identify at-risk members earlier and trigger better follow-up before members quietly disappear."
			intro="Most gym churn is not dramatic. Members simply stop showing up. Retention software is valuable when it turns those early attendance signals into actions an owner can actually take."
			highlights={[
				{
					title: "Earlier churn visibility",
					description:
						"Use attendance behavior to see who may be drifting before cancellations become final.",
				},
				{
					title: "More proactive follow-up",
					description:
						"Create better timing for outreach instead of reacting only after members have already disengaged.",
				},
				{
					title: "Stronger member consistency",
					description:
						"Build better habits and accountability by connecting data, communication, and owner action.",
				},
			]}
			painPoints={[
				"Gym owners often learn about churn too late.",
				"Attendance data exists, but many tools do not make it actionable.",
				"Manual follow-up is easy to skip when the operator is busy.",
			]}
			capabilities={[
				"Attendance pattern tracking",
				"Visibility into member engagement shifts",
				"At-risk member alerts and prioritization",
				"Retention workflows that fit solo operators",
				"Part of a larger booking and reporting platform",
			]}
			faqs={[
				{
					question: "What is gym member retention software?",
					answer:
						"It is software that helps gym owners identify churn risk, understand engagement changes, and act on retention opportunities earlier.",
				},
				{
					question: "Why is attendance important for retention?",
					answer:
						"Attendance is one of the clearest early signals of member disengagement. If visits fall, churn risk often rises soon after.",
				},
				{
					question: "Can solo gym owners realistically use retention software?",
					answer:
						"Yes, if the software turns data into clear next steps instead of just more dashboards. Simplicity is what makes it usable.",
				},
				{
					question: "Does retention software work better when connected to the rest of the gym system?",
					answer:
						"Absolutely. Retention gets stronger when attendance, bookings, reporting, and follow-up workflows all live in the same platform.",
				},
			]}
			jsonLd={jsonLd}
		/>
	);
}
