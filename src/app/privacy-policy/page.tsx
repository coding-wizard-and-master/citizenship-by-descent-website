import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Heritage Passport Finder privacy policy. We do not collect, store, or transmit your personal data. Your eligibility checker answers stay in your browser only.",
  alternates: { canonical: "https://heritagepassportfinder.com/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  const updated = "March 28, 2026";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="bg-white dark:bg-zinc-900 shadow-sm">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
            Heritage Passport Finder
          </Link>
          <Link href="/#eligibility" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-emerald-700 transition-colors">
            Eligibility Checker
          </Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-900 dark:text-zinc-100">Privacy Policy</span>
        </nav>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Privacy Policy</h1>
          <p className="text-sm text-zinc-500 mb-8">Last updated: {updated}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Overview</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Heritage Passport Finder ("we", "us", "our") is a free educational tool. We are committed to protecting
              your privacy. This policy explains what information is (and is not) collected when you use this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Data We Do Not Collect</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
              The eligibility checker on this site runs entirely in your browser. <strong>We do not collect, store,
              transmit, or share any answers you enter into the eligibility checker.</strong> Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
              <li>Your country selections and question answers are held only in browser memory and are discarded when you close or refresh the page.</li>
              <li>We do not require account creation or login.</li>
              <li>We do not use cookies for tracking or advertising (beyond Google AdSense, described below).</li>
              <li>We do not collect names, email addresses, phone numbers, or any other personally identifiable information.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Analytics</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We use <strong>Vercel Analytics</strong> to collect anonymous, aggregated data about page visits (e.g.
              which pages are viewed, approximate geographic region, browser type). This data does not identify you
              personally and is used solely to understand how the site is used and to improve it. Vercel Analytics
              is privacy-focused and does not use cookies. See{" "}
              <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer"
                className="text-emerald-700 dark:text-emerald-400 hover:underline">
                Vercel's privacy documentation
              </a>{" "}
              for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Advertising (Google AdSense)</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              This site displays advertisements served by <strong>Google AdSense</strong> (publisher ID:{" "}
              <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-1 rounded">ca-pub-1772060773365341</code>).
              Google may use cookies and similar technologies to serve ads based on your prior visits to this site or
              other sites on the internet. You can opt out of personalised advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
                className="text-emerald-700 dark:text-emerald-400 hover:underline">
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">External Links</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              This site contains links to official government websites and third-party resources. We are not responsible
              for the privacy practices of those sites. We recommend reviewing the privacy policy of any external site
              you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Children's Privacy</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              This site is not directed at children under the age of 13. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Changes to This Policy</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              We may update this policy from time to time. The "last updated" date at the top of this page reflects
              the most recent revision. Continued use of the site after changes are posted constitutes your acceptance
              of the revised policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Disclaimer</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Heritage Passport Finder is an independent educational resource. It is not affiliated with any government,
              consulate, or official immigration authority. Information on this site is provided for general informational
              purposes only and does not constitute legal advice. Always consult official government sources and a qualified
              immigration attorney for your specific situation.
            </p>
          </section>
        </article>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-700 py-8 text-center text-sm text-zinc-500 mt-12">
        <p>© {new Date().getFullYear()} Heritage Passport Finder · Educational and informational use only.</p>
        <p className="mt-2">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span className="mx-2">·</span>
          <Link href="/#eligibility" className="hover:text-emerald-600 transition-colors">Eligibility Checker</Link>
        </p>
      </footer>
    </div>
  );
}
