import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "German Article 116 Citizenship: Restore Citizenship Lost Under Nazi Persecution",
  description:
    "Article 116(2) of Germany's Basic Law gives descendants of people stripped of citizenship between 1933–1945 the right to restoration. Learn who qualifies, what documents you need, and how to apply.",
  alternates: {
    canonical: "https://heritagepassportfinder.com/german-article-116-citizenship",
  },
  openGraph: {
    title: "German Article 116 Citizenship: Restore Citizenship Lost Under Nazi Persecution",
    description:
      "Complete guide to German citizenship restoration under Article 116(2) GG — who qualifies, the application process, eligible persecution grounds, and how it interacts with the 2024 StAG dual citizenship reform.",
    url: "https://heritagepassportfinder.com/german-article-116-citizenship",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who qualifies for German citizenship under Article 116(2)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Article 116(2) of Germany's Basic Law (Grundgesetz) entitles former German citizens and their descendants to restoration of citizenship if they were deprived of citizenship between January 30, 1933 and May 8, 1945 for political, racial, or religious reasons. This covers Jewish people, political dissidents, Roma and Sinti, and other groups persecuted by the Nazi regime. Descendants of those persecuted persons — including grandchildren and great-grandchildren — can also claim under this provision.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Article 116 restoration and standard German descent citizenship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard German citizenship by descent (§4 StAG) requires proving an unbroken chain of German citizenship from parent to child. Article 116(2) is specifically for people whose ancestral citizenship was forcibly removed by the Nazi state, creating a gap in that chain. It is a remedial provision aimed at correcting a historical injustice. The practical difference is that standard descent fails if citizenship was lost before the next generation was born, whereas Article 116(2) specifically addresses that loss and restores the right despite it.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to give up my current citizenship when claiming under Article 116?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The German Bundesverwaltungsgericht (Federal Administrative Court) has long held that Article 116 restorations are exempt from the general obligation to renounce prior citizenship. Additionally, since June 27, 2024, Germany passed a full dual citizenship reform (StAG amendment), so all naturalised German citizens may now retain their prior nationality. Article 116 claimants have no risk of losing their existing passport.",
      },
    },
    {
      "@type": "Question",
      name: "What evidence of Nazi persecution is required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need to show that the deprivation of citizenship was on political, racial, or religious grounds. For Jewish claimants, the persecutory basis is generally presumed from historical context. Documentary evidence can include: Nazi-era Ausbürgerungsliste (denaturalisation lists) published in the Reichsanzeiger, emigration or deportation records, Yad Vashem records, USHMM archives, community or synagogue records, and pre-war German civil registry documents proving citizenship status and religion or political activity.",
      },
    },
    {
      "@type": "Question",
      name: "Can I apply even if my ancestor voluntarily emigrated before the Nazi period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in many cases. If your ancestor left Germany before 1933 but was then formally denaturalised by the Nazi government after 1933 (many were stripped via the Reichsanzeiger even while abroad), Article 116(2) applies. If your ancestor emigrated, kept German citizenship, and was never formally denaturalised by the Nazi state, you may qualify under standard §4/§5 descent rules instead — which can be simpler to document.",
      },
    },
  ],
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://heritagepassportfinder.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "German Citizenship by Descent",
      item: "https://heritagepassportfinder.com/germany-citizenship-by-descent",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Article 116 Citizenship",
      item: "https://heritagepassportfinder.com/german-article-116-citizenship",
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "German Article 116 Citizenship: Restore Citizenship Lost Under Nazi Persecution",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  publisher: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  mainEntityOfPage: "https://heritagepassportfinder.com/german-article-116-citizenship",
};

