import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { siteUrl } from "@/lib/site";

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-dm-sans",
	display: "swap",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
	themeColor: "#070b14",
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "EaseFIT — One Platform. Zero Chaos. AI-Powered Gym Management",
		template: "%s | EaseFIT",
	},
	description:
		"EaseFIT replaces the patchwork of booking tools, workout loggers, and missed-call voicemails for solo gym owners — starting free, scaling with you. AI receptionist, retention tracking, and performance reports in one platform.",
	keywords: [
		"gym management software",
		"AI gym receptionist",
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
		title: "EaseFIT — One Platform. Zero Chaos.",
		description:
			"AI-powered gym management for solo fitness operators. Replace 5+ tools with one platform. Starting at $49/mo.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "EaseFIT — One Platform. Zero Chaos.",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "EaseFIT — One Platform. Zero Chaos.",
		description:
			"AI-powered gym management for solo fitness operators. Replace 5+ tools with one platform.",
		images: ["/og-image.png"],
		creator: "@easefit",
	},
	alternates: {
		canonical: siteUrl,
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "EaseFIT",
	applicationCategory: "BusinessApplication",
	operatingSystem: "Web",
	description:
		"AI-powered gym management platform for solo fitness operators. Booking, retention AI, voice receptionist, and performance reports — all in one.",
	url: siteUrl,
	offers: {
		"@type": "Offer",
		price: "49",
		priceCurrency: "USD",
		priceValidUntil: "2026-12-31",
		description: "Starting plan for solo gym owners",
	},
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "4.9",
		ratingCount: "120",
	},
};

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
			</body>
		</html>
	);
}
