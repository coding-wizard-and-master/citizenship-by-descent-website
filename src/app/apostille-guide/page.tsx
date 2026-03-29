import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apostille Guide: How to Apostille Documents for European Citizenship Applications",
  description:
    "Step-by-step guide to getting an apostille on birth, marriage, and death certificates for European citizenship by descent applications. Covers the US, UK, Australia, Canada, and how to handle countries that aren't Hague Convention signatories.",
  alternates: {
    canonical: "https://heritagepassportfinder.com/apostille-guide",
  },
  openGraph: {
    title: "Apostille Guide: Authenticating Documents for European Citizenship Applications",
    description:
      "How to get apostilles on birth, marriage, and death certificates — country-by-country instructions for the US, UK, Australia, Canada, and more. Essential for any European citizenship by descent claim.",
    url: "https://heritagepassportfinder.com/apostille-guide",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an apostille and why do I need one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An apostille is a standardised authentication certificate issued under the 1961 Hague Convention that verifies the signature, seal, or stamp on a public document so it can be accepted by another country's authorities. For citizenship by descent applications, European countries require apostilles on foreign birth, marriage, and death certificates to confirm they are genuine official documents. Without an apostille, most European civil registries and consulates will refuse to accept your documents.",
      },
    },
    {
      "@type": "Question",
      name: "Who issues apostilles in the United States?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the United States, apostilles are issued by the Secretary of State of the state where the document was issued. For federal documents (such as naturalization certificates or FBI background checks), apostilles are issued by the US Department of State Office of Authentications in Washington, DC. Each state has its own process and fees, typically $5–$20 per document plus any notarization fees required.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an apostille take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Processing times vary significantly by country and issuing authority. In the United States, most state Secretaries of State offer same-day to 2-week processing; the US Department of State takes 4–6 weeks for mail-in and offers same-day for in-person appointments. In the UK, the Foreign, Commonwealth & Development Office (FCDO) takes 2–3 weeks by post. In Australia, the Department of Foreign Affairs and Trade (DFAT) takes 2–4 weeks. Many jurisdictions offer expedited processing for higher fees.",
      },
    },
    {
      "@type": "Question",
      name: "What if the country that issued my document is not a Hague Convention signatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the document-issuing country has not ratified the 1961 Hague Convention (or has since suspended apostille privileges), you typically need to go through a lengthier chain authentication: the document must be notarised locally, then authenticated by a national authority (e.g., US State Department), then legalised by the destination country's embassy in the document-issuing country. Your local embassy of the target European country can confirm the exact requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Is an apostille the same as a certified translation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — these are two different things. An apostille authenticates the origin of a document (confirms the official signature and stamp are genuine). A certified translation is a sworn or certified translation of the document into the target language. Most European countries require both: an apostilled original AND a certified translation of that apostilled document into their language (Italian, German, French, etc.). You usually need to apostille the original first, then have the apostilled copy translated.",
      },
    },
  ],
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://heritagepassportfinder.com/" },
    { "@type": "ListItem", position: 2, name: "Apostille Guide", item: "https://heritagepassportfinder.com/apostille-guide" },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Apostille Guide: How to Apostille Documents for European Citizenship Applications",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  publisher: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  mainEntityOfPage: "https://heritagepassportfinder.com/apostille-guide",
};

