import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Checklist for European Citizenship by Descent Applications",
  description:
    "Complete document checklists for citizenship by descent applications in Italy, Ireland, Germany, Poland, Portugal, Spain, Greece, Hungary, Czech Republic, Slovakia, Luxembourg, Lithuania, Latvia, and Estonia.",
  alternates: {
    canonical: "https://heritagepassportfinder.com/documents-checklist",
  },
  openGraph: {
    title: "Document Checklist for European Citizenship by Descent Applications",
    description:
      "What documents do you need for a European citizenship by descent application? Find the checklist for all 14 countries — Italy, Ireland, Germany, Poland, and more.",
    url: "https://heritagepassportfinder.com/documents-checklist",
    type: "article",
  },
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://heritagepassportfinder.com/" },
    { "@type": "ListItem", position: 2, name: "Document Checklist", item: "https://heritagepassportfinder.com/documents-checklist" },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Document Checklist for European Citizenship by Descent Applications",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  publisher: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
  mainEntityOfPage: "https://heritagepassportfinder.com/documents-checklist",
};

interface CountryChecklist {
  slug: string;
  name: string;
  universal: string[];
  specific: string[];
  notes: string;
}

const checklists: CountryChecklist[] = [
  {
    slug: "italy-citizenship-by-descent",
    name: "Italy",
    universal: [
      "Birth certificates for every generation (applicant, parents, grandparents, etc.) — with apostilles and certified Italian translations",
      "Marriage certificates for every generation — with apostilles and certified Italian translations",
      "Death certificates for deceased ancestors in the chain — with apostilles and certified Italian translations",
      "Your current valid passport (copy)",
    ],
    specific: [
      "Italian ancestor's birth certificate from their comune (no apostille required for Italian-issued documents)",
      "Proof Italian ancestor did NOT naturalise before the next generation was born — typically a US/AUS/ARG naturalisation record showing the year, or a NARA search result",
      "If 1948 rule applies: court order from Italian tribunale is required instead of consular application — see Italy 1948 Rule guide",
    ],
    notes: "Italy requires certified translations into Italian by a sworn (asseverato) translator. Each document must be apostilled before translation. Translations are not accepted on photocopies — apostille the original first.",
  },
  {
    slug: "ireland-citizenship-by-descent",
    name: "Ireland",
    universal: [
      "Your full birth certificate (showing parents' names)",
      "Your parent's full birth certificate",
      "Your parent's marriage certificate (if surname differs)",
      "Your Irish grandparent's full birth certificate (from Irish GRO or GRONI for Northern Ireland)",
      "Your Irish grandparent's marriage certificate (if surname changed)",
    ],
    specific: [
      "Foreign birth certificates (apostille required if issued outside Ireland/UK)",
      "Grandparent's death certificate if deceased (strongly recommended)",
      "Proof of non-Irish citizenship of parent at time of applicant's birth (self-declared in application form)",
      "Applicant's valid passport",
    ],
    notes: "The FBR application is now submitted entirely online via passportonline.dfa.ie. Originals are posted after online submission. Irish and UK documents do not need apostilles between each other.",
  },
  {
    slug: "germany-citizenship-by-descent",
    name: "Germany",
    universal: [
      "Your birth certificate with apostille and certified German translation",
      "Birth and marriage certificates for each generation with apostilles and certified German translations",
      "Your valid passport (certified copy)",
    ],
    specific: [
      "For standard descent (§4 StAG): ancestor's German birth certificate from Standesamt; naturalisation records showing they did not acquire foreign citizenship before the next link",
      "For Article 116(2) restoration: evidence of Nazi persecution (Ausbürgerungsliste, Yad Vashem, Arolsen Archives); ancestor's German civil records proving pre-1933 German citizenship",
      "For §5 declaration (gender discrimination remedy): birth certificate showing German mother and non-German father; evidence of pre-1975 or pre-1993 birth as applicable",
      "Staatsangehörigkeitsausweis application form (available from German missions abroad)",
    ],
    notes: "German consulates accept documents in German without translation. All non-German documents need apostilles and certified translations by a sworn (vereidigter) translator. The Bundesverwaltungsamt in Cologne processes all Article 116 claims.",
  },
  {
    slug: "poland-citizenship-by-descent",
    name: "Poland",
    universal: [
      "Your birth certificate with apostille and certified Polish translation",
      "Parents' birth and marriage certificates with apostilles and certified Polish translations",
      "Birth, marriage, and death certificates for each generation in the chain with apostilles and certified translations",
    ],
    specific: [
      "Polish ancestor's birth certificate from Polish civil registry (USC) — no apostille required for Polish-issued documents",
      "Proof of Polish ancestor's citizenship (Polish passport, civil registry extract showing residence, or military records)",
      "Evidence that the ancestor did NOT naturalise in another country before the next link was born — naturalisation records from the relevant foreign country",
      "Completed application for confirmation of Polish citizenship (potwierdzenie posiadania obywatelstwa polskiego) — filed with the relevant Voivode (provincial governor) or Polish consul abroad",
    ],
    notes: "All foreign documents must be certified translations completed by a certified Polish translator (tłumacz przysięgły). Polish archive records can be requested remotely from the relevant USC office or the Polish State Archives (szukajwarchiwach.gov.pl).",
  },
  {
    slug: "hungary-citizenship-by-descent",
    name: "Hungary",
    universal: [
      "Your birth certificate with apostille and certified Hungarian translation",
      "Parents' birth and marriage certificates with apostilles and certified translations",
      "Each generation's birth and marriage certificates up to the Hungarian ancestor",
    ],
    specific: [
      "Hungarian ancestor's birth certificate or civil registry record (from Hungarian National Archives MNL or local registry)",
      "Evidence of Hungarian citizenship or residence in Hungarian territory for the ancestor",
      "Completed simplified naturalisation application (kedvezményes honosítás) — submitted to the Hungarian Embassy or consulate",
      "Language examination or interview — basic conversational Hungarian required; may be conducted at the consulate",
    ],
    notes: "Hungary's simplified naturalization has no residency requirement, making it one of the most accessible pathways. The Hungarian language interview is typically basic — sufficient to hold a brief conversation. A language tutor for 1–2 months is usually enough preparation.",
  },
  {
    slug: "luxembourg-citizenship-by-descent",
    name: "Luxembourg",
    universal: [
      "Your birth certificate with apostille and certified French or German translation",
      "Birth and marriage certificates for every generation with apostilles and translations",
    ],
    specific: [
      "Luxembourg ancestor's birth certificate from the commune of birth — from the État Civil or ANLux national archives",
      "Evidence of Luxembourg citizenship for the ancestor (commune residence record, Luxembourg passport, civil registry extract)",
      "For the reacquisition route (emigrants 1815–1943): documentation that ancestor was born in Luxembourg and emigrated — ship manifests, foreign naturalisation records, commune registers",
      "Completed nationality declaration form — filed with the Ministry of Justice or Luxembourg Embassy",
    ],
    notes: "Luxembourg accepts documents in French, German, and Luxembourgish without translation. English or other language documents require certified French or German translations. Luxembourg communes are the primary source for historical civil records — contact the commune of your ancestor's birth directly.",
  },
  {
    slug: "portugal-citizenship-by-descent",
    name: "Portugal",
    universal: [
      "Your birth certificate with apostille and certified Portuguese translation",
      "Parents' birth and marriage certificates with apostilles and translations",
    ],
    specific: [
      "Portuguese ancestor's birth certificate from the conservatória do registo civil or Arquivo Nacional Torre do Tombo",
      "Certificate of A2 Portuguese language proficiency (CAPLE/CIPLE exam) — required for grandchild route",
      "Criminal record certificate from every country you have resided in for more than 1 year in the past 15 years",
      "Declaration of community ties with Portugal (for grandchild route) — cultural, professional, or associational connections",
      "Completed nationality attribution form — submitted to the Instituto dos Registos e do Notariado (IRN)",
    ],
    notes: "The grandchild route (neto) requires genuine community ties and A2 Portuguese. The 2023 reforms tightened scrutiny of community ties declarations — vague statements are increasingly rejected. Joining a Portuguese cultural association or church community before applying strengthens the application.",
  },
  {
    slug: "spain-citizenship-by-descent",
    name: "Spain",
    universal: [
      "Your birth certificate with apostille and certified Spanish translation",
      "Parents' birth and marriage certificates with apostilles and translations",
    ],
    specific: [
      "Spanish ancestor's birth certificate from the Registro Civil in Spain or, for older records, the Archivo Histórico Nacional (AHN) or parish archives",
      "For Democratic Memory Law (Ley 20/2022) applications: evidence that ancestor went into exile for political, racial, or religious reasons — departure documents, refugee records, republican party or union membership records",
      "Completed application form — submitted to the Spanish consulate with jurisdiction over your place of residence",
      "Criminal record certificate from your country of residence (antecedentes penales)",
    ],
    notes: "All foreign documents require certified Spanish translations by an official translator (traductor jurado). The Democratic Memory Law application window opened in 2023 and procedures are still being refined — confirm current requirements with your local Spanish consulate.",
  },
  {
    slug: "greece-citizenship-by-descent",
    name: "Greece",
    universal: [
      "Your birth certificate with apostille and certified Greek translation",
      "Birth and marriage certificates for each generation with apostilles and certified translations",
    ],
    specific: [
      "Greek ancestor's birth certificate and dimotologio (municipal register) extract — from the municipality where the ancestor was registered",
      "Evidence of Greek citizenship — dimotologio extract is the primary proof of citizenship in Greek law",
      "Completed application form — submitted to the Greek consulate or the Directorate of Nationality of the Ministry of Interior",
      "For omogenis (ethnic Greek) naturalization: proof of Greek ethnic origin and continuous cultural ties",
    ],
    notes: "The dimotologio (municipal register) is the cornerstone of Greek citizenship practice. If your ancestor emigrated before registering in a municipality, establishing the connection can be complex. Some diaspora Greeks had their families entered in the registers of their home village — contact the historical municipality directly.",
  },
  {
    slug: "czech-republic-citizenship-by-descent",
    name: "Czech Republic",
    universal: [
      "Your birth certificate with apostille and certified Czech translation",
      "Birth and marriage certificates for each generation with apostilles and certified translations",
    ],
    specific: [
      "Czech or Czechoslovak ancestor's civil registry records — from Národní Archiv or regional state archive (SOA)",
      "Evidence of Czech/Czechoslovak citizenship — pre-1993 Czechoslovak passport, civil registry extract, or state archive record",
      "For the declaration route (Act 193/1999): evidence that citizenship was involuntarily lost (e.g., via the Beneš Decrees or the 1993 Czech–Slovak split)",
      "Completed application — submitted to the regional authority (krajský úřad) in the Czech Republic, or Czech consulate abroad for the declaration route",
    ],
    notes: "The 1993 split of Czechoslovakia is a common complication: Czechoslovak citizens were automatically allocated Czech or Slovak citizenship based on republic-of-birth records. Documents from the Czechoslovak era (before 1993) are now split between Czech and Slovak archives.",
  },
  {
    slug: "slovakia-citizenship-by-descent",
    name: "Slovakia",
    universal: [
      "Your birth certificate with apostille and certified Slovak translation",
      "Birth and marriage certificates for each generation with apostilles and certified translations",
    ],
    specific: [
      "Slovak ancestor's birth certificate from the matrika (civil registry) of the relevant Slovak municipality",
      "Evidence of Slovak citizenship — pre-1993 Czechoslovak passport, registry extract from Slovak civil registry office",
      "Criminal record certificate from your country of residence",
      "Completed application — submitted to the Ministry of Interior of the Slovak Republic, or Slovak military/police for certain categories",
    ],
    notes: "Slovakia's dual citizenship rules are conditional: gaining Slovak citizenship while holding another nationality is fine. The risk runs the other way — if you later voluntarily naturalise in a third country, Slovak citizenship may be automatically lost unless you have been resident there for 5+ years (a key exception added by the 2022 reform). Read the dual citizenship rules carefully before proceeding.",
  },
  {
    slug: "lithuania-citizenship-by-descent",
    name: "Lithuania",
    universal: [
      "Your birth certificate with apostille and certified Lithuanian translation",
      "Birth and marriage certificates for each generation with apostilles and certified translations",
    ],
    specific: [
      "Lithuanian ancestor's civil registry records — from the Lithuanian State Historical Archives (LVIA) or Lithuanian Special Archives (LYA)",
      "Evidence that ancestor was a Lithuanian citizen before 15 June 1940 (Soviet occupation date)",
      "Evidence that ancestor (or descendants) departed Lithuania before 11 March 1990",
      "Completed restoration application — submitted to the Migration Department of Lithuania or Lithuanian consulate abroad",
    ],
    notes: "Lithuania requires unbroken documentation of the emigration chain between 1940 and 1990. The Lithuanian archives have good digitisation of pre-war records, and many records are accessible online via Epaveldas and the Lithuanian archives portal.",
  },
  {
    slug: "latvia-citizenship-by-descent",
    name: "Latvia",
    universal: [
      "Your birth certificate with apostille and certified Latvian translation",
      "Birth and marriage certificates for each generation with apostilles and certified translations",
    ],
    specific: [
      "Evidence that ancestor was registered in the Latvian People's Register on 17 June 1940 — obtainable from the Latvian State Historical Archive (LVVA) in Riga",
      "Completed application — submitted to the Office of Citizenship and Migration Affairs (OCMA/PMLP) in Latvia, or Latvian Embassy or consulate abroad",
      "Proof of relationship for each generation (birth certificates, marriage certificates showing name changes)",
    ],
    notes: "The People's Register (Iedzīvotāju reģistrs) entries from 1940 are the cornerstone of Latvian descent claims. The LVVA archive in Riga is the most important resource — requests can be made remotely in English for a fee.",
  },
  {
    slug: "estonia-citizenship-by-descent",
    name: "Estonia",
    universal: [
      "Your birth certificate with apostille and certified Estonian translation",
      "Birth and marriage certificates for each generation with apostilles and certified translations",
    ],
    specific: [
      "Proof that ancestor held Estonian citizenship under the 1938 Constitution (before 16 June 1940 occupation) — from the National Archives of Estonia (Rahvusarhiiv/RA)",
      "Evidence that the citizenship chain was not broken by voluntary acquisition of Soviet citizenship",
      "Completed application — submitted to the Police and Border Guard Board (PPA) in Estonia, or Estonian Embassy abroad",
    ],
    notes: "The National Archives of Estonia (ra.ee) has an excellent online search system (AIS) for pre-war records. Many citizenship and civil registry records from the 1920s–1940s have been digitised and are searchable without a fee.",
  },
];

