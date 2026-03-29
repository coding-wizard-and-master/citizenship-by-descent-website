import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ireland Foreign Births Register (FBR): Complete Application Guide 2025",
  description:
    "The Ireland Foreign Births Register lets grandchildren of Irish citizens claim Irish citizenship. Learn the eligibility rules, how to apply, what documents you need, current wait times, and what to do if your parent hasn't registered.",
  alternates: {
    canonical: "https://heritagepassportfinder.com/ireland-foreign-births-register",
  },
  openGraph: {
    title: "Ireland Foreign Births Register (FBR): Complete Application Guide 2025",
    description:
      "Everything you need to know about the Ireland Foreign Births Register — eligibility, required documents, fees, processing times, and the critical parent-must-register-first rule.",
    url: "https://heritagepassportfinder.com/ireland-foreign-births-register",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Ireland Foreign Births Register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Foreign Births Register (FBR) is an official Irish government registry that allows people born outside Ireland to claim Irish citizenship when they have an Irish-born grandparent (or an Irish parent who was registered in the FBR before the applicant was born). Registration in the FBR is the only pathway for grandchildren to claim Irish citizenship — it does not happen automatically at birth unlike citizenship through a parent who is already Irish.",
      },
    },
    {
      "@type": "Question",
      name: "Who is eligible to register in the Foreign Births Register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You are eligible if: (1) one of your grandparents was born on the island of Ireland (Republic or Northern Ireland), and your parent was not an Irish citizen (via birth or FBR registration) when you were born; OR (2) one of your parents was an Irish citizen registered in the FBR before you were born. In case 2, registration must have occurred before your birth — parents who register after your birth cannot retrospectively pass citizenship to you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the Foreign Births Register application take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of early 2026, waiting times for FBR applications submitted online are approximately 12–18 months. In-person appointments at Irish consulates may be available for urgent cases. The Passport Service processes applications in the order they are received. Applications submitted with incomplete or incorrect documents will be delayed further.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my parent hasn't registered in the FBR and I want to claim through them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your parent (the child of the Irish-born grandparent) never registered in the FBR, and you were born before they registered — you cannot claim citizenship through them. Your parent would need to register first, but it would only count for any children born after their registration date. This 'chain break' is the most common reason grandchild claims fail. Your parent should apply to the FBR as soon as possible to preserve citizenship rights for children not yet born.",
      },
    },
    {
      "@type": "Question",
      name: "My Irish grandparent was from Northern Ireland — does that count?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The island of Ireland for FBR purposes includes Northern Ireland (part of the United Kingdom). A grandparent born in Belfast, Derry/Londonderry, or any other county of Northern Ireland qualifies. You will need your grandparent's birth certificate — which will be a UK civil registration document — but this is acceptable for FBR purposes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the FBR application fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Foreign Births Register application fee is €278 as of 2025. This is the fee for registration only. After you are successfully registered, you pay the standard Irish passport fee separately (€80 for a standard 10-year adult passport as of 2025). The application is processed online through the Department of Foreign Affairs Passport Online service.",
      },
    },
  ],
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://heritagepassportfinder.com/" },
    { "@type": "ListItem", position: 2, name: "Irish Citizenship by Descent", item: "https://heritagepassportfinder.com/ireland-citizenship-by-descent" },
    { "@type": "ListItem", position: 3, name: "Foreign Births Register", item: "https://heritagepassportfinder.com/ireland-foreign-births-register" },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ireland Foreign Births Register (FBR): Complete Application Guide 2025",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  publisher: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  mainEntityOfPage: "https://heritagepassportfinder.com/ireland-foreign-births-register",
};