const countries = [
  {
    country: "United States",
    authority: "Secretary of State of the issuing state (for state documents); US Dept. of State Office of Authentications (federal documents)",
    process: "Order a certified copy of the document from the issuing authority, then submit to the Secretary of State of that state with the apostille request form and fee. Oregon, California, and New York offer online submission. Federal documents go to US DOS in Washington DC.",
    time: "1 day–4 weeks (state); 4–6 weeks (federal)",
    fee: "$3–$20 (state); $8 (federal, per document)",
    link: "https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/internl-judicial-asst/authentications-and-apostilles/apostille-requirements.html",
  },
  {
    country: "United Kingdom",
    authority: "Foreign, Commonwealth & Development Office (FCDO) Legalisation Office",
    process: "For civil registration documents (birth, marriage, death certificates from the GRO), you can request an apostille directly online. For other documents, have them notarised first, then submit to the FCDO.",
    time: "Standard: 2–3 weeks by post. Premium same-day service available in person.",
    fee: "£30–£75 per document",
    link: "https://www.gov.uk/get-document-legalised",
  },
  {
    country: "Australia",
    authority: "Department of Foreign Affairs and Trade (DFAT)",
    process: "Documents must first be certified by an Australian public official (JP or similar), then submitted to DFAT for apostille. DFAT has offices in most capital cities.",
    time: "2–4 weeks standard; same-day counter service available in Canberra and some capital cities",
    fee: "AUD $65–$85 per document",
    link: "https://www.dfat.gov.au/about-us/mainstream/authentication-of-documents",
  },
  {
    country: "Canada",
    authority: "Global Affairs Canada for federal documents; each provincial government for provincial documents",
    process: "Certificates issued by provinces (birth, marriage, death) must be apostilled by the relevant provincial government. Federal documents go through Global Affairs Canada. Note: Canada joined the Hague Convention in 2024 — apostilles are relatively new here.",
    time: "4–8 weeks depending on province",
    fee: "CAD $35–$65 per document",
    link: "https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/apostille.aspx?lang=eng",
  },
  {
    country: "Ireland",
    authority: "Department of Foreign Affairs",
    process: "Documents issued in Ireland (birth, marriage certificates from the GRO) can be apostilled by the Department of Foreign Affairs in Dublin. Apply online or in person.",
    time: "1–5 business days",
    fee: "€20–€40 per document",
    link: "https://www.dfa.ie/apostille/",
  },
  {
    country: "Germany",
    authority: "District Court (Landgericht) or State Court of Justice (Oberlandesgericht) of the issuing Bundesland",
    process: "German documents (birth certificates from Standesamt, etc.) are typically apostilled by the relevant state authority. The process varies by Bundesland.",
    time: "1–3 weeks",
    fee: "€10–€30 per document",
    link: "https://www.bfj.bund.de/DE/Themen/Internationale_Rechtshilfe/Urkundenanforderungen/Informationen_Sonstiges/Apostille/apostille_node.html",
  },
  {
    country: "Italy",
    authority: "Prefettura (prefecture) of the province where the document was issued, or the issuing authority itself for some documents",
    process: "Italian vital records (from Comuni) can be apostilled at the local Prefettura. Court documents may be apostilled at the Court of Appeal.",
    time: "1–2 weeks",
    fee: "€16–€25 per document",
    link: "https://www.esteri.it/en/news/archivionotizie/comunicati/2023/01/apostille/",
  },
  {
    country: "Poland",
    authority: "Ministry of Foreign Affairs (MSZ) for most documents; Courts of Appeal for judicial documents",
    process: "Polish vital records issued by Polish civil registry offices can be apostilled at the Ministry of Foreign Affairs offices in Warsaw or designated regional offices.",
    time: "1–5 business days at MSZ Warsaw; longer by mail",
    fee: "PLN 60 (~€14) per document",
    link: "https://www.gov.pl/web/usa-en/apostille",
  },
];

