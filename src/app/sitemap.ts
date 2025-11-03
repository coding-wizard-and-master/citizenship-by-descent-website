import type { MetadataRoute } from "next";

const base = "https://heritagepassportfinder.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // If you have a list of country slugs, import and map them here.
  const countrySlugs = [
    "italy-citizenship-by-descent",
    "ireland-citizenship-by-descent",
    "hungary-citizenship-by-descent",
    "poland-citizenship-by-descent",
  ];

  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/research-tips`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/eligibility`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = countrySlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...countryRoutes];
}
