import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { buildCanonical } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://heritagepassportfinder.com";
const siteName = "Heritage Passport Finder";
const defaultTitle = "European Citizenship by Descent | Heritage Passport Finder";
const defaultDescription =
  "Free, private tool to check if you may qualify for European citizenship by descent. No signup. Links to official government resources.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Heritage Passport Finder",
  },
  description: defaultDescription,
  applicationName: siteName,
  category: "education",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Heritage Passport Finder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og/og-default.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
  verification: {
    google: "GOOGLE_VERIFICATION_TOKEN",
    other: { bing: "BING_VERIFICATION_TOKEN" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isHome = typeof window !== "undefined" ? window.location.pathname === "/" : false;
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1772060773365341" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {isHome && (
          <Script
            id="adsense-script"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            data-ad-client="ca-pub-1772060773365341"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.variable} antialiased`}>
        <OrganizationJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