export default function ApostilleGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <header className="bg-white dark:bg-zinc-900 shadow-sm">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-green-700 dark:text-green-400">
              Heritage Passport Finder
            </Link>
            <Link href="/documents-checklist" className="text-zinc-600 dark:text-zinc-300 hover:text-green-700 text-sm">
              Document Checklist →
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900 dark:text-zinc-100">Apostille Guide</span>
          </nav>

          <article className="prose prose-zinc dark:prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Apostille Guide: How to Authenticate Documents for European Citizenship Applications
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">
              Last updated: March 2026 · <Link href="/documents-checklist" className="text-green-700 dark:text-green-400 hover:underline">Document checklist →</Link>
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              Almost every European citizenship by descent application requires apostilled copies of your vital records. This guide explains what an apostille is, why you need it, and how to get one on your documents — country by country.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">What Is an Apostille?</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                An apostille is a standardised certificate issued under the <strong>Hague Convention of 5 October 1961 (Convention Abolishing the Requirement of Legalisation for Foreign Public Documents)</strong>. It authenticates the official nature of a document — confirming that the signature, seal, or stamp on it is genuine — so that it will be accepted by another country's authorities without further verification.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                For a citizenship by descent claim, you are presenting documents from your country of residence (or birth) to a European government. That European government needs to trust that your birth certificate is a genuine official document. The apostille provides that assurance.
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-5 mb-4">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Apostille vs. Certified Translation — the difference</h3>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">Apostille:</span>
                    <span>Confirms the document is a genuine official document (authentication of the seal/signature)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">Certified translation:</span>
                    <span>Converts the content of the document into the target language, sworn by a certified translator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">Order matters:</span>
                    <span>Apostille the original <em>first</em>, then have the apostilled copy translated</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Which Documents Need to Be Apostilled?</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">Generally, the following documents require apostilles when used in a foreign country:</p>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                {[
                  "Birth certificates (for every person in your lineage)",
                  "Marriage certificates",
                  "Death certificates",
                  "Divorce decrees (where relevant to prove name change or break in chain)",
                  "Naturalisation certificates (to prove when an ancestor acquired foreign citizenship)",
                  "Criminal background checks (required by some countries for the applicant)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3"><span className="text-green-600 mt-1">•</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="text-zinc-700 dark:text-zinc-300 mt-4 text-sm">
                Documents issued by the destination country itself (e.g., Italian birth certificates to be used in Italy) do not need apostilles. Check our <Link href="/documents-checklist" className="text-green-700 dark:text-green-400 hover:underline">document checklist</Link> for country-specific requirements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Apostille by Country of Issue</h2>
              <div className="space-y-4">
                {countries.map((c) => (
                  <div key={c.country} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 p-5">
                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-3">{c.country}</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex gap-3">
                        <dt className="font-medium text-zinc-700 dark:text-zinc-400 min-w-[90px]">Authority:</dt>
                        <dd className="text-zinc-700 dark:text-zinc-300">{c.authority}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="font-medium text-zinc-700 dark:text-zinc-400 min-w-[90px]">Process:</dt>
                        <dd className="text-zinc-700 dark:text-zinc-300">{c.process}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="font-medium text-zinc-700 dark:text-zinc-400 min-w-[90px]">Timeline:</dt>
                        <dd className="text-zinc-700 dark:text-zinc-300">{c.time}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="font-medium text-zinc-700 dark:text-zinc-400 min-w-[90px]">Typical fee:</dt>
                        <dd className="text-zinc-700 dark:text-zinc-300">{c.fee}</dd>
                      </div>
                    </dl>
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 text-green-700 dark:text-green-400 hover:underline text-sm">
                      Official information ↗
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Apostille Tips for Citizenship Applications</h2>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                {[
                  "Order multiple certified copies of each vital record — you may need them for several different countries or agencies. Getting 3 copies at once is cheaper than reordering.",
                  "Apostille the original certified copy, not a photocopy. Most authorities will only apostille documents with original signatures or official stamps.",
                  "Check the specific requirements of the destination country. Some countries (e.g., Italy) accept apostilled documents from any Hague Convention country; others have specific formatting requirements.",
                  "Keep apostilled originals in a safe place and make digital copies immediately. Losing an apostilled document mid-process causes significant delays.",
                  "Some European consulates will accept apostilled documents in digital PDF form initially if you provide originals at appointment — check with the specific consulate first.",
                  "For very old documents (pre-1900) that have been digitised, the apostille will be on the certified copy provided by the archive, not on the original. This is standard and accepted.",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3"><span className="text-green-600 mt-1 font-bold">→</span><span>{tip}</span></li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section className="mb-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Do I need a new apostille if my document is more than a few years old?",
                    a: "Apostilles themselves do not expire — there is no legal expiry date under the Hague Convention. However, some consulates or government offices may require documents (and their apostilles) to have been issued within the last 6 or 12 months, particularly for criminal background checks. Vital record certificates (birth, marriage, death) from older apostilled copies are generally accepted without re-apostilling.",
                  },
                  {
                    q: "What do I do if the country that issued my document is not on the Hague Convention list?",
                    a: "You will need to go through a chain authentication process instead: (1) have the document notarised in the issuing country, (2) have the notarisation authenticated by the national foreign ministry of the issuing country, (3) then have that authentication legalised by the embassy of the destination European country in the issuing country. This process can take weeks to months.",
                  },
                  {
                    q: "Can a lawyer or apostille service handle this for me?",
                    a: "Yes. Many attorneys handling citizenship by descent applications include apostille procurement in their services. There are also dedicated apostille service companies (especially in the US and UK) that handle the logistics of obtaining apostilles and certified translations for a fee, often faster than doing it yourself.",
                  },
                ].map(({ q, a }) => (
                  <div key={q}>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{q}</h3>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-10">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Know Which Documents You Need First</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">Before apostilling, check the full document checklist for your specific country so you request and apostille the right documents from the start.</p>
              <Link href="/documents-checklist" className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors">
                View Document Checklist →
              </Link>
            </section>

            <nav aria-label="Related guides" className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Related Guides</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/documents-checklist", label: "Full Document Checklist by Country" },
                  { href: "/italy-1948-rule", label: "Italy 1948 Rule — Document Requirements" },
                  { href: "/ireland-foreign-births-register", label: "Ireland FBR — Document Requirements" },
                  { href: "/citizenship-by-descent-requirements-by-country", label: "Compare All 14 European Countries" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-green-500 text-sm font-medium text-zinc-900 dark:text-zinc-100 transition-colors">
                      {l.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </article>
        </main>

        <footer className="border-t border-zinc-200 dark:border-zinc-700 py-8 text-center text-sm text-zinc-500 mt-10">
          <p>© {new Date().getFullYear()} Heritage Passport Finder · Educational and informational use only.</p>
          <p className="mt-2">Not legal advice. Consult official sources and qualified professionals.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <Link href="/privacy-policy" className="hover:text-green-700">Privacy Policy</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
