import Script from "next/script";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter } from "./fonts";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://heritagepassportfinder.com";
const siteName = "Heritage Passport Finder";
const defaultTitle = "Citizenship by Descent Checker | Check European Ancestry Eligibility";
const defaultDescription =
  "Free interactive checker: find out in 2 minutes if you qualify for Italian, Irish, German, Polish or other European citizenship through your family ancestry. No signup, no data stored.";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

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
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: defaultDescription,
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
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1772060773365341" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1772060773365341"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <OrganizationJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
