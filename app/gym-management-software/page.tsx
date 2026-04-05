import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
	title: "Gym Management Software for Solo Gym Owners",
	description:
		"EaseFIT is gym management software built for solo gym owners and boutique studios. Manage bookings, attendance, member workflows, and reporting in one place.",
	keywords: [
		"gym management software",
		"gym software for solo gym owners",
		"boutique studio management software",
		"class booking software for gyms",
	],
	openGraph: {
		title: "Gym Management Software for Solo Gym Owners | EaseFIT",
		description:
			"Manage bookings, attendance, members, and reporting in one AI-powered gym management platform.",
		url: absoluteUrl("/gym-management-software"),
		type: "website",
	},
	twitter: {
		title: "Gym Management Software for Solo Gym Owners | EaseFIT",
		description:
			"EaseFIT helps solo gym owners run bookings, member workflows, attendance, and reporting from one platform.",
	},
	alternates: {
		canonical: absoluteUrl("/gym-management-software"),
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "Gym Management Software for Solo Gym Owners",
	url: absoluteUrl("/gym-management-software"),
	description:
		"EaseFIT is gym management software built for solo gym owners and boutique studios.",
};

export default function GymManagementSoftwarePage() {
	return (
		<SeoLandingPage
			eyebrow="Gym Management Software"
			title="Gym management software for solo gym owners"
			description="EaseFIT helps solo gym owners run bookings, attendance, workouts, and member communication from one platform instead of stitching together multiple tools."
			intro="Most solo operators do not need bloated enterprise software. They need one system that handles scheduling, attendance, member visibility, and growth tasks without creating more admin."
			highlights={[
				{
					title: "Fewer disconnected tools",
					description:
						"Replace booking, attendance, tracking, and follow-up workflows with one shared system for your gym.",
				},
				{
					title: "Less daily admin",
					description:
						"Spend less time updating spreadsheets and jumping between tools, and more time coaching members.",
				},
				{
					title: "Clearer business visibility",
					description:
						"See which classes fill up, which members are slipping, and where manual work is slowing growth.",
				},
			]}
			painPoints={[
				"Booking software and workout tools rarely share member data cleanly.",
				"Manual attendance tracking makes it harder to spot no-shows and churn patterns.",
				"Solo gym owners lose time every week to repetitive admin tasks.",
			]}
			capabilities={[
				"Class scheduling and slot management",
				"Workout logging and exercise tracking",
				"Member dashboard and attendance visibility",
				"AI-powered reporting and business summaries",
				"Built-in paths to retention and receptionist workflows",
			]}
			faqs={[
				{
					question: "Who is this gym management software designed for?",
					answer:
						"EaseFIT is designed for solo gym owners, boutique studios, and trainers who need simpler operations without paying for enterprise-level complexity.",
				},
				{
					question: "Can EaseFIT replace multiple gym tools?",
					answer:
						"That is the goal. EaseFIT brings bookings, attendance, workout tracking, and growth workflows into one platform so you can reduce tool sprawl.",
				},
				{
					question: "Is this only for large gyms?",
					answer:
						"No. The positioning is strongest for smaller operators who need operational clarity and fast execution, not a heavyweight corporate stack.",
				},
				{
					question: "Does EaseFIT help with growth as well as operations?",
					answer:
						"Yes. The product direction includes retention workflows, AI receptionist support, and reporting that helps owners act on what is happening in the gym.",
				},
			]}
			jsonLd={jsonLd}
		/>
	);
}
