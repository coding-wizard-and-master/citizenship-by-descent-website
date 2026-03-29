import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Heritage Passport Finder | European Citizenship by Descent Resource",
  description:
    "Heritage Passport Finder is a free educational resource helping descendants of European immigrants understand their citizenship by descent options. Learn about our mission, editorial approach, and how the tool works.",
  alternates: {
    canonical: "https://heritagepassportfinder.com/about",
  },
  openGraph: {
    title: "About Heritage Passport Finder",
    description:
      "Free educational resource for descendants of European immigrants exploring citizenship by descent eligibility. Learn about our mission and editorial standards.",
    url: "https://heritagepassportfinder.com/about",
    type: "website",
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://heritagepassportfinder.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://heritagepassportfinder.com/about" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Soucek",
  url: "https://heritagepassportfinder.com/about",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Heritage Passport Finder",
    url: "https://heritagepassportfinder.com",
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <header className="bg-white dark:bg-zinc-900 shadow-sm">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-green-700 dark:text-green-400">
              Heritage Passport Finder
            </Link>
            <Link href="/#eligibility" className="text-zinc-600 dark:text-zinc-300 hover:text-green-700 text-sm">
              Eligibility Checker
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900 dark:text-zinc-100">About</span>
          </nav>

          <article className="prose prose-zinc dark:prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              About Heritage Passport Finder
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              Heritage Passport Finder is a free educational tool that helps descendants of European immigrants understand whether they may qualify for citizenship by descent — and what steps they would need to take. It covers 14 European countries, from Italy and Ireland to Luxembourg and Estonia.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Who Built This</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Heritage Passport Finder was built by <strong>Michael Soucek</strong>, a developer with personal experience navigating the European citizenship by descent process. The project started as a way to cut through the noise of scattered information, expensive attorneys, and hard-to-navigate government websites — and make the research stage accessible and free.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                The eligibility checker codifies publicly available citizenship laws and administrative requirements for each country into a decision-tree format, guiding users through the questions an immigration attorney would ask in an initial consultation — at no cost.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">What This Site Does (and Does Not Do)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">✓ What we provide</h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {[
                      "Free interactive eligibility checker (no signup required)",
                      "In-depth guides for each of 14 European countries",
                      "Document requirements and preparation guidance",
                      "Processing time and cost estimates",
                      "Links to official government resources",
                      "Sub-topic guides on complex rules (1948 rule, Article 116, FBR)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-700">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">✗ What we don't provide</h3>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {[
                      "Legal advice or legal representation",
                      "Official determination of your citizenship status",
                      "Genealogical research services",
                      "Document retrieval or apostille services",
                      "Guaranteed outcomes — laws change and individual circumstances vary",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2"><span className="text-red-500 mt-0.5">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Editorial Standards</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                All country guides are researched against primary sources: official government websites, the texts of relevant nationality laws, parliamentary records, and published guidance from embassies and ministries. We do not rely on secondary aggregator sites or forum posts.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                We review the accuracy of each country's guide at least once per year and whenever a significant legal change is announced. The <em>dateModified</em> metadata on each country page reflects the most recent review.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                If you believe any information is inaccurate or out of date, please contact us via the feedback link below. We take corrections seriously.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">How the Eligibility Checker Works</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                The eligibility checker is a client-side decision tree — no data you enter is sent to a server or stored anywhere. It asks you a series of structured questions about your family history (who had citizenship, when they emigrated, when they may have naturalised, whether female ancestors are in the chain, etc.) and maps your answers against the eligibility rules for each country.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                The result is a preliminary assessment and a list of suggested next steps — not a legal determination. For individual advice specific to your family's documents and circumstances, you should always consult a qualified immigration attorney licensed in the relevant country.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Technology and Privacy</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Heritage Passport Finder is built with Next.js and deployed on Vercel. The eligibility checker runs entirely in your browser — none of your family history responses are transmitted or logged. Vercel Analytics collects aggregated, anonymised page-view statistics (no personal data).
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                The site uses Google AdSense to display contextually relevant advertising. For full details, see our <Link href="/privacy-policy" className="text-green-700 dark:text-green-400 hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Explore the Site</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/#eligibility", label: "Free Eligibility Checker" },
                  { href: "/citizenship-by-descent-requirements-by-country", label: "Compare 14 European Countries" },
                  { href: "/apostille-guide", label: "Apostille Guide" },
                  { href: "/documents-checklist", label: "Document Checklist" },
                  { href: "/italy-1948-rule", label: "Italy 1948 Rule Explained" },
                  { href: "/german-article-116-citizenship", label: "German Article 116 Guide" },
                  { href: "/ireland-foreign-births-register", label: "Ireland FBR Guide" },
                  { href: "/privacy-policy", label: "Privacy Policy" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block p-3 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-green-500 text-sm font-medium text-zinc-900 dark:text-zinc-100 transition-colors">
                      {l.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
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
