const envSiteUrl = process.env.SITE_URL ?? "";

export const siteUrl = (envSiteUrl || "https://ease-fit.vercel.app").replace(
	/\/$/,
	"",
);

export function absoluteUrl(path = "") {
	if (!path) {
		return siteUrl;
	}

	return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
