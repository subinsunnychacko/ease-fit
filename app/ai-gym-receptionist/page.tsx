import Link from "next/link";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { generateMetadataWithSEO } from "@/lib/seo/useSEO";
import { absoluteUrl } from "@/lib/site";

const ROUTE = "/ai-gym-receptionist" as const;

export const metadata = generateMetadataWithSEO(ROUTE, {
	title: "AI Gym Receptionist",
	descriptionTemplate: (primary, secondary) =>
		`EaseFIT's ${primary} is ${secondary} that captures missed calls, books classes by voice, and logs every inquiry.`,
	ogTitle: "AI Gym Receptionist for Missed Calls and Bookings | EaseFIT",
	ogDescription:
		"Answer missed calls, capture leads, and support booking workflows with an AI receptionist built for gyms.",
	twitterDescription:
		"EaseFIT helps gyms respond faster to leads and questions with AI receptionist workflows that stay on after hours.",
	ogImage: {
		url: "/og-ai-gym-receptionist.png",
		alt: "AI gym receptionist providing 24/7 call answering and automated booking for fitness studios - AI phone answering, missed call recovery, and lead capture for personal trainers and solo gym owners",
	},
});

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "AI Gym Receptionist for Missed Calls and Bookings",
		url: absoluteUrl("/ai-gym-receptionist"),
		description:
			"EaseFIT gives gym owners an AI gym receptionist to answer questions, capture leads, and support class booking.",
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "Why would a gym need 24/7 AI phone answering?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Small gyms and solo operators often miss calls while coaching or after closing. An AI receptionist for boutique fitness studios helps them respond faster and reduce missed lead capture opportunities.",
				},
			},
			{
				"@type": "Question",
				name: "Does an AI gym receptionist replace a real front-desk team?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "It can reduce the need for manual front-desk coverage in smaller operations, especially for repeat questions and initial lead capture. It's ideal for after-hours lead capture software when staff isn't available.",
				},
			},
			{
				"@type": "Question",
				name: "How does automated voice booking work for gyms?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "An automated voice booking system for solo gym owners answers inbound calls, schedules classes, and logs all inquiries automatically. Callers can book directly via voice without waiting for staff callback.",
				},
			},
			{
				"@type": "Question",
				name: "Is 24/7 AI phone answering useful for boutique fitness studios?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. AI receptionist for boutique fitness studios with limited staff can handle after-hours responses, class booking requests, and lead qualification automatically, improving customer experience and lead conversion.",
				},
			},
			{
				"@type": "Question",
				name: "How does AI tool help recover missed calls and book classes?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "EaseFIT's AI tool recovers missed calls by answering every inbound call, booking available classes via voice conversation, and capturing lead information. This after-hours lead capture software ensures no opportunity is lost.",
				},
			},
		],
	},
];

