import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://heritagepassportfinder.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/_next", "/_vercel"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