export default function DocumentsChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <header className="bg-white dark:bg-zinc-900 shadow-sm">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-green-700 dark:text-green-400">
              Heritage Passport Finder
            </Link>
            <Link href="/apostille-guide" className="text-zinc-600 dark:text-zinc-300 hover:text-green-700 text-sm">
              Apostille Guide →
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-900 dark:text-zinc-100">Document Checklist</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Document Checklist for European Citizenship by Descent
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
            Last updated: March 2026 · <Link href="/apostille-guide" className="text-green-700 dark:text-green-400 hover:underline">Apostille guide →</Link>
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-10">
            Before starting any citizenship by descent application, build a complete document package. Use the checklists below to identify what you need for each country — then see our <Link href="/apostille-guide" className="text-green-700 dark:text-green-400 hover:underline">apostille guide</Link> for how to authenticate each document.
          </p>

          {/* Universal rules */}
          <section className="mb-10 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Universal Rules for All Countries</h2>
            <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              {[
                "Request certified copies — originals or certified copies from the issuing authority. Regular photocopies are not accepted.",
                "Apostille foreign documents — any document issued in a country other than the destination must be apostilled. See the apostille guide for your country.",
                "Certified translations required — most European countries require all non-native-language documents to be translated by a sworn or certified translator.",
                "Apostille before translating — always apostille the certified copy first, then have the apostilled copy translated.",
                "Order extras — get 3 certified copies of each document. You may need them for multiple countries or agencies.",
                "Death certificates matter — include death certificates for all deceased ancestors in the chain, especially the Italian/Irish/German ancestor themselves.",
                "Name consistency — any discrepancy in names between documents (anglicisation, spelling variations, maiden names) should be addressed with a statutory declaration.",
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-3"><span className="text-green-600 mt-0.5 font-bold">→</span><span>{rule}</span></li>
              ))}
            </ul>
          </section>

          {/* Jump links */}
          <nav className="mb-10">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Jump to Country</h2>
            <div className="flex flex-wrap gap-2">
              {checklists.map((c) => (
                <a key={c.slug} href={`#${c.slug}`} className="px-3 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm text-zinc-700 dark:text-zinc-300 hover:border-green-500 hover:text-green-700 transition-colors">
                  {c.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Country checklists */}
          <div className="space-y-8">
            {checklists.map((c) => (
              <section key={c.slug} id={c.slug} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6 scroll-mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{c.name}</h2>
                  <Link href={`/${c.slug}`} className="text-green-700 dark:text-green-400 hover:underline text-sm">
                    Full guide →
                  </Link>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 text-sm uppercase tracking-wide mb-2">Documents for Every Generation</h3>
                  <ul className="space-y-2">
                    {c.universal.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-green-600 mt-0.5 flex-shrink-0">☐</span><span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-zinc-700 dark:text-zinc-300 text-sm uppercase tracking-wide mb-2">Country-Specific Requirements</h3>
                  <ul className="space-y-2">
                    {c.specific.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-amber-500 mt-0.5 flex-shrink-0">☐</span><span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {c.notes && (
                  <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3 text-sm text-zinc-600 dark:text-zinc-400 border-l-4 border-green-500">
                    <strong>Note:</strong> {c.notes}
                  </div>
                )}
              </section>
            ))}
          </div>

          <section className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mt-10 mb-10">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              Not Sure Which Country Applies to Your Ancestry?
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Use our free eligibility checker to identify which European citizenship routes are open to you before you start gathering documents.
            </p>
            <Link href="/#eligibility" className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors">
              Start Free Eligibility Check
            </Link>
          </section>

          <nav aria-label="Related guides" className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Related Guides</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/apostille-guide", label: "Apostille Guide: How to Authenticate Documents" },
                { href: "/italy-1948-rule", label: "Italy 1948 Rule" },
                { href: "/german-article-116-citizenship", label: "Germany Article 116 Citizenship" },
                { href: "/ireland-foreign-births-register", label: "Ireland Foreign Births Register" },
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
