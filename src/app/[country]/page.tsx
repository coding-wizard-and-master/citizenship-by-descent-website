import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ country: string }> };

type CountryData = {
  title: string;
  description: string;
  intro: string;
  eligibilityOverview: string;
  keyRequirements: string[];
  documents: string[];
  timeline: string;
  commonPitfalls: string[];
  officialLinks: { name: string; url: string }[];
  faqAnswers: {
    whoQualifies: string;
    documentsNeeded: string;
    processingTime: string;
  };
  // Tier-2 SEO expansion fields
  legalBasis: string;          // statute / law name and number
  dualCitizenshipRules: string;
  costEstimate: string;
  keyArchives: { name: string; url: string }[];
  relatedCountries: string[];  // slugs for internal linking
};

const countryData: Record<string, CountryData> = {
  "italy-citizenship-by-descent": {
    title: "Italian Citizenship by Descent",
    description: "Complete guide to Italian citizenship by descent (jure sanguinis): eligibility requirements, the 1948 rule, required documents, and step-by-step application process.",
    intro: "Italian citizenship by descent, known as jure sanguinis (right of blood), allows descendants of Italian citizens to claim citizenship regardless of how many generations have passed. Italy has no generational limit, making it one of the most accessible citizenship-by-descent programs in Europe.",
    eligibilityOverview: "You may qualify for Italian citizenship if you have a direct-line Italian ancestor who was born in Italy and did not naturalize as a citizen of another country before the birth of the next person in your lineage. The citizenship passes through blood, meaning each generation must have been born before their Italian parent naturalized elsewhere. A critical consideration is the 1948 rule: prior to January 1, 1948, Italian citizenship could only pass through the male line. If your claim passes through a female ancestor whose child was born before this date, you must pursue your case through the Italian courts rather than the standard administrative process.",
    keyRequirements: [
      "Direct bloodline to an Italian-born ancestor",
      "No break in the citizenship chain through naturalization",
      "For female-line claims before 1948, court petition required",
      "Ability to obtain all civil records from Italy and other countries",
      "No criminal record that would disqualify you"
    ],
    documents: [
      "Birth certificate of your Italian ancestor from the Italian comune",
      "Marriage certificate(s) for each generation",
      "Birth certificates for each person in the lineage down to you",
      "Naturalization certificate or certificate of non-naturalization for the Italian ancestor",
      "Death certificates where applicable",
      "All documents must be certified, apostilled, and translated into Italian"
    ],
    timeline: "The process typically takes 1-3 years depending on whether you apply through an Italian consulate abroad or directly in Italy. Consulate wait times vary significantly by location—some have multi-year backlogs while others process applications within months. Applying in Italy (requires establishing residency) can be faster, often 3-6 months.",
    commonPitfalls: [
      "Ancestor naturalized before their child was born, breaking the chain",
      "Missing or destroyed records in Italian archives",
      "Name discrepancies between documents requiring legal correction",
      "1948 cases require expensive court proceedings in Rome",
      "Consulate appointment availability can delay applications by years"
    ],
    officialLinks: [
      { name: "Italian Ministry of Foreign Affairs", url: "https://www.esteri.it/en/" },
      { name: "AIRE Registry Information", url: "https://www.esteri.it/en/italians-abroad/aire/" },
      { name: "Find Your Italian Consulate", url: "https://www.esteri.it/en/diplomatic-missions/" }
    ],
    faqAnswers: {
      whoQualifies: "Anyone with a direct bloodline ancestor who was an Italian citizen at the time of their child's birth qualifies. There is no generational limit. However, if your Italian ancestor naturalized as a citizen of another country before the next generation was born, the citizenship chain is broken. Additionally, claims through female ancestors where the child was born before January 1, 1948 must be pursued through Italian courts.",
      documentsNeeded: "You need certified vital records (birth, marriage, death) for every person in your lineage from your Italian ancestor to yourself. From Italy, you need the ancestor's birth certificate from their comune and proof they did not naturalize before your line continued. All foreign documents require apostilles and certified Italian translations.",
      processingTime: "Processing times vary dramatically. Italian consulates abroad can take 1-4 years depending on location and backlog. The fastest route is often establishing temporary residency in Italy and applying directly to the local comune, which typically processes applications in 3-6 months."
    },
    legalBasis: "Law 91/1992 (Legge sulla cittadinanza italiana) governs modern jure sanguinis claims. Law 379/2000 provided a special window for descendants of those who emigrated before 1948. Court-route cases are tried under Constitutional Court rulings from 1983 and 2009 that struck down the male-only pre-1948 rule.",
    dualCitizenshipRules: "Italy fully permits dual (or multiple) citizenship. Obtaining Italian citizenship does not require you to renounce your current nationality, and Italy will not strip your citizenship if you acquire another. This has been the rule since 1992 and makes Italy one of the most popular targets for ancestry-based claims.",
    costEstimate: "Consular route: typically €300–€600 in document fees (apostilles, translations, certified copies) plus any attorney fees (US attorneys charge $2,000–$8,000 for full-service packages). In-Italy residency route adds accommodation costs for 3-6 months but avoids multi-year consulate backlogs. Court (1948) route costs €5,000–$15,000+ in Italian legal fees.",
    keyArchives: [
      { name: "Archivio di Stato (State Archives, Italy)", url: "https://www.archivi.beniculturali.it/" },
      { name: "ANSC — National Civil Status Archive", url: "https://www.ansc.interno.gov.it/" },
      { name: "FamilySearch Italy Records", url: "https://www.familysearch.org/en/wiki/Italy_Civil_Registration" }
    ],
    relatedCountries: ["ireland-citizenship-by-descent", "germany-citizenship-by-descent", "poland-citizenship-by-descent", "spain-citizenship-by-descent"]
  },
  "ireland-citizenship-by-descent": {
    title: "Irish Citizenship by Descent",
    description: "Complete guide to Irish citizenship by descent: Foreign Births Register, grandparent rule, required documentation, and application process explained.",
    intro: "Irish citizenship can be claimed by descent through parents or grandparents born on the island of Ireland. The process involves registering with the Foreign Births Register (FBR), which extends Irish citizenship to those whose connection is through a grandparent.",
    eligibilityOverview: "If either of your parents was an Irish citizen at the time of your birth, you are automatically an Irish citizen—you simply need to apply for a passport as proof. If your parent was not born in Ireland but became a citizen through the Foreign Births Register before your birth, you are also a citizen. If your grandparent was born in Ireland but your parent was not, you can register in the FBR to become a citizen yourself. However, great-grandparent connections do not qualify unless your parent registered before your birth.",
    keyRequirements: [
      "At least one grandparent born on the island of Ireland (Republic or Northern Ireland)",
      "Parent must have registered in FBR before your birth for great-grandparent claims",
      "Proof of identity and relationship to Irish ancestor",
      "No criminal disqualifications"
    ],
    documents: [
      "Your full birth certificate",
      "Your parents' birth and marriage certificates",
      "Your Irish grandparent's birth certificate",
      "Your grandparents' marriage certificate",
      "Photographic ID (passport or driver's license)",
      "Proof of address",
      "Completed FBR application form"
    ],
    timeline: "Foreign Births Register applications currently take approximately 12-18 months to process due to high demand. Passport applications for those already recognized as citizens are much faster, typically 4-8 weeks.",
    commonPitfalls: [
      "Great-grandparent claims only work if parent registered before your birth",
      "Northern Ireland births count—don't assume they don't",
      "Name changes require additional legal documentation",
      "Adopted persons have specific additional requirements",
      "Processing times have increased significantly in recent years"
    ],
    officialLinks: [
      { name: "Department of Foreign Affairs - Citizenship", url: "https://www.dfa.ie/citizenship/" },
      { name: "Foreign Births Register", url: "https://www.dfa.ie/citizenship/born-abroad/registering-a-foreign-birth/" },
      { name: "Irish Passport Service", url: "https://www.dfa.ie/passports/" }
    ],
    faqAnswers: {
      whoQualifies: "You automatically qualify if a parent was an Irish citizen at your birth. If your grandparent was born in Ireland but your parent was not, you can register in the Foreign Births Register to claim citizenship. Great-grandparent claims only work if your parent registered before you were born, creating an unbroken chain.",
      documentsNeeded: "You need your birth certificate, your parents' birth and marriage certificates, your Irish grandparent's birth certificate, and your grandparents' marriage certificate. All documents must be original or certified copies. Foreign documents may require apostilles.",
      processingTime: "Foreign Births Register applications currently take 12-18 months. Once registered, passport applications take 4-8 weeks for standard processing."
    },
    legalBasis: "The Irish Nationality and Citizenship Act 1956 (as amended) is the primary legislation. The Foreign Births Register was established under the Irish Nationality and Citizenship Act 1986. Section 7 of the 1956 Act governs citizenship by birth to an Irish parent; Section 8 governs citizenship through the FBR for grandchildren.",
    dualCitizenshipRules: "Ireland permits dual citizenship without restriction. You do not need to renounce your existing nationality to become Irish, and Ireland will not require you to give up Irish citizenship if you later acquire another. Over 700,000 people hold Irish passports alongside another nationality.",
    costEstimate: "FBR application fee: €278 (as of 2025). Certified document copies: €50–€150. Apostilles where required: €20–€40 per document. Irish passport fee after registration: €80 (standard). Total out-of-pocket for a typical grandparent claim: €500–€900 without a solicitor.",
    keyArchives: [
      { name: "General Register Office Ireland (GRO)", url: "https://www.gov.ie/en/organisation/general-register-office/" },
      { name: "Public Record Office of Northern Ireland (PRONI)", url: "https://www.nidirect.gov.uk/proni" },
      { name: "IrishGenealogy.ie — Civil Records Search", url: "https://www.irishgenealogy.ie/" }
    ],
    relatedCountries: ["italy-citizenship-by-descent", "germany-citizenship-by-descent", "uk-related", "portugal-citizenship-by-descent"]
  },
  "hungary-citizenship-by-descent": {
    title: "Hungarian Citizenship by Descent",
    description: "Guide to Hungarian citizenship by ancestry: simplified naturalization process, language requirements, required documents, and no generational limit explained.",
    intro: "Hungary offers one of Europe's most accessible citizenship-by-descent programs through simplified naturalization. If you can prove Hungarian ancestry—regardless of how many generations back—and demonstrate basic Hungarian language skills, you may qualify for citizenship.",
    eligibilityOverview: "Hungary's simplified naturalization process is available to anyone who can prove they had an ancestor who was a Hungarian citizen or lived in territories that were part of historical Hungary (particularly relevant for pre-1920 Trianon borders). Unlike many countries, there is no generational limit. The key requirement beyond proving ancestry is demonstrating basic conversational Hungarian during an interview. This is not a formal language test but rather a casual conversation with a consular officer.",
    keyRequirements: [
      "Proof of Hungarian ancestry (no generational limit)",
      "Basic conversational Hungarian language ability",
      "Clean criminal record",
      "Ancestor lived in historical Hungarian territories (pre-1920 borders apply)",
      "Complete documentation chain proving lineage"
    ],
    documents: [
      "Birth certificates for each generation linking you to your Hungarian ancestor",
      "Marriage certificates for each generation",
      "Hungarian ancestor's birth certificate or other proof of Hungarian citizenship/residence",
      "Your valid passport or ID",
      "Completed application forms",
      "Criminal background check from your country of residence"
    ],
    timeline: "The simplified naturalization process typically takes 3-6 months once your application is submitted and you've passed the language interview. Document gathering can take several additional months depending on archive accessibility.",
    commonPitfalls: [
      "Underestimating the Hungarian language requirement",
      "Difficulty obtaining records from areas now in Romania, Slovakia, Serbia, or Ukraine",
      "Name spelling variations in old Hungarian records",
      "Missing church records when civil records are unavailable",
      "Not practicing Hungarian conversation before the interview"
    ],
    officialLinks: [
      { name: "Hungarian Consular Services", url: "https://konzuliszolgalat.kormany.hu/en" },
      { name: "Simplified Naturalization Information", url: "https://konzuliszolgalat.kormany.hu/egyszerusitett-honositas" },
      { name: "Hungary Ministry of Foreign Affairs", url: "https://mfa.gov.hu/eng" }
    ],
    faqAnswers: {
      whoQualifies: "Anyone with Hungarian ancestry qualifies for simplified naturalization regardless of how many generations have passed. Your ancestor must have been a Hungarian citizen or lived in historical Hungarian territories (including pre-1920 areas now in neighboring countries). You must also demonstrate basic conversational Hungarian.",
      documentsNeeded: "You need birth and marriage certificates for each generation from your Hungarian ancestor to yourself. Your Hungarian ancestor's documents proving citizenship or residence in Hungary are essential. All documents should be certified, and foreign documents may need apostilles and translations.",
      processingTime: "Once you submit your application and pass the Hungarian language interview, citizenship is typically granted within 3-6 months. Document gathering and preparation may add several months to your total timeline."
    },
    legalBasis: "Act LV of 1993 on Hungarian Citizenship governs standard and simplified naturalization. The simplified (kedvezményes honosítás) pathway was introduced by amendment in 2010, allowing any person of Hungarian ancestry to apply without residency requirements, subject to the basic language interview.",
    dualCitizenshipRules: "Hungary fully permits dual and multiple citizenship. Naturalising in another country after obtaining Hungarian citizenship does not result in loss of Hungarian nationality. You are not required to renounce your existing citizenship when applying, and there is no legal mechanism under current Hungarian law that strips citizenship purely because you hold or later acquire another nationality.",
    costEstimate: "The simplified naturalization application is free of charge. Document costs (translations, apostilles, certified copies) typically run €300–€700 depending on the number of generations. Hungarian language tutoring if needed: €500–€2,000. Overall out-of-pocket costs are among the lowest of any EU citizenship-by-descent program.",
    keyArchives: [
      { name: "Hungarian National Archives (MNL)", url: "https://mnl.gov.hu/mnl/ol/english_summary" },
      { name: "FamilySearch Hungary Records", url: "https://www.familysearch.org/en/wiki/Hungary_Civil_Registration" },
      { name: "Arcanum — Digitised Hungarian Historical Records", url: "https://www.arcanum.com/en/" }
    ],
    relatedCountries: ["slovakia-citizenship-by-descent", "czech-republic-citizenship-by-descent", "poland-citizenship-by-descent", "austria-related"]
  },
  "poland-citizenship-by-descent": {
    title: "Polish Citizenship by Descent",
    description: "Guide to Polish citizenship by descent: confirmation process, eligibility requirements, required documents, and how to prove your Polish ancestry.",
    intro: "Polish citizenship by descent allows individuals with Polish ancestors to confirm their citizenship status. Under Polish law, citizenship passes automatically through bloodline, meaning if your ancestor was Polish and never lost their citizenship, you may already be a Polish citizen—you just need official confirmation.",
    eligibilityOverview: "Poland operates on the principle of jus sanguinis, meaning citizenship passes by blood. If your parent, grandparent, or even great-grandparent was a Polish citizen and never lost that citizenship through naturalization, renunciation, or certain historical circumstances, you may already be a Polish citizen. The process involves confirming rather than acquiring citizenship. Key considerations include whether your ancestor lost citizenship by naturalizing abroad (particularly relevant for those who emigrated before 1951, as laws were different then) and whether citizenship was lost under communist-era regulations.",
    keyRequirements: [
      "Direct bloodline to a Polish citizen ancestor",
      "Ancestor did not lose Polish citizenship before the next generation was born",
      "Ability to document the complete lineage",
      "Understanding of historical citizenship laws affecting your ancestor's status"
    ],
    documents: [
      "Your birth certificate",
      "Birth and marriage certificates for each generation to your Polish ancestor",
      "Polish ancestor's birth certificate or proof of Polish citizenship",
      "Naturalization records or proof of non-naturalization",
      "Death certificates where applicable",
      "Your valid passport or ID",
      "All documents must be certified; foreign documents need apostilles and Polish translations"
    ],
    timeline: "Citizenship confirmation through the provincial governor (voivode) typically takes 6-12 months. Complex cases involving historical research or missing documents may take longer. Some applicants choose to apply through Polish courts, which can take 12-24 months.",
    commonPitfalls: [
      "Ancestor naturalized abroad and lost Polish citizenship",
      "Difficulty obtaining records from territories now in Ukraine, Belarus, or Lithuania",
      "Communist-era loss of citizenship for certain emigrants",
      "Name spelling variations between Polish and anglicized versions",
      "Lack of documentation of ancestor's Polish citizenship status"
    ],
    officialLinks: [
      { name: "Polish Government - Citizenship Information", url: "https://www.gov.pl/web/mswia-en/citizenship" },
      { name: "Polish Diplomatic Missions", url: "https://www.gov.pl/web/dyplomacja" },
      { name: "Civil Registry Information", url: "https://www.gov.pl/web/gov/uzyskaj-odpis-aktu-stanu-cywilnego" }
    ],
    faqAnswers: {
      whoQualifies: "You may qualify if you have a direct bloodline ancestor who held Polish citizenship and did not lose it before the next generation was born. Poland recognizes citizenship passing through unlimited generations as long as the chain remains unbroken. Historical factors—particularly emigration dates and naturalization—significantly affect eligibility.",
      documentsNeeded: "You need certified vital records (birth, marriage, death) for every generation from your Polish ancestor to yourself. Proof of your ancestor's Polish citizenship and documentation showing they did not naturalize elsewhere are crucial. All foreign documents require apostilles and certified Polish translations.",
      processingTime: "Standard confirmation through a voivode takes 6-12 months. Court applications for complex cases may take 12-24 months. Document gathering from Polish and foreign archives can add several months to your preparation time."
    },
    legalBasis: "The Act on Polish Citizenship of 2 April 2009 (Dz.U. 2017 poz. 1462) governs modern citizenship confirmation. For ancestors who emigrated before 1951, the Act of 20 January 1920 and subsequent decrees are relevant. The Karta Polaka Act of 7 September 2007 provides an alternative proof-of-origin document for ethnic Poles who do not meet citizenship criteria.",
    dualCitizenshipRules: "Poland permits dual citizenship in practice. While Polish law does not explicitly recognise multiple nationality, it does not require renunciation of a foreign nationality when confirming or acquiring Polish citizenship. Polish citizens who naturalise abroad do not automatically lose Polish nationality under current law.",
    costEstimate: "Voivode (governor) confirmation fee: PLN 219 (~€50). Certified translations per document: €30–€60. Apostilles: €15–€40 per document. Total document preparation for a typical 3-generation claim: €400–€900. Attorneys specialising in Polish citizenship: €1,500–€4,000 for a full-service package.",
    keyArchives: [
      { name: "Archiwum Główne Akt Dawnych (AGAD — Central Archives of Historical Records)", url: "https://www.agad.gov.pl/" },
      { name: "Polish State Archives (Archiwa Państwowe)", url: "https://www.archiwa.gov.pl/" },
      { name: "Geneteka — Polish Genealogy Database", url: "https://geneteka.genealodzy.pl/" }
    ],
    relatedCountries: ["italy-citizenship-by-descent", "germany-citizenship-by-descent", "lithuania-citizenship-by-descent", "czech-republic-citizenship-by-descent"]
  },
  "germany-citizenship-by-descent": {
    title: "German Citizenship by Descent",
    description: "Complete guide to German citizenship by descent: eligibility paths, Article 116 restoration, declaration process, and required documentation.",
    intro: "German citizenship by descent offers multiple pathways depending on your family history. Standard descent claims, historical remedies for gender discrimination, and restoration rights for descendants of Nazi persecution victims each have specific requirements and processes.",
    eligibilityOverview: "German citizenship passes automatically to children born to German citizens, but historical laws created gaps that modern legislation has addressed. If you were excluded because citizenship passed through a German mother before 1975, or through an unmarried German father before 1993, you may claim citizenship through declaration. Descendants of those who lost German citizenship due to Nazi persecution (1933-1945) have restoration rights under Article 116(2) of the Basic Law. For standard claims, citizenship passes through each generation as long as the parent was German at the child's birth.",
    keyRequirements: [
      "Direct bloodline to a German citizen",
      "Ancestor was German at the time of their child's birth",
      "For births abroad after 1999: may need registration within one year",
      "For historical remedy claims: proof of exclusion under old laws",
      "For Article 116 claims: ancestor lost citizenship due to Nazi persecution"
    ],
    documents: [
      "Birth certificates for each generation in the lineage",
      "Marriage certificates as applicable",
      "Proof of German citizenship for the ancestor (passport, ID, or citizenship certificate)",
      "Naturalization records or proof of non-naturalization",
      "For Article 116: evidence of persecution and citizenship loss",
      "Your valid passport or ID",
      "All documents need certification; foreign documents need apostilles and German translations"
    ],
    timeline: "Certificate of citizenship (Staatsangehörigkeitsausweis) applications typically take 12-24 months due to thorough verification. Declaration procedures may be faster. Article 116 restoration cases vary based on complexity of historical documentation.",
    commonPitfalls: [
      "Ancestor naturalized abroad and lost German citizenship",
      "Foreign-born children (after 1999) not registered within one year",
      "Missing documentation from WWII-era records",
      "Unclear citizenship status of ancestors born in former German territories",
      "Complex cases involving multiple types of claims"
    ],
    officialLinks: [
      { name: "Federal Office of Administration (BVA) - Citizenship", url: "https://www.bva.bund.de/EN/Home/home_node.html" },
      { name: "German Embassy - Citizenship Information", url: "https://www.germany.info/us-en/service/02-citizenship" },
      { name: "Article 116 Restoration Information", url: "https://www.bamf.de/EN/Themen/StaatsangehoerigkeitEinbuergerung/staatsangehoerigkeiteinbuergerung-node.html" }
    ],
    faqAnswers: {
      whoQualifies: "You qualify if a parent was German at your birth. Historical remedies exist if you were excluded due to gender discrimination in old laws (German mother before 1975, unmarried German father before 1993). Descendants of Nazi persecution victims can restore citizenship under Article 116(2). For births abroad after 1999 to German parents also born abroad, registration within one year may be required.",
      documentsNeeded: "You need birth and marriage certificates for each generation linking you to your German ancestor, plus proof of their German citizenship. Naturalization records are important to prove citizenship wasn't lost. Article 116 applicants need evidence of Nazi persecution. All foreign documents require apostilles and certified German translations.",
      processingTime: "Certificate of citizenship applications typically take 12-24 months. Declaration procedures are often faster. Complex Article 116 cases may take longer depending on historical documentation requirements."
    },
    legalBasis: "Citizenship is governed by the Staatsangehörigkeitsgesetz (StAG — Citizenship Act). Article 116(2) of the Basic Law (Grundgesetz) provides restoration rights to those denaturalised for political, racial, or religious reasons between 1933 and 1945. The 2021 amendment (§5 StAG) and the 2024 reform extended declaration rights to more descendants of persecuted persons and removed the previous prohibition on dual citizenship — Germany now fully permits multiple nationality.",
    dualCitizenshipRules: "As of June 2024, Germany officially permits dual citizenship following the reform of the Staatsangehörigkeitsgesetz. Previously, Germans who naturalised abroad typically lost German citizenship. Now, both Germans acquiring foreign nationality and foreigners naturalising as German may retain their original citizenship. Article 116 claimants have always been permitted to keep other nationalities.",
    costEstimate: "Staatsangehörigkeitsausweis (certificate of citizenship) application fee: €25. Declaration procedure fee: €25. Document costs (apostilles, certified translations): €400–€1,000 depending on the number of generations and countries involved. Attorneys or Rechtsanwälte for Article 116 cases: €2,000–€6,000.",
    keyArchives: [
      { name: "Bundesarchiv (Federal Archives of Germany)", url: "https://www.bundesarchiv.de/EN/" },
      { name: "Deutsche Dienststelle (WASt) — Military Records", url: "https://www.bundesarchiv.de/EN/Navigation/Finden/Deutsche-Dienststelle-WASt/deutsche-dienststelle-wast.html" },
      { name: "Archion — Church Records Germany", url: "https://www.archion.de/" }
    ],
    relatedCountries: ["italy-citizenship-by-descent", "austria-related", "poland-citizenship-by-descent", "czech-republic-citizenship-by-descent"]
  },
  "spain-citizenship-by-descent": {
    title: "Spanish Citizenship by Descent",
    description: "Guide to Spanish citizenship by descent: Democratic Memory Law, grandchildren of exiles, eligibility requirements, and application process.",
    intro: "Spanish citizenship by descent has been significantly expanded by the Democratic Memory Law (2022), which allows grandchildren of Spanish citizens who went into exile during the Civil War and Franco dictatorship to claim citizenship. Traditional descent rules also apply for children of Spanish citizens.",
    eligibilityOverview: "Children born to Spanish citizens are automatically Spanish by origin. The major expansion came through the Democratic Memory Law (Ley de Memoria Democrática), which opens citizenship to grandchildren and great-grandchildren of those who fled Spain due to the Civil War (1936-1939) or Franco regime. This also covers children of Spanish women who lost citizenship by marrying foreigners under pre-1978 law. The law provides a limited window for applications, so timely action is important.",
    keyRequirements: [
      "For standard claims: parent was Spanish at your birth",
      "For Democratic Memory Law: grandparent was Spanish who went into exile",
      "Also covers: children of Spanish women who lost citizenship by marriage pre-1978",
      "Ability to prove the exile or loss of citizenship",
      "No criminal record that would disqualify you"
    ],
    documents: [
      "Your birth certificate",
      "Birth and marriage certificates for connecting generations",
      "Spanish grandparent's birth certificate",
      "Evidence of exile (ship manifests, refugee documents, historical records)",
      "For pre-1978 marriage cases: marriage certificate showing loss of citizenship",
      "Your valid passport or ID",
      "Certificate of no criminal record",
      "All documents need apostilles and Spanish translations where applicable"
    ],
    timeline: "Democratic Memory Law applications are processed through Spanish consulates and typically take 6-12 months. The law has a limited application window, so check current deadlines. Standard citizenship recognition for children of Spanish citizens is generally faster.",
    commonPitfalls: [
      "Missing deadline for Democratic Memory Law applications",
      "Difficulty proving exile status of grandparent",
      "Records destroyed during Civil War or Franco era",
      "Complex cases involving multiple generations",
      "Confusion between citizenship by descent and citizenship by origin"
    ],
    officialLinks: [
      { name: "Spanish Ministry of Foreign Affairs", url: "https://www.exteriores.gob.es/" },
      { name: "Democratic Memory Law Information", url: "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Nacionalidad-por-la-Ley-de-Memoria-Democratica.aspx" },
      { name: "Spanish Consulate Locator", url: "https://www.exteriores.gob.es/es/EmbajadasConsulados/Paginas/index.aspx" }
    ],
    faqAnswers: {
      whoQualifies: "Children of Spanish citizens qualify automatically. The Democratic Memory Law extends eligibility to grandchildren of Spaniards who went into exile due to Civil War or Franco-era persecution, and children of Spanish women who lost citizenship by marrying foreigners before 1978. Applications have a limited window.",
      documentsNeeded: "You need vital records connecting you to your Spanish ancestor and proof of their Spanish citizenship. For Democratic Memory Law claims, evidence of exile is required—this can include ship manifests, refugee documentation, or historical records proving departure from Spain under persecution.",
      processingTime: "Democratic Memory Law applications typically take 6-12 months through Spanish consulates. Standard recognition for children of citizens is usually faster. Check current application deadlines as the law has a limited window."
    },
    legalBasis: "Spanish nationality is governed by the Civil Code (Código Civil), Articles 17–28. The Ley de Memoria Democrática (Law 20/2022, BOE 20 October 2022) replaced the earlier Historical Memory Law and opened a new window for grandchildren and great-grandchildren of exiles. Article 20 of the Civil Code governs origin-based nationality (jus sanguinis) for children of Spaniards.",
    dualCitizenshipRules: "Spanish law distinguishes between nationalities of origin and acquired nationalities. Spaniards who acquire another EU or Ibero-American nationality generally retain Spanish citizenship. However, Spaniards who voluntarily acquire a non-treaty nationality may lose Spanish citizenship unless they declare their intent to retain it within three years. Democratic Memory Law claimants typically retain their existing nationality.",
    costEstimate: "Consular registration fee for children of Spaniards: €30–€80. Democratic Memory Law application processing: free of charge at consulates for most applicants. Document costs (translations, apostilles, certified copies): €300–€800. Attorneys or gestorías specialising in DML claims: €800–€3,000.",
    keyArchives: [
      { name: "Archivo Histórico Nacional (AHN)", url: "https://www.culturaydeporte.gob.es/ahnacional/" },
      { name: "Registro Civil Central (Central Civil Registry)", url: "https://www.mjusticia.gob.es/es/ciudadanos/tramites/registro-civil-central" },
      { name: "PARES — Spanish State Archive Portal", url: "https://pares.mcu.es/" }
    ],
    relatedCountries: ["portugal-citizenship-by-descent", "italy-citizenship-by-descent", "luxembourg-citizenship-by-descent", "ireland-citizenship-by-descent"]
  },
  "portugal-citizenship-by-descent": {
    title: "Portuguese Citizenship by Descent",
    description: "Guide to Portuguese citizenship by descent: grandparent route, Sephardic Jewish heritage, language requirements, and application process.",
    intro: "Portuguese citizenship by descent is available through multiple pathways. Children and grandchildren of Portuguese citizens can claim citizenship, with the grandchild route requiring proof of language skills and community ties. Portugal also offers citizenship for descendants of Sephardic Jews expelled during the Inquisition.",
    eligibilityOverview: "Children born to Portuguese citizens acquire citizenship automatically. The grandchild route, expanded in recent years, allows those with Portuguese grandparents to claim citizenship by demonstrating effective ties to Portugal—typically through language proficiency (A2 level Portuguese) and knowledge of Portuguese culture. Descendants of Sephardic Jews who were expelled from Portugal can apply under a special law, though this route has stricter documentation and verification requirements.",
    keyRequirements: [
      "For children: parent was Portuguese at your birth",
      "For grandchildren: prove Portuguese grandparent and demonstrate community ties",
      "A2 Portuguese language certification for grandchild route",
      "For Sephardic heritage: genealogical proof of Sephardic Portuguese ancestry",
      "Clean criminal record from all countries of residence"
    ],
    documents: [
      "Your birth certificate",
      "Birth and marriage certificates connecting you to Portuguese ancestor",
      "Portuguese ancestor's birth certificate",
      "A2 Portuguese language certificate (for grandchild route)",
      "Criminal record certificates from all countries you've lived",
      "Proof of ties to Portuguese community (where applicable)",
      "Your valid passport or ID",
      "All documents need apostilles and Portuguese translations"
    ],
    timeline: "Grandchild route applications typically take 12-18 months to process. During this time, gathering the required A2 Portuguese certificate is advisable. Sephardic heritage applications have longer processing times due to additional verification requirements.",
    commonPitfalls: [
      "Underestimating A2 Portuguese language requirement",
      "Difficulty obtaining criminal records from multiple countries",
      "Missing documents from Portuguese archives",
      "Confusion about what constitutes effective ties to Portugal",
      "Sephardic route requires extensive genealogical documentation"
    ],
    officialLinks: [
      { name: "Portuguese Nationality Portal", url: "https://justica.gov.pt/Servicos/Nacionalidade" },
      { name: "Institute of Registries and Notaries (IRN)", url: "https://www.irn.mj.pt/" },
      { name: "Portuguese Consulate Locator", url: "https://www.portaldascomunidades.mne.pt/pt/rede-consular" }
    ],
    faqAnswers: {
      whoQualifies: "Children of Portuguese citizens qualify automatically. Grandchildren can apply if they demonstrate effective ties to Portugal, typically through A2 Portuguese language proficiency. Descendants of Sephardic Jews expelled during the Portuguese Inquisition have a separate pathway with specific genealogical requirements.",
      documentsNeeded: "You need vital records connecting you to your Portuguese ancestor, their Portuguese birth certificate, and your criminal records from all countries you've lived. The grandchild route requires an A2 Portuguese language certificate and evidence of community ties.",
      processingTime: "Grandchild route applications typically take 12-18 months. Children of Portuguese citizens receive faster processing. Sephardic heritage applications take longer due to additional genealogical verification."
    },
    legalBasis: "Portuguese nationality is governed by the Lei da Nacionalidade (Law 37/81, most recently amended by Law 41/2023). Article 1(1)(c) covers grandchild claims, introducing the requirement for A2 Portuguese proficiency and demonstrated community ties. The Sephardic route was introduced by Law 30-A/2015 and narrowed by reform in 2022 to require stronger genealogical proof.",
    dualCitizenshipRules: "Portugal permits dual citizenship without restriction. Portuguese citizens who naturalise elsewhere do not lose Portuguese nationality, and foreigners who become Portuguese are not required to renounce prior citizenship. This makes Portugal particularly attractive for diaspora claimants, especially in Brazil, the United States, France, and the United Kingdom.",
    costEstimate: "Grandchild route application fee at IRN: €175. A2 Portuguese language exam (CAPLE/CIPLE): €80–€120. Criminal record certificates from multiple countries: €50–€150 total. Certified translations: €30–€60 per document. Estimated total: €600–€1,200 before any attorney fees.",
    keyArchives: [
      { name: "Arquivo Nacional Torre do Tombo (ANTT)", url: "https://antt.dglab.gov.pt/" },
      { name: "IAN/TT Digitarq — Online Archive Search", url: "https://digitarq.arquivos.pt/" },
      { name: "IRN — Institute of Registries and Notaries", url: "https://www.irn.mj.pt/" }
    ],
    relatedCountries: ["spain-citizenship-by-descent", "italy-citizenship-by-descent", "ireland-citizenship-by-descent", "luxembourg-citizenship-by-descent"]
  },
  "greece-citizenship-by-descent": {
    title: "Greek Citizenship by Descent",
    description: "Guide to Greek citizenship by descent: registration requirements, Greek origin naturalization, required documents, and application process.",
    intro: "Greek citizenship by descent allows those with Greek parents or grandparents to claim citizenship. If a parent was a Greek citizen at your birth, you may be entitled to citizenship. Greek origin (ethnic Greeks with grandparents from Greece) have a special naturalization path with reduced requirements.",
    eligibilityOverview: "Greece's citizenship-by-descent system primarily operates through the municipal registry (dimotologio). If your parent was registered as a Greek citizen, you are entitled to citizenship by birth. Those with Greek grandparents or great-grandparents may qualify as ethnic Greeks (omogenis) for a simplified naturalization process that waives residency requirements. The key is documenting your ancestor's presence in Greek municipal records.",
    keyRequirements: [
      "Parent registered as Greek citizen at your birth, OR",
      "Greek origin (grandparent or further back) for simplified naturalization",
      "Ancestor inscribed in Greek municipal registry (dimotologio)",
      "Proof of lineage through vital records",
      "No serious criminal record"
    ],
    documents: [
      "Your birth certificate",
      "Birth and marriage certificates for each generation",
      "Greek ancestor's registration in municipal registry",
      "Greek ancestor's birth certificate from Greece",
      "Marriage certificates of parents and grandparents",
      "Your valid passport or ID",
      "Criminal record certificate",
      "All foreign documents need apostilles and Greek translations"
    ],
    timeline: "Citizenship recognition for children of Greek citizens can take 6-12 months. Greek origin naturalization may take 12-24 months depending on documentation complexity and consulate processing times.",
    commonPitfalls: [
      "Ancestor not registered in Greek municipal records",
      "Records destroyed during WWII or Greek Civil War",
      "Name transliteration issues between Greek and Latin characters",
      "Confusion between citizenship and municipal registration",
      "Regional variations in record-keeping practices"
    ],
    officialLinks: [
      { name: "Greek Ministry of Interior - Citizenship", url: "https://www.ypes.gr/" },
      { name: "Greek Ministry of Foreign Affairs", url: "https://www.mfa.gr/en/" },
      { name: "Greek Consulate Services", url: "https://www.mfa.gr/en/appendix/greece-bilateral-relations/a.html" }
    ],
    faqAnswers: {
      whoQualifies: "You qualify if your parent was a Greek citizen (registered in municipal records) at your birth. Those with Greek grandparents or more distant ancestors may qualify as ethnic Greeks (omogenis) for simplified naturalization with no residency requirement.",
      documentsNeeded: "You need vital records connecting you to your Greek ancestor, proof of their registration in Greek municipal records (dimotologio), and their Greek birth certificate. All foreign documents require apostilles and certified Greek translations.",
      processingTime: "Children of Greek citizens typically receive recognition within 6-12 months. Greek origin naturalization applications take 12-24 months depending on documentation and consulate workload."
    },
    legalBasis: "Greek citizenship is governed by the Greek Citizenship Code (Law 3284/2004, as amended by Law 4332/2015). Article 1 provides for citizenship by descent (jus sanguinis) through a Greek-citizen parent. Article 7 of Law 2130/1993 governs the dimotologio (municipal register) as the authoritative registry. Greek-origin naturalization (omogenis) is governed by Presidential Decree 1/1998.",
    dualCitizenshipRules: "Greece permits dual citizenship. Greek citizens who acquire another nationality do not automatically lose Greek nationality, and foreign nationals who naturalise as Greek are not required to renounce prior citizenship. The Greek diaspora — particularly in the United States, Australia, Germany, and the United Kingdom — widely holds dual nationality.",
    costEstimate: "Citizenship recognition or registration at a Greek consulate: €30–€100 in fees. Authenticated copies of Greek municipal records: €3–€10 per page. Apostilles in your home country: €15–€40 per document. Certified translations into Greek: €60–€120 per document. Total for a straightforward parent-descent claim: €300–€700.",
    keyArchives: [
      { name: "General State Archives of Greece (GAK)", url: "https://archives.gov.gr/" },
      { name: "Greek Municipal Registers (Dimotologio) — via local Dimoi", url: "https://www.ypes.gr/" },
      { name: "FamilySearch Greece Records", url: "https://www.familysearch.org/en/wiki/Greece_Civil_Registration" }
    ],
    relatedCountries: ["italy-citizenship-by-descent", "germany-citizenship-by-descent", "hungary-citizenship-by-descent", "poland-citizenship-by-descent"]
  },
  "lithuania-citizenship-by-descent": {
    title: "Lithuanian Citizenship by Descent",
    description: "Guide to Lithuanian citizenship by descent: restoration of citizenship, eligibility requirements for pre-1940 ancestors, and application process.",
    intro: "Lithuanian citizenship can be restored to descendants of Lithuanian citizens who held citizenship before Soviet occupation in 1940. This restoration process recognizes those whose ancestors left Lithuania during the Soviet era and preserves their right to reclaim citizenship.",
    eligibilityOverview: "If your parent, grandparent, or great-grandparent was a Lithuanian citizen before June 15, 1940 (the date of Soviet occupation), and they or their descendants left Lithuania before March 11, 1990 (restoration of independence), you may be eligible to restore Lithuanian citizenship. The key is proving your ancestor held citizenship before the Soviet period and that they departed Lithuania involuntarily or for political reasons during Soviet rule.",
    keyRequirements: [
      "Ancestor was Lithuanian citizen before June 15, 1940",
      "Ancestor (or their descendants) left Lithuania before March 11, 1990",
      "Departure was involuntary or due to Soviet-era circumstances",
      "Complete documentation of lineage and ancestor's citizenship",
      "Basic Lithuanian language proficiency (for some cases)"
    ],
    documents: [
      "Your birth certificate",
      "Birth and marriage certificates for each generation to Lithuanian ancestor",
      "Lithuanian ancestor's birth certificate or citizenship proof",
      "Evidence of departure from Lithuania",
      "Historical documents showing ancestor's pre-1940 citizenship",
      "Your valid passport or ID",
      "All documents need apostilles and Lithuanian translations"
    ],
    timeline: "Citizenship restoration typically takes 6-12 months after submission of a complete application. Document gathering from Lithuanian archives may add considerable time to preparation.",
    commonPitfalls: [
      "Difficulty proving pre-1940 citizenship status",
      "Records destroyed during WWII or Soviet period",
      "Ancestor may have lost citizenship under Soviet law",
      "Confusion about Lithuanian vs. Soviet citizenship after 1940",
      "Need to prove involuntary departure during Soviet era"
    ],
    officialLinks: [
      { name: "Migration Department of Lithuania", url: "https://www.migracija.lt/en" },
      { name: "Lithuanian Ministry of Foreign Affairs", url: "https://www.urm.lt/default/en/" },
      { name: "Lithuanian Archives", url: "https://www.archyvai.lt/en/" }
    ],
    faqAnswers: {
      whoQualifies: "Descendants of Lithuanian citizens who held citizenship before June 15, 1940, and who (or whose descendants) left Lithuania before March 11, 1990, may restore citizenship. The emphasis is on those who departed due to Soviet occupation or persecution.",
      documentsNeeded: "You need vital records connecting you to your Lithuanian ancestor and evidence of their pre-1940 Lithuanian citizenship. Historical documents proving departure from Lithuania during the Soviet period are also required. All foreign documents need apostilles and Lithuanian translations.",
      processingTime: "Citizenship restoration applications typically take 6-12 months to process. Document gathering from Lithuanian and other archives may add several months to preparation time."
    },
    legalBasis: "Lithuanian citizenship is governed by the Law on Citizenship of the Republic of Lithuania (Law No. IX-1078, as amended). Article 7 governs restoration of citizenship for persons and their descendants who were citizens before June 15, 1940, and left Lithuania before March 11, 1990. The Constitutional Court ruling of 2002 (Case No. 9/01) confirmed broad restitution rights for diaspora Lithuanians.",
    dualCitizenshipRules: "Lithuania imposes one of the stricter dual-citizenship regimes in the EU. The general rule is that Lithuanians who voluntarily acquire another nationality lose Lithuanian citizenship. Exceptions apply to citizens who left Lithuania before March 11, 1990 (the restoration-of-independence date) and their descendants — these individuals may retain or restore Lithuanian citizenship while holding another nationality under Article 7 of the Citizenship Law.",
    costEstimate: "Citizenship restoration application fee: €29. Certified translations per document: €30–€70. Apostilles: €15–€40 per document. Lithuanian Archives research fees (if ordering records remotely): €15–€50 per record. Total preparation costs for a typical claim: €400–€1,000.",
    keyArchives: [
      { name: "Lithuanian State Historical Archives (LVIA)", url: "https://www.archyvai.lt/en/lvia.html" },
      { name: "Lithuanian Special Archives (LYA)", url: "https://www.archyvai.lt/en/lya.html" },
      { name: "Epaveldas — Lithuanian Digital Heritage Library", url: "https://www.epaveldas.lt/" }
    ],
    relatedCountries: ["latvia-citizenship-by-descent", "estonia-citizenship-by-descent", "poland-citizenship-by-descent", "germany-citizenship-by-descent"]
  },
  "estonia-citizenship-by-descent": {
    title: "Estonian Citizenship by Descent",
    description: "Complete guide to Estonian citizenship by descent: eligibility requirements, the pre-1940 citizenship rule, required documents, and the application process through the Police and Border Guard Board.",
    intro: "Estonia allows descendants of citizens who held citizenship before the Soviet occupation on June 16, 1940 to restore or reclaim Estonian nationality. The process is managed through Estonia's Police and Border Guard Board and generally requires proof of pre-occupation citizenship and an unbroken family link to the applicant.",
    eligibilityOverview: "Estonian citizenship by descent applies primarily to direct-line descendants whose ancestor held Estonian citizenship under the 1938 Constitution — that is, before the Soviet occupation of June 16, 1940. The descendant (or the ancestor) must not have voluntarily acquired Soviet citizenship, which would have broken the chain. Estonia also has a separate naturalization track, but the descent route is available to those meeting the lineage requirement. Dual citizenship is generally permitted for citizenship-by-descent cases.",
    keyRequirements: [
      "Ancestor held Estonian citizenship before June 16, 1940",
      "Unbroken direct lineage from that ancestor to the applicant",
      "Ancestor did not voluntarily accept Soviet citizenship",
      "Ability to document the lineage with official records",
      "No criminal disqualifications under Estonian law"
    ],
    documents: [
      "Birth certificates for each generation in the lineage",
      "Marriage certificates linking each generation",
      "Evidence of ancestor's pre-1940 Estonian citizenship (state registers, documents from National Archives of Estonia)",
      "Death certificates where applicable",
      "Valid passport or ID of the applicant",
      "All foreign documents must be apostilled and translated into Estonian"
    ],
    timeline: "Applications submitted through Estonian consulates or the Police and Border Guard Board typically take 6-12 months. Gathering historical records from the National Archives of Estonia can add significant time to the preparation phase.",
    commonPitfalls: [
      "Ancestor voluntarily acquired Soviet citizenship, breaking the chain",
      "Records lost or destroyed during Soviet occupation",
      "Name and place-name discrepancies between historical and modern documents",
      "Confusion over which generation held citizenship before 1940",
      "Difficulty obtaining pre-war civil records from foreign archives"
    ],
    officialLinks: [
      { name: "Police and Border Guard Board — Citizenship", url: "https://www.politsei.ee/en/instructions/citizenship" },
      { name: "National Archives of Estonia", url: "https://www.ra.ee/en/" },
      { name: "Ministry of the Interior — Estonian Citizenship", url: "https://www.siseministeerium.ee/en/citizenship" }
    ],
    faqAnswers: {
      whoQualifies: "Descendants of Estonian citizens who held citizenship under the 1938 Constitution (before Soviet occupation on June 16, 1940) may be eligible. Each generation in the chain must not have voluntarily acquired Soviet citizenship. Adopted persons and those with dual citizenship in certain countries may face additional requirements.",
      documentsNeeded: "You need vital records (birth, marriage, death certificates) for every generation from your Estonian ancestor to yourself, plus proof that the ancestor held pre-1940 Estonian citizenship. Estonian National Archives records are the primary source. All non-Estonian documents require apostilles and certified Estonian translations.",
      processingTime: "The process typically takes 6-12 months once documents are filed with the Police and Border Guard Board. Allow additional months to locate and obtain pre-war records from the National Archives of Estonia and any other countries involved."
    },
    legalBasis: "Estonian citizenship is governed by the Citizenship Act (Kodakondsuse seadus, RT I 1995, 12, 122, as amended). Section 5 provides for citizenship by descent; Section 16 governs restoration of citizenship for pre-Soviet citizens and their descendants. The 1938 Constitution (põhiseadus) established the citizenship baseline that modern law preserves.",
    dualCitizenshipRules: "Estonia permits dual citizenship only in limited circumstances. Generally, an Estonian citizen who voluntarily acquires another nationality loses Estonian citizenship. An exception applies to citizenship-by-descent claimants who are restoring pre-1940 citizenship — they may retain their existing nationality. Estonia is reviewing broader dual-citizenship reform, but restrictions remain as of March 2026.",
    costEstimate: "Police and Border Guard Board application fee: €10–€25 (nominal). National Archives of Estonia research and document requests: €3–€15 per record. Apostilles in your home country: €15–€40 per document. Certified translations into Estonian: €60–€120 per document. Total preparation: €400–€900.",
    keyArchives: [
      { name: "National Archives of Estonia (RA)", url: "https://www.ra.ee/en/" },
      { name: "Estonian Historical Archives (Ajalooarhiiv)", url: "https://www.ra.ee/en/historical-archives/" },
      { name: "Rahvusarhiiv Online Search (AIS)", url: "https://www.ais.ra.ee/" }
    ],
    relatedCountries: ["latvia-citizenship-by-descent", "lithuania-citizenship-by-descent", "finland-related", "germany-citizenship-by-descent"]
  },
  "latvia-citizenship-by-descent": {
    title: "Latvian Citizenship by Descent",
    description: "Complete guide to Latvian citizenship by descent: eligibility requirements, the pre-1940 citizenship rule, required documents, and the Office of Citizenship and Migration Affairs application process.",
    intro: "Latvia offers citizenship by descent to those who can trace their lineage to Latvian citizens registered in Latvia's People's Register as of June 17, 1940 — the date of Soviet occupation. The Office of Citizenship and Migration Affairs (OCMA) administers these claims, and Latvia generally permits dual citizenship for descendants reclaiming nationality.",
    eligibilityOverview: "Latvian citizenship by descent is available to first- and second-generation descendants of citizens registered in the People's Register on June 17, 1940. A parent or grandparent must have been a citizen of Latvia on that date. Third-generation and beyond claims are not directly available by descent but may be pursued through naturalization. Latvia does not recognize Soviet-era citizenship acquisition as breaking the chain for descendants born outside the USSR who never held Soviet documents.",
    keyRequirements: [
      "Parent or grandparent was a Latvian citizen registered on June 17, 1940",
      "Direct lineage documented with civil records",
      "Applicant has not renounced Latvian citizenship",
      "Applicant is not a citizen of a country with which Latvia has a bilateral treaty excluding dual nationality",
      "Basic Latvian language proficiency may be required in some cases"
    ],
    documents: [
      "Birth certificates for each generation in the lineage",
      "Marriage certificates linking each generation",
      "Evidence of ancestor's Latvian citizenship as of June 17, 1940 (People's Register records via OCMA)",
      "Proof of current identity (valid passport)",
      "Death certificates for deceased ancestors",
      "All foreign documents must be apostilled and translated into Latvian"
    ],
    timeline: "Applications processed by the OCMA generally take 3-6 months once the complete file is submitted. Obtaining historical records from the Latvian State Historical Archive can add 3-6 months of preparation time.",
    commonPitfalls: [
      "Grandparent not registered in People's Register as of June 17, 1940",
      "Records lost or inaccessible due to wartime destruction or Soviet policies",
      "Name discrepancies between Latvian, German, Russian, and other historical records",
      "Applicant already registered as a non-citizen (nepilsoņi) — a different status requiring a separate process",
      "Language requirement may apply to some second-generation cases"
    ],
    officialLinks: [
      { name: "Office of Citizenship and Migration Affairs (OCMA)", url: "https://www.pmlp.gov.lv/en" },
      { name: "Latvian State Historical Archive", url: "https://www.lvva.lv/en" },
      { name: "Ministry of Foreign Affairs — Consular Services", url: "https://www.mfa.gov.lv/en" }
    ],
    faqAnswers: {
      whoQualifies: "First- and second-generation descendants (children and grandchildren) of persons who were Latvian citizens registered in the People's Register on June 17, 1940 may claim citizenship by descent. Third-generation claims require naturalization. Latvia does allow dual citizenship for descent claimants, though treaty restrictions may apply with some countries.",
      documentsNeeded: "You need birth and marriage certificates for each generation, proof of the ancestor's registered Latvian citizenship on June 17, 1940 (obtainable from the Latvian State Historical Archive or OCMA), and a valid passport. All non-Latvian documents require apostilles and certified Latvian translations.",
      processingTime: "OCMA processing takes approximately 3-6 months after a complete application is filed. Preparing and gathering historical records — especially from the State Historical Archive — may add several months before you can even submit."
    },
    legalBasis: "Latvian citizenship is governed by the Citizenship Law (Pilsonības likums) of 22 July 1994 (as amended). Section 2 establishes citizenship for persons registered in the People's Register on June 17, 1940 and their descendants. The non-citizen (nepilsoņi) status established in 1995 is a separate legal category and does not confer citizenship rights.",
    dualCitizenshipRules: "Latvia generally permits dual citizenship for descent claimants restoring pre-1940 nationality. However, Latvian citizens who voluntarily naturalise in certain non-EU countries may lose Latvian citizenship. A 2013 constitutional referendum confirmed dual citizenship rights for diaspora Latvians. Bilateral treaty restrictions may apply with a small number of countries.",
    costEstimate: "OCMA application fee: €14. LVVA (State Historical Archive) record request: €3–€20 per document. Apostilles in your home country: €15–€40 each. Certified translations into Latvian: €60–€120 per document. Total preparation for a grandchild claim: €500–€1,000.",
    keyArchives: [
      { name: "Latvian State Historical Archive (LVVA)", url: "https://www.lvva.lv/en" },
      { name: "OCMA — Office of Citizenship and Migration Affairs", url: "https://www.pmlp.gov.lv/en" },
      { name: "Raduraksti — Latvian Genealogy Portal", url: "https://www.lvva-raduraksti.lv/" }
    ],
    relatedCountries: ["estonia-citizenship-by-descent", "lithuania-citizenship-by-descent", "poland-citizenship-by-descent", "germany-citizenship-by-descent"]
  },
  "czech-republic-citizenship-by-descent": {
    title: "Czech Republic Citizenship by Descent",
    description: "Complete guide to Czech (and Czechoslovak) citizenship by descent: eligibility rules, the declaration route for expellees, required documents, and the application process through Czech authorities.",
    intro: "Czech citizenship can be claimed by descendants of Czech or Czechoslovak citizens through several pathways. Direct descent through a Czech citizen parent is the most straightforward route. A separate declaration process exists for those whose ancestors were expelled or lost citizenship under post-war decrees, Nazi policies, or the 1993 Slovakia-Czech separation. Persons of Czech origin may also qualify for permanent residency as an intermediate step.",
    eligibilityOverview: "Czech citizenship by descent works as follows: if one of your parents was a Czech citizen at the time of your birth, you are likely already a Czech citizen and simply need to register. If your claim goes through a grandparent who was a Czech (or Czechoslovak) citizen, you may be eligible via declaration — particularly if the ancestor lost citizenship involuntarily under historical laws (e.g., Beneš decrees, Nazi minority laws, or Slovak separation). Persons who can prove Czech origin but do not meet the direct citizenship criteria may qualify for permanent residency. The Czech Ministry of the Interior and regional offices handle most claims.",
    keyRequirements: [
      "Parent was a Czech citizen at the time of applicant's birth (direct route)", 
      "OR grandparent was a Czech/Czechoslovak citizen and citizenship was lost involuntarily",
      "Ability to document lineage with Czech and foreign civil records",
      "No act of renunciation of Czech citizenship",
      "Declaration cases require proof of involuntary loss of citizenship by ancestor"
    ],
    documents: [
      "Birth certificates for each generation in the lineage",
      "Marriage certificates linking each generation",
      "Czech/Czechoslovak civil records for the ancestor (birth registration, citizenship records)",
      "Evidence of involuntary citizenship loss where applicable (decrees, historical court records)",
      "Valid passport of the applicant",
      "Death certificates where needed",
      "All foreign documents must be apostilled and officially translated into Czech"
    ],
    timeline: "Direct descent cases where a parent was Czech can be resolved in 3-6 months. Declaration cases are more complex and may take 6-18 months depending on the regional office and document availability. Permanent residency applications for persons of Czech origin follow a separate immigration timeline.",
    commonPitfalls: [
      "Ancestor voluntarily renounced Czech citizenship, rather than losing it involuntarily",
      "Records lost during WWII or in the 1993 Czechoslovak separation",
      "Confusion between Czech and Slovak citizenship after the 1993 split",
      "Grandparent acquired Slovak (rather than Czech) citizenship in 1993",
      "Declaration route limited to specific historical loss scenarios — not available to all grandchild claimants"
    ],
    officialLinks: [
      { name: "Czech Ministry of the Interior — Citizenship", url: "https://www.mvcr.cz/mvcren/citizenship.aspx" },
      { name: "Czech National Archive", url: "https://www.nacr.cz/en/" },
      { name: "Czech Foreign Ministry — Consular Info", url: "https://www.mzv.cz/jnp/en/diplomatic_mission/index.html" }
    ],
    faqAnswers: {
      whoQualifies: "If a parent was a Czech citizen at your birth, you likely are already a Czech citizen. If your grandparent held Czech or Czechoslovak citizenship and lost it involuntarily (through post-war decrees, Nazi policies, or the Slovakia split), you may file a declaration of citizenship. Persons who can prove Czech origin but do not fully qualify may apply for permanent residency as a person of Czech origin.",
      documentsNeeded: "You will need birth and marriage certificates for every generation, any Czech or Czechoslovak civil records for your ancestor, evidence of how citizenship was lost (if pursuing a declaration), and your own valid passport. All foreign-language documents must be apostilled and officially translated into Czech.",
      processingTime: "Simple parent-descent cases can take 3-6 months. Declaration applications for grandchild claims typically take 6-18 months. Allow extra time if your family records span multiple countries or overlap with the 1993 Czechoslovakia split."
    },
    legalBasis: "Czech citizenship is governed by Act No. 186/2013 Coll. on Czech Citizenship (zákon o státním občanství), effective 1 January 2014. The declaration route for descendants of expelled Czechoslovaks is primarily governed by Act No. 193/1999 Coll. (on the citizenship of some former Czechoslovak nationals). The 1993 division of Czechoslovakia was governed by Constitutional Act No. 542/1992.",
    dualCitizenshipRules: "The Czech Republic fully permits dual citizenship since the passage of Act No. 186/2013. Prior to 2014, Czech law generally prohibited dual nationality. If your ancestor lost Czech citizenship before 2014 under the old prohibition, they may need to apply for restoration. New Czech citizens are not required to renounce prior nationality, and Czech citizens who naturalise abroad no longer automatically lose Czech citizenship.",
    costEstimate: "Declaration of citizenship fee: CZK 500 (~€20). Recognition of citizenship at a Czech consulate: free. Document costs (apostilles, certified translations into Czech): €400–€900 depending on number of countries. Attorneys or Czech citizenship specialists: €1,500–€4,000.",
    keyArchives: [
      { name: "Národní Archiv (Czech National Archive)", url: "https://www.nacr.cz/en/" },
      { name: "SOA — Regional State Archives (Zemské archivy)", url: "https://www.mvcr.cz/mvcren/citizenship.aspx" },
      { name: "Matricula Online — Czech and Slovak Church Records", url: "https://www.matricula-online.eu/" }
    ],
    relatedCountries: ["slovakia-citizenship-by-descent", "hungary-citizenship-by-descent", "germany-citizenship-by-descent", "poland-citizenship-by-descent"]
  },
  "slovakia-citizenship-by-descent": {
    title: "Slovak Citizenship by Descent",
    description: "Complete guide to Slovak citizenship by descent: eligibility requirements, the Czechoslovak lineage rules, required documents, and the application process through the Slovak Ministry of Interior.",
    intro: "Slovakia allows citizens to reclaim Slovak nationality through descent from Slovak or Czechoslovak ancestors. Since Slovakia became independent in 1993, citizenship rules distinguish between Czechoslovak heritage claimed through the Slovak part of the republic and direct Slovak ancestry. The Slovak Ministry of Interior and consulates handle applications from abroad.",
    eligibilityOverview: "Slovak citizenship by descent principally applies to those with a parent or grandparent born in present-day Slovakia who held Czechoslovak citizenship. If a parent was a Slovak citizen at your birth, you are likely already a citizen. If the claim goes through a grandparent, you can apply for descent-based citizenship provided the grandparent was born in present-day Slovakia and was a Czechoslovak (and subsequently Slovak) citizen. Slovakia also has a restoration route for Slovak diaspora (Slovaks living abroad), which allows persons of Slovak heritage to obtain a certificate of Slovak living abroad, sometimes serving as a stepping stone. Note: Slovakia has conditional dual-citizenship rules — voluntarily acquiring another nationality after obtaining Slovak citizenship can cause automatic loss of Slovak citizenship, unless you acquired it through birth, marriage, adoption, or after 5+ years of registered foreign residence (the key exception added by the 2022 reform).",
    keyRequirements: [
      "Parent or grandparent born in present-day Slovakia with Czechoslovak/Slovak citizenship",
      "Unbroken documentary lineage from ancestor to applicant",
      "Applicant has not voluntarily renounced Slovak citizenship",
      "Dual citizenship is conditional — understand the exceptions (birth, adoption, marriage, or 5+ years foreign residence) before naturalising elsewhere after obtaining Slovak citizenship",
      "Slovak language proficiency may be required for some categories"
    ],
    documents: [
      "Birth certificates for each generation in the lineage",
      "Marriage certificates linking each generation",
      "Birth certificate of Slovak/Czechoslovak ancestor from Slovakia",
      "Proof of the ancestor's Czechoslovak or Slovak citizenship",
      "Valid passport of the applicant",
      "Death certificates where required",
      "All foreign documents must be apostilled and translated into Slovak"
    ],
    timeline: "Applications submitted to the Slovak Ministry of Interior or a Slovak consulate typically take 6-12 months to process. Gathering records from Slovak civil registry offices and the Slovak National Archive can add to preparation time.",
    commonPitfalls: [
      "Ancestor was born in the Czech part of Czechoslovakia, not in present-day Slovakia",
      "Dual citizenship rules: voluntarily acquiring another nationality after holding Slovak citizenship can cause automatic loss — unless acquired through birth, adoption, marriage, or after 5+ years of registered foreign residence (2022 reform)",
      "Records from WWII and the communist era may be incomplete or inaccessible",
      "Name changes and border shifts make identifying the correct ancestor's registered location difficult",
      "Slovakia-Czech split in 1993 — some grandparents ended up as Czech citizens, not Slovak"
    ],
    officialLinks: [
      { name: "Slovak Ministry of Interior — Citizenship", url: "https://www.minv.sk/?citizenship-of-the-slovak-republic-1" },
      { name: "Slovak National Archive", url: "https://www.minv.sk/?sna" },
      { name: "Slovak Foreign Ministry — Consular Services", url: "https://www.mzv.sk/en/services_for_citizens" }
    ],
    faqAnswers: {
      whoQualifies: "Persons with a parent or grandparent born in present-day Slovakia who held Czechoslovak (or Slovak) citizenship are the primary candidates. If a parent was Slovak at your birth, you likely qualify automatically. Grandchild claims require documentary proof of ancestry. Holding another nationality when you claim Slovak citizenship is fine. The risk runs the other way: if you later voluntarily naturalise in a third country, Slovak citizenship may be lost unless you meet one of the exceptions (birth, adoption, marriage, or 5+ years of foreign residence — the last added by the 2022 reform).",
      documentsNeeded: "You need birth and marriage certificates for each generation, the ancestor's birth certificate from a Slovak civil registry, proof of their Czechoslovak/Slovak citizenship, and your valid passport. All documents not in Slovak require apostilles and certified Slovak translations.",
      processingTime: "Most applications take 6-12 months. Preparation time to source records from Slovak civil registries and the National Archive can add months before filing. Consular applications from abroad may take longer than in-country submissions."
    },
    legalBasis: "Slovak citizenship is governed by Act No. 40/1993 Coll. on Slovak Citizenship (zákon o štátnom občianstve Slovenskej republiky), as amended. The 2010 amendment (Act No. 250/2010) introduced strict penalties for acquiring a foreign nationality voluntarily — automatic loss of Slovak citizenship. The 1993 split of Czechoslovakia was governed by Constitutional Act No. 542/1992, which assigned citizenship based on registry records.",
    dualCitizenshipRules: "Slovakia permits dual citizenship in several circumstances, but the general rule still applies: a Slovak citizen who voluntarily acquires a foreign nationality loses Slovak citizenship automatically. Slovak citizenship is NOT lost if the foreign nationality was acquired: (1) at birth or by adoption; (2) by acquiring the citizenship of a spouse during the marriage; (3) after at least five years of permitted or registered foreign residence at the time of acquisition — an exception introduced by the February 2022 reform (in force from April 2022). A descent claimant who already holds another nationality can safely gain Slovak citizenship. The risk is in the reverse direction: once you hold Slovak citizenship, subsequently naturalising abroad could cause loss of Slovak citizenship unless the 5-year residency exception applies.",
    costEstimate: "Citizenship application fee at the Ministry of Interior: €20–€100. Consular application: free in most cases. Document costs (Slovak civil registry excerpts, apostilles, certified translations): €400–€800. Slovak National Archive searches: €5–€30 per request.",
    keyArchives: [
      { name: "Slovenský Národný Archív (Slovak National Archive)", url: "https://www.minv.sk/?sna" },
      { name: "Archívy Ministerstva vnútra SR — Interior Ministry Archives", url: "https://www.minv.sk/?archivy" },
      { name: "Matricula Online — Slovak and Czech Church Records", url: "https://www.matricula-online.eu/" }
    ],
    relatedCountries: ["czech-republic-citizenship-by-descent", "hungary-citizenship-by-descent", "poland-citizenship-by-descent", "austria-related"]
  },
  "luxembourg-citizenship-by-descent": {
    title: "Luxembourg Citizenship by Descent",
    description: "Complete guide to Luxembourg citizenship by descent: eligibility for descendants of Luxembourgers, the option of reacquiring nationality, required documents, and application steps through the Ministry of Justice.",
    intro: "Luxembourg is one of the few EU countries with no generational limit on citizenship reacquisition. Under the reacquisition route, any generation — great-great-grandchildren and beyond — can reclaim Luxembourg citizenship, provided they descend in an unbroken line from a Luxembourg-born male ancestor who emigrated between 1815 and 1943. The law was significantly reformed in 2008 and expanded over time, and Luxembourg explicitly permits multiple citizenship.",
    eligibilityOverview: "Luxembourg citizenship by descent is available through two main tracks. The first is direct descent: if a parent or grandparent was a Luxembourg citizen at your birth, you can claim citizenship through this route — but it is limited to two generations (parent or grandparent). The second is the reacquisition route: descendants of Luxembourgers who emigrated between 1815 and 1943 can reclaim citizenship by declaration, with no generational cap. The only conditions are that the qualifying ancestor was born as a Luxembourg national during that period, that they emigrated from Luxembourg, and that you can document an unbroken patrilineal line back to them — reflecting the historical rule that nationality passed through the father. Any generation beyond grandchildren claiming through this route must use the reacquisition track. Luxembourg permits dual or multiple nationality.",
    keyRequirements: [
      "Parent or grandparent is/was a Luxembourg citizen (direct descent route)",
      "OR any generation of direct-line descent from a Luxembourg male ancestor born between 1815 and 1943 who emigrated (reacquisition route — no generational limit)",
      "Unbroken documentary chain from ancestor to applicant",
      "No act of renunciation of Luxembourg citizenship",
      "Basic knowledge of Luxembourg history and nationality law helpful for applications"
    ],
    documents: [
      "Birth certificates for each generation in the lineage",
      "Marriage certificates linking each generation",
      "Birth certificate of the Luxembourg ancestor from Luxembourg civil registries",
      "Proof of Luxembourg citizenship of the ancestor (civil registry excerpts, naturalization records)",
      "Valid passport of the applicant",
      "Death certificates where applicable",
      "All non-Luxembourgish documents require apostilles and certified translations (French, German, or Luxembourgish accepted)"
    ],
    timeline: "Applications through the Luxembourg Ministry of Justice typically take 12-24 months, reflecting the complexity of verifying historical records. Applications in the reacquisition route can be faster (6-12 months) if documentation is well-organized.",
    commonPitfalls: [
      "Ancestor emigrated before 1815 or after 1943 — outside the reacquisition window",
      "Female-line claims for the historical 1815-1943 window do not qualify under the reacquisition route",
      "Records held in Luxembourg municipal archives or the ANLux (National Archives) may be hard to access remotely",
      "Name discrepancies between French, German, and Luxembourgish forms of names in historical records",
      "Confusion between Luxembourg citizenship and Belgian/Dutch nationality in border-region families"
    ],
    officialLinks: [
      { name: "Luxembourg Ministry of Justice — Citizenship", url: "https://mj.gouvernement.lu/en/dossiers/nationalite.html" },
      { name: "ANLux — National Archives of Luxembourg", url: "https://anlux.public.lu/en.html" },
      { name: "Luxembourg Foreign Ministry — Consular Services", url: "https://mae.gouvernement.lu/en/passports-et-documents/nationalite-luxembourgeoise.html" }
    ],
    faqAnswers: {
      whoQualifies: "Descendants of Luxembourg citizens can qualify through two routes: direct descent (parent or grandparent was a Luxembourg citizen at your birth) or reacquisition (any generation in an unbroken patrilineal line from a Luxembourg-born male ancestor who emigrated between 1815 and 1943 — no generational cap applies). Luxembourg permits multiple citizenships, so holding another passport does not disqualify you.",
      documentsNeeded: "You need birth and marriage certificates for every generation from the Luxembourg ancestor to yourself, the ancestor's birth certificate from a Luxembourg commune, and civil registry excerpts proving their nationality. All non-Luxembourgish documents need apostilles and certified translations into French, German, or Luxembourgish.",
      processingTime: "Ministry of Justice processing takes 12-24 months. The reacquisition track can sometimes be resolved in 6-12 months if records are complete. Locating and obtaining historical civil records from Luxembourg communal registries and ANLux may take several months before you can submit."
    },
    legalBasis: "Luxembourg nationality is governed by the Loi du 8 mars 2017 sur la nationalité luxembourgeoise (replacing the 2008 law and its 2012 and 2015 amendments). Article 7 covers direct descent; Article 23 governs the reacquisition option for diaspora descendants of emigrants from 1815–1943. The 2017 law also introduced a Declaration of Filiation (déclaration de nationalité) route for grandchildren.",
    dualCitizenshipRules: "Luxembourg explicitly permits multiple citizenship under the 2008 reform, making it one of the most permissive EU states. Acquiring Luxembourg citizenship does not require renouncing other nationalities, and Luxembourg citizens who naturalise elsewhere do not lose their Luxembourg nationality. This policy was introduced precisely to facilitate diaspora reclamations from countries like the United States, France, Brazil, and Argentina.",
    costEstimate: "Ministry of Justice application fee: free (no charge for nationality declarations). Communal civil registry excerpts (extrait d'acte): €3–€15 per document. ANLux archive research: €10–€30 per record. Apostilles: €15–€40 per document. Certified translations into French/German: €60–€120 per document. Total preparation for a reacquisition claim: €600–€1,400 depending on the number of generations.",
    keyArchives: [
      { name: "ANLux — Archives Nationales de Luxembourg", url: "https://anlux.public.lu/en.html" },
      { name: "État Civil Luxembourgeois (Communal Civil Registries)", url: "https://guichet.public.lu/en/citoyens/citoyennete/nationalite-luxembourgeoise.html" },
      { name: "Portail généalogique luxembourgeois", url: "https://www.genealogy.lu/" }
    ],
    relatedCountries: ["germany-citizenship-by-descent", "france-related", "spain-citizenship-by-descent", "portugal-citizenship-by-descent"]
  }
};

