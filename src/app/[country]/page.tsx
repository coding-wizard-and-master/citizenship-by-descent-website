import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

type Props = { params: { country: string } };

const titles: Record<string, string> = {
  "italy-citizenship-by-descent": "Italian Citizenship by Descent",
  "ireland-citizenship-by-descent": "Irish Citizenship by Descent",
  "hungary-citizenship-by-descent": "Hungarian Citizenship by Descent",
  "poland-citizenship-by-descent": "Polish Citizenship by Descent",
};

const descriptions: Record<string, string> = {
  "italy-citizenship-by-descent":
    "Learn eligibility paths for Italian citizenship by descent (jure sanguinis), documents required, generational limits, and official links.",
  "ireland-citizenship-by-descent":
    "Check if you qualify for Irish citizenship by descent, how the Foreign Births Register works, and required documentation.",
  "hungary-citizenship-by-descent":
    "Understand Hungarian ancestry routes, simplified naturalization context, and records needed to prove lineage.",
  "poland-citizenship-by-descent":
    "Explore Polish citizenship by descent, restoration scenarios, and how to assemble proof of Polish ancestry.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.country;
  const title = titles[slug] ?? "Citizenship by Descent";
  const description = descriptions[slug] ?? "European citizenship by descent guide and resources.";

  return {
    title,
    description,
    alternates: { canonical: `https://heritagepassportfinder.com/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://heritagepassportfinder.com/${slug}`,
      images: [{ url: `/og/${slug}.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      images: [`/og/${slug}.jpg`],
      card: "summary_large_image",
    },
  };
}

export default function CountryPage({ params }: Props) {
  const { country } = params;
  const readable =
    titles[country] ?? "European Citizenship by Descent";

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Who can qualify for ${readable}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Eligibility depends on your ancestor's citizenship status, your lineage, and changes in the country’s laws over time...",
        },
      },
      {
        "@type": "Question",
        name: "Which documents are required?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Typically birth, marriage, and naturalization records for each generation in the chain, plus translations and apostilles where applicable.",
        },
      },
      {
        "@type": "Question",
        name: "Is this tool an official application?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Heritage Passport Finder is an educational tool and links to the official government resources where you apply.",
        },
      },
    ],
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://heritagepassportfinder.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: readable,
        item: `https://heritagepassportfinder.com/${country}`,
      },
    ],
  };

  return (
    <>
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="breadcrumbs-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      <main className="prose mx-auto px-4 py-10">
        <h1>{readable}</h1>
        <p className="lead">
          Use this guide to understand high-probability routes, required evidence, and official steps. When ready, use{" "}
          <Link href="/eligibility">the eligibility checker</Link>.
        </p>

        {/* --- Add ~900 words of country-specific content below (laws, examples, pitfalls, official links) --- */}
        <section>
          <h2>How eligibility generally works</h2>
          <p>...</p>
          <h3>Documents you will likely need</h3>
          <ul>
            <li>Birth certificates for each generation in the line</li>
            <li>Marriage certificates and name change docs</li>
            <li>Naturalization / non-naturalization proofs</li>
            <li>Translations and apostilles where required</li>
          </ul>
        </section>

        <section>
          <h2>Official resources</h2>
          <ul>
            <li><a href="https://www.esteri.it/en/">Italy – Ministry of Foreign Affairs</a></li>
            {/* country-specific official links per page */}
          </ul>
        </section>

        <nav aria-label="Related">
          <h3>Compare other countries</h3>
          <ul>
            <li><Link href="/ireland-citizenship-by-descent">Ireland</Link></li>
            <li><Link href="/hungary-citizenship-by-descent">Hungary</Link></li>
            <li><Link href="/poland-citizenship-by-descent">Poland</Link></li>
          </ul>
        </nav>

        <nav aria-label="Next steps" className="mt-12">
          <h3>Next steps</h3>
          <ul>
            <li><Link href="/eligibility">Check eligibility now</Link></li>
            <li><Link href="/resources">Official resources</Link></li>
            <li><Link href="/ireland-citizenship-by-descent">Ireland</Link></li>
            <li><Link href="/hungary-citizenship-by-descent">Hungary</Link></li>
            <li><Link href="/poland-citizenship-by-descent">Poland</Link></li>
          </ul>
          <Link href="/eligibility">
            <button className="mt-6 px-8 py-3 bg-green-700 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-green-800 transition-colors">
              Check eligibility now
            </button>
          </Link>
        </nav>
      </main>
    </>
  );
}
