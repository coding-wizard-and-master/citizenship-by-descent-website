import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Italy 1948 Rule: Claiming Italian Citizenship Through a Female Ancestor",
  description:
    "The Italy 1948 rule blocks citizenship claims through female ancestors before January 1, 1948. Learn who it affects, how the court route works, what it costs, and whether the rule was recently abolished.",
  alternates: {
    canonical: "https://heritagepassportfinder.com/italy-1948-rule",
  },
  openGraph: {
    title: "Italy 1948 Rule: Claiming Italian Citizenship Through a Female Ancestor",
    description:
      "A thorough guide to the Italy 1948 rule for citizenship by descent — who it blocks, the court route, recent legislative changes, and what to do if your claim depends on a female ancestor.",
    url: "https://heritagepassportfinder.com/italy-1948-rule",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Italy 1948 rule for citizenship by descent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 1948 rule refers to the Italian interpretation that citizenship could only pass through the male line before January 1, 1948 — the date Italy's Republican Constitution came into force. If your Italian ancestor was female and her child was born before that date, the child was not considered an Italian citizen under old law, breaking the jure sanguinis chain. This affects many American, Argentine, and Australian descendants whose Italian great-grandmothers emigrated in the late 19th or early 20th century.",
      },
    },
    {
      "@type": "Question",
      name: "Can I still get Italian citizenship if my claim goes through a female ancestor before 1948?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but you must pursue a court route rather than the standard consular or comune application. You file a civil lawsuit in Italy (tribunale) asking the court to recognise that the old male-only rule was unconstitutional discrimination. The Constitutional Court of Italy confirmed this in rulings from 1983 and 2009. Hundreds of these cases succeed every year, though costs and timelines are higher than the standard administrative route.",
      },
    },
    {
      "@type": "Question",
      name: "Has Italy abolished the 1948 rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of March 2026 the 1948 rule has not been formally abolished by parliament. Bills have been introduced in the Italian Senate and Chamber of Deputies but none have passed into law. The court route remains the only avenue for affected claimants. Monitor Italy's parliament (Camera dei Deputati) and the AIRE newsletter for updates.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an Italian court case for the 1948 rule take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cases filed in Rome's tribunale civile (which has jurisdiction for plaintiffs abroad) currently take 18–36 months from filing to judgment. Cases filed in other Italian tribunals can vary. The timeline depends on court backlog, the complexity of your lineage, and whether the Ministero dell'Interno contests your claim (rare in clear-cut matrilineal descent cases).",
      },
    },
    {
      "@type": "Question",
      name: "How much does the Italy 1948 court route cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Expect Italian attorney fees of €4,000–€12,000 depending on complexity and whether you hire a genealogist. Court filing fees (contributo unificato) are a few hundred euros. Documents (certified copies, apostilles, translations) add €500–€2,000. Total costs commonly run €6,000–€15,000 — significantly more than the standard administrative route.",
      },
    },
    {
      "@type": "Question",
      name: "Does the 1948 rule apply to claims through a great-grandmother or earlier female ancestor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The rule applies whenever a female ancestor is in the line and the transmission to the next generation happened before January 1, 1948. For example: Italian great-grandmother → son born 1920 (chain broken here by old rule). Or: Italian great-grandmother → daughter born 1925 → your parent born 1950 — here the break is in 1925. Any female-to-child transmission before 1948 requires the court route.",
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
      name: "Italian Citizenship by Descent",
      item: "https://heritagepassportfinder.com/italy-citizenship-by-descent",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Italy 1948 Rule",
      item: "https://heritagepassportfinder.com/italy-1948-rule",
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Italy 1948 Rule: Claiming Italian Citizenship Through a Female Ancestor",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  publisher: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  mainEntityOfPage: "https://heritagepassportfinder.com/italy-1948-rule",
};

