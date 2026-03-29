import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Citizenship by Descent Requirements by Country | European Ancestry Guide 2025",
  description:
    "Compare citizenship by descent rules across 14 European countries at a glance — generational limits, dual citizenship rules, document costs, timelines, and the governing law for each country.",
  alternates: { canonical: "https://heritagepassportfinder.com/citizenship-by-descent-requirements-by-country" },
  openGraph: {
    title: "Citizenship by Descent Requirements by Country | European Ancestry Guide 2025",
    description:
      "Compare citizenship by descent rules across 14 European countries — dual citizenship, generation limits, costs, and timelines side by side.",
    url: "https://heritagepassportfinder.com/citizenship-by-descent-requirements-by-country",
    type: "article",
  },
};

interface CountryRow {
  slug: string;
  name: string;
  generationLimit: string;
  dualCitizenship: "Yes" | "Limited" | "No";
  dualNote: string;
  costRange: string;
  timeline: string;
  primaryLaw: string;
}

const rows: CountryRow[] = [
  {
    slug: "italy-citizenship-by-descent",
    name: "Italy",
    generationLimit: "Unlimited (unbroken chain)",
    dualCitizenship: "Yes",
    dualNote: "Fully permits multiple citizenship since 1992",
    costRange: "€300–€2,000+",
    timeline: "1–4 yrs (consular); 3–6 mo (in-Italy residency)",
    primaryLaw: "Law 91/1992 (jure sanguinis)",
  },
  {
    slug: "ireland-citizenship-by-descent",
    name: "Ireland",
    generationLimit: "Parent (automatic) or grandparent (FBR registration)",
    dualCitizenship: "Yes",
    dualNote: "No restrictions on holding other nationality",
    costRange: "€400–€700",
    timeline: "12–18 months (FBR application)",
    primaryLaw: "Irish Nationality and Citizenship Act 1956",
  },
  {
    slug: "germany-citizenship-by-descent",
    name: "Germany",
    generationLimit: "Parent (standard); unlimited for Article 116(2) Nazi-era restoration",
    dualCitizenship: "Yes",
    dualNote: "Permitted since June 2024 StAG reform",
    costRange: "€300–€1,200",
    timeline: "12–24 months",
    primaryLaw: "Staatsangehörigkeitsgesetz (StAG); GG Art. 116(2)",
  },
  {
    slug: "poland-citizenship-by-descent",
    name: "Poland",
    generationLimit: "Unlimited (while chain unbroken)",
    dualCitizenship: "Yes",
    dualNote: "Tolerated in practice; not formally recognised",
    costRange: "€300–€900",
    timeline: "6–24 months",
    primaryLaw: "Act on Polish Citizenship 2009",
  },
  {
    slug: "hungary-citizenship-by-descent",
    name: "Hungary",
    generationLimit: "Unlimited (simplified naturalization)",
    dualCitizenship: "Yes",
    dualNote: "No restrictions on dual or multiple citizenship",
    costRange: "€300–€700",
    timeline: "3–6 months after application",
    primaryLaw: "Act LV of 1993 (with 2010 amendment)",
  },
  {
    slug: "spain-citizenship-by-descent",
    name: "Spain",
    generationLimit: "Grandchild (Democratic Memory Law); child (jus sanguinis)",
    dualCitizenship: "Limited",
    dualNote: "Permitted for EU/Ibero-American treaty countries; restrictions for others",
    costRange: "€300–€1,500",
    timeline: "6–12 months",
    primaryLaw: "Código Civil Arts. 17–28; Law 20/2022 (DML)",
  },
  {
    slug: "portugal-citizenship-by-descent",
    name: "Portugal",
    generationLimit: "Grandchild (with Portuguese language A2 + community ties)",
    dualCitizenship: "Yes",
    dualNote: "Fully permits multiple nationality",
    costRange: "€500–€1,500",
    timeline: "12–18 months",
    primaryLaw: "Lei da Nacionalidade 37/81 (as amended 2018, 2023)",
  },
  {
    slug: "greece-citizenship-by-descent",
    name: "Greece",
    generationLimit: "Parent (automatic); grandparent+ via omogenis naturalization",
    dualCitizenship: "Yes",
    dualNote: "No restrictions on dual or multiple citizenship",
    costRange: "€300–€700",
    timeline: "6–24 months",
    primaryLaw: "Greek Citizenship Code — Law 3284/2004",
  },
  {
    slug: "czech-republic-citizenship-by-descent",
    name: "Czech Republic",
    generationLimit: "Parent (automatic); grandchild (declaration for involuntary loss)",
    dualCitizenship: "Yes",
    dualNote: "Fully permitted since 1 Jan 2014",
    costRange: "€200–€900",
    timeline: "3–18 months",
    primaryLaw: "Act No. 186/2013 on Czech Citizenship",
  },
  {
    slug: "slovakia-citizenship-by-descent",
    name: "Slovakia",
    generationLimit: "Parent or grandparent with documented ancestry",
    dualCitizenship: "Limited",
    dualNote: "Permitted by birth, adoption, marriage, or 5+ years foreign residence; otherwise lost upon voluntary foreign naturalisation",
    costRange: "€300–€1,000",
    timeline: "6–12 months",
    primaryLaw: "Act No. 40/1993 (as amended by Act No. 250/2010)",
  },
  {
    slug: "luxembourg-citizenship-by-descent",
    name: "Luxembourg",
    generationLimit: "Parent/grandparent (direct descent) or unlimited generations (reacquisition route — unbroken patrilineal descent from a Luxembourg-born ancestor who emigrated 1815–1943)",
    dualCitizenship: "Yes",
    dualNote: "Explicitly permitted since 2008; no renunciation required",
    costRange: "€600–€1,400",
    timeline: "6–24 months",
    primaryLaw: "Loi du 8 mars 2017 sur la nationalité luxembourgeoise",
  },
  {
    slug: "lithuania-citizenship-by-descent",
    name: "Lithuania",
    generationLimit: "Descendants of pre-1940 citizens who left before 1990",
    dualCitizenship: "Limited",
    dualNote: "Exception for those restoring pre-Soviet citizenship",
    costRange: "€300–€800",
    timeline: "6–12 months",
    primaryLaw: "Law on Citizenship No. IX-1078 (as amended)",
  },
  {
    slug: "latvia-citizenship-by-descent",
    name: "Latvia",
    generationLimit: "Children and grandchildren of 1940 registered citizens",
    dualCitizenship: "Limited",
    dualNote: "Permitted for diaspora claimants; restrictions with some non-EU countries",
    costRange: "€500–€1,000",
    timeline: "3–6 months",
    primaryLaw: "Citizenship Law (Pilsonības likums) 1994",
  },
  {
    slug: "estonia-citizenship-by-descent",
    name: "Estonia",
    generationLimit: "Descendants of pre-1940 citizens (unbroken chain, no voluntary Soviet citizenship)",
    dualCitizenship: "Limited",
    dualNote: "Restoration claimants may retain existing nationality; adults acquiring foreign citizenship generally lose Estonian",
    costRange: "€400–€900",
    timeline: "6–12 months",
    primaryLaw: "Citizenship Act (Kodakondsuse seadus) 1995",
  },
];

