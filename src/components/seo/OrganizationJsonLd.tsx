"use client";
import Script from "next/script";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Heritage Passport Finder",
    url: "https://heritagepassportfinder.com",
    logo: "https://heritagepassportfinder.com/logo.svg",
    sameAs: [
      // Add your real social profile URLs here, e.g.:
      // "https://twitter.com/yourhandle",
      // "https://www.facebook.com/yourpage",
      // "https://www.linkedin.com/company/yourcompany",
    ],
  };
  return (
    <Script id="org-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