export default function GermanArticle116Page() {
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
            <Link href="/germany-citizenship-by-descent" className="text-zinc-600 dark:text-zinc-300 hover:text-green-700 text-sm">
              ← Germany Guide
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/germany-citizenship-by-descent" className="hover:text-green-700">German Citizenship by Descent</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900 dark:text-zinc-100">Article 116(2)</span>
          </nav>

          <article className="prose prose-zinc dark:prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              German Article 116 Citizenship: Restoring German Nationality Lost Under Nazi Persecution
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">
              Last updated: March 2026 · <Link href="/germany-citizenship-by-descent" className="text-green-700 dark:text-green-400 hover:underline">Full Germany guide →</Link>
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              Article 116(2) of Germany's Basic Law is one of the most significant avenues for descendants of Holocaust survivors and Nazi-era political exiles. It offers a right — not a discretionary privilege — to have German citizenship restored or newly granted, with no renunciation of existing nationality required.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">The Legal Foundation</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Article 116(2) of the Grundgesetz reads (translated): <em>"Former German citizens who were deprived of their citizenship on political, racial or religious grounds between 30 January 1933 and 8 May 1945, and their descendants, shall on application have their citizenship restored."</em>
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Two additional routes exist for descendants of persecution victims who were excluded under old citizenship laws due to gender bias:
              </p>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">§5 StAG</span>
                  <span>Declaration route for children of German mothers born before April 1, 1953, or children of unmarried German fathers born before July 1, 1993, where citizenship was lost due to old gender-based rules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">§14 StAG</span>
                  <span>Discretionary naturalization for descendants with a special connection to Germany, even where strict legal entitlement under Article 116 or §5 does not exist.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Qualifying Grounds for Article 116(2)</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">The deprivation must have been for one or more of these reasons:</p>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                {[
                  "Racial persecution — including being Jewish, Romani, or Sinti",
                  "Political persecution — opposition to the Nazi regime, membership of banned political parties",
                  "Religious persecution — Jehovah's Witnesses, Catholic clergy who opposed the regime",
                  "Any combination of the above",
                ].map((g) => (
                  <li key={g} className="flex items-start gap-3"><span className="text-green-600 mt-0.5">✓</span><span>{g}</span></li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Who Can Apply</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                The right extends to <strong>former German citizens themselves</strong> (if still living) <strong>and all their descendants</strong>, meaning children, grandchildren, and great-grandchildren. There is no limit on the number of generations.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                The key questions to assess your eligibility are:
              </p>
              <ol className="space-y-3 mt-4 text-zinc-700 dark:text-zinc-300">
                {[
                  "Was your ancestor a German citizen before being denaturalised?",
                  "Was the deprivation of citizenship formally documented (e.g., listed on an Ausbürgerungsliste in the Reichsanzeiger or via direct Nazi decree)?",
                  "Was the reason for deprivation political, racial, or religious persecution?",
                  "Can you trace your direct bloodline from that person to yourself?",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Key Documents for an Article 116 Application</h2>
              <div className="space-y-4">
                {[
                  {
                    cat: "Persecution evidence",
                    items: [
                      "Entry in the Reichsanzeiger Ausbürgerungsliste (searchable at Bundesarchiv)",
                      "Yad Vashem Central Database of Shoah Victims' Names search result",
                      "USHMM Arolsen Archives (ITS) records",
                      "German court or state records of expatriation order",
                    ],
                  },
                  {
                    cat: "Ancestor's German citizenship",
                    items: [
                      "German birth certificate (Geburtsurkunde) from the ancestor's Standesamt",
                      "Pre-war German passport or Reisepass",
                      "German civil registry (Melderegister) extracts",
                      "Marriage certificate from a German Standesamt",
                    ],
                  },
                  {
                    cat: "Lineage documents (for each generation)",
                    items: [
                      "Birth certificates with apostilles",
                      "Marriage certificates connecting each generation",
                      "Death certificates where applicable",
                      "Certified translations into German of all non-German documents",
                    ],
                  },
                ].map(({ cat, items }) => (
                  <div key={cat} className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{cat}</h3>
                    <ul className="space-y-1">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <span className="text-zinc-400 mt-0.5">•</span><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">How to Apply</h2>
              <ol className="space-y-5">
                {[
                  {
                    n: "1",
                    title: "Apply via the German Embassy or mission in your country",
                    body: 'Submit a written application to your nearest German diplomatic mission (Botschaft/Konsulat). State clearly that you are applying under Article 116(2) GG and enclose copies of your evidence. The application is also called a "Feststellungsantrag" (determination application).',
                  },
                  {
                    n: "2",
                    title: "Bundesverwaltungsamt reviews the claim",
                    body: "The Federal Office of Administration (Bundesverwaltungsamt, BVA) in Cologne handles all Article 116 matters. The consulate forwards your case. The BVA may request additional documents.",
                  },
                  {
                    n: "3",
                    title: "Receive Einbürgerungsurkunde or Staatsangehörigkeitsausweis",
                    body: "If approved, you receive either a Certificate of Naturalisation or a Certificate of German Citizenship. You can then apply for a German passport at the same consulate.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4 list-none">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{step.title}</h3>
                      <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Useful Research Archives</h2>
              <ul className="space-y-3">
                {[
                  { name: "Bundesarchiv — Ausbürgerungslisten (Federal Archives)", url: "https://www.bundesarchiv.de/EN/" },
                  { name: "Yad Vashem Central Database of Shoah Victims' Names", url: "https://yvng.yadvashem.org/" },
                  { name: "Arolsen Archives (ITS) — Nazi Persecution Records", url: "https://arolsen-archives.org/en/" },
                  { name: "Bundesverwaltungsamt — Article 116 Applications", url: "https://www.bva.bund.de/EN/" },
                  { name: "BAMF — German Citizenship Information", url: "https://www.bamf.de/EN/Themen/Einbuergerung/einbuergerung-node.html" },
                ].map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 hover:underline flex items-center gap-2 text-sm">
                      {link.name} <span className="text-xs">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section className="mb-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Does Germany's 2024 dual citizenship reform affect Article 116 claimants?",
                    a: "Article 116 claimants were already exempt from renunciation requirements. The 2024 StAG reform extended that benefit to all naturalisation routes, but it does not change or restrict the Article 116 process itself.",
                  },
                  {
                    q: "My ancestor was denaturalised but I cannot find them on the Ausbürgerungsliste — can I still apply?",
                    a: "Yes. The Ausbürgerungsliste is helpful but not the only form of evidence. Collective denaturalisation decrees applied to entire groups (e.g., all German Jews still abroad after Nuremberg Laws). The BVA also accepts contextual evidence such as the historical record of the ancestor's religion or political activity combined with evidence they left Germany and no subsequent German documents exist.",
                  },
                  {
                    q: "Is there a deadline to apply?",
                    a: "No. There is no statutory deadline for Article 116(2) applications. However, the practical challenge is that the older the documents needed, the harder they are to locate. Applying sooner is better, especially if elderly relatives who may have memories or documents are still alive.",
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
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Check German Eligibility</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">Use our free checker to explore your German ancestry path and identify which route — Article 116, §5 declaration, or standard descent — may apply.</p>
              <Link href="/#eligibility" className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors">
                Start Eligibility Check
              </Link>
            </section>

            <nav aria-label="Related guides" className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Related Guides</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/germany-citizenship-by-descent", label: "Full German Citizenship by Descent Guide" },
                  { href: "/documents-checklist", label: "Document Checklist for Citizenship Claims" },
                  { href: "/apostille-guide", label: "Apostille Guide" },
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