const supportedCountries = Object.keys(countryData);

const passportImages: Record<string, string> = {
  "italy-citizenship-by-descent": "italy.jpg",
  "ireland-citizenship-by-descent": "ireland.jpg",
  "germany-citizenship-by-descent": "germany.jpg",
  "poland-citizenship-by-descent": "poland.jpg",
  "hungary-citizenship-by-descent": "hungary.jpg",
  "spain-citizenship-by-descent": "spain.png",
  "portugal-citizenship-by-descent": "portugal.jpg",
  "greece-citizenship-by-descent": "greece.png",
  "lithuania-citizenship-by-descent": "lithuania.png",
  "estonia-citizenship-by-descent": "estonia.jpg",
  "latvia-citizenship-by-descent": "latvia.jpg",
  "czech-republic-citizenship-by-descent": "czech-republic.jpg",
  "slovakia-citizenship-by-descent": "slovakia.jpg",
  "luxembourg-citizenship-by-descent": "luxembourg.png",
};

export function generateStaticParams() {
  return supportedCountries.map((country) => ({ country }));
}

const SITE_DATE_PUBLISHED = "2024-01-01";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: slug } = await params;
  const data = countryData[slug];
  
  if (!data) {
    return {
      title: "Country Not Found",
      description: "The requested citizenship guide could not be found.",
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `https://heritagepassportfinder.com/${slug}` },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://heritagepassportfinder.com/${slug}`,
      type: "article",
      publishedTime: SITE_DATE_PUBLISHED,
      modifiedTime: new Date().toISOString().split("T")[0],
    },
    twitter: {
      title: data.title,
      description: data.description,
      card: "summary",
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = countryData[country];

  if (!data) {
    notFound();
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Who can qualify for ${data.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: data.faqAnswers.whoQualifies,
        },
      },
      {
        "@type": "Question",
        name: "Which documents are required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: data.faqAnswers.documentsNeeded,
        },
      },
      {
        "@type": "Question",
        name: "How long does the process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: data.faqAnswers.processingTime,
        },
      },
      {
        "@type": "Question",
        name: "Is this tool an official government application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Heritage Passport Finder is an educational resource that provides information about citizenship by descent. It links to official government resources but is not affiliated with any government. Always consult official sources and qualified legal professionals for your specific situation.",
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
        name: data.title,
        item: `https://heritagepassportfinder.com/${country}`,
      },
    ],
  };

  const relatedSlugs = data.relatedCountries.filter(s => countryData[s]);
  const otherCountries = relatedSlugs.length >= 2 ? relatedSlugs : supportedCountries.filter(c => c !== country).slice(0, 4);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    datePublished: SITE_DATE_PUBLISHED,
    dateModified: new Date().toISOString().split("T")[0],
    author: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
    publisher: { "@type": "Organization", name: "Heritage Passport Finder", url: "https://heritagepassportfinder.com" },
    mainEntityOfPage: `https://heritagepassportfinder.com/${country}`,
  };

  return (
    <>
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <Script id="breadcrumbs-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <Script id="article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />

      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

        {/* ── HEADER ── */}
        <header className="sticky top-0 z-30 bg-white/90 dark:bg-zinc-950/90 backdrop-blur border-b border-zinc-100 dark:border-zinc-800">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Heritage Passport Finder" width={36} height={36} priority />
              <span className="font-bold text-lg tracking-tight hidden sm:block">Heritage Passport Finder</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/citizenship-by-descent-requirements-by-country"
                className="hidden md:block px-4 py-2 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Compare Countries
              </Link>
              <Link
                href="/#eligibility"
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                Check Eligibility
              </Link>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span className="text-zinc-300 dark:text-zinc-600">&rsaquo;</span>
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">{data.title}</span>
          </nav>

          <article>

            {/* ── HERO: Title + Passport Photo ── */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:gap-10 mb-12">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
                  {data.title}
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {data.intro}
                </p>
              </div>
              {passportImages[country] && (
                <div className="flex-shrink-0 flex flex-col items-center mb-6 sm:mb-0">
                  <div className="w-28 sm:w-32 rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/10 dark:ring-white/10">
                    <Image
                      src={`/passports/${passportImages[country]}`}
                      alt={`${data.title.replace(" Citizenship by Descent", "")} passport cover`}
                      width={128}
                      height={180}
                      className="w-full h-auto block"
                      priority
                    />
                  </div>
                  <p className="text-[10px] text-zinc-400 mt-2 text-center max-w-[128px] leading-tight">Current passport design</p>
                  <p className="text-[9px] text-zinc-400 text-center">&copy; Wikimedia Commons</p>
                </div>
              )}
            </div>

            {/* ── ELIGIBILITY OVERVIEW ── */}
            <section className="mb-8 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-3">
                Eligibility Overview
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {data.eligibilityOverview}
              </p>
            </section>

            {/* ── KEY REQUIREMENTS ── */}
            <section className="mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                Key Requirements
              </h2>
              <ul className="space-y-3">
                {data.keyRequirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-xs flex items-center justify-center font-bold mt-0.5">&#10003;</span>
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── DOCUMENTS + TIMELINE ── */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <section className="p-6 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                  Documents You Will Need
                </h2>
                <ul className="space-y-2.5">
                  {data.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="flex-shrink-0 w-4 h-4 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 text-[10px] flex items-center justify-center font-mono mt-0.5">{i + 1}</span>
                      <span className="leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="p-6 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                  Expected Timeline
                </h2>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 text-lg">
                    &#128336;
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {data.timeline}
                  </p>
                </div>
              </section>
            </div>

            {/* ── COMMON PITFALLS ── */}
            <section className="mb-8 p-6 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4">
                Common Pitfalls to Avoid
              </h2>
              <ul className="space-y-3">
                {data.commonPitfalls.map((pitfall, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="flex-shrink-0 text-red-500 dark:text-red-400 mt-0.5">&#9888;&#65039;</span>
                    <span className="leading-relaxed">{pitfall}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── OFFICIAL RESOURCES ── */}
            <section className="mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                Official Resources
              </h2>
              <ul className="space-y-2">
                {data.officialLinks.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-sm transition-all"
                    >
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">{link.name}</span>
                      <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors text-xs">&#8599;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── FAQ ── */}
            <section className="mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {[
                  { q: `Who can qualify for ${data.title}?`, a: data.faqAnswers.whoQualifies },
                  { q: "Which documents are required?", a: data.faqAnswers.documentsNeeded },
                  { q: "How long does the process take?", a: data.faqAnswers.processingTime },
                ].map(({ q, a }, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2 text-sm">{q}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── LEGAL / DUAL / COST ── */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <section className="p-5 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">&#9878;&#65039;</span>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Legal Basis</h2>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{data.legalBasis}</p>
              </section>
              <section className="p-5 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">&#128706;</span>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Dual Citizenship</h2>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{data.dualCitizenshipRules}</p>
              </section>
              <section className="p-5 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">&#128176;</span>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Estimated Costs</h2>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{data.costEstimate}</p>
              </section>
            </div>

            {/* ── KEY ARCHIVES ── */}
            <section className="mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                Key Archives for Research
              </h2>
              <ul className="space-y-2">
                {data.keyArchives.map((archive, i) => (
                  <li key={i}>
                    <a
                      href={archive.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-sm transition-all"
                    >
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">{archive.name}</span>
                      <span className="text-zinc-400 group-hover:text-emerald-600 transition-colors text-xs">&#8599;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── CTA ── */}
            <section className="mb-8 rounded-2xl bg-emerald-600 dark:bg-emerald-700 p-8 text-white">
              <h2 className="text-xl font-bold mb-2">Check Your Eligibility</h2>
              <p className="text-emerald-100 text-sm mb-5">
                Use our free interactive checker to get a personalised assessment in under 2 minutes.
              </p>
              <Link
                href="/#eligibility"
                className="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors text-sm"
              >
                Start the Checker
              </Link>
            </section>

            {/* ── SUB-TOPIC CALLOUTS ── */}
            {country === "italy-citizenship-by-descent" && (
              <section className="mb-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-6">
                <h2 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  Does the 1948 Rule Apply to Your Claim?
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm leading-relaxed">
                  If your lineage passes through a female Italian ancestor whose child was born before January 1, 1948, the standard consular route is closed. You must instead petition an Italian court. This is the &ldquo;1948 rule&rdquo; &mdash; a complex but well-established legal pathway.
                </p>
                <Link href="/italy-1948-rule" className="inline-block bg-amber-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-amber-700 transition-colors text-sm">
                  Full Guide: Italy 1948 Rule &#8594;
                </Link>
              </section>
            )}

            {country === "germany-citizenship-by-descent" && (
              <section className="mb-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-6">
                <h2 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  Claiming Under Article 116: Descendants of Nazi Persecution Victims
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm leading-relaxed">
                  If your ancestor lost German citizenship due to political, racial, or religious persecution between 1933 and 1945, Article 116(2) of the German Basic Law provides a right to restoration &mdash; with no generational limit and no renunciation of your current citizenship required.
                </p>
                <Link href="/german-article-116-citizenship" className="inline-block bg-amber-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-amber-700 transition-colors text-sm">
                  Full Guide: Article 116 Citizenship &#8594;
                </Link>
              </section>
            )}

            {country === "ireland-citizenship-by-descent" && (
              <section className="mb-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-6">
                <h2 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  How Does the Foreign Births Register Work?
                </h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-sm leading-relaxed">
                  If your Irish heritage comes through a grandparent (rather than a parent), you need to register in the Foreign Births Register before you can get an Irish passport. Your parent may also need to register first. See the full guide for eligibility tiers, the online application process, and current fees.
                </p>
                <Link href="/ireland-foreign-births-register" className="inline-block bg-amber-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-amber-700 transition-colors text-sm">
                  Full Guide: Ireland Foreign Births Register &#8594;
                </Link>
              </section>
            )}

            {/* ── RELATED COUNTRIES ── */}
            <nav aria-label="Related countries" className="border-t border-zinc-100 dark:border-zinc-800 pt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">Explore Other Countries</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {otherCountries.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/${slug}`}
                      className="group flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-md transition-all"
                    >
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                        {(countryData[slug]?.title || slug).replace(" Citizenship by Descent", "")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </article>
        </main>

        {/* ── FOOTER ── */}
        <footer className="border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="max-w-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Image src="/logo.svg" alt="Heritage Passport Finder" width={28} height={28} />
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">Heritage Passport Finder</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  A free educational tool to help people explore their European citizenship by descent eligibility.
                </p>
              </div>
              <div className="flex gap-12 text-sm">
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Countries</p>
                  <ul className="flex flex-col gap-2 text-zinc-500 dark:text-zinc-400">
                    {[
                      ["Italy", "italy-citizenship-by-descent"],
                      ["Ireland", "ireland-citizenship-by-descent"],
                      ["Germany", "germany-citizenship-by-descent"],
                      ["Poland", "poland-citizenship-by-descent"],
                      ["Greece", "greece-citizenship-by-descent"],
                      ["Spain", "spain-citizenship-by-descent"],
                      ["Portugal", "portugal-citizenship-by-descent"],
                    ].map(([name, slug]) => (
                      <li key={slug}><Link href={`/${slug}`} className="hover:text-emerald-600 transition-colors">{name}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">More</p>
                  <ul className="flex flex-col gap-2 text-zinc-500 dark:text-zinc-400">
                    {[
                      ["Hungary", "hungary-citizenship-by-descent"],
                      ["Lithuania", "lithuania-citizenship-by-descent"],
                      ["Estonia", "estonia-citizenship-by-descent"],
                      ["Latvia", "latvia-citizenship-by-descent"],
                      ["Czech Republic", "czech-republic-citizenship-by-descent"],
                      ["Slovakia", "slovakia-citizenship-by-descent"],
                      ["Luxembourg", "luxembourg-citizenship-by-descent"],
                    ].map(([name, slug]) => (
                      <li key={slug}><Link href={`/${slug}`} className="hover:text-emerald-600 transition-colors">{name}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row justify-between gap-2 text-xs text-zinc-400">
              <p>&copy; {new Date().getFullYear()} Heritage Passport Finder &middot; Educational and informational use only.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/citizenship-by-descent-requirements-by-country" className="hover:text-emerald-600 transition-colors">Compare Countries</Link>
                <Link href="/apostille-guide" className="hover:text-emerald-600 transition-colors">Apostille Guide</Link>
                <Link href="/documents-checklist" className="hover:text-emerald-600 transition-colors">Document Checklist</Link>
                <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
                <Link href="/privacy-policy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
                <span>Not legal advice</span>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
