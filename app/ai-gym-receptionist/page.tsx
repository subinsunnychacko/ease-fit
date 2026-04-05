import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
	title: "AI Gym Receptionist for Missed Calls and Bookings",
	description:
		"EaseFIT gives gym owners an AI gym receptionist to answer questions, capture leads, and support class booking even when the team is busy coaching.",
	keywords: [
		"AI gym receptionist",
		"AI receptionist for gyms",
		"gym call answering software",
		"missed call lead capture gym",
	],
	openGraph: {
		title: "AI Gym Receptionist for Missed Calls and Bookings | EaseFIT",
		description:
			"Answer missed calls, capture leads, and support booking workflows with an AI receptionist built for gyms.",
		url: absoluteUrl("/ai-gym-receptionist"),
		type: "website",
	},
	twitter: {
		title: "AI Gym Receptionist for Missed Calls and Bookings | EaseFIT",
		description:
			"EaseFIT helps gyms respond faster to leads and questions with AI receptionist workflows that stay on after hours.",
	},
	alternates: {
		canonical: absoluteUrl("/ai-gym-receptionist"),
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "AI Gym Receptionist for Missed Calls and Bookings",
	url: absoluteUrl("/ai-gym-receptionist"),
	description:
		"EaseFIT gives gym owners an AI gym receptionist to answer questions, capture leads, and support class booking.",
};

export default function AiGymReceptionistPage() {
	return (
		<SeoLandingPage
			eyebrow="AI Gym Receptionist"
			title="AI gym receptionist for missed calls, questions, and class bookings"
			description="EaseFIT helps gyms capture after-hours leads, reduce voicemail dead-ends, and respond faster to inbound questions with an AI receptionist workflow."
			intro="Missed calls are lost revenue for most small gyms. If owners are coaching, cleaning up admin, or simply closed for the evening, an AI receptionist can keep the front-desk experience moving."
			highlights={[
				{
					title: "Fewer lost lead opportunities",
					description:
						"Keep more inbound interest from slipping away when calls arrive during classes or outside working hours.",
				},
				{
					title: "Faster first response",
					description:
						"Handle routine questions and booking intent faster instead of relying on call-backs the next day.",
				},
				{
					title: "Better front-desk coverage",
					description:
						"Give solo operators a consistent front-desk experience without hiring full-time reception coverage first.",
				},
			]}
			painPoints={[
				"Voicemail often means interested leads never call back.",
				"Solo gym owners cannot answer every inbound call while coaching.",
				"Manual follow-up slows down booking and lead conversion.",
			]}
			capabilities={[
				"Answer common gym questions after hours",
				"Capture inbound leads more consistently",
				"Support class-booking conversations",
				"Log activity back into the gym workflow",
				"Fit into a broader booking and retention system",
			]}
			faqs={[
				{
					question: "Why would a gym need an AI receptionist?",
					answer:
						"Small gyms and solo operators often miss calls while coaching or after closing. An AI receptionist helps them respond faster and reduce lead loss.",
				},
				{
					question: "Does this replace a real front-desk team?",
					answer:
						"It can reduce the need for manual front-desk coverage in smaller operations, especially for repeat questions and initial lead capture.",
				},
				{
					question: "How does it connect to the rest of the gym software?",
					answer:
						"The value is stronger when receptionist workflows connect to bookings, member data, and follow-up actions instead of living in isolation.",
				},
				{
					question: "Is this useful for boutique studios too?",
					answer:
						"Yes. Studios with limited staff can benefit from after-hours responses, booking help, and more consistent lead capture.",
				},
			]}
			jsonLd={jsonLd}
		/>
	);
}