export default function IrelandFBRPage() {
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
            <Link href="/ireland-citizenship-by-descent" className="text-zinc-600 dark:text-zinc-300 hover:text-green-700 text-sm">
              ← Ireland Guide
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/ireland-citizenship-by-descent" className="hover:text-green-700">Irish Citizenship by Descent</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900 dark:text-zinc-100">Foreign Births Register</span>
          </nav>

          <article className="prose prose-zinc dark:prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Ireland Foreign Births Register (FBR): Complete Application Guide
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">
              Last updated: March 2026 · <Link href="/ireland-citizenship-by-descent" className="text-green-700 dark:text-green-400 hover:underline">Full Ireland guide →</Link>
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              If one of your grandparents was born in Ireland — north or south — you may be entitled to Irish citizenship. The pathway is the Foreign Births Register, a registration process run by Ireland's Department of Foreign Affairs. This guide covers every step: eligibility, documents, fees, timelines, and the critical chain-of-registration rule that catches many applicants off guard.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">How Irish Citizenship by Descent Works</h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                Irish citizenship law distinguishes between people who acquire citizenship <strong>automatically at birth</strong> and those who must <strong>register</strong> to access it:
              </p>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 font-semibold">Child of an Irish citizen:</span>
                  <span>If your parent was an Irish citizen when you were born (whether by birth, FBR registration, or naturalisation), you are automatically Irish at birth. No FBR needed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 font-semibold">Grandchild of an Irish-born person:</span>
                  <span>If your grandparent was born in Ireland but your parent was not an Irish citizen when you were born, citizenship does <em>not</em> pass to you automatically. You must apply to the Foreign Births Register.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 font-semibold">Great-grandchild and beyond:</span>
                  <span>There is no automatic FBR route for great-grandchildren. The only way is if each intervening generation registers in the FBR before the next generation is born, creating an unbroken registration chain.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">⚠ The Most Important Rule: Your Parent Must Register First</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                If you are trying to claim through an Irish-born grandparent but your parent (the grandparent's child) never registered in the FBR, and you were born before your parent registered, <strong>you cannot claim</strong>.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Your parent must register first. After registration, your parent is an Irish citizen — and any children they have <em>after that point</em> will automatically be Irish. Children born before registration cannot use the same route.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mt-3">
                <strong>Practical implication:</strong> If you are an adult with children of your own, and you are planning to register in the FBR, do so before you have (more) children — so they can benefit automatically.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Documents Required</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                All documents must be <strong>original or certified copies</strong>. Birth and marriage certificates from most countries should be apostilled. See our <Link href="/apostille-guide" className="text-green-700 dark:text-green-400 hover:underline">apostille guide</Link> for country-by-country instructions.
              </p>
              <div className="space-y-4">
                {[
                  {
                    group: "Your documents",
                    items: ["Your full birth certificate (showing parents' names)", "Your valid passport (as identity document)"],
                  },
                  {
                    group: "Your parent's documents",
                    items: [
                      "Your parent's full birth certificate",
                      "Your parent's marriage certificate (if their surname differs from the grandparent's)",
                      "Evidence parent was NOT an Irish citizen when you were born (the FBR application asks for this; usually self-declared)",
                    ],
                  },
                  {
                    group: "Your Irish grandparent's documents",
                    items: [
                      "Grandparent's original Irish birth certificate (from the General Register Office or GRONI for Northern Ireland)",
                      "Grandparent's marriage certificate (if their surname changed)",
                      "Grandparent's death certificate (if deceased — highly recommended to include)",
                    ],
                  },
                ].map(({ group, items }) => (
                  <div key={group} className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{group}</h3>
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
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Application Steps</h2>
              <ol className="space-y-5">
                {[
                  { n: "1", title: "Gather all documents", body: "Collect and certify all required documents listed above. For Irish birth certificates, order from the General Register Office (GRO) online at irishgenealogy.ie. Allow 2–4 weeks for delivery." },
                  { n: "2", title: "Apply via Passport Online", body: "All FBR applications are now submitted through the Irish government's Passport Online portal (passportonline.dfa.ie). Create an account, select 'Register in the Foreign Births Register,' and upload scanned copies of all documents." },
                  { n: "3", title: "Pay the fee", body: "Pay the €278 FBR registration fee online via card payment at the time of submission." },
                  { n: "4", title: "Post original documents", body: "After submitting online, you will be given a reference number and an address to post your original documents. Do not post documents before submitting online." },
                  { n: "5", title: "Wait for processing", body: "Current processing times are approximately 12–18 months from receipt of complete application. You will receive email updates from the Passport Service." },
                  { n: "6", title: "Receive confirmation and apply for a passport", body: "Once registered, you receive official confirmation that you are registered in the Foreign Births Register. You can immediately apply for an Irish passport. Standard adult passports take 4–8 weeks." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4 list-none">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm">{step.n}</span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{step.title}</h3>
                      <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Fees at a Glance</h2>
              <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    <tr>
                      <th className="px-4 py-3 text-left">Item</th>
                      <th className="px-4 py-3 text-left">Fee (2025)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {[
                      ["FBR registration fee", "€278"],
                      ["Irish GRO birth certificate (online order)", "€20"],
                      ["Standard Irish passport (10-year adult)", "€80"],
                      ["Apostille per foreign document (varies by country)", "€15–€40"],
                    ].map(([item, fee]) => (
                      <tr key={item} className="bg-white dark:bg-zinc-900">
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">{item}</td>
                        <td className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100">{fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Useful Official Links</h2>
              <ul className="space-y-3">
                {[
                  { name: "Passport Online — FBR Application Portal", url: "https://www.passportonline.dfa.ie/" },
                  { name: "General Register Office Ireland — Birth Certificates", url: "https://www.irishgenealogy.ie/" },
                  { name: "GRONI — Northern Ireland Birth Records", url: "https://www.nidirect.gov.uk/proni" },
                  { name: "Department of Foreign Affairs — Irish Citizenship Information", url: "https://www.dfa.ie/citizenship/" },
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
                    q: "My grandparent was born in Northern Ireland — which birth certificate do I need?",
                    a: "For births registered in Northern Ireland (pre-1922 as part of the UK, or post-partition in Northern Ireland), you need a certificate from GRONI (General Register Office Northern Ireland) in Belfast. You can order these online at nidirect.gov.uk/proni.",
                  },
                  {
                    q: "Can I apply for the FBR if I'm already a citizen of another country?",
                    a: "Yes. Ireland permits dual citizenship, so you do not need to renounce your current nationality to register in the FBR or hold an Irish passport.",
                  },
                  {
                    q: "What if my grandparent's name on the birth certificate is different from later documents?",
                    a: "Name discrepancies are common, especially for anglicised Irish names. You should include a statutory declaration (sworn statement) explaining the discrepancy, and any supporting documents like old passports or school records that show both name versions.",
                  },
                  {
                    q: "Can I do an in-person appointment instead of waiting 12–18 months?",
                    a: "Irish Passport Service and embassies/consulates abroad occasionally offer in-person appointments for urgent cases (such as bereavement travel). These are not available for standard FBR applications, which must be submitted online.",
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
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Check Your Irish Eligibility</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">Use our free interactive checker to find out if you qualify for an Irish passport through the FBR or through a parent.</p>
              <Link href="/#eligibility" className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors">
                Start Free Check
              </Link>
            </section>

            <nav aria-label="Related guides" className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Related Guides</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/ireland-citizenship-by-descent", label: "Full Irish Citizenship by Descent Guide" },
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
