import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
	{ path: "/", priority: 0.9, changeFrequency: "weekly" as const },
	{
		path: "/gym-management-software",
		priority: 1.0,
		changeFrequency: "weekly" as const,
	},
	{
		path: "/ai-gym-receptionist",
		priority: 1.0,
		changeFrequency: "weekly" as const,
	},
	{
		path: "/gym-member-retention-software",
		priority: 1.0,
		changeFrequency: "weekly" as const,
	},
	{ path: "/features", priority: 0.7, changeFrequency: "weekly" as const },
	{ path: "/pricing", priority: 0.7, changeFrequency: "weekly" as const },
	{ path: "/why-easefit", priority: 0.7, changeFrequency: "weekly" as const },
	{ path: "/contact", priority: 0.7, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return routes.map((route) => ({
		url: absoluteUrl(route.path),
		lastModified,
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));
}
