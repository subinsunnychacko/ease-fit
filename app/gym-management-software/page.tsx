import Link from "next/link";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { generateMetadataWithSEO } from "@/lib/seo/useSEO";
import { absoluteUrl } from "@/lib/site";

const ROUTE = "/gym-management-software" as const;

export const metadata = generateMetadataWithSEO(ROUTE, {
	title: "Gym Management Software for Solo Gym Owners",
	descriptionTemplate: (primary, secondary) =>
		`EaseFIT is ${primary} and ${secondary} that replaces booking, attendance, and CRM tools with one platform.`,
	ogTitle: "Gym Management Software for Solo Gym Owners | EaseFIT",
	ogDescription:
		"Manage bookings, attendance, members, and reporting in one AI-powered gym management platform.",
	twitterDescription:
		"EaseFIT helps solo gym owners run bookings, member workflows, attendance, and reporting from one platform.",
	ogImage: {
		url: "/og-gym-management-software.png",
		alt: "EaseFIT gym management software for solo gym owners - all-in-one booking system, member management, class scheduling, and attendance tracking for boutique fitness studios",
	},
});

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Gym Management Software for Solo Gym Owners",
		url: absoluteUrl("/gym-management-software"),
		description:
			"EaseFIT is gym management software built for solo gym owners and boutique studios.",
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What is gym management software designed for solo gym owners?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "EaseFIT is gym management software for personal trainers and solo gym owners who need class scheduling, attendance tracking, and member management without enterprise complexity. It's lightweight gym management system built for boutique studios with 50–200 members.",
				},
			},
			{
				"@type": "Question",
				name: "Can gym management software replace multiple gym tools?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. EaseFIT is designed to replace spreadsheets and missed-call voicemails by combining bookings, attendance tracking, workout logging, and member communication into one integrated platform.",
				},
			},
			{
				"@type": "Question",
				name: "Is gym management software only for large fitness studios?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "No. Boutique fitness studio software like EaseFIT is positioned strongest for smaller operators with 20–200 members who need operational clarity without bloat. It works for personal trainers, dance studios, and niche fitness concepts.",
				},
			},
			{
				"@type": "Question",
				name: "How does gym management software help with member retention?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "EaseFIT's gym management system includes attendance tracking, engagement scoring, and automated retention workflows that help owners spot member churn risk early and take action before cancellations happen.",
				},
			},
			{
				"@type": "Question",
				name: "What gym software features should boutique studio owners look for?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Essential gym management software features include class scheduling and attendance tracking, member dashboards, workout logging, and integrated retention tools. EaseFIT combines all of these in one platform designed specifically for solo owners and small studios.",
				},
			},
		],
	},
];