export default function AiGymReceptionistPage() {
	return (
		<>
			<SeoLandingPage
			eyebrow="AI Gym Receptionist"
			title="AI gym receptionist and gym answering service for missed calls, bookings, and inquiries"
			description="EaseFIT is the AI gym receptionist and gym answering service built for solo gym owners — capturing after-hours leads, answering membership questions, and booking classes 24/7 so you never lose a prospect to voicemail again."
			intro="Missed calls are lost revenue for most fitness studios and solo gyms. If owners are coaching, cleaning up admin, or closed for the evening, 24/7 AI phone answering keeps the front-desk experience moving."
			highlights={[
				{
					title: "Fewer lost lead opportunities",
					description:
						"Keep more inbound interest from slipping away when calls arrive during classes or outside working hours with missed call recovery.",
				},
				{
					title: "Faster first response",
					description:
						"Handle routine questions and booking intent faster instead of relying on call-backs the next day with AI phone answering.",
				},
				{
					title: "Better front-desk coverage",
					description:
						"Give solo operators and fitness studios a consistent virtual receptionist experience without hiring full-time reception first.",
				},
			]}
			painPoints={[
				"Voicemail often means interested leads never call back — missed call recovery is critical.",
				"Solo gym owners and personal trainers cannot answer every inbound call while coaching.",
				"Manual follow-up slows down booking and lead conversion for boutique fitness studios.",
			]}
			capabilities={[
				"24/7 AI phone answering for common gym questions after hours",
				"Automated booking by voice to capture leads more consistently",
				"Class booking support in conversational voice workflows",
				"Call logging back into your gym management dashboard",
				"Integrated with member retention and management systems",
			]}
			faqs={[
				{
					question: "Why would a gym need 24/7 AI phone answering?",
					answer:
						"Small gyms and solo operators often miss calls while coaching or after closing. An AI receptionist for boutique fitness studios helps them respond faster and reduce missed lead capture opportunities.",
				},
				{
					question: "Does an AI gym receptionist replace a real front-desk team?",
					answer:
						"It can reduce the need for manual front-desk coverage in smaller operations, especially for repeat questions and initial lead capture. It's ideal for after-hours lead capture software when staff isn't available.",
				},
				{
					question: "How does automated voice booking work for gyms?",
					answer:
						"An automated voice booking system for solo gym owners answers inbound calls, schedules classes, and logs all inquiries automatically. Callers can book directly via voice without waiting for staff callback.",
				},
				{
					question: "Is 24/7 AI phone answering useful for boutique fitness studios?",
					answer:
						"Yes. AI receptionist for boutique fitness studios with limited staff can handle after-hours responses, class booking requests, and lead qualification automatically, improving customer experience and lead conversion.",
				},
				{
					question: "How does AI tool help recover missed calls and book classes?",
					answer:
						"EaseFIT's AI tool recovers missed calls by answering every inbound call, booking available classes via voice conversation, and capturing lead information. This after-hours lead capture software ensures no opportunity is lost.",
				},
			]}
			jsonLd={jsonLd}
			/>

			{/* Tour Scheduling & Booking */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="tour-scheduling-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="tour-scheduling-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Tour Scheduling &amp; Booking
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						First impressions are made on the phone. When a prospect calls to ask about a tour or trial session, a missed call or slow callback often means they book with whichever competitor picked up first. EaseFIT&apos;s AI gym receptionist handles tour scheduling the moment a call comes in — day or night — so you never lose a warm lead to voicemail.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Capture tour requests before they go cold
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								A prospect calls your CrossFit studio at 7 PM asking about a tour. Instead of hitting voicemail, EaseFIT&apos;s gym answering service picks up, asks a few qualifying questions, and schedules the tour directly into your calendar. By the time you check your phone the next morning, the appointment is already confirmed and the lead is in your pipeline.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Cut the back-and-forth of manual scheduling
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								Solo gym owners spend hours in scheduling threads — &ldquo;Does Tuesday work?&rdquo;, &ldquo;Actually Wednesday is better&rdquo; — for bookings an AI can close in 60 seconds. EaseFIT&apos;s virtual receptionist for gyms confirms tour slots, sends calendar invites, and logs the lead into your member management system without you touching a single message.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* No-Show Reduction & Reminders */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="no-show-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="no-show-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						No-Show Reduction &amp; Reminders
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						No-shows cost small gyms real revenue — an empty trial session or unattended tour is a lost conversion that took marketing spend to generate. EaseFIT&apos;s AI gym receptionist sends automated reminders before every appointment so prospects and members actually show up, without you manually chasing anyone.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Automated reminders before every appointment
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								A new prospect books a gym tour on Tuesday. EaseFIT automatically fires a confirmation SMS right after booking, a reminder 24 hours before, and a final nudge 1 hour out. No manual follow-up, no reminder to set — the gym answering service runs the sequence every time, for every booking, without exception.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Reschedule requests handled without your involvement
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								When a member replies to a reminder saying they need to reschedule, EaseFIT&apos;s AI handles the rebooking conversation via SMS — no inbound call interrupting a coaching session. The updated appointment syncs back to your gym management system and a new reminder sequence kicks off automatically.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Membership Inquiry Handling */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="inquiry-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="inquiry-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Membership Inquiry Handling
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						&ldquo;What memberships do you offer?&rdquo; and &ldquo;How much does a class pass cost?&rdquo; account for a huge share of inbound gym calls. Answering the same questions manually every day drains time that should go toward coaching. EaseFIT&apos;s AI gym receptionist handles membership inquiries consistently and accurately at any hour — no hold music, no callbacks, no repeat explanations.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Answer pricing and plan questions instantly
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								A prospective member calls your boutique studio on a Sunday afternoon asking about membership tiers. EaseFIT&apos;s 24/7 gym call answering software recites your current plans, pricing, and inclusions exactly as you&apos;ve configured — giving callers the information they need to decide without waiting for a callback on Monday morning.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Qualify leads and route serious buyers forward
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								Not every inquiry converts immediately. EaseFIT&apos;s AI phone answering for fitness studios goes beyond reciting pricing — it asks follow-up questions (&ldquo;Are you looking for group classes or personal training?&rdquo;) and routes high-intent prospects straight into a booking flow. Low-intent inquiries are logged and followed up by automated SMS so no lead disappears quietly.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Two-Way SMS & Voice Booking */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="sms-voice-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="sms-voice-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Two-Way SMS &amp; Voice Booking
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						Some members prefer a quick text. Others call. EaseFIT&apos;s AI gym receptionist works across both channels — handling inbound voice calls and two-way SMS conversations so members can book, cancel, and ask questions in whichever format they&apos;re most comfortable with. One platform covers both, logged together in one place.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Book classes and sessions via voice call
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								A member calls to reserve a spot in tomorrow&apos;s 6 AM spin class. EaseFIT&apos;s automated voice booking for gyms answers immediately, confirms availability, and locks in the reservation — all in a natural conversation. No hold music, no callback needed, no risk of the class filling up while they wait.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								SMS conversations that work like a real receptionist
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								Between sessions, members text your gym number: &ldquo;Can I book Saturday&apos;s yoga class?&rdquo; EaseFIT replies instantly with available slots, confirms the booking, and fires a reminder automatically. For solo gym owners without front-desk staff, this is the gym answering service that effectively runs itself around the clock.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* AI + Human Handoff */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="ai-handoff-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="ai-handoff-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						AI + Human Handoff
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						Not every conversation should end with an AI. Complex complaints, high-value prospect calls, and sensitive member situations call for a human touch. EaseFIT&apos;s AI gym receptionist knows when to handle a call automatically and when to escalate — so you stay informed and in control without being pulled into every routine interaction.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Automatic escalation for situations that need you
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								When a caller raises a billing dispute, a complaint about a trainer, or a question beyond the AI&apos;s scope, EaseFIT flags the interaction and routes it to you with a full transcript and the key details summarised. You get the context you need without replaying the full call — and you respond when you&apos;re ready, not mid-session.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Stay in the loop without being the loop
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								EaseFIT logs every call, SMS exchange, and inquiry into your gym management dashboard. You see a daily summary of what the AI handled — tours booked, questions answered, members rescheduled — plus a short list of items needing your attention. For boutique fitness studio owners, that&apos;s the difference between running your business and being run by it.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Related Solutions */}
			<section className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]">
				<div className="mx-auto max-w-300">
					<h2 className="mb-8 text-center text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Explore related gym solutions
					</h2>
					<div className="grid gap-5 md:grid-cols-3">
						<Link
							href="/gym-management-software"
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
							<h3 className="font-bold text-white group-hover:text-emerald-400">
								Gym Management Software
							</h3>
							<p className="mt-2 text-sm text-slate-400">
								All-in-one gym management platform for solo gym owners.
							</p>
						</Link>
						<Link
							href="/gym-member-retention-software"
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
							<h3 className="font-bold text-white group-hover:text-emerald-400">
								Member Retention Software
							</h3>
							<p className="mt-2 text-sm text-slate-400">
								Gym churn prevention and member re-engagement tools.
							</p>
						</Link>
						<Link
							href="/pricing"
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
							<h3 className="font-bold text-white group-hover:text-emerald-400">
								Pricing Plans
							</h3>
							<p className="mt-2 text-sm text-slate-400">
								View gym management software pricing starting at $49/mo.
							</p>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
