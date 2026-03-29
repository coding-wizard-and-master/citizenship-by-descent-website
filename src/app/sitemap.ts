import type { MetadataRoute } from "next";

const base = "https://heritagepassportfinder.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const countrySlugs = [
    "italy-citizenship-by-descent",
    "ireland-citizenship-by-descent",
    "hungary-citizenship-by-descent",
    "poland-citizenship-by-descent",
    "germany-citizenship-by-descent",
    "spain-citizenship-by-descent",
    "portugal-citizenship-by-descent",
    "greece-citizenship-by-descent",
    "lithuania-citizenship-by-descent",
    "estonia-citizenship-by-descent",
    "latvia-citizenship-by-descent",
    "czech-republic-citizenship-by-descent",
    "slovakia-citizenship-by-descent",
    "luxembourg-citizenship-by-descent",
  ];

  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    {
      url: `${base}/citizenship-by-descent-requirements-by-country`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/italy-1948-rule`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/german-article-116-citizenship`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/ireland-foreign-births-register`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${base}/apostille-guide`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/documents-checklist`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const countryRoutes: MetadataRoute.Sitemap = countrySlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...countryRoutes];
}