export default function Italy1948RulePage() {
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
            <Link href="/italy-citizenship-by-descent" className="text-zinc-600 dark:text-zinc-300 hover:text-green-700 text-sm">
              ← Italy Guide
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/italy-citizenship-by-descent" className="hover:text-green-700">Italian Citizenship by Descent</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900 dark:text-zinc-100">The 1948 Rule</span>
          </nav>

          <article className="prose prose-zinc dark:prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Italy 1948 Rule: How to Claim Italian Citizenship Through a Female Ancestor
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">
              Last updated: March 2026 · <Link href="/italy-citizenship-by-descent" className="text-green-700 dark:text-green-400 hover:underline">Full Italy citizenship guide →</Link>
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              Tens of thousands of Italian-American, Argentine, and Australian descendants discover their jure sanguinis claim is blocked by a date: January 1, 1948. This guide explains exactly what the 1948 rule is, who it affects, and how to overcome it through Italy's court system.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">What the 1948 Rule Actually Means</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Italy's citizenship by descent (jure sanguinis) is based on the principle that citizenship transmits automatically from parent to child at birth — indefinitely through generations. But there's a catch rooted in historical gender discrimination.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Under pre-Republican Italian law, <strong>only fathers could transmit citizenship</strong>. A child born to an Italian mother and a foreign father before January 1, 1948 did not acquire Italian citizenship at birth. Italy's Constitution of 1948 abolished this gender distinction, but it did not retroactively fix citizenship chains that were broken by births before that date.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                So if your lineage includes any woman-to-child transmission that happened before 1 January 1948, Italian civil registry offices or consulates will reject your standard application. You need to go to court instead.
              </p>
            </section>

            <section className="mb-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Quick Test: Does the 1948 Rule Affect You?</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">Your claim is <strong>blocked by the 1948 rule</strong> if:</p>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3"><span className="text-red-500 mt-0.5">✗</span><span>There is a <strong>female ancestor</strong> anywhere in your Italian lineage, <strong>AND</strong></span></li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-0.5">✗</span><span>Her child (the next link in your chain) was born <strong>before January 1, 1948</strong></span></li>
              </ul>
              <p className="text-zinc-700 dark:text-zinc-300 mt-4 mb-3">Your claim is <strong>not affected</strong> if:</p>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3"><span className="text-green-600 mt-0.5">✓</span><span>Your Italian ancestor is male, or</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 mt-0.5">✓</span><span>Your Italian ancestor is female but her child was born <strong>on or after January 1, 1948</strong></span></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Legal Basis for Challenging the Rule</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                The Italian Constitutional Court (Corte Costituzionale) has twice confirmed that applying the pre-1948 gender discrimination to deny citizenship requests is unconstitutional:
              </p>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3"><span className="text-green-600 mt-1">•</span><span><strong>Ruling No. 30/1983</strong> — Declared gender-based citizenship discrimination unconstitutional under Article 3 of the Constitution (equal treatment)</span></li>
                <li className="flex items-start gap-3"><span className="text-green-600 mt-1">•</span><span><strong>Ruling No. 4/2009</strong> — Confirmed citizenship passed through Italian mothers to children born before 1948 can be claimed retroactively via court proceedings</span></li>
              </ul>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4">
                These rulings mean you can win — but you cannot apply administratively. The Italian Ministry of the Interior (through its consular network) maintains that administrative offices lack authority to override the old statutory rule; only courts can do so.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">The Court Route Step by Step</h2>
              <ol className="space-y-5">
                {[
                  {
                    n: "1",
                    title: "Hire an Italian attorney (avvocato)",
                    body: "You must be represented by an attorney licensed in Italy. Many Italian law firms specialise in cittadinanza jure sanguinis cases and work with foreign clients entirely by email. Get quotes from at least 2–3 firms.",
                  },
                  {
                    n: "2",
                    title: "Gather all genealogical documents",
                    body: "Same documents as the standard route: certified birth, marriage, and death records for every generation with apostilles and certified Italian translations. Additionally, you will need records proving your Italian female ancestor was, in fact, an Italian citizen at the time of the relevant birth.",
                  },
                  {
                    n: "3",
                    title: "File in the correct tribunal",
                    body: "Since 2021, the Tribunale di Roma has exclusive jurisdiction for plaintiffs residing outside Italy. Your attorney files the civil lawsuit (ricorso) with the court and serves papers on the Ministero dell'Interno.",
                  },
                  {
                    n: "4",
                    title: "Attend or be represented at hearings",
                    body: "Most hearings can be attended via video by foreign plaintiffs. Your attorney handles all court appearances. The Ministry rarely contests straightforward matrilineal descent cases and sometimes consents to the order without a hearing.",
                  },
                  {
                    n: "5",
                    title: "Receive the court order",
                    body: "When the court grants the order, it declares you have been an Italian citizen from birth. The order is forwarded to the relevant Italian comune for registration in AIRE (Registry of Italians Abroad). You can then apply for an Italian passport.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
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
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Costs and Timelines</h2>
              <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <tr>
                      <th className="px-4 py-3 text-left">Item</th>
                      <th className="px-4 py-3 text-left">Typical Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {[
                      ["Italian attorney fees", "€4,000–€12,000"],
                      ["Court filing fee (contributo unificato)", "€200–€500"],
                      ["Document apostilles (per document)", "€20–€40"],
                      ["Certified Italian translations (per page)", "€40–€80"],
                      ["Genealogy research (if needed)", "€500–€2,000"],
                      ["Total estimate", "€6,000–€15,000+"],
                    ].map(([item, cost]) => (
                      <tr key={item} className="bg-white dark:bg-zinc-900">
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">{item}</td>
                        <td className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3">
                Timeline: cases filed at the Tribunale di Roma currently resolve in 18–36 months. Simpler cases with an uncontested Ministry response can conclude sooner.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Is the 1948 Rule Being Abolished?</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Multiple bills have been introduced in the Italian parliament to eliminate the 1948 barrier and allow administrative processing. As of March 2026, <strong>none have passed into law</strong>. The bills have twice failed at committee stage due to government priorities.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                If you have a 1948-affected claim, proceed with the court route now. Any future legislative change would likely only help new applicants going forward, not create a faster pathway for those already in process.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Does the 1948 rule apply if my female ancestor emigrated before or after 1948?",
                    a: "The date of emigration is irrelevant. What matters is the date of birth of the next person in the chain. If your Italian great-grandmother emigrated in 1905 and her child (your grandparent) was born in 1928, the chain breaks in 1928 regardless of when she left Italy.",
                  },
                  {
                    q: "Can my children benefit from a successful 1948 court case?",
                    a: "Yes. A successful court ruling declares that you have been an Italian citizen from birth. Your children born after you obtained this recognition can then register as Italian citizens through normal administrative procedures.",
                  },
                  {
                    q: "Do I need to travel to Italy to pursue a court case?",
                    a: "Generally no. Most attorneys can handle 1948 cases for foreign plaintiffs entirely remotely. Some hearings may be attended via video link. You may need to visit an Italian consulate to have documents authenticated.",
                  },
                  {
                    q: "What if there are multiple female ancestors in my lineage?",
                    a: "Each female ancestor in the chain whose child was born before 1948 represents a separate break. The court case covers your entire lineage, so one successful ruling can establish the full chain. Your attorney should review every female ancestor and each transmission date.",
                  },
                ].map(({ q, a }) => (
                  <div key={q}>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{q}</h3>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-10">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Check Your Italian Eligibility First
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                Use our free checker to map out your Italian ancestry path and identify whether the 1948 rule applies to your specific lineage.
              </p>
              <Link
                href="/#eligibility"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors"
              >
                Start Eligibility Check
              </Link>
            </section>

            <nav aria-label="Related guides" className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Related Guides</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/italy-citizenship-by-descent", label: "Full Italian Citizenship by Descent Guide" },
                  { href: "/documents-checklist", label: "Document Checklist for European Citizenship Claims" },
                  { href: "/apostille-guide", label: "Apostille Guide: Authenticating Your Documents" },
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
