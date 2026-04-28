import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import SmartLinks from "@/components/common/SmartLinks";
import { siteUrl } from "@/lib/site";
import { SEO_KEYWORDS } from "@/lib/seo/keywords";

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-dm-sans",
	display: "swap",
	weight: ["400", "500", "600", "700", "800", "900"],
});

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const viewport: Viewport = {
	themeColor: "#070b14",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "EaseFIT | AI Gym Management Software for Solo Gym Owners",
		template: "%s | EaseFIT",
	},
	description:
		"EaseFIT is AI gym management software for solo gym owners, boutique studios, and personal trainers. Run bookings, attendance, retention, and AI receptionist workflows from one platform.",
	keywords: [
		"gym management software",
		"AI gym receptionist",
		"gym software for solo gym owners",
		"gym member retention software",
		"gym booking software",
		"gym CRM software",
		"fitness studio software",
		"solo gym owner tools",
		"gym booking system",
		"member retention AI",
		"fitness business automation",
		"gym CRM",
		"personal trainer software",
		"class scheduling software",
	],
	authors: [{ name: "EaseFIT" }],
	creator: "EaseFIT",
	publisher: "EaseFIT",
	category: "Gym Management Software",
	verification: googleSiteVerification
		? { google: googleSiteVerification }
		: undefined,
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		siteName: "EaseFIT",
		title: "EaseFIT | AI Gym Management Software for Solo Gym Owners",
		description:
			"Replace disconnected booking, attendance, retention, and receptionist tools with one AI-powered gym management platform built for solo operators.",
	},
	twitter: {
		card: "summary_large_image",
		title: "EaseFIT | AI Gym Management Software for Solo Gym Owners",
		description:
			"AI gym management software for solo gym owners with booking, retention workflows, and AI receptionist tools in one platform.",
		creator: "@easefit",
	},
	alternates: {
		canonical: siteUrl,
	},
};

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "EaseFIT",
		url: siteUrl,
		description:
			"AI gym management software for solo gym owners, boutique studios, and personal trainers.",
	},
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "EaseFIT",
		url: siteUrl,
	},
	{
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "EaseFIT",
		applicationCategory: "BusinessApplication",
		operatingSystem: "Web",
		description:
			"AI gym management platform for solo fitness operators. Booking, retention automation, voice receptionist, and reporting in one place.",
		url: siteUrl,
		keywords: [
			SEO_KEYWORDS["/"].primary,
			...SEO_KEYWORDS["/"].secondary,
		].join(", "),
		offers: {
			"@type": "Offer",
			price: "49",
			priceCurrency: "USD",
			priceValidUntil: "2026-12-31",
			description: "Starting plan for solo gym owners",
		},
	},
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={dmSans.variable}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="antialiased">
				<Navbar />
				{children}
				<SmartLinks />
			</body>
		</html>
	);
}
