"use client";
import Script from "next/script";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Heritage Passport Finder",
    url: "https://heritagepassportfinder.com",
    logo: "https://heritagepassportfinder.com/logo.png",
    sameAs: [
      // add socials if you have them
    ],
  };
  return (
    <Script id="org-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