export default function GymManagementSoftwarePage() {
	return (
		<>
			<SeoLandingPage
			eyebrow="Gym Management Software"
			title="Gym management software for solo gym owners"
			description="EaseFIT is the all-in-one gym management platform built for solo gym owners and boutique studios — run bookings, attendance, workouts, and member communication from one system instead of stitching together multiple tools."
			intro="Most solo operators don't need bloated enterprise software. They need one small gym management system that handles scheduling, attendance, member visibility, and growth tasks without creating more admin."
			highlights={[
				{
					title: "Fewer disconnected tools",
					description:
						"Replace booking, attendance, tracking, and follow-up workflows with one shared gym operations software for your gym.",
				},
				{
					title: "Less daily admin",
					description:
						"Spend less time updating spreadsheets and jumping between tools, and more time coaching members with personal trainer management.",
				},
				{
					title: "Clearer business visibility",
					description:
						"See which classes fill up, which members are slipping, and where manual work is slowing growth — with boutique studio management insights.",
				},
			]}
			painPoints={[
				"Gym booking software and workout tools rarely share member data cleanly.",
				"Manual attendance tracking makes it harder to spot no-shows and member retention risks.",
				"Solo gym owners and personal trainers lose hours weekly to repetitive admin tasks.",
			]}
			capabilities={[
				"Class scheduling and slot management for boutique studios",
				"Workout logging and exercise tracking for trainers",
				"Member dashboard and attendance visibility",
				"AI-powered gym management reporting and summaries",
				"Built-in member retention and AI receptionist workflows",
			]}
			faqs={[
				{
					question: "What is gym management software designed for solo gym owners?",
					answer:
						"EaseFIT is gym management software for personal trainers and solo gym owners who need class scheduling, attendance tracking, and member management without enterprise complexity. It's lightweight gym management system built for boutique studios with 50–200 members.",
				},
				{
					question: "Can gym management software replace multiple gym tools?",
					answer:
						"Yes. EaseFIT is designed to replace spreadsheets and missed-call voicemails by combining bookings, attendance tracking, workout logging, and member communication into one integrated platform.",
				},
				{
					question: "Is gym management software only for large fitness studios?",
					answer:
						"No. Boutique fitness studio software like EaseFIT is positioned strongest for smaller operators with 20–200 members who need operational clarity without bloat. It works for personal trainers, dance studios, and niche fitness concepts.",
				},
				{
					question: "How does gym management software help with member retention?",
					answer:
						"EaseFIT's gym management system includes attendance tracking, engagement scoring, and automated retention workflows that help owners spot member churn risk early and take action before cancellations happen.",
				},
				{
					question: "What gym software features should boutique studio owners look for?",
					answer:
						"Essential gym management software features include class scheduling and attendance tracking, member dashboards, workout logging, and integrated retention tools. EaseFIT combines all of these in one platform designed specifically for solo owners and small studios.",
				},
			]}
			jsonLd={jsonLd}
			/>

			{/* Automated Billing & Payments */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="billing-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="billing-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Automated Billing &amp; Payments
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						For solo gym owners, chasing overdue payments and manually issuing invoices creates unnecessary admin overhead. EaseFIT&apos;s gym management software includes automated billing tools that handle recurring membership payments, package renewals, and one-off charges — so you get paid on time without following up manually every month.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Recurring membership payments made simple
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								Set up recurring billing for monthly memberships, class packages, and personal training sessions directly inside your gym management system. EaseFIT processes payments automatically on the scheduled date and sends receipts to members — reducing the back-and-forth that slows down solo operators running boutique fitness studios.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Late payment reminders and invoice tracking
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								When a payment fails or a balance is outstanding, EaseFIT&apos;s gym billing software automatically triggers reminder notifications via email or SMS. Built-in invoice tracking gives you a clear view of outstanding balances, renewal dates, and payment history — without opening a separate accounting tool outside your gym management platform.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Mobile App for Members */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="mobile-app-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="mobile-app-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Mobile App for Members
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						Members expect to book classes, check schedules, and view their progress from their phone. EaseFIT&apos;s gym management software includes a member-facing mobile experience that lets clients self-serve — reducing the calls and messages solo gym owners handle every day.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Book classes and check schedules on the go
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								With EaseFIT&apos;s mobile-accessible member portal, clients can view your class schedule, reserve spots, and cancel bookings without calling or texting you. Your gym booking software stays in sync across all devices, so schedule changes are reflected instantly — keeping members informed and reducing no-shows.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Member dashboards and progress tracking
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								Beyond bookings, members can view their attendance history, upcoming sessions, and workout logs through the member dashboard in your all-in-one gym management system. Giving members visibility into their own progress reduces check-in messages and builds accountability — a retention advantage built into boutique fitness studio software.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Email & SMS Marketing Tools */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="email-sms-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="email-sms-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Email &amp; SMS Marketing Tools
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						Growing a small gym requires more than great coaching — it requires staying top of mind between visits. EaseFIT&apos;s gym management platform includes built-in email and SMS marketing tools designed for solo gym owners who don&apos;t have a dedicated marketing team or budget for separate campaign software.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Automated campaigns for promotions and renewals
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								Send automated email and SMS campaigns for class promotions, membership renewal reminders, and seasonal offers directly from your gym operations software. Templates are built for fitness studio communication, so setup takes minutes — not the hours you&apos;d spend configuring a standalone marketing platform.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Targeted messaging based on member behaviour
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								EaseFIT lets you segment members by attendance patterns, membership type, or last visit date — so you can send the right message to the right people. Gym owners using targeted re-engagement messages through their gym management system see higher open rates and better conversion than blanket broadcast campaigns.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* QR Code & Kiosk Check-In */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="qr-checkin-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="qr-checkin-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						QR Code &amp; Kiosk Check-In
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						Manual sign-in sheets and verbal check-ins are slow, inaccurate, and create friction at the door. EaseFIT&apos;s gym management software includes QR code check-in and kiosk mode so members can check in themselves — giving you real-time attendance data without staff involvement.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Contactless QR code entry for every class
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								Each member gets a unique QR code accessible via the member app or email. At the start of a class, members scan their code and attendance is logged automatically inside your gym management system — no paper, no manual entry, and no bottleneck at the front desk during peak hours.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Real-time attendance visibility for gym owners
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								Every check-in updates your attendance dashboard in real time. As class sizes grow, EaseFIT&apos;s boutique studio management software flags sessions nearing capacity, helps you spot no-show patterns early, and feeds attendance data directly into your member retention workflows — all within one platform.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Waitlist Management */}
			<section
				className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]"
				aria-labelledby="waitlist-heading">
				<div className="mx-auto max-w-300">
					<h2
						id="waitlist-heading"
						className="mb-4 text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Waitlist Management
					</h2>
					<p className="mb-6 max-w-200 text-[13px] leading-[1.75] text-slate-400">
						Popular classes fill up fast, and without a waitlist system you lose interested members to competitors who are easier to book with. EaseFIT&apos;s gym management software includes automated waitlist management that fills cancelled spots instantly and keeps your class capacity running at full potential.
					</p>
					<div className="grid gap-5 md:grid-cols-2">
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Automatically fill cancelled spots
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								When a member cancels their booking, EaseFIT&apos;s waitlist system automatically notifies the next person in line and opens the spot for rebooking — without any action from you. This removes the need to manage a waiting list in a spreadsheet or chat thread alongside your other gym management tools.
							</p>
						</article>
						<article className="rounded-xl border border-white/6 bg-[#0c1018] p-6">
							<h3 className="mb-3 text-[15px] font-bold text-white">
								Reduce no-shows with smart notifications
							</h3>
							<p className="text-[12.5px] leading-[1.7] text-slate-400">
								EaseFIT sends automated waitlist updates and booking confirmations via email and SMS, so waitlisted members know immediately when a spot becomes available. Combined with attendance tracking inside your small gym management software, you get a cleaner view of real demand versus registered bookings across all your classes.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Related Solutions */}
			<section className="px-6 py-10 md:py-12 lg:px-8 bg-[#070b14]">
				<div className="mx-auto max-w-300">
					<h2 className="mb-8 text-center text-[24px] font-bold tracking-tight text-white md:text-[28px]">
						Explore related solutions
					</h2>
					<div className="grid gap-5 md:grid-cols-3">
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
							href="/gym-member-retention-software"
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
							<h3 className="font-bold text-white group-hover:text-emerald-400">
								Member Retention Software
							</h3>
							<p className="mt-2 text-sm text-slate-400">
								Gym churn prevention and re-engagement for at-risk members.
							</p>
						</Link>
						<Link
							href="/pricing"
							className="group rounded-xl border border-white/6 bg-[#0c1018] p-6 transition-colors hover:border-emerald-500/30">
							<h3 className="font-bold text-white group-hover:text-emerald-400">
								Pricing Plans
							</h3>
							<p className="mt-2 text-sm text-slate-400">
								View affordable gym management software pricing and plans.
							</p>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