const badge = (val: CountryRow["dualCitizenship"]) => {
  if (val === "Yes") return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";
  if (val === "Limited") return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300";
  return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
};

export default function HubPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://heritagepassportfinder.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Requirements by Country",
        item: "https://heritagepassportfinder.com/citizenship-by-descent-requirements-by-country",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        {/* Header */}
        <header className="bg-white dark:bg-zinc-900 shadow-sm">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-green-700 dark:text-green-400">
              Heritage Passport Finder
            </Link>
            <Link href="/#eligibility" className="text-zinc-600 dark:text-zinc-300 hover:text-green-700">
              Eligibility Checker
            </Link>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900 dark:text-zinc-100">Requirements by Country</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Citizenship by Descent Requirements by Country
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-10 max-w-3xl">
            Compare citizenship by descent eligibility rules across 14 European countries. Find key facts — generation limits, dual citizenship policies, typical costs, processing times, and the governing law — all in one place.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700 mb-12">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Country</th>
                  <th className="px-4 py-3">Generation Limit</th>
                  <th className="px-4 py-3">Dual Citizenship</th>
                  <th className="px-4 py-3">Cost Range</th>
                  <th className="px-4 py-3">Timeline</th>
                  <th className="px-4 py-3">Primary Law</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {rows.map((row) => (
                  <tr key={row.slug} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-4 py-4 font-semibold">
                      <Link href={`/${row.slug}`} className="text-green-700 dark:text-green-400 hover:underline">
                        {row.name}
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-zinc-700 dark:text-zinc-300 max-w-xs">{row.generationLimit}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${badge(row.dualCitizenship)}`}>
                        {row.dualCitizenship}
                      </span>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1 max-w-[180px]">{row.dualNote}</p>
                    </td>
                    <td className="px-4 py-4 text-zinc-700 dark:text-zinc-300 whitespace-nowrap">{row.costRange}</td>
                    <td className="px-4 py-4 text-zinc-700 dark:text-zinc-300 max-w-[140px]">{row.timeline}</td>
                    <td className="px-4 py-4 text-zinc-500 dark:text-zinc-400 max-w-[180px] text-xs">{row.primaryLaw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-12">
            {rows.map((row) => (
              <div key={row.slug} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
                <Link href={`/${row.slug}`} className="text-lg font-bold text-green-700 dark:text-green-400 hover:underline">
                  {row.name}
                </Link>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-zinc-700 dark:text-zinc-300 min-w-[120px]">Generations:</dt>
                    <dd className="text-zinc-600 dark:text-zinc-400">{row.generationLimit}</dd>
                  </div>
                  <div className="flex gap-2 items-start">
                    <dt className="font-semibold text-zinc-700 dark:text-zinc-300 min-w-[120px]">Dual citizenship:</dt>
                    <dd>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${badge(row.dualCitizenship)}`}>
                        {row.dualCitizenship}
                      </span>
                      <span className="block text-zinc-500 dark:text-zinc-400 text-xs mt-0.5">{row.dualNote}</span>
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-zinc-700 dark:text-zinc-300 min-w-[120px]">Cost range:</dt>
                    <dd className="text-zinc-600 dark:text-zinc-400">{row.costRange}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-zinc-700 dark:text-zinc-300 min-w-[120px]">Timeline:</dt>
                    <dd className="text-zinc-600 dark:text-zinc-400">{row.timeline}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-zinc-700 dark:text-zinc-300 min-w-[120px]">Primary law:</dt>
                    <dd className="text-zinc-500 dark:text-zinc-400 text-xs">{row.primaryLaw}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* CTA */}
          <section className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              Not sure which country fits your family history?
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Use our free interactive eligibility checker to find out in 2 minutes which European citizenship by descent route fits your ancestry.
            </p>
            <Link
              href="/#eligibility"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors"
            >
              Start Free Eligibility Check
            </Link>
          </section>

          {/* Key facts Q&A */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Common Questions About European Citizenship by Descent
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  Which European country has the most generous citizenship by descent rules?
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Italy and Poland both allow unlimited generational claims as long as the direct bloodline chain remains unbroken. Hungary's simplified naturalization has no generation limit either, though it adds a basic language interview. Luxembourg's reacquisition route is similarly unlimited by generation — any descendant, however distant, of a Luxembourg-born male ancestor who emigrated between 1815 and 1943 can apply, as long as the unbroken patrilineal chain is fully documented.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  Which countries allow dual citizenship after claiming European ancestry?
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Italy, Ireland, Germany (since 2024), Poland, Hungary, Portugal, Greece, Czech Republic, and Luxembourg all fully permit dual or multiple citizenship. Spain permits it for most EU and Latin American nationals but has restrictions for others. Lithuania, Latvia, and Estonia have "limited" dual citizenship — diaspora restoration claimants are typically exempt from the prohibition, but general rules are stricter. Slovakia is conditional: voluntarily acquiring another nationality causes automatic loss of Slovak citizenship unless the foreign citizenship was gained by birth, adoption, marriage, or after at least five years of registered foreign residence — an important exception added by a 2022 reform.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  How much does citizenship by descent typically cost?
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Most European citizenship by descent applications cost €300–€1,000 in document-related expenses (apostilles, translations, certified copies) when done independently. Application fees are often low or free. Italy is unique in that attorney-assisted consular-route packages regularly cost $2,000–$8,000 USD, and court-route 1948 cases exceed €10,000 in legal fees. Hungary is one of the cheapest options — the application is free and total costs rarely exceed €700 even with a language tutor.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  What is the fastest European citizenship by descent to obtain?
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Latvia and Hungary can process applications in as little as 3–6 months once a complete application is submitted. Italy's in-country residency route (applying at a local comune) also completes in 3–6 months, while the consular route can take years. Ireland, Germany, and Italy via consulate are among the slower processes due to backlogs and document volumes.
                </p>
              </div>
            </div>
          </section>

          {/* Country grid */}
          <nav aria-label="Country guides" className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Detailed Country Guides
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {rows.map((row) => (
                <li key={row.slug}>
                  <Link
                    href={`/${row.slug}`}
                    className="block p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-green-500 transition-colors text-sm font-medium text-zinc-900 dark:text-zinc-100"
                  >
                    {row.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </main>

        <footer className="border-t border-zinc-200 dark:border-zinc-700 py-8 text-center text-sm text-zinc-500 mt-10">
          <p>© {new Date().getFullYear()} Heritage Passport Finder · Educational and informational use only.</p>
          <p className="mt-2">This is not legal advice. Consult official sources and qualified professionals.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <Link href="/privacy-policy" className="hover:text-green-700">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
