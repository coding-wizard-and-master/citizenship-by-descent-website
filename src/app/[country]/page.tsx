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
    relatedCountries: ["germany-citizenship-by-descent", "france-citizenship-by-descent", "spain-citizenship-by-descent", "portugal-citizenship-by-descent"]
  },

  "france-citizenship-by-descent": {
    title: "France Citizenship by Descent — Jure Sanguinis Guide",
    description: "Learn how to claim French citizenship through descent. France transmits nationality with no generational limit — any person born to a French parent acquires citizenship automatically.",
    intro: "France offers one of Europe's most accessible citizenship-by-descent pathways. Under French nationality law, citizenship is transmitted automatically by descent with no generational limit, provided each link in the chain held French nationality at the time of the next generation's birth. With an estimated 20 million French citizens living abroad and centuries of emigration history, millions of people worldwide may qualify for a French passport — and France has permitted dual citizenship since 1973, so no renunciation is required.",
    eligibilityOverview: "Any person born to at least one French parent acquires French nationality at birth under Article 18 of the French Civil Code, regardless of birth location. There is no generational cap: if your grandparent or great-grandparent was French at the time your parent was born, and so on down the chain, French nationality was transmitted. The critical requirement is an unbroken chain — each ancestor must have held French nationality at the relevant birth. A key historical caveat: French women who married foreigners before 1973 often automatically lost their French nationality, which can break the chain for descendants whose lineage runs through a pre-1973 female immigrant.",
    keyRequirements: [
      "At least one parent (or ancestor in an unbroken chain) was a French citizen at the time of the relevant birth",
      "Complete documented lineage from the French ancestor to the applicant",
      "Birth and marriage certificates for every generation in the chain",
      "Apostilled or consular-legalized foreign documents with certified French translations",
      "Application filed at the French consulate with jurisdiction over your country of residence"
    ],
    documents: [
      "Acte de naissance (birth certificate) for each generation from the French ancestor to the applicant",
      "Acte de mariage (marriage certificate) for each married couple in the chain",
      "Proof of the ancestor's French nationality (French birth certificate, old French passport, or naturalisation record)",
      "Applicant's current valid national passport",
      "Apostilles and certified French translations (by a traducteur assermenté) for all non-French documents",
      "Completed application form as required by the relevant French consulate"
    ],
    timeline: "Processing varies significantly by consulate. Major cities like New York, London, Los Angeles, and Sydney typically take 6–18 months after a complete file is submitted. Smaller consulates may be quicker (3–6 months). Document gathering for multi-generation claims adds 3–12 months before submission. Realistic total: 9 months to 2+ years.",
    commonPitfalls: [
      "Gap in the chain: if one ancestor renounced or was stripped of French nationality before the next generation's birth, transmission is permanently broken",
      "Pre-1973 maternal lineage: women who married foreigners before 1973 often lost French nationality automatically — this affects families where the lineage runs through a female ancestor who married a non-French man before that date",
      "Wrong consulate: you must apply at the French consulate covering your country of residence, not your country of birth or your ancestor's region of origin",
      "Untranslated or uncertified documents: translations must be by a certified court-sworn translator (traducteur assermenté); unofficial translations are rejected",
      "Destroyed or missing records: some pre-WWI and WWII-era French civil records in former territories (Algeria, Indochina) are incomplete or held in different archives"
    ],
    officialLinks: [
      { name: "France Diplomatie — French Nationality by Descent", url: "https://www.diplomatie.gouv.fr/en/coming-to-france/living-in-france/french-nationality/" },
      { name: "Service-Public.fr — Nationalité française par filiation", url: "https://www.service-public.fr/particuliers/vosdroits/F2670" },
      { name: "French Civil Code — Articles 18–25-1 (Légifrance)", url: "https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006165747/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one French citizen parent qualifies automatically, regardless of where the birth occurred. There is no generational cap: if your grandparent, great-grandparent, or even more distant ancestor was French at the time the next generation was born, French nationality was transmitted down the chain. The one critical requirement is that chain must be unbroken — each ancestor must have held French nationality when the following generation was born. Women who married foreigners before 1973 may have lost their French nationality, which would break the chain.",
      documentsNeeded: "You need birth and marriage certificates for every generation from the French ancestor to yourself. If the ancestor emigrated from France, you will also need their French birth certificate from the relevant French commune or civil registry. All foreign documents require apostilles and certified French translations from a sworn translator.",
      processingTime: "Processing depends heavily on the specific consulate. Most applicants wait 6–18 months after submitting a complete dossier. Document research and gathering typically adds several months before you can even submit."
    },
    legalBasis: "French nationality is governed by the Civil Code, specifically Articles 18 through 25-1 (Book I, Title I bis). Article 18 establishes automatic acquisition by birth to a French parent. The 1973 nationality reform eliminated gender discrimination in transmission and ended the rule that women who married foreigners automatically lost French nationality — however, the reform is not retroactive to births that occurred before 1973.",
    dualCitizenshipRules: "France has permitted dual citizenship since January 9, 1973. French nationals who acquire a foreign nationality do not lose their French citizenship, and foreign nationals who obtain French citizenship are not required to renounce their original passport. France is one of the most permissive EU states on this issue, making it highly attractive for diaspora claimants.",
    costEstimate: "The application itself has no filing fee at French consulates. Certified translations of foreign documents: €30–€80 per document. Apostilles: €10–€40 per document depending on country. French civil registry document requests from the SCEC (Service Central d'État Civil): free. Total for a 3-generation claim: approximately €200–€600 in document preparation and translation costs.",
    keyArchives: [
      { name: "Archives Nationales de France", url: "https://www.archives-nationales.culture.gouv.fr/" },
      { name: "Service Central d'État Civil (SCEC) — civil records held abroad", url: "https://www.diplomatie.gouv.fr/fr/services-aux-citoyens/etat-civil-et-nationalite-francaise/service-central-d-etat-civil-scec/" },
      { name: "FranceArchives — portal to departmental and national archives", url: "https://francearchives.gouv.fr/en/" }
    ],
    relatedCountries: ["luxembourg-citizenship-by-descent", "belgium-citizenship-by-descent", "switzerland-citizenship-by-descent", "monaco-citizenship-by-descent"]
  },

  "romania-citizenship-by-descent": {
    title: "Romania Citizenship by Descent — Repatriation & Jure Sanguinis Guide",
    description: "Romania offers citizenship by descent with no generational limit and a powerful repatriation route for descendants of those who lost citizenship under Communist rule.",
    intro: "Romania runs one of Europe's most active and diaspora-focused citizenship-by-descent programs, processing tens of thousands of applications annually — primarily from Moldova, Ukraine, and the Romanian diaspora across Western Europe and the Americas. A distinctive feature of Romanian law is the Article 11 repatriation route in Law 21/1991, which allows descendants of people involuntarily stripped of their Romanian citizenship during the Communist era (1940–1989) to reclaim it, regardless of how many generations have passed and without any residency requirement.",
    eligibilityOverview: "Two main pathways exist. First, standard jus sanguinis: any person born to at least one Romanian parent acquires Romanian citizenship at birth, with no generational limit as long as each link in the chain is documented. Second, the Article 11 repatriation route: children and grandchildren of former Romanian citizens who were deprived of citizenship between 1940 and 1989 through Communist or wartime coercion can petition for reinstatement — no residency, no language test, and no renunciation of foreign citizenship required. Romania fully permits dual citizenship.",
    keyRequirements: [
      "At least one Romanian parent (standard route) or an ancestor who lost citizenship through Communist-era coercion 1940–1989 (Article 11 repatriation route)",
      "Unbroken documented lineage from the Romanian ancestor to the applicant",
      "For Article 11: the ancestor must have been deprived of citizenship involuntarily (forced denaturalization, emigration restriction, or exile)",
      "Birth, marriage, and where relevant death certificates for each generation in the chain",
      "Application filed at the Autoritatea Națională pentru Cetățenie (ANC) in Bucharest or a Romanian consulate abroad",
      "Romanian language proficiency is NOT required"
    ],
    documents: [
      "Applicant's birth certificate and those of parents, grandparents, and any further ancestors required",
      "Marriage certificates for each couple in the chain",
      "Proof that the ancestor held Romanian citizenship (Romanian birth certificate, old identity card, pre-1989 passport, or civil registry extract)",
      "For Article 11 cases: evidence of involuntary loss of citizenship (denaturalization decree, emigration records, historical testimony)",
      "Apostilles on all foreign documents",
      "Certified Romanian translations of all non-Romanian documents by a court-sworn translator",
      "Applicant's valid national passport and ID",
      "ANC standard declaration of voluntary assumption of obligations"
    ],
    timeline: "ANC officially targets 12 months for processing but current backlogs mean 18–36 months is typical. Article 11 repatriation cases involving historical evidentiary gaps can take 3–5 years. Document gathering from Romanian civil registries and Communist-era state archives adds 3–12 months before submission. Romania is processing extremely high application volumes, particularly from Moldova and Ukraine.",
    commonPitfalls: [
      "Broken chain: an ancestor who voluntarily renounced Romanian citizenship ends transmission for the standard descent route",
      "Moldovan archive confusion: Romanian and Moldovan civil registries share overlapping records from the 1940–1944 Bessarabia period — locating the correct extracts requires specific archive knowledge",
      "Pre-1989 record destruction: some Communist-era records were deliberately destroyed; secondary evidence such as church records and testimony may be required",
      "Translation requirements: translations must be by certified Romanian court-sworn translators; standard bilingual translations are rejected by the ANC",
      "Article 11 cutoff scope: only loss of citizenship through specific coercive laws passed 1940–1989 qualifies; voluntary emigration after 1989 does not"
    ],
    officialLinks: [
      { name: "Autoritatea Națională pentru Cetățenie (ANC) — National Citizenship Authority", url: "https://www.cetatenie.just.ro/" },
      { name: "Romanian Ministry of Justice", url: "https://www.just.ro/en/" },
      { name: "Romanian Consular Network — Citizenship Services", url: "https://www.mae.ro/en/node/2033" }
    ],
    faqAnswers: {
      whoQualifies: "Two groups qualify. First, anyone born to at least one Romanian parent (standard descent route) — there is no generational limit if the chain is documented. Second, under Article 11 of Law 21/1991, children and grandchildren of people stripped of Romanian citizenship through Communist or wartime coercion between 1940 and 1989 can petition for reinstatement, even if they have never visited Romania and do not speak Romanian.",
      documentsNeeded: "You need birth and marriage certificates for every generation from the Romanian ancestor to yourself, plus proof that the ancestor held Romanian citizenship. For Article 11 cases, you also need evidence that the citizenship was lost involuntarily. All foreign documents require apostilles and certified Romanian translations from a sworn court translator.",
      processingTime: "The ANC officially targets 12 months but current backlogs mean 18–36 months is typical for straightforward cases. Complex Article 11 repatriation cases can take 3–5 years. Romania is processing very high volumes — particularly from Moldova — which has created significant delays."
    },
    legalBasis: "Romanian citizenship is governed by Law 21/1991 on Romanian Citizenship (as amended). Article 5 covers acquisition by descent (jus sanguinis). Article 10 covers reacquisition by former citizens. Article 11 is the critical provision allowing descendants of involuntarily denationalized persons to reclaim citizenship. The law has been amended multiple times, most significantly in 1999, 2003, 2010, and 2018, each time expanding the Article 11 route and clarifying eligibility.",
    dualCitizenshipRules: "Romania fully permits dual and multiple citizenship. Romanian citizens who acquire foreign nationality do not lose their Romanian citizenship, and foreign nationals who reacquire Romanian nationality under the CBD or Article 11 routes are not required to renounce their other citizenship. This policy was deliberately designed to serve Romania's large diaspora (estimated 5–6 million abroad) and the substantial population of ethnic Romanians in Moldova.",
    costEstimate: "ANC application fee: approximately RON 300–500 (€60–€100). Romanian civil registry extracts: €5–€20 per document. Archive research at DANIC (National Central Historical Archives): €10–€30 per hour. Apostilles: €10–€40 per document. Certified Romanian translations: €40–€80 per document. Total for a typical 2–3 generation claim: €400–€1,200.",
    keyArchives: [
      { name: "Arhivele Naționale ale României (DANIC) — National Central Historical Archives", url: "https://www.arhivelenationale.ro/" },
      { name: "ANC — Autoritatea Națională pentru Cetățenie (National Citizenship Authority)", url: "https://www.cetatenie.just.ro/" },
      { name: "Direcția pentru Evidența Persoanelor și Administrarea Bazelor de Date (DEPABD)", url: "https://www.depabd.ro/" }
    ],
    relatedCountries: ["moldova-citizenship-by-descent", "ukraine-citizenship-by-descent", "hungary-citizenship-by-descent", "bulgaria-citizenship-by-descent"]
  },

  "croatia-citizenship-by-descent": {
    title: "Croatia Citizenship by Descent — EU & Schengen Passport via Croatian Heritage",
    description: "Croatia offers citizenship by descent to all descendants of Croatian emigrants with no generational limit, no residency requirement, and no language test. Croatia is an EU and Schengen member.",
    intro: "Croatia operates one of Europe's most diaspora-friendly citizenship-by-descent programs under Article 11 of the Croatian Citizenship Act. Croatian emigrants and their descendants — regardless of how many generations removed — can claim Croatian citizenship without ever visiting Croatia, passing a language test, or renouncing their current nationality. Croatia joined the EU in 2013 and the Schengen Area in January 2023, making a Croatian passport extremely valuable. The global Croatian diaspora is estimated at 2–4 million people, with large communities in the USA, Australia, Germany, Argentina, and Canada.",
    eligibilityOverview: "Under Article 11 of the Croatian Citizenship Act (Zakon o hrvatskom državljanstvu), any descendant of a Croatian émigré or person of Croatian origin can claim citizenship by descent regardless of how many generations have passed. Croatian origin is established through the ancestor's Croatian birth records, Yugoslav-era identity documents, church baptism records, or emigration records showing departure from Croatian historical territory. Dual citizenship is fully permitted, so no renunciation of existing nationality is required.",
    keyRequirements: [
      "At least one direct-line ancestor was a Croatian citizen or person of Croatian origin who emigrated from Croatian territory",
      "Documented unbroken lineage from that Croatian ancestor to the applicant",
      "The ancestor emigrated from territory forming part of modern Croatia (historic regions of Croatia, Slavonia, Dalmatia, Istria, etc.)",
      "Application filed at a Croatian embassy or consulate, or at the Ministry of the Interior in Croatia",
      "No language test, no residency requirement, and no renunciation of other citizenship required"
    ],
    documents: [
      "Birth certificate(s) for each generation from the Croatian ancestor to the applicant",
      "Marriage certificate(s) for each couple in the lineage chain",
      "Evidence that the ancestor was Croatian or of Croatian origin: Croatian birth certificate, Yugoslav-era identity documents, baptism records, or emigration papers",
      "Applicant's current valid national passport",
      "Proof of current address (utility bill or bank statement)",
      "Apostilles on all foreign documents",
      "Certified Croatian translations of all non-Croatian documents",
      "Police clearance certificate confirming no criminal record (may be required at some consulates)"
    ],
    timeline: "Croatian embassies and consulates typically process applications in 6–24 months after a complete file is submitted. The Ministry of the Interior in Zagreb is often faster at 3–12 months. Document gathering from Croatian and former-Yugoslav archives can add several months before submission. Realistic total: 12–30 months from start to passport.",
    commonPitfalls: [
      "Former-Yugoslav archive complexity: depending on where ancestors lived, records may be held in Serbian, Bosnian, or North Macedonian archives rather than Croatian ones — a Croatian genealogist can identify the correct source",
      "Historical territory boundaries: Croatia's modern borders differ from its Austro-Hungarian boundaries; some families with 'Croatian' origin have records in what is now Serbia or Bosnia, requiring careful documentation to establish Croatian connection",
      "Name spelling variations: Croatian diacritical marks (š, č, ž, ć, đ) are often absent from foreign records; linking anglicized or simplified surname spellings to Croatian originals requires thorough documentation",
      "WWII record destruction: significant civil, church, and municipal records from the 1930s–1940s were destroyed in wartime; secondary evidence may be required",
      "Consulate jurisdiction: you must apply through the consulate serving your country of residence; some high-demand consulates (USA, Australia) have long waiting lists"
    ],
    officialLinks: [
      { name: "Croatian Ministry of the Interior — Citizenship", url: "https://mup.gov.hr/en/aliens-and-citizenship/citizenship/2052" },
      { name: "Croatian Citizenship Act — Zakon o hrvatskom državljanstvu", url: "https://www.zakon.hr/z/371/Zakon-o-hrvatskom-dr%C5%BEavljanstvu" },
      { name: "Ministry of Foreign Affairs Croatia — Consular Citizenship Services", url: "https://mvep.gov.hr/en/consular-information/citizenship/14424" }
    ],
    faqAnswers: {
      whoQualifies: "Any descendant of a Croatian citizen or person of Croatian origin who emigrated from Croatian territory can qualify under Article 11, regardless of how many generations removed they are. There is no limit on generations — your great-great-grandparent's Croatian origin can be the legal basis for your claim today. You do not need to speak Croatian, live in Croatia, or give up your current citizenship.",
      documentsNeeded: "Birth and marriage certificates for every generation from the Croatian ancestor to you, plus evidence that the ancestor was Croatian (Croatian birth certificate, old Yugoslav documents, baptism records, or emigration papers). All foreign documents need apostilles and certified Croatian translations.",
      processingTime: "Embassies and consulates typically process applications in 6–24 months after receiving a complete file. The Ministry of the Interior in Zagreb tends to be faster at 3–12 months. Gathering historical records from Croatian and Yugoslav archives can take months before you can submit."
    },
    legalBasis: "Croatian citizenship is governed by the Zakon o hrvatskom državljanstvu (Croatian Citizenship Act), originally enacted after independence in 1991 and significantly amended in 2011. Article 11 is the key emigrant-descendant provision, enabling all descendants of Croatian emigrants to claim citizenship regardless of the number of generations. Croatia became an EU member in July 2013 and joined the Schengen Area in January 2023.",
    dualCitizenshipRules: "Croatia fully permits dual and multiple citizenship under its Citizenship Act. Croatian citizens who acquire foreign nationality do not lose their Croatian citizenship, and foreign nationals claiming Croatian citizenship by descent are not required to renounce their other passport. This makes Croatia's CBD program among the most accessible in Europe for the large Croatian diaspora in the USA, Australia, Canada, and South America.",
    costEstimate: "Ministry of Interior application fee: approximately HRK 35–70 (€5–€10). Consular processing fees vary by country and are typically €50–€150. Croatian state archive research (HDA): €5–€20 per document. Apostilles: €10–€40 per document depending on country. Certified Croatian translations: €40–€80 per document. Total for a typical multi-generation claim: €300–€900.",
    keyArchives: [
      { name: "Hrvatski državni arhiv (HDA) — Croatian State Archives", url: "https://www.arhiv.hr/en" },
      { name: "Croatian Ministry of the Interior — Citizenship Records", url: "https://mup.gov.hr/en/aliens-and-citizenship/citizenship/2052" },
      { name: "Hrvatska matica iseljenika — Office for Croatians Abroad", url: "https://hmiu.gov.hr/en" }
    ],
    relatedCountries: ["slovenia-citizenship-by-descent", "bosnia-citizenship-by-descent", "serbia-citizenship-by-descent", "italy-citizenship-by-descent"]
  },

  "bulgaria-citizenship-by-descent": {
    title: "Bulgaria Citizenship by Descent — EU Passport via Bulgarian Heritage",
    description: "Bulgaria offers EU citizenship by descent for descendants up to great-grandparents (3 generations) and an ethnic Bulgarian pathway. Dual citizenship is fully permitted.",
    intro: "Bulgaria is an EU member offering citizenship by descent for descendants of Bulgarian citizens up to great-grandparents, as well as a separate ethnic Bulgarian pathway that allows people of Bulgarian ethnic origin to obtain citizenship without a generational limit on ancestry. With a Bulgarian passport, holders enjoy full EU freedom of movement, live and work rights across 27 EU member states, and Schengen Area access. Bulgaria fully permits dual citizenship.",
    eligibilityOverview: "Bulgarian citizenship law recognizes two main descent-based routes. The primary route covers descendants up to the third generation (great-grandparent) from a Bulgarian citizen, requiring documented lineage. The ethnic Bulgarian pathway (available since the 1990s) allows applicants who can demonstrate Bulgarian ethnic origin — through language, culture, or family records — to apply for citizenship through a simplified procedure via the State Agency for Bulgarians Abroad (DABA). No residency is required for either route. Dual citizenship is explicitly permitted.",
    keyRequirements: [
      "At least one ancestor up to the great-grandparent level was a Bulgarian citizen (standard descent route), OR applicant demonstrates Bulgarian ethnic origin (ethnic pathway)",
      "Documented lineage connecting the applicant to the Bulgarian ancestor across each generation",
      "Birth and marriage certificates for each generation in the chain",
      "For the ethnic pathway: proof of Bulgarian ethnic origins such as school records, church documents, community membership, or language history",
      "Application filed at the Bulgarian Ministry of Justice or via the State Agency for Bulgarians Abroad (DABA) for the ethnic route"
    ],
    documents: [
      "Applicant's birth certificate and those of parents and grandparents (great-grandparents for third-generation claims)",
      "Marriage certificates for each couple in the lineage chain",
      "Proof of the ancestor's Bulgarian citizenship (Bulgarian birth certificate, old identity documents, civil registry extract)",
      "For ethnic pathway: documents evidencing Bulgarian ethnic background (school transcripts, church records, community affiliation, language knowledge)",
      "Apostilles on all foreign documents",
      "Certified Bulgarian translations of all non-Bulgarian documents",
      "Applicant's valid national passport",
      "Certificate of good standing / police clearance from the applicant's country of residence"
    ],
    timeline: "Standard descent route processing through the Ministry of Justice: 12–24 months. Ethnic pathway via DABA: 6–18 months, though DABA decisions are sometimes faster for well-documented applications. Document gathering from Bulgarian national archives adds 2–6 months. Realistic total from start to Bulgarian passport: 18–30 months.",
    commonPitfalls: [
      "Generational limit: the standard descent pathway only covers 3 generations (to great-grandparent) — applicants whose Bulgarian ancestor is a great-great-grandparent must use the ethnic pathway instead",
      "Archive damage: Bulgaria's civil registry records from before 1945, particularly in rural areas, may be incomplete — church records and Ottoman-era archives are sometimes needed as substitutes",
      "Translation quality: the Bulgarian Ministry of Justice requires certified translations by an officially accredited translator; uncertified translations cause delays or rejections",
      "Ethnic pathway documentation: the ethnic Bulgarian route requires genuine evidence of ethnic connection — vague or unsubstantiated claims are rejected",
      "Communist-era name changes: many Bulgarian families had Christian or Western surnames replaced with Bulgarian names under Communist rule; birth certificates may use different names than family records"
    ],
    officialLinks: [
      { name: "Bulgarian Ministry of Justice — Citizenship", url: "https://www.justice.government.bg/home/index/a76a9e3c-d7a2-474c-aac7-77b6c2a4cf35" },
      { name: "State Agency for Bulgarians Abroad (DABA)", url: "https://www.aba.government.bg/" },
      { name: "Bulgarian Citizenship Act (unofficial English summary)", url: "https://www.lex.bg/bg/laws/ldoc/2135166571" }
    ],
    faqAnswers: {
      whoQualifies: "Descendants of Bulgarian citizens up to the third generation (great-grandparent) qualify under the standard descent route. People of Bulgarian ethnic origin — regardless of how many generations removed — can apply through the ethnic Bulgarian pathway via the State Agency for Bulgarians Abroad (DABA). Both routes allow dual citizenship and require no residency in Bulgaria.",
      documentsNeeded: "Birth and marriage certificates for each generation from the Bulgarian ancestor to you, plus proof that the ancestor held Bulgarian citizenship. For the ethnic pathway, you also need documents evidencing Bulgarian ethnic origin (school records, church records, language history, community membership). All foreign documents require apostilles and certified Bulgarian translations.",
      processingTime: "Standard descent route: 12–24 months at the Ministry of Justice. Ethnic pathway via DABA: 6–18 months. Both routes require document gathering that adds time before submission."
    },
    legalBasis: "Bulgarian citizenship is primarily governed by the Zakon za balgarskoto grazhdanstvo (Bulgarian Citizenship Act) of 1998, as amended. Article 8 establishes citizenship by descent for children of Bulgarian citizens. The ethnic Bulgarian facilitated procedure is established by Article 15 and subsequent ministerial orders. The State Agency for Bulgarians Abroad was established in 2000 and administers the ethnic pathway.",
    dualCitizenshipRules: "Bulgaria explicitly permits dual and multiple citizenship. Bulgarian citizens who naturalize elsewhere do not lose their Bulgarian citizenship, and foreign nationals who obtain Bulgarian citizenship by descent or through the ethnic pathway are not required to renounce their existing nationality. This is one of the more permissive EU states on dual citizenship.",
    costEstimate: "Ministry of Justice application fee: BGN 80–200 (approx. €40–€100). Bulgarian civil registry extracts: €5–€15 per document. State Archive (DA) research: €10–€30 per session. Apostilles: €10–€40 per document. Certified Bulgarian translations: €40–€80 per document. Total for a 3-generation claim: approximately €400–€1,000.",
    keyArchives: [
      { name: "Dărzhavna Agentsiya ‘Arkhivi’ (DA) — State Agency of Archives of Bulgaria", url: "https://www.archives.government.bg/" },
      { name: "State Agency for Bulgarians Abroad (DABA)", url: "https://www.aba.government.bg/" },
      { name: "GRAO — Civil Registration and Administrative Services Directorate", url: "https://www.grao.bg/en/" }
    ],
    relatedCountries: ["romania-citizenship-by-descent", "greece-citizenship-by-descent", "north-macedonia-citizenship-by-descent", "serbia-citizenship-by-descent"]
  },

  "sweden-citizenship-by-descent": {
    title: "Sweden Citizenship by Descent — Nordic EU Passport via Swedish Heritage",
    description: "Sweden automatically transmits citizenship to children of Swedish parents. Dual citizenship is permitted since 2001, but those born abroad may lose Swedish citizenship at age 22 without taking action.",
    intro: "Sweden transmits citizenship automatically to children born to at least one Swedish parent, regardless of where the birth occurs. Sweden has permitted dual citizenship since July 1, 2001, so no renunciation of other nationality is required. However, there is a critical age-22 rule: Swedish citizens born abroad who hold dual citizenship may lose their Swedish citizenship at age 22 unless they have previously lived in Sweden, have spent meaningful time in a Nordic country, or filed a retention declaration between ages 18 and 21. Understanding and acting on this rule is essential for members of the Swedish diaspora.",
    eligibilityOverview: "A child born to at least one Swedish citizen parent automatically acquires Swedish citizenship at birth (since April 1, 2015) regardless of birth location and regardless of the parents' marital status. Previously, only children of Swedish mothers acquired citizenship automatically — children of unmarried Swedish fathers required additional steps. Under the 2015 reform, this distinction was eliminated. Dual citizenship is fully permitted since 2001. The critical caveat: persons born abroad who hold another citizenship risk automatic loss at age 22 unless they establish a connection to Sweden.",
    keyRequirements: [
      "At least one parent is or was a Swedish citizen at the time of birth",
      "If born before April 1, 2015, to an unmarried Swedish father: Swedish citizenship may require formal declaration or naturalization step",
      "For born-abroad dual nationals approaching age 22: must have lived in Sweden, spent 7 years in a Nordic country, or filed a retention declaration ages 18–21",
      "Application filed at a Swedish consulate or the Swedish Tax Agency (Skatteverket) in Sweden",
      "Dual citizenship permitted — no renunciation of existing nationality required"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Swedish parent",
      "Swedish parent's birth certificate confirming Swedish citizenship",
      "Marriage certificate if applicable in the lineage chain",
      "Applicant's current valid national passport",
      "For retention declaration (ages 18–21): application form to Migrationsverket or relevant consulate",
      "Evidence of connection to Sweden if using the residency-history exception to the age-22 rule"
    ],
    timeline: "For straightforward birth-to-Swedish-parent registrations, processing takes 1–6 months. For adults discovering Swedish ancestry later in life, establishing citizenship via Skatteverket or a consulate typically takes 3–12 months. Naturalization (for those who don't qualify by descent) takes 5 years of residency in Sweden.",
    commonPitfalls: [
      "Age-22 loss: born-abroad dual nationals who have never lived in Sweden and did not file a retention declaration before age 22 automatically lose Swedish citizenship — this is the single most important trap",
      "Pre-2015 births to unmarried Swedish fathers: the 2015 reform was not fully retroactive in all scenarios; some older cases required extra steps beyond just proving paternity",
      "Pre-2001 renunciations: people who were forced to renounce Swedish citizenship before July 2001 (when dual citizenship became legal) when acquiring another nationality cannot automatically reclaim it — they must naturalize",
      "Records gap: Swedish emigrants from the early 20th century may have limited paper trails if parishes or tax registry records weren't maintained; the Swedish Church's Emigrant Institute in Växjö is a valuable resource"
    ],
    officialLinks: [
      { name: "Migrationsverket — Swedish Citizenship (English)", url: "https://www.migrationsverket.se/English/Private-individuals/Becoming-a-Swedish-citizen.html" },
      { name: "Swedish Tax Agency (Skatteverket) — Registration of Swedish Citizens Born Abroad", url: "https://skatteverket.se/" },
      { name: "Swedish Consular Network — Citizenship Abroad", url: "https://www.swedenabroad.se/en/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Swedish citizen parent automatically acquires Swedish citizenship, regardless of birth location or marital status of the parents (since 2015). The key risk is the age-22 rule: if you were born abroad, hold another citizenship, and have never lived in Sweden or a Nordic country for at least 7 years, you risk losing Swedish citizenship at age 22 unless you file a retention declaration between ages 18 and 21.",
      documentsNeeded: "Your birth certificate showing a Swedish parent, the Swedish parent's proof of Swedish citizenship (their birth certificate or Swedish passport), and your current national passport. If filing a retention declaration, the relevant form from Migrationsverket or the nearest Swedish consulate.",
      processingTime: "Citizenship registration for qualifying newborns or children takes 1–6 months. For adults applying to confirm or reclaim Swedish citizenship, processing ranges from 3–12 months depending on the consulate and documentation complexity."
    },
    legalBasis: "Swedish citizenship is governed by the Lag om svenskt medborgarskap (2001:82), which came into force in July 2001 and introduced dual citizenship. The 2015 amendment (Lag 2014:481) reformed transmission rules for children of unmarried Swedish fathers. The age-22 automatic loss rule is established by Section 14 of the 2001 Act for those born abroad with dual citizenship who lack established connection to Sweden.",
    dualCitizenshipRules: "Sweden has permitted dual citizenship since July 1, 2001. Prior to that date, Swedes who naturalized elsewhere were required to renounce Swedish citizenship. Those forced to renounce before 2001 cannot automatically reclaim Swedish citizenship but may be able to naturalize. Persons born after 2001 with one Swedish parent do not need to renounce their other citizenship. The age-22 rule means that born-abroad dual nationals must actively maintain their Swedish citizenship or risk losing it.",
    costEstimate: "Citizenship registration / notification: free at Skatteverket or via consulate. Retention declaration filing: free. Certified translations of foreign documents: €30–€80 per document. Apostilles: €10–€40 per document. Swedish parish/emigrant archive record requests: €5–€20 per record. Total for a straightforward registration: €100–€400.",
    keyArchives: [
      { name: "Riksarkivet (National Archives of Sweden)", url: "https://riksarkivet.se/" },
      { name: "Migrationsverket — Swedish Migration Agency", url: "https://www.migrationsverket.se/English/Private-individuals/Becoming-a-Swedish-citizen.html" },
      { name: "Emigrantregistret/Swedish Emigrant Institute (Växjö)", url: "https://www.utvandrarnashus.se/en/emigrantregister" }
    ],
    relatedCountries: ["norway-citizenship-by-descent", "denmark-citizenship-by-descent", "finland-citizenship-by-descent", "iceland-citizenship-by-descent"]
  },

  "denmark-citizenship-by-descent": {
    title: "Denmark Citizenship by Descent — EU & Schengen Passport via Danish Heritage",
    description: "Denmark automatically transmits citizenship to children of Danish parents. Dual citizenship is permitted since 2015, but born-abroad descendants risk automatic loss of Danish citizenship at age 22.",
    intro: "Denmark transmits citizenship automatically to children of Danish parents, regardless of the child's country of birth. Since September 1, 2015, Denmark has permitted dual citizenship, meaning no renunciation of existing nationality is required when acquiring or retaining Danish citizenship. However, like Sweden and Finland, Denmark has a strict age-22 cutoff: Danish citizens born abroad who hold another nationality automatically lose their Danish citizenship at age 22 unless they have established sufficient connection to Denmark. A Danish passport provides full EU and Schengen access, as well as one of the world's strongest travel documents.",
    eligibilityOverview: "A child born to at least one Danish citizen parent automatically acquires Danish citizenship at birth (since July 1, 2014 — prior to that, the rules were more complex for children born abroad). Dual citizenship has been permitted since September 1, 2015. The age-22 rule: Danish citizens born outside Denmark who have never been resident in Denmark and have not maintained a specified connection must apply to retain citizenship between ages 18 and 22 or lose it automatically. Danish naturalization (for those without a descent claim) requires 9 years of residency and is among the strictest in the EU.",
    keyRequirements: [
      "At least one parent is or was a Danish citizen at the time of the birth",
      "For births before July 1, 2014: more complex rules applied (especially for children born abroad to Danish mothers vs. fathers) — consult the consulate for pre-2014 births",
      "For born-abroad dual nationals approaching age 22: must apply to retain Danish citizenship or demonstrate connection to Denmark",
      "Application at the Danish Immigration Service or a Danish consulate",
      "Dual citizenship permitted since September 2015 — no renunciation required"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Danish parent",
      "Danish parent's proof of Danish citizenship (Danish passport or birth certificate)",
      "Marriage certificate if relevant to the lineage chain",
      "Applicant's current valid national passport",
      "For retention application (ages 18–22): application form to the Danish Immigration Service",
      "Evidence of connection to Denmark for retention purposes (visits, Danish-language education, family ties)"
    ],
    timeline: "Citizenship registration for children of Danish parents: 1–6 months. Adults confirming citizenship by descent: 3–12 months at a consulate. Retention applications submitted before age 22: 3–6 months typically. Danish naturalization (if descent doesn't apply): 9+ years of residency.",
    commonPitfalls: [
      "Age-22 automatic loss: born-abroad dual nationals who fail to apply for retention between ages 18 and 22 lose Danish citizenship automatically and cannot recover it without naturalization",
      "Pre-2014 birth complications: children born outside Denmark before July 1, 2014 may have faced different rules depending on whether it was the mother or father who was Danish, and whether the parents were married — some older cases are complex",
      "Pre-2015 renunciations: Danes who had to renounce before September 2015 to acquire another nationality cannot automatically reclaim Danish citizenship",
      "Strict naturalization: with a 9-year residency requirement, Danish naturalization is among the strictest in the EU — descent is far more valuable than naturalization as a route to Danish citizenship"
    ],
    officialLinks: [
      { name: "Danish Immigration Service — Danish Citizenship by Descent", url: "https://www.nyidanmark.dk/en-GB/Words-and-concepts/US/Citizenship/Danish-citizenship-by-descent/" },
      { name: "Ministry of Immigration and Integration — Citizenship", url: "https://uim.dk/arbejdsomraader/statsborgerskab/" },
      { name: "Danish Consular Portal — Citizenship Services", url: "https://www.um.dk/en/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Danish citizen parent automatically acquires Danish citizenship, regardless of where the birth occurred (for births from July 1, 2014 onward; pre-2014 births have more complex rules). The critical warning is the age-22 rule: if you were born abroad, hold another citizenship, and have not established connection to Denmark, you must apply to retain Danish citizenship before your 22nd birthday or lose it permanently.",
      documentsNeeded: "Your birth certificate showing a Danish parent, the Danish parent's proof of Danish citizenship, and your current national passport. For a retention application, the form from the Danish Immigration Service and documentation of connection to Denmark (visits, Danish education, family ties).",
      processingTime: "Citizenship registration and retention applications typically take 3–12 months. Danish naturalization (for those without a descent claim) takes 9+ years of continuous residency and is among Europe's most demanding processes."
    },
    legalBasis: "Danish citizenship is governed by the Indfødretsloven (Danish Nationality Act), most recently comprehensively amended effective July 1, 2014 (automatic transmission reform) and September 1, 2015 (dual citizenship permitted). The age-22 automatic loss rule is in Section 8 of the Act. Changes to dual citizenship required a constitutional referendum (held for associated territories) and parliamentary supermajority.",
    dualCitizenshipRules: "Denmark has permitted dual citizenship since September 1, 2015. Prior to that, Danes who naturalized elsewhere were required to renounce Danish citizenship. Those forced to renounce before 2015 cannot automatically reclaim. Persons born to Danish parents after 2015 are not required to renounce their other nationality. The age-22 rule means born-abroad dual nationals must actively retain or risk losing Danish citizenship.",
    costEstimate: "Citizenship registration and retention applications: free (no fee at the Danish Immigration Service or consulates). Certified translations of foreign documents: €30–€80 per document. Apostilles: €10–€40 per document. Danish archive records (Rigsarkivet): €5–€20 per record. Total for a straightforward registration: €100–€400.",
    keyArchives: [
      { name: "Rigsarkivet — Danish National Archives", url: "https://www.sa.dk/en/" },
      { name: "Danish Immigration Service (Udlændingestyrelsen)", url: "https://www.nyidanmark.dk/en-GB/" },
      { name: "Danish Demographic Database — genealogical records", url: "https://ddd.dda.dk/" }
    ],
    relatedCountries: ["sweden-citizenship-by-descent", "norway-citizenship-by-descent", "finland-citizenship-by-descent", "iceland-citizenship-by-descent"]
  },

  "finland-citizenship-by-descent": {
    title: "Finland Citizenship by Descent — Nordic EU Passport via Finnish Heritage",
    description: "Finland automatically transmits citizenship to children of Finnish parents. Dual citizenship is permitted since 2003, but born-abroad dual nationals must act before age 22 to retain Finnish citizenship.",
    intro: "Finland automatically transmits citizenship to children of Finnish parents, regardless of where the birth occurs. Dual citizenship has been permitted since June 1, 2003, meaning no renunciation of existing nationality is required. However, Finnish citizens born abroad who hold a foreign citizenship are subject to the same age-22 rule common to Nordic countries: they risk losing Finnish citizenship at age 22 unless they have lived in Finland, have 7 years of Nordic residency, or filed a declaration of retention between ages 18 and 21. Finland is an EU and Schengen member, making a Finnish passport one of the world's most powerful travel documents.",
    eligibilityOverview: "A child born to a Finnish citizen mother automatically acquires Finnish citizenship. A child born to a Finnish citizen father also acquires citizenship automatically if the parents are married; if unmarried, the Finnish father must be established as the legal father through acknowledgment or court order. Dual citizenship is permitted since 2003. The age-22 retention rule: Finnish citizens born abroad holding another citizenship must have established a connection to Finland (residency or declaration) to avoid automatic loss at age 22.",
    keyRequirements: [
      "At least one parent is or was a Finnish citizen at the time of birth",
      "If born to an unmarried Finnish father: legal parenthood must be established (acknowledgment or court)",
      "For born-abroad dual nationals approaching age 22: must have Finnish domicile, 7 years' Nordic residency, or file retention declaration ages 18–21",
      "Application at the Finnish Immigration Service (Migri) or a Finnish consulate",
      "Dual citizenship permitted since June 2003 — no renunciation required"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Finnish parent",
      "Finnish parent's proof of Finnish citizenship (Finnish passport or birth certificate)",
      "Marriage certificate if the parents were married (relevant for father's transmission pre-reform)",
      "For unmarried Finnish father cases: acknowledgment of paternity or court order",
      "For retention declaration (ages 18–21): form from Finnish Immigration Service (Migri)",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration for children of Finnish parents: 1–6 months. Adults confirming Finnish citizenship by descent: 3–12 months. Retention declarations: 1–3 months to process. Finnish naturalization (5 years residency + language test) if descent doesn't apply.",
    commonPitfalls: [
      "Age-22 automatic loss: born-abroad Finnish dual nationals who do not file a retention declaration between ages 18 and 21 and have no Nordic domicile lose Finnish citizenship automatically at age 22",
      "Unmarried Swedish father cases (pre-reform): children born to unmarried Finnish fathers before certain reforms may have more complex eligibility — consult Migri for pre-2003 births",
      "Pre-2003 renunciations: Finns who were forced to renounce Finnish citizenship before 2003 when acquiring another nationality cannot automatically reclaim it",
      "Nordic residency calculation: the 7-year rule to avoid age-22 loss requires residence in ANY Nordic country (Finland, Sweden, Norway, Denmark, Iceland), not only Finland; document this residency carefully"
    ],
    officialLinks: [
      { name: "Finnish Immigration Service (Migri) — Finnish Citizenship", url: "https://migri.fi/en/finnish-citizenship" },
      { name: "Finnish Ministry of the Interior — Nationality Affairs", url: "https://intermin.fi/en/home" },
      { name: "Suomi.fi — Finnish Citizenship Guide", url: "https://www.suomi.fi/en" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to a Finnish citizen mother automatically acquires Finnish citizenship. Children of Finnish citizen fathers also qualify, provided legal parenthood is established (parents married, or paternity formally acknowledged). Dual citizenship is permitted since 2003. The critical age-22 rule: if you were born abroad, hold another nationality, and have no Finnish or Nordic residency, you must file a retention declaration between ages 18 and 21 or lose Finnish citizenship permanently.",
      documentsNeeded: "Your birth certificate showing a Finnish parent, the Finnish parent's proof of Finnish citizenship (Finnish passport or birth certificate), and your current national passport. For retention declarations, the relevant Migri form. For unmarried Finnish father cases, acknowledgment of paternity or a court order.",
      processingTime: "Registration and citizenship queries typically take 3–12 months. Retention declarations are usually processed in 1–3 months. Finnish naturalization (for those without a descent claim) requires 5 years of continuous Finnish residency plus a language test."
    },
    legalBasis: "Finnish citizenship is governed by the Kansalaisuuslaki (Nationality Act 359/2003), which came into force on June 1, 2003 and introduced dual citizenship. The age-22 automatic loss rule is in Section 33. The Act has been amended several times, most recently with changes around parentage and gender-neutrality in transmission. Prior to 2003, the governing act was 401/1968.",
    dualCitizenshipRules: "Finland has permitted dual citizenship since June 1, 2003. Finns who naturalized elsewhere before 2003 and were required to renounce Finnish citizenship cannot automatically reclaim it. Those with Finnish parentage born after 2003 are not required to renounce their other nationality. The age-22 rule means born-abroad dual nationals must actively retain their Finnish citizenship or risk automatic loss.",
    costEstimate: "Citizenship registration and retention declarations: no fee at Migri or consulates. Certified translations of foreign documents: €30–€80 per document. Apostilles: €10–€40 per document. Finnish archive records (Kansallisarkisto): €5–€20 per record. Total for a straightforward registration: €100–€400.",
    keyArchives: [
      { name: "Kansallisarkisto — National Archives of Finland", url: "https://www.arkisto.fi/en/" },
      { name: "Finnish Immigration Service (Migri)", url: "https://migri.fi/en/" },
      { name: "Digital Archives — Finnish genealogical records", url: "https://www.digitaaliarkisto.fi/" }
    ],
    relatedCountries: ["sweden-citizenship-by-descent", "norway-citizenship-by-descent", "denmark-citizenship-by-descent", "estonia-citizenship-by-descent"]
  },

  "netherlands-citizenship-by-descent": {
    title: "Netherlands Citizenship by Descent — EU Passport via Dutch Heritage",
    description: "The Netherlands automatically transmits citizenship to children of Dutch parents. Dual citizenship is restricted outside the EU — Dutch nationals living abroad for 10+ years may lose their citizenship unless they renew their passport.",
    intro: "The Netherlands automatically transmits citizenship to children of Dutch citizens, regardless of birth location. However, Dutch nationality law is more restrictive on dual citizenship than most EU states. Dutch nationals who hold another nationality and have lived outside the EU for 10 or more consecutive years risk losing their Dutch citizenship, unless they take proactive steps such as renewing their Dutch passport before the 10-year mark. An important historical pathway is the 'latent Dutch' route for people whose mother was Dutch before 1985 (when gender-equal transmission was introduced) — some of these cases can be resolved through legal proceedings.",
    eligibilityOverview: "A child born to at least one Dutch citizen parent automatically acquires Dutch citizenship at birth (the gender-equal rule has been in place since 1985). Dual citizenship is permitted in certain circumstances but the Netherlands has a policy of discouraging it: naturalized Dutch citizens and Dutch citizens who naturalize elsewhere may lose their Dutch nationality. Critically, Dutch nationals with another citizenship who live outside the EU for 10 consecutive years without renewing their Dutch passport automatically lose Dutch citizenship. EU residency provides an exemption from this 10-year rule.",
    keyRequirements: [
      "At least one parent is or was a Dutch citizen at the time of birth",
      "For births before 1985: only Dutch fathers transmitted citizenship automatically; Dutch mothers did not — some of these 'latent Dutch' cases can be resolved through the IND or legal proceedings",
      "For Dutch nationals with dual citizenship living outside EU: must renew Dutch passport before the 10-year loss period expires",
      "Application at the Dutch Immigration and Naturalisation Service (IND) or a Dutch consulate",
      "Dual citizenship: partially allowed but restricted for non-EU residents"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Dutch parent",
      "Dutch parent's proof of Dutch citizenship (Dutch passport or municipality registration extract)",
      "Marriage certificate if applicable",
      "For latent Dutch cases (pre-1985 Dutch mother): court proceedings documentation or Option procedure through IND",
      "For 10-year renewal: current Dutch passport with sufficient validity remaining",
      "Applicant's current national passport"
    ],
    timeline: "Citizenship confirmation / Option procedure at the IND: 3–6 months typically. Latent Dutch legal proceedings: 6–24 months depending on complexity. Dutch naturalization (5 years residency + NT2 Dutch language exam + civic integration): 18–36 months total process.",
    commonPitfalls: [
      "10-year loss rule: Dutch nationals with dual citizenship who leave the EU and do not renew their Dutch passport within 10 years automatically lose Dutch citizenship — the most important trap for the Dutch diaspora",
      "Pre-1985 maternal lineage: people whose Dutch citizenship should have come through their mother (born before 1985) were excluded by the old law; some have pursued legal remedies but they are not always straightforward",
      "Dual citizenship discouraged: the Netherlands does not freely permit dual citizenship for naturalized citizens — this is different from most EU states",
      "Loss upon foreign naturalization: Dutch citizens who voluntarily acquire another nationality outside certain exceptions (EU member state, marriage, etc.) typically lose Dutch citizenship automatically"
    ],
    officialLinks: [
      { name: "IND — Dutch Immigration and Naturalisation Service (English)", url: "https://ind.nl/en/dutch-citizenship" },
      { name: "Netherlands Worldwide — Dutch Citizenship Abroad", url: "https://www.netherlandsworldwide.nl/" },
      { name: "Government of the Netherlands — Dutch Nationality", url: "https://www.government.nl/topics/dutch-nationality" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Dutch citizen parent automatically acquires Dutch citizenship (since 1985 for maternal transmission). The critical warning is the 10-year loss rule: Dutch nationals with dual citizenship who live outside the EU for more than 10 consecutive years without renewing their Dutch passport lose Dutch citizenship automatically. EU residency is exempt from this rule.",
      documentsNeeded: "Your birth certificate showing a Dutch parent, the Dutch parent's proof of Dutch citizenship (Dutch passport or GBA extract), and your current national passport. For latent Dutch cases (pre-1985 Dutch mother), you may need to file an Option procedure with the IND or pursue legal proceedings.",
      processingTime: "Standard IND procedures: 3–6 months. Option procedures for latent Dutch cases or other special circumstances: 6–18 months. Dutch naturalization (for those without a descent claim) requires 5 years of continuous valid residency plus a Dutch language exam (NT2)."
    },
    legalBasis: "Dutch citizenship is governed by the Rijkswet op het Nederlanderschap (Kingdom Act on Dutch Nationality) 1984, which entered into force in 1985 introducing gender-equal transmission. The 10-year loss rule for dual nationals outside the EU is in Article 15. Subsequent amendments have clarified the EU residency exemption and the Option procedure for pre-1985 maternal descent cases.",
    dualCitizenshipRules: "The Netherlands has a restrictive approach to dual citizenship. While it is permitted by birth in certain circumstances (e.g., born to a Dutch parent and a foreign parent), the Netherlands generally requires renunciation of other nationalities for naturalization. Dutch nationals who voluntarily acquire foreign nationality outside specified exceptions lose Dutch citizenship. The 10-year loss rule for dual nationals living outside the EU is an additional restriction. EU residents are exempt from the 10-year rule.",
    costEstimate: "IND Option procedure: €148 filing fee (adults). Naturalization: €905 filing fee. Certified translations of foreign documents: €30–€80 per document. Apostilles: €10–€40 per document. Total for an Option procedure: €300–€800 including document costs.",
    keyArchives: [
      { name: "Nationaal Archief — Dutch National Archives", url: "https://www.nationaalarchief.nl/" },
      { name: "IND — Immigration and Naturalisation Service", url: "https://ind.nl/en/" },
      { name: "CBG — Centraal Bureau voor Genealogie", url: "https://www.cbgfamilienamen.nl/" }
    ],
    relatedCountries: ["belgium-citizenship-by-descent", "luxembourg-citizenship-by-descent", "germany-citizenship-by-descent", "france-citizenship-by-descent"]
  },

  "belgium-citizenship-by-descent": {
    title: "Belgium Citizenship by Descent — EU Passport via Belgian Heritage",
    description: "Belgium transmits citizenship to children of Belgian parents. Dual citizenship is permitted since 2008, but born-abroad Belgian nationals face automatic loss at age 28 unless they file a conservation declaration.",
    intro: "Belgium automatically transmits citizenship to children of at least one Belgian parent at birth. Dual citizenship has been permitted since April 28, 2008, meaning no renunciation of other nationality is required. However, Belgium has an age-28 loss rule that is stricter than those of the Nordic countries: Belgian nationals born abroad who hold another nationality, are resident abroad, and have not filed a conservation declaration by age 28 automatically lose Belgian citizenship. This rule can catch diaspora members by surprise. Belgium is an EU and Schengen member, and a Belgian passport provides full EU rights and one of the world's strongest travel documents.",
    eligibilityOverview: "A child born to at least one Belgian citizen parent automatically acquires Belgian citizenship at birth (for births from 1985 onward under gender-equal transmission rules; pre-1985 rules for maternal transmission were more restrictive). Dual citizenship has been permitted since 2008. The age-28 loss rule: Belgian nationals born abroad who hold another nationality and are not resident in Belgium must file a declaration of conservation between ages 18 and 28 or lose Belgian citizenship. Recovery is possible by establishing 12 months of Belgian residency.",
    keyRequirements: [
      "At least one parent is or was a Belgian citizen at the time of birth",
      "For born-abroad Belgian nationals with dual citizenship aged 18–28 who are not resident in Belgium: must file a declaration of conservation to retain Belgian citizenship",
      "Application at the Belgian municipality or Belgian consulate abroad",
      "Dual citizenship permitted since 2008 — no renunciation required"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Belgian parent",
      "Belgian parent's proof of Belgian citizenship (Belgian identity card or passport)",
      "Marriage certificate if applicable",
      "For conservation declaration (ages 18–28): declaration form at Belgian consulate",
      "For recovery after age-28 loss: proof of 12 months Belgian residency plus declaration at municipality",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration at a municipality or consulate: 1–6 months. Conservation declaration processing: 1–3 months. Recovery of lost citizenship (after establishing 12-month Belgian residency): 3–6 months. Belgian naturalization (5 years residency plus integration requirements): 12–24 months.",
    commonPitfalls: [
      "Age-28 loss: born-abroad Belgian nationals with dual citizenship and no Belgian residency must file a conservation declaration by age 28 or automatically lose Belgian citizenship — this is the most common trap for Belgium's large diaspora",
      "Recovery path after age-28 loss: Belgian citizenship can be recovered by establishing 12 months of Belgian residency and filing a declaration, but this requires actually living in Belgium",
      "Pre-2008 dual citizenship: Belgians who acquired foreign nationality before 2008 and were required to renounce Belgian citizenship cannot automatically reclaim it",
      "Pre-1985 maternal transmission: older rules before gender-equal transmission may create complications for some pre-1985 births through Belgian mothers"
    ],
    officialLinks: [
      { name: "Federal Public Service Home Affairs — Belgian Nationality", url: "https://dofi.ibz.be/fr/themes/nationalite" },
      { name: "Belgian Foreign Affairs — Consular Citizenship", url: "https://diplomatie.belgium.be/en/services_abroad/consular_services/belgians_abroad" },
      { name: "Belgian Nationality Code (Belgian Official Gazette)", url: "https://www.ejustice.just.fgov.be/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Belgian citizen parent acquires Belgian citizenship automatically. Dual citizenship is permitted since 2008. The critical warning is the age-28 rule: Belgian nationals born abroad who hold another nationality and are not resident in Belgium must file a declaration of conservation between ages 18 and 28 to retain Belgian citizenship, or lose it automatically. Those who lose it can recover it by establishing 12 months of Belgian residency.",
      documentsNeeded: "Your birth certificate showing a Belgian parent, the Belgian parent's proof of Belgian citizenship (Belgian passport or identity card), and your current national passport. For a conservation declaration, the form from the Belgian consulate. For recovery after age-28 loss, proof of 12 months of Belgian residency.",
      processingTime: "Citizenship registration and conservation declarations: 1–6 months. Belgian naturalization (for those without a descent claim) requires 5 years of continuous Belgian residency plus civic integration requirements, typically taking 12–24 months to process after eligibility is met."
    },
    legalBasis: "Belgian nationality is governed by the Code de la nationalité belge / Belgisch Nationaliteitswetboek (Belgian Nationality Code), most recently significantly reformed by the Law of December 4, 2012 and the Law of April 28, 2008 (which introduced dual citizenship). The age-28 loss rule is in Article 22 §1 of the Code. The conservation declaration procedure is in Article 22 §2.",
    dualCitizenshipRules: "Belgium has permitted dual citizenship since April 28, 2008. Belgian citizens who acquire foreign nationality after 2008 do not lose their Belgian citizenship, and foreign nationals who obtain Belgian citizenship are generally not required to renounce their other nationality. The age-28 rule is the key restriction: it applies only to those born abroad with dual citizenship who are not resident in Belgium.",
    costEstimate: "Conservation declaration: free (no fee at Belgian consulates). Naturalization application: €150 filing fee. Certified translations of foreign documents: €30–€80 per document. Apostilles: €10–€40 per document. Belgian civil registry extracts: €5–€15 per document. Total for a conservation declaration or citizenship registration: €100–€400.",
    keyArchives: [
      { name: "Belgian State Archives (Archêves générales du Royaume)", url: "https://arch.be/" },
      { name: "Federal Public Service Home Affairs — Immigration", url: "https://dofi.ibz.be/" },
      { name: "Populations and Registres — Belgian civil registry", url: "https://ibz.be/fr/populationsregistres" }
    ],
    relatedCountries: ["netherlands-citizenship-by-descent", "luxembourg-citizenship-by-descent", "france-citizenship-by-descent", "germany-citizenship-by-descent"]
  },

  "slovenia-citizenship-by-descent": {
    title: "Slovenia Citizenship by Descent — EU Passport via Slovenian Heritage",
    description: "Slovenia offers citizenship by descent with a 4-generation diaspora route. No residency requirement for diaspora claimants. Dual citizenship fully permitted for the diaspora route.",
    intro: "Slovenia has one of Europe's more unusual CBD programs with a diaspora route that extends to the 4th generation — a depth matched by few EU states. The Slovenian Citizenship Act distinguishes between registered descent (for people who registered their citizenship before turning 36) and the diaspora route (for those who did not register). Both routes allow dual citizenship for diaspora members. Slovenia is an EU and Schengen member, making a Slovenian passport a full EU travel document with rights across Europe.",
    eligibilityOverview: "Slovenian citizenship law offers multiple routes. If a person's Slovenian parent registered their Slovenian citizenship, the child can claim by registered descent. If not, children and grandchildren of Slovenian diaspora members can use the diaspora route established by the Citizenship of the Republic of Slovenia Act (Article 19 and 40). The diaspora route allows descendants up to the 4th generation to apply for citizenship; applicants must establish 1 year of residency in Slovenia but can retain their other citizenship. A second-generation active-ties route allows some second-generation Slovenians abroad to apply without residency based on active cultural or economic ties to Slovenia.",
    keyRequirements: [
      "At least one parent, grandparent, or (for diaspora route) great-grandparent or great-great-grandparent was a Slovenian citizen or ethnic Slovenian emigrant",
      "Documented lineage across each generation from the Slovenian ancestor to the applicant",
      "For diaspora route: applicant must establish 1 year of residency in Slovenia before naturalization under this pathway",
      "For 2nd-generation active-ties route: documented evidence of connection to Slovenia without required residency",
      "Application at the Slovenian Administration Unit (upravna enota) or Slovenian consulate"
    ],
    documents: [
      "Birth certificates and marriage certificates for each generation in the chain from the Slovenian ancestor to the applicant",
      "Proof of the ancestor's Slovenian citizenship or Slovenian ethnic origin",
      "For diaspora route: proof of 1 year of Slovenian residency",
      "For active-ties route: documentation of cultural, economic, or other active ties to Slovenia",
      "Apostilles on all foreign documents",
      "Certified Slovenian translations of all non-Slovenian documents",
      "Applicant's valid national passport",
      "Certificate of no criminal record from the applicant's country of residence"
    ],
    timeline: "Registered descent route (standard): 6–18 months at the administrative unit. Diaspora route (after establishing 1-year residency): 12–24 months for the naturalization step. Active-ties route: 6–18 months. Document gathering adds 2–6 months before submission.",
    commonPitfalls: [
      "Registration requirement for direct descent: the standard (non-diaspora) citizenship-by-descent route requires the parent to have registered their Slovenian citizenship; if they didn't (and many didn't before turning 36), the child cannot use that route and must use the diaspora pathway instead",
      "1-year residency for diaspora route: unlike Croatia's completely no-residency requirement, Slovenia's diaspora route does require 1 year of physical residence in Slovenia — a significant hurdle for those living overseas",
      "Former-Yugoslav archives: records may be scattered across Slovenia, Bosnia, Croatia, or Serbia depending on where ancestors lived before 1991",
      "4-generation depth limit on diaspora route: beyond the 4th generation, there is no automatic pathway available"
    ],
    officialLinks: [
      { name: "Ministry of the Interior — Slovenian Citizenship", url: "https://www.gov.si/en/policies/slovenian-citizens/citizenship/" },
      { name: "Slovenia.si — Citizenship Information", url: "https://www.slovenia.si/en/about-slovenia/country/citizenship/" },
      { name: "Slovenian Citizenship Act (ZDRS)", url: "https://www.gov.si/en/state-authorities/bodies-within-ministries/administrative-unit/" }
    ],
    faqAnswers: {
      whoQualifies: "Descendants of Slovenian citizens through the registered descent route can claim without residency if their parent registered Slovenian citizenship. If the parent did not register, children and descendants up to the 4th generation can use the diaspora naturalization route, which requires establishing 1 year of Slovenian residency. A second-generation active-ties route is available for some applicants without full residency.",
      documentsNeeded: "Birth and marriage certificates for each generation from the Slovenian ancestor to the applicant, proof that the ancestor was Slovenian, and for the diaspora route, evidence of 1 year of Slovenian residency. All foreign documents need apostilles and certified Slovenian translations.",
      processingTime: "Standard descent route: 6–18 months. Diaspora route (after meeting residency): 12–24 months total. The 1-year residency requirement for the diaspora route extends the overall timeline significantly compared to countries with no residency requirement."
    },
    legalBasis: "Slovenian citizenship is governed by the Zakon o državljanstvu Republike Slovenije (ZDRS), originally enacted in 1991 when Slovenia declared independence. Article 14 covers citizenship by descent for children of registered Slovenian citizens. Articles 19 and 40 cover the diaspora naturalization route for descendants. The law has been amended multiple times, most significantly in 2002 and 2010.",
    dualCitizenshipRules: "Slovenia permits dual citizenship for diaspora claimants who acquire citizenship through the diaspora route under Article 19 or the active-ties route. Standard naturalization of foreigners typically requires renunciation of the original citizenship. This means the diaspora route is significantly advantageous for those who want to retain their existing nationality.",
    costEstimate: "Administrative unit application fee: €17–40. Certified translations of foreign documents: €40–€80 per document. Apostilles: €10–€40 per document. Slovenian archive records: €5–€20 per document. Total for a documentary application: €300–€800 plus any costs associated with establishing 1-year residency for the diaspora route.",
    keyArchives: [
      { name: "Arhiv Republike Slovenije — Archives of the Republic of Slovenia", url: "https://www.arhiv.gov.si/" },
      { name: "Ministry of the Interior — Registration and Citizenship", url: "https://www.gov.si/en/state-authorities/ministries/ministry-of-the-interior/" },
      { name: "Urad za Slovence v zamejstvu in po svetu — Office for Slovenians Abroad", url: "https://www.gov.si/en/state-authorities/bodies-within-ministries/office-for-slovenians-in-neighbouring-countries-and-across-the-world/" }
    ],
    relatedCountries: ["croatia-citizenship-by-descent", "austria-citizenship-by-descent", "italy-citizenship-by-descent", "hungary-citizenship-by-descent"]
  },

  "austria-citizenship-by-descent": {
    title: "Austria Citizenship by Descent — Standard Route & Nazi Persecution Pathway (§58c)",
    description: "Austria offers citizenship by descent for children of Austrian citizens. A special unlimited-generation pathway under §58c allows descendants of Nazi persecution victims to reclaim Austrian citizenship with dual nationality.",
    intro: "Austria's citizenship-by-descent program has two distinct tracks. The standard track transmits citizenship to children of Austrian citizens but generally requires renunciation of other nationalities (Austria has strict restrictions on dual citizenship for the standard naturalization pathway). The second track — and far more significant for the global diaspora — is the §58c pathway (Staatsburgerschaftsgesetz, as significantly expanded in September 2020), which allows descendants of people who fled or were persecuted by the Nazi regime to reclaim Austrian citizenship with no generational limit and without renouncing other nationalities. An estimated 800,000 or more people worldwide may qualify under §58c.",
    eligibilityOverview: "Standard descent route: children of Austrian citizens can claim citizenship, but Austria's strict dual-citizenship rules mean most standard naturalization requires renunciation of the original nationality. The §58c persecution pathway: descendants of Austrian citizens who fled Austria or were stripped of citizenship by the Nazi regime (1933–1945, including the Anschluss period 1938–1945) can apply for citizenship without generational limit and with dual citizenship explicitly permitted. The scope of §58c was significantly expanded in September 2020 to include political persecution, military resistance, and broader categories beyond racial/ethnic persecution.",
    keyRequirements: [
      "For standard descent: at least one parent is an Austrian citizen and the child meets standard eligibility",
      "For §58c: an ancestor in the direct lineage fled Austria, was expelled, or was stripped of citizenship by the Nazi regime between 1933 and 1945",
      "For §58c: documented evidence of persecution (racial, political, religious, or military resistance grounds since September 2020 expansion)",
      "For §58c: documented lineage from the persecuted ancestor to the applicant",
      "Application at the Austrian authorities (Magistrat, BM.I) or Austrian embassy/consulate"
    ],
    documents: [
      "Lineage documents: birth and marriage certificates for each generation from the Austrian ancestor to the applicant",
      "For §58c: proof of persecution (Nazi-era records from Austrian State Archives, emigration records, denaturalization decrees, Yad Vashem testimony, Wiener Stadt- und Landesarchiv records)",
      "Austrian ancestor's birth certificate and citizenship evidence",
      "Proof of the ancestor's residence in Austria (old address records, voter registration, school records)",
      "Apostilles on all foreign documents",
      "Certified German translations of all non-German/Austrian documents",
      "Applicant's valid national passport"
    ],
    timeline: "§58c applications at the Austrian Federal Ministry of the Interior (BM.I) or through the Austrian consulate: 6–36 months depending on the completeness of documentation and the ministry's workload. Since the 2020 expansion, application volumes have increased substantially. Document research from Austrian state archives can take months before submission.",
    commonPitfalls: [
      "Standard dual-citizenship restriction: the standard descent route does NOT typically allow dual citizenship — you would generally need to renounce your existing nationality; the §58c route is the exception that clearly permits dual citizenship",
      "Proving Nazi-era persecution: the documentation burden for §58c can be significant — applicants need to produce historical records that may be in Austrian, German, or other European archives; professional genealogical assistance is strongly recommended",
      "Scope of §58c: the 2020 expansion was significant but the pathway still requires a direct lineage through the persecuted person; collateral relatives (aunts, uncles) do not qualify",
      "Post-1945 naturalization: some ancestors who fled Austria and later naturalized in a third country before the persecution pathway was available may complicate eligibility; specialized legal advice is recommended"
    ],
    officialLinks: [
      { name: "Austrian Federal Ministry of the Interior — Citizenship", url: "https://www.bmi.gv.at/StateshipCitizenship/" },
      { name: "Austrian §58c Pathway — Official Information", url: "https://www.bmi.gv.at/StateshipCitizenship/" },
      { name: "Austrian Consular Services — Nationality Abroad", url: "https://www.bmeia.gv.at/" }
    ],
    faqAnswers: {
      whoQualifies: "Standard descent: children of Austrian citizens can claim Austrian citizenship, but dual citizenship is generally not permitted for standard cases. The §58c persecution pathway allows descendants of Austrian citizens who fled or were persecuted by the Nazi regime (1933–1945) to claim Austrian citizenship with no generational limit and with dual citizenship explicitly permitted. This covers racial, religious, political, and (since September 2020) military resistance grounds.",
      documentsNeeded: "Lineage documents (birth and marriage certificates for every generation) plus for §58c cases, proof of Nazi-era persecution of the ancestor (Austrian State Archives records, emigration records, denaturalization decrees, Yad Vashem testimony). All foreign documents need apostilles and certified German translations.",
      processingTime: "§58c applications typically take 6–36 months at BM.I after submission of a complete file. Application volumes have increased substantially since the 2020 expansion. Gathering historical persecution-era records from Austrian archives may take months before you can submit."
    },
    legalBasis: "Austrian citizenship is governed by the Staatsbürgerschaftsgesetz (StbG) of 1985, as amended. Standard descent is covered by §1 StbG. The persecuted descendants pathway is in §58c StbG, introduced in 1993 and significantly expanded in September 2020 (BGBl. I Nr. 96/2020) to include political, religious, and military resistance grounds in addition to the original racial persecution scope.",
    dualCitizenshipRules: "Standard Austrian naturalization generally requires renunciation of all other citizenships — Austria has among the strictest dual-citizenship policies in the EU for naturalization. The critical exception is §58c: descendants of Nazi persecution victims can obtain Austrian citizenship without renouncing their existing nationality. Additionally, Austrians who acquire another EU member state citizenship through naturalization may retain Austrian nationality under certain conditions.",
    costEstimate: "§58c application fee: €14.30 (federal stamp duty, as of 2024). Certified translations of foreign documents: €40–€100 per document. Austrian State Archive research: €15–€50 per session. Apostilles: €10–€40 per document. Professional genealogist for Nazi-era research: €500–€3,000. Total: €500–€5,000+ depending on complexity.",
    keyArchives: [
      { name: "Osterreichisches Staatsarchiv (OeStA) — Austrian State Archives", url: "https://www.oesta.gv.at/" },
      { name: "Wiener Stadt- und Landesarchiv (WStLA)", url: "https://www.wien.gv.at/kultur/archiv/" },
      { name: "Dokumentationsarchiv des österreichischen Widerstandes (DÖW)", url: "https://www.doew.at/" }
    ],
    relatedCountries: ["germany-citizenship-by-descent", "czech-republic-citizenship-by-descent", "hungary-citizenship-by-descent", "slovenia-citizenship-by-descent"]
  },

  "cyprus-citizenship-by-descent": {
    title: "Cyprus Citizenship by Descent — EU Passport via Cypriot Heritage",
    description: "Cyprus automatically transmits citizenship to children of Cypriot parents. Dual citizenship is permitted. The controversial citizenship-by-investment program was suspended in 2020 after a corruption scandal.",
    intro: "Cyprus automatically transmits citizenship to children of Cypriot parents, regardless of where the birth occurs, and permits dual citizenship. As an EU member since 2004, a Cypriot passport grants full EU freedom of movement, the right to live and work in any of the 27 EU member states, and Schengen visa-free travel. Cyprus is also a British Commonwealth member, which carries additional rights in some Commonwealth countries. Note that Cyprus's separate citizenship-by-investment program was suspended in November 2020 following a corruption scandal, and an ECJ ruling in April 2025 further reinforced its incompatibility with EU law — this does not affect the legitimate citizenship-by-descent route.",
    eligibilityOverview: "A child born to at least one Cypriot citizen parent automatically acquires Cypriot citizenship at birth. Dual citizenship is fully permitted. The standard naturalization route requires 7 years of legal residency in Cyprus. There is also a provision allowing descendants of Cypriot citizens to claim citizenship through a formal application, particularly if the parent or grandparent was a Cypriot citizen and the family lineage is documented. Note: naturalized Cypriot citizens who live abroad for more than 7 years without maintaining connection can in some circumstances face challenges, so diaspora members should maintain contact with Cypriot authorities.",
    keyRequirements: [
      "At least one parent is or was a Cypriot citizen",
      "Documentation of the lineage from the Cypriot parent/ancestor to the applicant",
      "Application at the Civil Registry and Migration Department or a Cypriot consulate",
      "Dual citizenship fully permitted — no renunciation required"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Cypriot parent",
      "Cypriot parent's proof of Cypriot citizenship (Cypriot passport or identity card)",
      "Marriage certificate if relevant in the lineage chain",
      "For grandchild or more remote descent: birth and marriage certificates for all intermediate generations",
      "Apostilles on all foreign documents",
      "Certified Greek translations of non-Greek documents (Cyprus operates primarily in Greek)",
      "Applicant's current valid national passport"
    ],
    timeline: "Direct parent-to-child citizenship registration: 1–6 months. For grandchild or more complex descent claims: 6–18 months. Cypriot naturalization (non-descent route): 7 years of residency plus application process of 12–24 months.",
    commonPitfalls: [
      "Northern Cyprus complications: Cyprus remains divided since 1974; descendants of displaced Cypriot citizens from northern Cyprus may face additional complexity in documenting their lineage through Republic of Cyprus channels",
      "Record availability: some pre-1974 Cypriot civil records were in areas now under de facto Turkish Cypriot control and may be difficult to access",
      "Citizenship by investment confusion: the suspended CBI program is completely separate from the legitimate descent route; any agents claiming to help with 'Cypriot citizenship by investment' post-2020 should be treated with extreme caution",
      "7-year naturalization: for those without a descent claim, Cyprus's 7-year residency requirement is among the longer ones in the EU"
    ],
    officialLinks: [
      { name: "Civil Registry and Migration Department — Acquisition of Citizenship", url: "https://www.moi.gov.cy/moi/crmd/crmd.nsf/crmd06_en/crmd06_en?OpenDocument" },
      { name: "Ministry of the Interior Cyprus", url: "https://www.moi.gov.cy/" },
      { name: "Republic of Cyprus — Foreign Affairs (Consular)", url: "https://mfa.gov.cy/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Cypriot citizen parent automatically acquires Cypriot citizenship, regardless of birth location. Dual citizenship is fully permitted. For grandchild claims, documented lineage through all intermediate generations is required. Note that Cyprus's citizenship-by-investment program was suspended in November 2020 and does not affect the legitimate descent route.",
      documentsNeeded: "Your birth certificate showing a Cypriot parent, the Cypriot parent's proof of Cypriot citizenship (passport or ID card), and your current national passport. For multi-generation claims, birth and marriage certificates for all intermediate generations. Foreign documents require apostilles and certified Greek translations.",
      processingTime: "Direct parent-to-child registration: 1–6 months. Multi-generation descent claims: 6–18 months. Cypriot naturalization (for those without descent): 7 years residency then 12–24 months processing."
    },
    legalBasis: "Cypriot citizenship is governed by the Civil Registry Laws, Cap. 141 and the Aliens and Immigration Law (Cap. 105), as amended. The citizenship-by-birth and citizenship-by-descent provisions are in the Civil Registry Law. Cyprus is a member of the EU since 2004 and a Commonwealth member. The separate citizenship-by-investment program (Scheme for Naturalization of Investors) was suspended November 1, 2020 and declared incompatible with EU law by ECJ in April 2025.",
    dualCitizenshipRules: "Cyprus fully permits dual and multiple citizenship. Cypriot citizens who naturalize elsewhere do not lose their Cypriot citizenship, and foreign nationals who acquire Cypriot citizenship by descent or naturalization are not required to renounce their existing nationality. This permissive policy makes Cyprus attractive as an EU passport option for members of the global Cypriot diaspora.",
    costEstimate: "Descent citizenship registration: approximately €20–50 in administrative fees. Additional document costs: apostilles €10–€40 per document, certified translations €30–€80 per document. For naturalization (non-descent route): €500–€1,500 in fees. Total for a direct descent registration: approximately €150–€500.",
    keyArchives: [
      { name: "Civil Registry and Migration Department of Cyprus", url: "https://www.moi.gov.cy/moi/crmd/crmd.nsf/" },
      { name: "State Archives of Cyprus", url: "https://www.moi.gov.cy/moi/sa/sa.nsf/" },
      { name: "Cyprus Ministry of the Interior", url: "https://www.moi.gov.cy/" }
    ],
    relatedCountries: ["greece-citizenship-by-descent", "malta-citizenship-by-descent", "italy-citizenship-by-descent", "lebanon-citizenship"]
  },

  "malta-citizenship-by-descent": {
    title: "Malta Citizenship by Descent — EU, Schengen & Commonwealth Passport",
    description: "Malta automatically transmits citizenship to children of Maltese parents. Dual citizenship is fully permitted. Malta is an EU, Schengen, and Commonwealth member. The separate citizenship-by-investment program was abolished in 2025.",
    intro: "Malta offers automatic citizenship by descent to children of Maltese parents with no generational limit, provided each generation is registered and the chain is maintained. Malta is a unique triple passport: EU member (since 2004), Schengen Area member, and Commonwealth member, providing holders with EU freedom of movement plus certain Commonwealth advantages in countries like the UK, Australia, and Canada. Dual citizenship has been permitted since 2000. Note: Malta's separate citizenship-by-investment program was abolished in July 2025 following an ECJ ruling that it violated EU citizenship principles — this does not affect the legitimate descent route.",
    eligibilityOverview: "A child born to at least one Maltese citizen parent automatically acquires Maltese citizenship at birth, regardless of where the birth occurs. Dual citizenship is fully permitted since July 2000. To maintain Maltese citizenship across generations, each generation must have formally registered or affirmed Maltese citizenship. There is also a Maltese-born lineal ascendant pathway for people with a Maltese-born grandparent or great-grandparent, depending on circumstances.",
    keyRequirements: [
      "At least one parent is or was a Maltese citizen",
      "Documented lineage from the Maltese ancestor to the applicant with birth and marriage certificates for each generation",
      "For multi-generation claims: verification that intermediate generations maintained or were entitled to Maltese citizenship",
      "Application at Identita' (Identity Malta) or a Maltese consulate",
      "Dual citizenship fully permitted since 2000 — no renunciation required"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Maltese parent",
      "Maltese parent's proof of Maltese citizenship (Maltese passport, identity card, or civil registration record)",
      "Marriage certificates for each couple in the lineage chain",
      "For grandchild or more remote claims: birth certificates and citizenship evidence for all intermediate generations",
      "Apostilles on all foreign documents",
      "Certified English or Maltese translations of non-English/non-Maltese documents",
      "Applicant's current valid national passport"
    ],
    timeline: "Direct parent-to-child registration: 2–6 months. Multi-generation descent claims: 6–18 months. Maltese naturalization (for those without descent): 5 years of legal residency plus 12–24 months of application processing.",
    commonPitfalls: [
      "Registration requirement: Maltese citizenship is not automatically transmitted if prior generations failed to register; a gap in registration can create complications for multi-generation claims",
      "7-year connection requirement: registered Maltese citizens living abroad for extended periods should maintain contact with Identita' to avoid potential loss issues — check current rules",
      "CBI confusion: the Individual Investor Programme was abolished in July 2025; any agent offering 'Maltese citizenship for investment' after that date is operating outside the law",
      "Pre-independence emigrant records: Maltese who emigrated before 1964 independence have records under British administration held in the Malta Public Registry and parish archives"
    ],
    officialLinks: [
      { name: "Identita' (Identity Malta) — Citizenship by Descent", url: "https://identita.gov.mt/" },
      { name: "Malta Public Registry — Civil Status and Citizenship", url: "https://publicregistry.gov.mt/" },
      { name: "Ministry for Home Affairs and National Security — Malta", url: "https://homeaffairs.gov.mt/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Maltese citizen parent automatically acquires Maltese citizenship, regardless of birth location. Dual citizenship is permitted since 2000. For multi-generation claims, each intermediate generation must have maintained or been entitled to Maltese citizenship. Malta's citizenship-by-investment program was abolished in July 2025 — descent by lineage remains fully valid.",
      documentsNeeded: "Your birth certificate showing a Maltese parent, the Maltese parent's proof of Maltese citizenship, and your current national passport. For multi-generation claims, birth and marriage certificates and citizenship evidence for all intermediate generations. Foreign documents need apostilles and certified translations into English or Maltese.",
      processingTime: "Direct parent-to-child registration: 2–6 months. Multi-generation descent claims: 6–18 months. Maltese naturalization (for those without descent): requires 5 years of residency then 12–24 months of processing."
    },
    legalBasis: "Maltese citizenship is governed by the Maltese Citizenship Act (Cap. 188) of 1965, as amended. Dual citizenship was permitted by amendment effective July 28, 2000. The Individual Investor Programme (citizenship-by-investment) was established in 2013 and abolished by ECJ ruling and subsequent Maltese legislation in July 2025.",
    dualCitizenshipRules: "Malta fully permits dual and multiple citizenship since July 28, 2000. Maltese citizens who acquire foreign nationality do not lose their Maltese citizenship, and foreign nationals who acquire Maltese citizenship by descent are not required to renounce their existing nationality. The EU + Commonwealth passport combination makes Malta particularly valuable for diaspora communities in Australia, Canada, the USA, and the UK.",
    costEstimate: "Citizenship registration: approximately €50–€150 in administrative fees. Apostilles: €10–€40 per document. Certified translations: €30–€80 per document. Malta Public Registry records: €5–€20 per document. Total for a direct descent registration: approximately €200–€600.",
    keyArchives: [
      { name: "Malta Public Registry — Civil Status Records", url: "https://publicregistry.gov.mt/" },
      { name: "Identita' (Identity Malta Agency)", url: "https://identita.gov.mt/" },
      { name: "National Archives of Malta", url: "https://nationalarchives.gov.mt/" }
    ],
    relatedCountries: ["cyprus-citizenship-by-descent", "italy-citizenship-by-descent", "greece-citizenship-by-descent", "ireland-citizenship-by-descent"]
  },

  "uk-citizenship-by-descent": {
    title: "UK Citizenship by Descent — British Passport via British Parentage",
    description: "British citizenship can be transmitted by a parent who is British 'otherwise than by descent' (born/naturalized in the UK). Transmission does not extend automatically to the second generation born abroad.",
    intro: "British citizenship law has a unique 'otherwise than by descent' rule that limits how citizenship transmits to generations born outside the UK. A person born abroad to a British citizen parent who was themselves born or naturalized in the UK is automatically British 'by descent.' However, that British 'by descent' citizen generally cannot transmit British citizenship to their own child born abroad — creating a one-generation-abroad cutoff. There are some pathways for grandchildren and further descendants, but they typically require discretionary applications and are not automatic. The UK has no restrictions on dual citizenship.",
    eligibilityOverview: "Automatic citizenship: a person born abroad to a parent who is British 'otherwise than by descent' (born or naturalized in the UK) is automatically British 'by descent.' One-generation cutoff: a person born abroad to a parent who is themselves British 'by descent' (born abroad to a British parent) is NOT automatically British. Exceptions include Section 3(2) and 3(5) registration for grandchildren of British citizens (before age 18), and discretionary registration under Section 4B, 4C and others for adult cases.",
    keyRequirements: [
      "At least one parent is British 'otherwise than by descent' (born or naturalized in the UK) — this creates automatic British-by-descent citizenship for a child born abroad",
      "For grandchildren: register under Section 3(2) or 3(5) of the British Nationality Act 1981 before age 18, or apply under Home Secretary's discretion",
      "For adult grandchildren: discretionary application with justification of entitlement",
      "Application at HM Passport Office or UK Visas and Immigration (UKVI), or via the nearest British consulate",
      "The UK has no restrictions on holding multiple citizenships"
    ],
    documents: [
      "Applicant's birth certificate",
      "British parent's proof of British citizenship and evidence they are 'otherwise than by descent' (their UK birth certificate or UK naturalization certificate)",
      "For transmission through a by-descent parent: that parent's birth certificate plus the grandparent's UK birth or naturalization certificate",
      "Marriage certificates for relevant couples in the chain",
      "Apostilles on foreign documents",
      "Application form: UKF for adult registration; MN1 or T for children's registration"
    ],
    timeline: "Registration for those automatically entitled (British by descent): 6–12 months via UKVI or consulate. Section 3 grandchild registrations: 6–18 months. Discretionary applications: 12–24+ months. British naturalization (5 years legal residency): 18–36 months to process.",
    commonPitfalls: [
      "One-generation cutoff: if your British parent was themselves born abroad to a British parent (i.e., they are British 'by descent'), you are NOT automatically British — only a UK-born or UK-naturalized grandparent's citizenship creates entitlement",
      "Pre-1983 gender rules: the British Nationality Act 1948 only transmitted citizenship through fathers; children born before January 1, 1983 to British mothers who were not themselves British 'by descent' may need to apply through special registration pathways",
      "Section 3 deadline: grandchild registration under Section 3(2) must be completed before the child turns 18; missing this window requires a discretionary application as an adult",
      "High fees: the UK charges some of the highest citizenship registration fees in the world (over £1,200 per adult as of 2024), which have been subject to legal challenge"
    ],
    officialLinks: [
      { name: "GOV.UK — British Citizenship (full guide)", url: "https://www.gov.uk/british-citizenship" },
      { name: "UKVI — Register as a British Citizen", url: "https://www.gov.uk/register-british-citizen" },
      { name: "British Nationality Act 1981 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/ukpga/1981/61/" }
    ],
    faqAnswers: {
      whoQualifies: "A person born abroad to a British parent who was themselves born or naturalized in the UK is automatically British 'by descent.' Their own children born abroad are NOT automatically British (one-generation cutoff). For grandchildren of UK-born British citizens, Section 3(2) registration before age 18 is available. The UK has no dual-citizenship restrictions, so British citizenship can be held alongside any other nationality.",
      documentsNeeded: "Your birth certificate, your British parent's proof of British citizenship and evidence of how they acquired it (their UK birth certificate or naturalization certificate), marriage certificates as appropriate, and for grandchild registrations, your grandparent's UK birth or naturalization certificate proving they were British 'otherwise than by descent.'",
      processingTime: "Straightforward registrations: 6–12 months at UKVI. Section 3 grandchild registrations: 6–18 months. Discretionary applications: 12–24+ months. British naturalization (non-descent) requires 5 years legal residency and takes 18–36 months to process."
    },
    legalBasis: "British citizenship is governed by the British Nationality Act 1981 (BNA 1981), which came into force on January 1, 1983. Section 2 creates the automatic British-by-descent status. Section 3 allows registration of children of British-by-descent parents. The 'otherwise than by descent' distinction is the key mechanism limiting multi-generation transmission. The BNA 1981 replaced the British Nationality Act 1948.",
    dualCitizenshipRules: "The UK has no restrictions on dual or multiple citizenship. British citizens can hold any number of other nationalities without affecting their British citizenship. Equally, foreign nationals who acquire British citizenship are not required by UK law to renounce their other nationality, though some countries' own laws may require renunciation when their citizens acquire British citizenship.",
    costEstimate: "Registration as a British citizen (adult): £1,206 as of 2024 (subject to challenge and change). Registration for a child (under 18): £1,214. Passport application after registration: £82.50–£122.50. Apostilles: £15–£30 per document. Total for a straightforward registration: approximately £1,300–£1,600.",
    keyArchives: [
      { name: "The National Archives (UK) — Birth, Marriage, Death and Citizenship Records", url: "https://www.nationalarchives.gov.uk/" },
      { name: "General Register Office (GRO) — UK Civil Registration", url: "https://www.gro.gov.uk/" },
      { name: "UKVI — Citizenship and Nationality", url: "https://www.gov.uk/government/organisations/uk-visas-and-immigration" }
    ],
    relatedCountries: ["ireland-citizenship-by-descent", "australia-citizenship", "canada-citizenship", "new-zealand-citizenship"]
  },

  "ukraine-citizenship-by-descent": {
    title: "Ukraine Citizenship by Descent — Dual Citizenship Now Legal (June 2025)",
    description: "Ukraine offers citizenship by descent for children of Ukrainian parents. In a landmark development, dual citizenship became legal in Ukraine in June 2025, removing the historic barrier for the global Ukrainian diaspora.",
    intro: "Ukraine's citizenship law underwent a landmark change on June 18, 2025: dual citizenship became legal for the first time in Ukraine's post-Soviet history, after President Zelensky signed the enabling legislation originally introduced in August 2024. This removes the historic barrier that had prevented millions of Ukrainian-heritage people abroad from reclaiming Ukrainian citizenship without risking their existing nationality. Ukraine offers citizenship by descent for children of Ukrainian parents, and the newly legal dual-citizenship framework makes this pathway newly accessible to the global diaspora estimated at 6–10 million people worldwide.",
    eligibilityOverview: "Ukrainian citizenship is transmitted automatically to children of Ukrainian citizens at birth. Additionally, persons born in Ukraine before 1991, and their children and grandchildren, can access a facilitated naturalization pathway based on territorial origin. Under the June 2025 dual-citizenship law, people who acquire Ukrainian citizenship no longer need to renounce their existing nationality, and Ukrainians who acquired foreign citizenship no longer lose their Ukrainian citizenship.",
    keyRequirements: [
      "At least one parent is or was a Ukrainian citizen",
      "For territorial origin pathway: applicant, parent, or grandparent was born or permanently resided in Ukraine (while part of the USSR) before 1991",
      "Dual citizenship permitted since June 2025 — no renunciation of existing nationality required",
      "Application at the State Migration Service of Ukraine or a Ukrainian consulate abroad",
      "Note: some consulates may still be working through implementation of the June 2025 law — confirm current procedure before applying"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Ukrainian parent",
      "Ukrainian parent's proof of Ukrainian citizenship (Ukrainian passport or internal passport)",
      "For territorial origin pathway: evidence of birth or permanent residency in Ukrainian territory before 1991 (Soviet-era internal passport, birth certificate, migration records)",
      "Marriage certificates as applicable",
      "Apostilles on all foreign documents",
      "Certified Ukrainian translations of all documents not in Ukrainian",
      "Applicant's current valid national passport",
      "Certificate of no criminal conviction from the applicant's country of residence"
    ],
    timeline: "Standard descent registration at a consulate: 6–18 months (currently longer due to wartime consular disruptions and staffing constraints). Territorial origin facilitated naturalization: 12–24 months after submission. Ukrainian consular services worldwide have significant backlogs since 2022.",
    commonPitfalls: [
      "Historical dual-citizenship prohibition: prior to June 2025, Ukrainians who acquired foreign citizenship automatically lost Ukrainian citizenship; check whether your specific circumstances (when you or a parent acquired foreign citizenship) fall under the new rules",
      "Wartime record access: Ukrainian civil records in conflict-affected regions (Donetsk, Luhansk, Zaporizhzhia, Kherson, Crimea) may be inaccessible or destroyed; document reconstruction procedures exist but are complex",
      "Soviet-era archive access: pre-1991 civil records for some Ukrainian territories may be held in archives controlled by Russia (particularly for Crimea); access has been severely curtailed since 2014 and 2022",
      "Consular backlogs: since Russia's full-scale invasion in February 2022, Ukrainian consulates worldwide are under enormous pressure — expect processing times well beyond normal estimates"
    ],
    officialLinks: [
      { name: "State Migration Service of Ukraine (Derzhavna mihratsiina sluzhba)", url: "https://dmsu.gov.ua/" },
      { name: "Ministry of Foreign Affairs of Ukraine — Consular Services", url: "https://mfa.gov.ua/en" },
      { name: "Law of Ukraine on Ukrainian Citizenship (Verkhovna Rada)", url: "https://zakon.rada.gov.ua/laws/show/2235-14" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Ukrainian citizen parent acquires Ukrainian citizenship at birth. Since June 2025, dual citizenship is legal in Ukraine, meaning Ukrainian-heritage people abroad no longer need to choose between their existing nationality and Ukrainian citizenship. A territorial origin pathway provides a facilitated route for people whose parent or grandparent was born or lived in Ukraine before 1991.",
      documentsNeeded: "Your birth certificate showing a Ukrainian parent, the Ukrainian parent's proof of Ukrainian citizenship, and your current national passport. For the territorial origin pathway, evidence of the ancestor's birth or residence in Ukraine before 1991 (Soviet internal passport, birth certificate). All documents need apostilles and certified Ukrainian translations.",
      processingTime: "6–18 months for standard descent registration at a consulate (longer due to wartime consular backlogs). Facilitated naturalization via territorial origin: 12–24 months. As of 2025–26, Ukrainian consular services are under intense pressure worldwide."
    },
    legalBasis: "Ukrainian citizenship is governed by the Law of Ukraine on Ukrainian Citizenship (Law No. 2235-III of 2001, as amended). The June 2025 amendment legalizing dual citizenship was signed by President Zelensky following the bill's introduction in August 2024 and parliamentary passage. Prior to this amendment, Article 19 of the law provided that acquiring foreign citizenship meant automatic loss of Ukrainian citizenship. The territorial origin pathway is in Articles 9 and 10 of the law.",
    dualCitizenshipRules: "As of June 2025, Ukraine fully permits dual and multiple citizenship. Ukrainians who acquire foreign nationality no longer lose Ukrainian citizenship, and foreign nationals of Ukrainian heritage can acquire Ukrainian citizenship without renouncing their existing nationality. This is a historic change — Ukraine was one of the last major European countries to prohibit dual citizenship, and the change was driven by the need to engage the global diaspora and ease wartime challenges.",
    costEstimate: "Citizenship registration at the State Migration Service: approximately free to UAH 1,000 (approx. €25). Consular fees abroad: variable by country, typically €50–€150. Apostilles: €10–€40 per document. Certified Ukrainian translations: €40–€80 per document. Total: approximately €200–€600 for a standard descent claim.",
    keyArchives: [
      { name: "Tsentral'nyi derzhavnyi istorychnyi arkhiv Ukrainy (Central State Historical Archive)", url: "https://cdiak.archives.gov.ua/" },
      { name: "State Migration Service of Ukraine", url: "https://dmsu.gov.ua/" },
      { name: "Ukrainian Institute of National Memory — historical records", url: "https://uinp.gov.ua/" }
    ],
    relatedCountries: ["poland-citizenship-by-descent", "romania-citizenship-by-descent", "hungary-citizenship-by-descent", "slovakia-citizenship-by-descent"]
  },

  "norway-citizenship-by-descent": {
    title: "Norway Citizenship by Descent — Nordic EU-Adjacent Passport via Norwegian Heritage",
    description: "Norway automatically transmits citizenship to children of Norwegian parents. Dual citizenship has been permitted since January 2020. Former Norwegians who lost citizenship can reclaim by declaration.",
    intro: "Norway transmits citizenship automatically to children of Norwegian parents, regardless of where the birth occurs. Since January 1, 2020, Norway has fully permitted dual citizenship — reversing a longstanding policy that had required Norwegians to renounce their citizenship upon acquiring another nationality. This change means that former Norwegians who lost their citizenship before 2020 when they naturalized elsewhere can now reclaim Norwegian citizenship by declaration. Norway is not an EU member but is part of the Schengen Area and the European Economic Area (EEA), giving Norwegian passport holders visa-free Schengen access and strong rights across Europe.",
    eligibilityOverview: "A child born to at least one Norwegian citizen parent automatically acquires Norwegian citizenship at birth, regardless of birth location. Dual citizenship has been permitted since January 1, 2020. Norwegians who lost their citizenship before 2020 upon acquiring a foreign nationality can reclaim it by filing a declaration. However, like other Nordic countries, Norwegian citizens born abroad who hold another citizenship face an age-22 rule: they must apply to retain Norwegian citizenship before turning 22 or risk automatic loss.",
    keyRequirements: [
      "At least one parent is or was a Norwegian citizen at the time of birth",
      "For born-abroad Norwegian dual nationals approaching age 22: must apply to retain Norwegian citizenship before age 22",
      "For former Norwegians who lost citizenship pre-2020: can reclaim by declaration under the 2020 reform",
      "Application at the Norwegian Directorate of Immigration (UDI) or Norwegian consulate abroad",
      "Dual citizenship fully permitted since January 1, 2020"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Norwegian parent",
      "Norwegian parent's proof of Norwegian citizenship (Norwegian passport or national identity card)",
      "Marriage certificate if applicable in the lineage chain",
      "For retention before age 22: application form to UDI",
      "For reclaiming lost citizenship: documentation of original Norwegian citizenship and subsequent loss (old Norwegian passport, naturalization certificate from other country)",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration for qualifying children: 2–6 months. Retention applications before age 22: 3–6 months. Reclaiming lost citizenship by declaration: 3–12 months. Norwegian naturalization (7 years residency): 12–24 months to process after eligibility is met.",
    commonPitfalls: [
      "Age-22 loss risk: Norwegian citizens born abroad with dual citizenship must apply to retain Norwegian citizenship before age 22, or lose it automatically",
      "Pre-2020 loss: Norwegians who were required to renounce before January 2020 lost their Norwegian citizenship automatically; the 2020 reform allows reclaiming it by declaration — but the declaration must be filed; it is not automatic",
      "Naturalization residency: Norwegian naturalization requires 7 years of total lawful residency in Norway (of which at least 2 of the last 5 years must be continuous) plus a Norwegian language test — substantially longer than most comparable European countries"
    ],
    officialLinks: [
      { name: "Norwegian Directorate of Immigration (UDI) — Norwegian Citizenship", url: "https://www.udi.no/en/want-to-apply/citizenship-norwegian/" },
      { name: "Norwegian Nationality Act (Statsborgersloven 2005)", url: "https://lovdata.no/dokument/NL/lov/2005-06-10-51" },
      { name: "Norway.no — Citizenship Information", url: "https://www.norway.no/en/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Norwegian citizen parent automatically acquires Norwegian citizenship, regardless of birth location. Dual citizenship is fully permitted since January 2020. Former Norwegians who lost their citizenship before 2020 when naturalizing elsewhere can now reclaim it by filing a declaration. The age-22 rule applies to born-abroad dual nationals who must retain citizenship before their 22nd birthday.",
      documentsNeeded: "Your birth certificate showing a Norwegian parent, the Norwegian parent's proof of Norwegian citizenship (Norwegian passport or ID), and your current national passport. For retention before age 22, the UDI application form. For reclaiming lost citizenship, your original Norwegian passport or citizenship evidence plus the foreign naturalization certificate.",
      processingTime: "Standard citizenship registration: 2–6 months. Retention applications: 3–6 months. Reclaiming lost citizenship by declaration: 3–12 months. Norwegian naturalization (for those without descent) requires 7 years of residency."
    },
    legalBasis: "Norwegian citizenship is governed by the Lov om norsk statsborgerskap (Nationality Act) of June 10, 2005 (Statsborgersloven). The January 1, 2020 amendment (Prop. 111 L (2017–2018)) introduced dual citizenship and the declaration pathway for former Norwegians. The age-22 loss rule is in Section 24 of the Act.",
    dualCitizenshipRules: "Norway has permitted dual citizenship since January 1, 2020. Norwegians who acquire foreign nationality no longer lose Norwegian citizenship, and foreign nationals who acquire Norwegian citizenship (by descent or naturalization) are no longer required to renounce their existing nationality. Former Norwegians who lost citizenship before 2020 can reclaim by filing a simple declaration — no application procedure or fee required in most cases.",
    costEstimate: "Citizenship registration and retention applications: free (no fee) at UDI. Declaration to reclaim lost citizenship: free. Certified translations of foreign documents: NOK 500–1,500 (approx. €40–€130) per document. Apostilles: €10–€40 per document. Norwegian archive records: NOK 100–500 (approx. €8–€45) per document. Total: approximately €100–€600.",
    keyArchives: [
      { name: "Arkivverket (National Archives of Norway)", url: "https://www.arkivverket.no/en" },
      { name: "Norwegian Directorate of Immigration (UDI)", url: "https://www.udi.no/en/" },
      { name: "Digitalarkivet — Norwegian genealogical records", url: "https://www.digitalarkivet.no/" }
    ],
    relatedCountries: ["sweden-citizenship-by-descent", "denmark-citizenship-by-descent", "finland-citizenship-by-descent", "iceland-citizenship-by-descent"]
  },

  "switzerland-citizenship-by-descent": {
    title: "Switzerland Citizenship by Descent — Swiss Passport via Swiss Heritage",
    description: "Switzerland transmits citizenship to children of Swiss parents. Dual citizenship has been permitted since 1992. Born-abroad dual nationals must contact Swiss authorities before age 25 or risk losing Swiss citizenship.",
    intro: "Switzerland transmits citizenship automatically to children born to Swiss citizen parents, regardless of birth location. Dual citizenship has been permitted since January 1, 1992. However, Switzerland has an important age-25 rule for citizens born abroad: Swiss nationals born outside Switzerland who hold another citizenship and have never resided in Switzerland must contact Swiss authorities and express their wish to retain Swiss citizenship before turning 25, or they automatically lose it. Switzerland is not an EU member but is in the Schengen Area, and a Swiss passport is one of the world's most powerful travel documents.",
    eligibilityOverview: "A child born to at least one Swiss citizen parent automatically acquires Swiss citizenship at birth, provided that for births to unmarried Swiss fathers, the parentage is legally established. Dual citizenship is permitted since 1992. The age-25 rule: Swiss nationals born abroad who hold another citizenship and have never resided in Switzerland must file a declaration expressing the wish to retain Swiss citizenship before turning 25, or the citizenship is lost. Swiss naturalization through the cantons requires 10 years of residency (with specific cantonal requirements that can be demanding).",
    keyRequirements: [
      "At least one parent is or was a Swiss citizen at the time of birth",
      "For births to unmarried Swiss fathers: paternity must be legally established (acknowledgment or court order)",
      "Dual citizenship permitted since 1992 — no renunciation required",
      "For born-abroad dual nationals: must contact Swiss authorities and declare intention to retain citizenship before age 25 if never resided in Switzerland",
      "Application at the State Secretariat for Migration (SEM) or the relevant Swiss consulate"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Swiss parent",
      "Swiss parent's proof of Swiss citizenship (Swiss passort or Heimatschein / Heimatausweis)",
      "Marriage certificate if applicable",
      "For unmarried Swiss father cases: acknowledgment of paternity or court order",
      "For retention declaration before age 25: declaration form at the nearest Swiss consulate",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration for qualifying children: 2–6 months. Retention declaration before age 25: 1–3 months. Swiss naturalization (for those without descent, through cantonal procedure): 3–10+ years of process after meeting 10-year residency requirement.",
    commonPitfalls: [
      "Age-25 loss: Swiss nationals born abroad who hold another citizenship and have never lived in Switzerland lose Swiss citizenship automatically at age 25 if they fail to file a retention declaration — this age cutoff is 25 (stricter than the Nordic countries' age 22)",
      "Cantonal complexity: Swiss naturalization is decentralized; each of the 26 cantons has additional requirements beyond federal law, which can be demanding and vary widely",
      "Heimatort system: Swiss citizenship is tied to a Gemeinde (home commune/Heimatort); the Heimatschein from the Heimatort is the fundamental citizenship document — applicants need to identify the correct Heimatort for their Swiss ancestor",
      "Pre-1992 renunciations: Swiss who were required to renounce before 1992 when acquiring another nationality generally cannot automatically reclaim Swiss citizenship"
    ],
    officialLinks: [
      { name: "State Secretariat for Migration (SEM) — Swiss Citizenship", url: "https://www.sem.admin.ch/sem/en/home/themen/buergerrecht.html" },
      { name: "Swiss Federal Chancellery — Citizenship Information", url: "https://www.bk.admin.ch/" },
      { name: "Swiss Foreign Affairs — Consular Services Abroad", url: "https://www.eda.admin.ch/eda/en/fdfa/living-abroad/citizenship.html" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Swiss citizen parent automatically acquires Swiss citizenship, regardless of birth location (with established paternity for unmarried fathers). Dual citizenship has been permitted since 1992. The critical warning: Swiss nationals born abroad who hold another citizenship and have never resided in Switzerland must contact Swiss authorities to retain citizenship before age 25 or lose it permanently.",
      documentsNeeded: "Your birth certificate showing a Swiss parent, the Swiss parent's proof of Swiss citizenship (passport or Heimatschein from their Heimatort), and your current national passport. For retention before age 25, the declaration form from the nearest Swiss consulate. For unmarried father cases, legal acknowledgment of paternity.",
      processingTime: "Citizenship registration: 2–6 months. Retention declarations: 1–3 months. Swiss naturalization through the cantonal process (for those without descent) is among the most complex in Europe, requiring up to 10+ years of residency with cantonal-specific requirements."
    },
    legalBasis: "Swiss citizenship is governed by the Bürgerrechtsgesetz (BüG; SR 141.0), comprehensively revised effective January 1, 2018, and previously by the 1952 Act. Dual citizenship was permitted by amendment effective January 1, 1992. The age-25 loss rule for born-abroad dual nationals who have never resided in Switzerland is in Article 8 of the current BüG.",
    dualCitizenshipRules: "Switzerland has permitted dual citizenship since January 1, 1992. Swiss citizens who acquire foreign nationality no longer lose Swiss citizenship, and foreign nationals who acquire Swiss citizenship by descent are not required to renounce their existing nationality. However, the age-25 rule means born-abroad dual nationals must proactively retain Swiss citizenship or lose it automatically.",
    costEstimate: "Swiss consulate registration and retention declarations: CHF 100–350 (approx. €100–€370). Certified translations of foreign documents: €50–€120 per document. Apostilles: €10–€40 per document. Swiss Heimatort and civil registry records: CHF 30–100 (approx. €32–€107) per document. Total: approximately €300–€800 for a standard descent registration.",
    keyArchives: [
      { name: "Schweizerisches Bundesarchiv (Swiss Federal Archives)", url: "https://www.bar.admin.ch/bar/en/home.html" },
      { name: "State Secretariat for Migration (SEM) — Citizenship Records", url: "https://www.sem.admin.ch/sem/en/home/themen/buergerrecht.html" },
      { name: "Swiss genealogical resources — Ortsfamilienbücher", url: "https://www.e-gs.ethz.ch/" }
    ],
    relatedCountries: ["germany-citizenship-by-descent", "austria-citizenship-by-descent", "liechtenstein-citizenship-by-descent", "france-citizenship-by-descent"]
  },

  "iceland-citizenship-by-descent": {
    title: "Iceland Citizenship by Descent — Nordic Schengen Passport via Icelandic Heritage",
    description: "Iceland automatically transmits citizenship to children of Icelandic parents. Dual citizenship is permitted since 2003. Born-abroad Icelandic dual nationals risk losing citizenship at age 22 if no connection to Iceland is maintained.",
    intro: "Iceland transmits citizenship automatically to children of Icelandic parents, regardless of birth location. Dual citizenship has been permitted since December 31, 2003. Like the other Nordic countries, Iceland has an age-22 rule: Icelandic citizens born abroad who hold another citizenship and have never lived in Iceland risk losing Icelandic citizenship at age 22 unless they have established connection. Iceland is a member of the Schengen Area and EEA but not the EU. Icelandic naturalization requires meeting an Icelandic language requirement at A2 level, which is among more demanding linguistic requirements for naturalization in the region.",
    eligibilityOverview: "A child born to at least one Icelandic citizen parent automatically acquires Icelandic citizenship, provided that parents are married at birth, or for unmarried parents, the Icelandic parent is the mother (automatic) or the Icelandic father has registered paternity before the child turns 18. Dual citizenship since 2003. Age-22 rule: born-abroad Icelandic nationals with dual citizenship who have never lived in Iceland must notify Icelandic authorities of their wish to retain citizenship before age 22.",
    keyRequirements: [
      "At least one parent is or was an Icelandic citizen at the time of birth",
      "For unmarried Icelandic father: paternity must be registered before the child turns 18",
      "For born-abroad dual nationals approaching age 22: must notify Icelandic authorities of wish to retain citizenship",
      "Application at the Registers Iceland (Þjóðskrá Íslands) or Icelandic consulate",
      "Dual citizenship permitted since December 31, 2003"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Icelandic parent",
      "Icelandic parent's proof of Icelandic citizenship (Icelandic passport or national identity card)",
      "Marriage certificate if applicable",
      "For unmarried Icelandic father: registered paternity acknowledgment",
      "For retention before age 22: notification form to Þjóðskrá Íslands",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration for qualifying children: 2–6 months. Retention notifications before age 22: 1–3 months. Icelandic naturalization (7 years residency + A2 Icelandic language test): 12–24 months after meeting eligibility.",
    commonPitfalls: [
      "Age-22 loss: Icelandic citizens born abroad who hold another citizenship and have never lived in Iceland must notify Þjóðskrá Íslands before age 22 of their wish to retain citizenship — missing this window means automatic loss",
      "Unmarried Icelandic father: if the Icelandic father was not married to the mother and paternity was not registered before the child's 18th birthday, the child may not automatically have acquired Icelandic citizenship",
      "Icelandic language requirement for naturalization: unlike the Scandinavian countries, Iceland requires A2-level proficiency in Icelandic for naturalization, which is a significant barrier given Icelandic is a relatively uncommon language to learn",
      "Small diaspora resources: Iceland has a relatively small global diaspora compared to other European countries, so specialist immigration lawyers and genealogists with Icelandic expertise are less common"
    ],
    officialLinks: [
      { name: "Registers Iceland (Þjóðskrá Íslands) — Citizenship", url: "https://www.skra.is/english/individuals/me-and-my-registration/icelandic-citizenship/" },
      { name: "Iceland Ministry of Justice — Nationality Act", url: "https://www.government.is/topics/law-and-order/nationality/" },
      { name: "Directorate of Immigration (Útlendingastofnun)", url: "https://www.utl.is/index.php/en/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Icelandic citizen parent automatically acquires Icelandic citizenship (with registered paternity for unmarried Icelandic fathers). Dual citizenship is permitted since 2003. The critical rule: Icelandic nationals born abroad with dual citizenship who have never lived in Iceland must notify Icelandic authorities before age 22 to retain citizenship.",
      documentsNeeded: "Your birth certificate showing an Icelandic parent, the Icelandic parent's proof of Icelandic citizenship, and your current national passport. For retention before age 22, the notification form to Þjóðskrá Íslands. For unmarried Icelandic father cases, the registered paternity acknowledgment.",
      processingTime: "Standard citizenship registration: 2–6 months. Retention notifications: 1–3 months. Icelandic naturalization (for those without descent) requires 7 years of residency and an A2 Icelandic language qualification."
    },
    legalBasis: "Icelandic citizenship is governed by the Lög um íslenskt ríkisfang (Nationality Act No. 100/1952 as amended). Dual citizenship was permitted by amendment effective December 31, 2003. The age-22 loss rule for born-abroad dual nationals is in Article 8 of the Act. Icelandic naturalization requirements including the language test are in Articles 5–7.",
    dualCitizenshipRules: "Iceland has permitted dual citizenship since December 31, 2003. Icelanders who acquire foreign nationality no longer lose Icelandic citizenship, and foreign nationals who acquire Icelandic citizenship by descent are not required to renounce their existing nationality. The age-22 rule means born-abroad dual nationals must actively retain their citizenship by notifying Þjóðskrá before their 22nd birthday.",
    costEstimate: "Citizenship registration and notifications: ISK 1,000–5,000 (approx. €7–€34) at Þjóðskrá or consulate. Certified translations of foreign documents: €50–€120 per document. Apostilles: €10–€40 per document. Icelandic archive records (Þjóðskjalasafn): ISK 500–2,000 (approx. €3–€14) per document. Total: approximately €100–€500.",
    keyArchives: [
      { name: "Þjóðskjalasafn Íslands (National Archives of Iceland)", url: "https://www.archives.is/en/" },
      { name: "Þjóðskrá Íslands (Registers Iceland) — Citizenship", url: "https://www.skra.is/english/" },
      { name: "Directorate of Immigration (Útlendingastofnun)", url: "https://www.utl.is/index.php/en/" }
    ],
    relatedCountries: ["norway-citizenship-by-descent", "sweden-citizenship-by-descent", "denmark-citizenship-by-descent", "finland-citizenship-by-descent"]
  },

  "serbia-citizenship-by-descent": {
    title: "Serbia Citizenship by Descent — Western Balkans Passport via Serbian Heritage",
    description: "Serbia offers citizenship by descent to children of Serbian citizens. Dual citizenship is permitted. Serbia is an EU candidate country, with its diaspora numbering millions across Europe and North America.",
    intro: "Serbia offers automatic citizenship by descent to children of Serbian citizens, with descendants under age 23 who were born abroad to a Serbian parent also able to claim. Serbia's diaspora is among the largest in the Western Balkans — estimated at over 3 million people, with significant communities in Germany, Austria, Switzerland, the USA, Canada, and Australia. Serbia is an EU candidate country (accession negotiations ongoing), meaning a Serbian passport may eventually provide EU rights. Serbia permits dual citizenship, so no renunciation is required.",
    eligibilityOverview: "A child born to at least one Serbian citizen parent automatically acquires Serbian citizenship at birth, regardless of where the birth occurs. Descendants born abroad under age 23 who have Serbian heritage can file an application to acquire citizenship. Dual citizenship is fully permitted, and Serbia has no restriction on holding multiple nationalities.",
    keyRequirements: [
      "At least one parent is or was a Serbian citizen",
      "For descendants born abroad under age 23: application to acquire citizenship by descent is available",
      "Application at the Ministry of Interior of Serbia or a Serbian consulate abroad",
      "Dual citizenship fully permitted — no renunciation required",
      "No language test or residency requirement for descent claims"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Serbian parent",
      "Serbian parent's proof of Serbian citizenship (Serbian passport or identity card)",
      "Marriage certificate if applicable",
      "For under-23 claims: proof of age and documented parentage",
      "Apostilles on all foreign documents",
      "Certified Serbian translations of all non-Serbian documents",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration at a Serbian consulate or Ministry of Interior: 3–12 months typically. Document gathering from Serbian civil registry archives adds 2–4 months. Serbian naturalization (for those without descent): 3 years of continuous residency.",
    commonPitfalls: [
      "Age-23 window for foreign-born descendants: some descent registrations specifically require filing before age 23; confirm the applicable rule with the Serbian consulate for your specific circumstances",
      "Former-Yugoslav archive complexity: Serbian civil registry records may be intertwined with records from Bosnia, Croatia, and North Macedonia for families from those areas before 1991 dissolution",
      "EU candidate status uncertainty: Serbia has been an EU candidate since 2012 but accession timeline remains uncertain — do not rely on a Serbian passport providing EU rights imminently",
      "Name transliteration: Serbian uses Cyrillic script officially; name records may differ between Cyrillic and Latin representations, which can complicate document matching"
    ],
    officialLinks: [
      { name: "Ministry of Interior of Serbia — Citizenship", url: "https://www.mup.gov.rs/wps/portal/en/citizenship" },
      { name: "Serbia.gov.rs — e-Government Portal", url: "https://euprava.gov.rs/" },
      { name: "Serbian MFA — Consular Services", url: "https://www.mfa.gov.rs/en/consular-affairs" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Serbian citizen parent automatically acquires Serbian citizenship. Descendants under age 23 who were born abroad to a Serbian parent can also apply. Dual citizenship is fully permitted, so no renunciation is required. Serbia is an EU candidate country, though accession remains ongoing.",
      documentsNeeded: "Your birth certificate showing a Serbian parent, the Serbian parent's proof of Serbian citizenship (passport or ID), and your current national passport. Marriage certificates for relevant couples. Foreign documents need apostilles and certified Serbian translations.",
      processingTime: "3–12 months at a Serbian consulate or Ministry of Interior. Document gathering from Serbian archives adds 2–4 months before submission."
    },
    legalBasis: "Serbian citizenship is governed by the Zakon o državljanstvu Republike Srbije (Law on Citizenship of the Republic of Serbia) of 2004, as amended. Article 13 covers citizenship by descent for children of Serbian citizens. The law permits dual citizenship explicitly and has no renunciation requirements for diaspora claims.",
    dualCitizenshipRules: "Serbia fully permits dual and multiple citizenship. Serbian citizens who acquire foreign nationality do not lose their Serbian citizenship, and foreign nationals who acquire Serbian citizenship by descent are not required to renounce their existing nationality. This permissive policy reflects Serbia's interest in maintaining ties with its large overseas diaspora.",
    costEstimate: "Ministry of Interior application fee: approximately RSD 500–2,000 (approx. €4–€17). Consular processing fees: variable, typically €50–€150. Serbian civil registry extracts: €5–€20 per document. Apostilles: €10–€40 per document. Certified Serbian translations: €40–€80 per document. Total: approximately €150–€600.",
    keyArchives: [
      { name: "Arhiv Srbije (Archives of Serbia)", url: "https://www.archives.org.rs/" },
      { name: "Ministry of Interior of Serbia — MUP", url: "https://www.mup.gov.rs/" },
      { name: "Serbian Genealogical Society — PorekloImena", url: "https://poreklo.rs/" }
    ],
    relatedCountries: ["croatia-citizenship-by-descent", "bosnia-citizenship-by-descent", "north-macedonia-citizenship-by-descent", "montenegro-citizenship-by-descent"]
  },

  "montenegro-citizenship-by-descent": {
    title: "Montenegro Citizenship by Descent — Western Balkans Passport via Montenegrin Heritage",
    description: "Montenegro offers citizenship by descent to children of Montenegrin parents. However, Montenegro does NOT permit dual citizenship — you must renounce your existing nationality to acquire Montenegrin citizenship.",
    intro: "Montenegro offers citizenship by descent to children of Montenegrin citizens, but unlike most European countries, Montenegro does NOT permit dual citizenship. Acquiring Montenegrin citizenship requires renouncing all other nationalities, and Montenegrin citizens who acquire foreign nationality automatically lose their Montenegrin citizenship. This makes Montenegro's CBD program substantially less attractive than those of its neighbors, despite Montenegro being an EU candidate country (with membership negotiations advanced). The Montenegrin diaspora is relatively small compared to other former-Yugoslav states.",
    eligibilityOverview: "A child born to at least one Montenegrin citizen parent automatically acquires Montenegrin citizenship at birth, regardless of birth location. However, the dual-citizenship prohibition means that accepting formal Montenegrin citizenship as a foreign national will require renouncing existing nationalities. Montenegrin naturalization requires 10 years of continuous residency. Montenegro is an EU and NATO candidate.",
    keyRequirements: [
      "At least one parent is or was a Montenegrin citizen",
      "Applicant must be prepared to RENOUNCE existing nationality — dual citizenship is not permitted",
      "Documented lineage from the Montenegrin ancestor to the applicant",
      "Application at the Montenegrin Ministry of Interior or Montenegrin consulate",
      "IMPORTANT: Acquiring Montenegrin citizenship as a foreigner means losing existing passport"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Montenegrin parent",
      "Montenegrin parent's proof of Montenegrin citizenship (Montenegrin passport or identity card)",
      "Marriage certificate if applicable",
      "Apostilles on all foreign documents",
      "Certified Montenegrin/Serbian translations of all non-Montenegrin documents",
      "Applicant's current valid national passport",
      "Renunciation of other citizenship(s) — required before or simultaneously with acquiring Montenegrin citizenship"
    ],
    timeline: "Citizenship registration at a Montenegrin consulate: 6–18 months. Renunciation processing at your other country's consulate adds time — vary significantly by country. Total: 12–24 months.",
    commonPitfalls: [
      "No dual citizenship: this is the most significant limitation — unlike nearly all other European countries covered on this site, Montenegro requires renunciation of existing nationalities; most diaspora members will find this prohibitive",
      "Automatic loss upon foreign naturalization: Montenegrin citizens who voluntarily acquire foreign citizenship automatically lose their Montenegrin citizenship",
      "EU candidate uncertainty: Montenegro is an EU candidate with accession negotiations ongoing, but no certain timeline exists; the passport does not yet provide EU rights",
      "Former-Yugoslav records: Montenegrin civil records before 1991 may be intertwined with Serbian records since Montenegro and Serbia formed the Federal Republic of Yugoslavia until 2006"
    ],
    officialLinks: [
      { name: "Ministry of Interior of Montenegro — Citizenship", url: "https://www.mup.gov.me/en/citizenship" },
      { name: "Montenegro Government Portal", url: "https://www.gov.me/en/start" },
      { name: "Montenegrin MFA — Consular Services", url: "https://www.mvp.gov.me/en" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Montenegrin citizen parent is eligible to claim Montenegrin citizenship by descent. However, Montenegro does not permit dual citizenship — you will be required to renounce your existing nationality to acquire Montenegrin citizenship, and Montenegrin citizens who acquire foreign nationality automatically lose Montenegrin status. For most diaspora members, this makes the pathway impractical.",
      documentsNeeded: "Your birth certificate showing a Montenegrin parent, the Montenegrin parent's proof of Montenegrin citizenship, your current national passport, and renunciation documents for your existing citizenship(s). Foreign documents need apostilles and certified translations.",
      processingTime: "6–18 months for citizenship registration, plus additional time for renunciation processing at your other country's authorities."
    },
    legalBasis: "Montenegrin citizenship is governed by the Zakon o crnogorskom državljanstvu (Law on Montenegrin Citizenship), enacted after Montenegro's independence in 2006. The law prohibits dual citizenship; acquiring foreign citizenship voluntarily means automatic loss of Montenegrin citizenship, and conversely, acquiring Montenegrin citizenship requires renunciation of other nationalities.",
    dualCitizenshipRules: "Montenegro does NOT permit dual citizenship. This is the fundamental restriction: anyone who acquires Montenegrin citizenship must renounce their other nationality(-ies), and Montenegrin citizens who acquire foreign citizenship automatically lose Montenegrin citizenship. This policy sharply limits the appeal of the descent route for a diaspora that overwhelmingly holds EU or US/Canadian/Australian passports. Montenegro is an EU and NATO candidate but has not yet acceded.",
    costEstimate: "Ministry of Interior application fee: approximately €15–€50. Consular fees: variable. Apostilles: €10–€40 per document. Certified translations: €30–€80 per document. Renunciation of other citizenship(s): costs vary greatly by the other country's procedures. Total: €200–€800 excluding renunciation costs.",
    keyArchives: [
      { name: "Arhiv Crne Gore (State Archives of Montenegro)", url: "https://dacg.me/" },
      { name: "Ministry of Interior of Montenegro — MUP", url: "https://www.mup.gov.me/" },
      { name: "Montenegrin Administrative Database Portal", url: "https://www.euprava.me/" }
    ],
    relatedCountries: ["serbia-citizenship-by-descent", "croatia-citizenship-by-descent", "albania-citizenship-by-descent", "bosnia-citizenship-by-descent"]
  },

  "albania-citizenship-by-descent": {
    title: "Albania Citizenship by Descent — Western Balkans Passport via Albanian Heritage",
    description: "Albania offers citizenship by descent to children of Albanian citizens everywhere in the world, and a 3-year reduced naturalization route for those with an Albanian grandparent. Dual citizenship is fully permitted.",
    intro: "Albania offers automatic citizenship by descent to children of Albanian citizens worldwide, with dual citizenship fully permitted. There is also a reduced naturalization pathway (3 years instead of 5) for those who can demonstrate an Albanian grandparent. Albania has a large diaspora estimated at 1.5–2 million people, primarily in Italy, Greece, Germany, Switzerland, and the USA. Albania is an EU candidate country (candidate since 2014, accession talks began 2022), so a future Albanian passport may eventually carry EU rights. Albanian passports currently offer visa-free access to Schengen and many other countries.",
    eligibilityOverview: "A child born to at least one Albanian citizen parent automatically acquires Albanian citizenship at birth, regardless of where the birth occurs. Dual citizenship is fully and explicitly permitted under Albanian law. Albania also offers a 3-year reduced residency naturalization pathway for people who can document an Albanian grandparent, compared to the standard 5-year requirement. No renunciation is required.",
    keyRequirements: [
      "At least one parent is or was an Albanian citizen",
      "Documented lineage from the Albanian ancestor to the applicant",
      "For reduced naturalization (3 years): evidence of Albanian grandparent",
      "Application at the Albanian Ministry of Interior or Albanian consulate abroad",
      "Dual citizenship fully permitted — no renunciation required"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Albanian parent",
      "Albanian parent's proof of Albanian citizenship (Albanian passport or identity card)",
      "Marriage certificate if applicable",
      "For grandparent-based reduced naturalization: grandparent's Albanian birth certificate or citizenship records",
      "Apostilles on all foreign documents",
      "Certified Albanian translations of all non-Albanian documents",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration at Albanian consulate: 3–12 months. Reduced naturalization (grandparent route, 3 years residency first): 3–12 months after meeting residency. Document gathering from Albanian civil archives adds 2–4 months.",
    commonPitfalls: [
      "Communist-era records in Albania: civil records from the Communist period (1944–1991) can be fragmentary, poorly indexed, or held in local archives that are difficult to access; many Albanians fled and records were destroyed or lost",
      "Name changes: families fleeing the Communist regime sometimes changed surnames; reconciling current names with Communist-era records may require additional documentation",
      "EU candidacy timeline: Albania is an EU candidate but accession remains years away — do not rely on an Albanian passport providing EU rights in the near term",
      "Weak travel document: an Albanian passport currently has more limited global visa-free access than EU passports, though it does include Schengen visa-free access since 2010"
    ],
    officialLinks: [
      { name: "Ministry of Interior of Albania — Citizenship", url: "https://ministria.e.brendshme.gov.al/en/citizenship/" },
      { name: "Albanian e-Government Portal", url: "https://e-albania.al/" },
      { name: "Albanian MFA — Consular Services", url: "https://punetejashtme.gov.al/en/consular-services/" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Albanian citizen parent automatically acquires Albanian citizenship, regardless of birth location. Dual citizenship is fully permitted. There is also a reduced naturalization route (3 years residency instead of 5) for people with an Albanian grandparent. Albania is an EU candidate country but has not yet acceded.",
      documentsNeeded: "Your birth certificate showing an Albanian parent, the Albanian parent's proof of Albanian citizenship, and your current national passport. For the grandparent-based reduced naturalization, the grandparent's Albanian birth certificate or citizenship records. Foreign documents need apostilles and certified Albanian translations.",
      processingTime: "Citizenship registration: 3–12 months at a consulate. Reduced naturalization via grandparent route requires first establishing 3 years of Albanian residency, then 3–12 months of processing."
    },
    legalBasis: "Albanian citizenship is governed by the Ligji Nr. 8389 date 5.8.1998 'Për Shtetësinë Shqiptare' (Law on Albanian Citizenship of 1998, as amended). The law explicitly permits dual citizenship. The reduced 3-year naturalization pathway for those of Albanian descent is in Article 9 of the law.",
    dualCitizenshipRules: "Albania explicitly permits dual and multiple citizenship under the 1998 Citizenship Law. Albanian citizens who acquire foreign nationality do not lose their Albanian citizenship, and foreign nationals who acquire Albanian citizenship (by descent or naturalization) are not required to renounce their existing nationality. This permissive policy reflects the importance of the Albanian diaspora to the national economy.",
    costEstimate: "Ministry of Interior registration fee: approximately ALL 500–2,000 (approx. €4–€17). Consular fees: variable, typically €50–€150. Albanian civil registry extracts: €5–€20 per document. Apostilles: €10–€40 per document. Certified Albanian translations: €40–€80 per document. Total: approximately €150–€500.",
    keyArchives: [
      { name: "Arkivi Qendror Shtetëror i Shqipërisë (Albanian State Central Archive)", url: "https://www.arkiva.gov.al/" },
      { name: "Office of Civil Status — Albania", url: "https://www.gjendja.gov.al/" },
      { name: "Ministry of Interior of Albania", url: "https://ministria.e.brendshme.gov.al/en/" }
    ],
    relatedCountries: ["kosovo-citizenship-by-descent", "north-macedonia-citizenship-by-descent", "montenegro-citizenship-by-descent", "serbia-citizenship-by-descent"]
  },

  "bosnia-citizenship-by-descent": {
    title: "Bosnia & Herzegovina Citizenship by Descent — Restrictive Rules and No Dual Citizenship",
    description: "Bosnia & Herzegovina has restrictive citizenship-by-descent rules: a child born abroad to one BiH citizen parent only qualifies automatically if they would otherwise be stateless. Naturalization requires renouncing foreign citizenship.",
    intro: "Bosnia & Herzegovina (BiH) has some of the most restrictive citizenship rules in Europe. Unlike most European countries, BiH only automatically grants citizenship to a child born abroad to one BiH citizen parent if the child would otherwise be stateless. If the child acquires another citizenship at birth (the typical case for diaspora families), they do NOT automatically receive BiH citizenship. BiH also does not permit dual citizenship — naturalization requires renouncing foreign nationality. With approximately 40% of the BiH-born population living abroad, these restrictions have significant consequences for the diaspora.",
    eligibilityOverview: "BiH citizenship law provides: (1) a child born to two BiH citizen parents acquires BiH citizenship regardless of birth location; (2) a child born abroad to one BiH citizen parent and one foreign-national parent acquires BiH citizenship only IF they would otherwise be stateless. Cases where the child holds another citizenship by birth do not automatically confer BiH citizenship through the one-parent rule. Naturalization requires 8 years of continuous BiH residency and renunciation of all foreign citizenships.",
    keyRequirements: [
      "Both parents must be BiH citizens for automatic transmission to a child born abroad (without the statelessness condition), OR",
      "One BiH citizen parent for a child born abroad who would otherwise be stateless",
      "For naturalization: 8 years of continuous legal residency in BiH",
      "Renunciation of all foreign citizenships is required for naturalization",
      "Application at the Ministry of Civil Affairs of BiH or BiH consulate"
    ],
    documents: [
      "Applicant's birth certificate",
      "Both (or the relevant) parent's proof of BiH citizenship (CIPS-issued identity documents)",
      "For statelessness-based claim: documentation proving no other citizenship was acquired at birth",
      "Marriage certificates as applicable",
      "Apostilles on all foreign documents",
      "Certified translations into Bosnian/Croatian/Serbian",
      "Applicant's current valid national passport",
      "For naturalization: proof of 8 years continuous BiH residency"
    ],
    timeline: "Citizenship registration under the statelessness exception: 6–18 months. For cases where both parents are BiH citizens: 3–12 months. Naturalization (8 years residency): 12–24 months processing after eligibility is met. Renunciation of existing citizenship(s) adds additional time.",
    commonPitfalls: [
      "One-parent rule does not apply in most diaspora cases: because children born abroad to a BiH and a foreign parent nearly always acquire the foreign parent's citizenship at birth (and are therefore not stateless), the one-parent rule does not help most diaspora families",
      "No dual citizenship: the biggest limitation — BiH does not permit dual citizenship, meaning accepting formal BiH citizenship requires giving up your existing passport; this is prohibitive for most diaspora members",
      "Complex BiH political structure: Bosnia has two entities (Federation of Bosnia and Herzegovina, Republika Srpska) and one district (Brčko) with overlapping jurisdictions that can complicate citizenship matters",
      "Brain drain: BiH faces significant emigration; the citizenship restrictions are a commonly cited reason why diaspora members do not reclaim BiH citizenship"
    ],
    officialLinks: [
      { name: "Ministry of Civil Affairs of BiH — Citizenship", url: "http://www.mcp.gov.ba/bs/default.aspx?id=77" },
      { name: "CIPS — Agency for Identification Documents, Registers and Data Exchange", url: "https://www.iddeea.gov.ba/bs" },
      { name: "BiH Council of Ministers — Administrative Services", url: "https://www.vijeceministara.gov.ba/default.aspx?langTag=en-US" }
    ],
    faqAnswers: {
      whoQualifies: "A child born abroad to two BiH citizen parents qualifies automatically. A child born abroad to one BiH citizen parent and one foreign parent only qualifies automatically if the child would otherwise be stateless. Since most children born abroad to mixed families acquire the other parent's citizenship at birth, the one-parent rule rarely applies in practice. BiH does not permit dual citizenship — naturalization (8 years residency) requires renouncing all foreign nationalities.",
      documentsNeeded: "Birth certificate, both parents' proof of BiH citizenship, and current national passport. For statelessness-based claims, documentation proving no other citizenship was acquired. All foreign documents need apostilles and certified translations into Bosnian/Croatian/Serbian.",
      processingTime: "Registration where both parents are BiH citizens: 3–12 months. Statelessness-exception claims: 6–18 months. Naturalization (8 years residency path): requires years of residency then 12–24 months of processing."
    },
    legalBasis: "BiH citizenship is governed by the Zakon o državljanstvu Bosne i Hercegovine (Law on Citizenship of Bosnia and Herzegovina) of 2005, as amended. The one-parent rule with statelessness condition is in Article 7. Article 9 covers the two-parents-both-citizens scenario. The prohibition on dual citizenship is in Article 28. The complex entity-level citizenship structure adds additional layers.",
    dualCitizenshipRules: "Bosnia & Herzegovina does NOT permit dual citizenship. Article 28 of the BiH Citizenship Law stipulates that BiH citizenship is lost when a person voluntarily acquires foreign citizenship, and acquiring BiH citizenship requires renouncing all existing foreign nationalities. This is one of the strictest dual-citizenship policies in Europe. Exceptions exist for BiH citizens who acquire EU member state citizenship under bilateral agreements with some countries, but this is limited.",
    costEstimate: "Application fee at Ministry of Civil Affairs: approximately BAM 30–100 (approx. €15–€51). CIPS documentation: BAM 15–30 per document. Apostilles: €10–€40 per document. Certified translations: €30–€70 per document. Renunciation of other citizenship(s): costs vary greatly by the other country. Total excluding renunciation: approximately €100–€400.",
    keyArchives: [
      { name: "Arhiv Bosne i Hercegovine (Archives of Bosnia and Herzegovina)", url: "https://www.arhivbih.gov.ba/" },
      { name: "IDDEEA — Agency for Identification Documents of BiH", url: "https://www.iddeea.gov.ba/" },
      { name: "Historical Archive Sarajevo", url: "https://www.arhivsa.ba/" }
    ],
    relatedCountries: ["serbia-citizenship-by-descent", "croatia-citizenship-by-descent", "montenegro-citizenship-by-descent", "slovenia-citizenship-by-descent"]
  },

  "north-macedonia-citizenship-by-descent": {
    title: "North Macedonia Citizenship by Descent — Western Balkans Passport via Macedonian Heritage",
    description: "North Macedonia offers citizenship by descent to children of Macedonian citizens. Descendants can claim before age 23. Dual citizenship is permitted. North Macedonia is an EU and NATO candidate.",
    intro: "North Macedonia offers automatic citizenship by descent to children of Macedonian citizens, with a specific provision allowing descendants born abroad who are under age 23 to apply. Dual citizenship is fully permitted, so no renunciation is required. North Macedonia became a NATO member in 2020 and is an EU candidate country, with accession negotiations ongoing. The North Macedonian diaspora is significant, particularly in Germany, Switzerland, Australia, and the USA.",
    eligibilityOverview: "A child born to at least one Macedonian citizen parent automatically acquires Macedonian citizenship. Descendants born abroad under age 23 who have not yet applied can file an application to formally acquire citizenship. Dual citizenship is permitted. North Macedonia's EU candidacy means that in the future, a Macedonian passport may carry EU rights, though no accession timeline is certain.",
    keyRequirements: [
      "At least one parent is or was a Macedonian citizen at the time of birth",
      "For descendants under age 23 born abroad: application to formally acquire citizenship is available",
      "Application at the Ministry of Interior of North Macedonia or Macedonian consulate abroad",
      "Dual citizenship fully permitted — no renunciation required",
      "No language test or residency requirement for descent claims"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Macedonian parent",
      "Macedonian parent's proof of Macedonian citizenship (Macedonian passport or identity card)",
      "Marriage certificate if applicable",
      "For under-23 claims: proof of age and parentage",
      "Apostilles on all foreign documents",
      "Certified Macedonian translations of all non-Macedonian documents",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration at a Macedonian consulate: 3–12 months. Document gathering from North Macedonian civil registry archives adds 2–4 months.",
    commonPitfalls: [
      "Age-23 window: some descent claims have an age-23 filing deadline; confirm the specific rule with the Macedonian consulate for your circumstances",
      "Former-Yugoslav archive overlap: North Macedonian records before 1991 may be intertwined with records from other former-Yugoslav republics",
      "EU candidacy uncertainty: North Macedonia has encountered repeated delays in EU accession talks (including the long-running name dispute resolved in 2019 by the Prespa Agreement); accession is not imminent",
      "Name dispute legacy: the country was internationally known as 'FYROM' (Former Yugoslav Republic of Macedonia) until 2019; older documents may use different country designations"
    ],
    officialLinks: [
      { name: "Ministry of Interior of North Macedonia — Citizenship", url: "https://mvr.gov.mk/en" },
      { name: "North Macedonia MFA — Consular Affairs", url: "https://www.mfa.gov.mk/en" },
      { name: "North Macedonia e-Government Portal", url: "https://www.gov.mk/en" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Macedonian citizen parent automatically qualifies for Macedonian citizenship. Descendants under age 23 born abroad can apply to formally acquire citizenship. Dual citizenship is fully permitted. North Macedonia is a NATO member and EU candidate, though EU accession is ongoing.",
      documentsNeeded: "Your birth certificate showing a Macedonian parent, the Macedonian parent's proof of Macedonian citizenship, and your current national passport. Marriage certificates as needed. All foreign documents require apostilles and certified Macedonian translations.",
      processingTime: "3–12 months at a Macedonian consulate after submission of a complete file. Document gathering from Macedonian archives adds 2–4 months before submission."
    },
    legalBasis: "Macedonian citizenship is governed by the Zakon za drzhavjanstvo na Republika Severna Makedonija (Law on Citizenship of the Republic of North Macedonia), adopted after independence in 1992 and amended multiple times. The descent pathway is in Article 4. The law permits dual citizenship explicitly.",
    dualCitizenshipRules: "North Macedonia fully permits dual and multiple citizenship. Macedonian citizens who acquire foreign nationality do not lose their Macedonian citizenship, and foreign nationals who acquire Macedonian citizenship by descent are not required to renounce their existing nationality.",
    costEstimate: "Ministry of Interior fee: approximately MKD 500–2,000 (approx. €8–€32). Consular fees: variable, typically €50–€150. Macedonian civil registry extracts: €5–€20 per document. Apostilles: €10–€40 per document. Certified Macedonian translations: €40–€80 per document. Total: approximately €150–€500.",
    keyArchives: [
      { name: "Dr\u017Eavniot Arhiv na Republika Severna Makedonija (State Archives of North Macedonia)", url: "https://www.arhiv.gov.mk/" },
      { name: "Ministry of Interior — MVR North Macedonia", url: "https://mvr.gov.mk/" },
      { name: "Central Register of North Macedonia", url: "https://www.crm.com.mk/" }
    ],
    relatedCountries: ["albania-citizenship-by-descent", "bulgaria-citizenship-by-descent", "serbia-citizenship-by-descent", "kosovo-citizenship-by-descent"]
  },

  "kosovo-citizenship-by-descent": {
    title: "Kosovo Citizenship by Descent — Partially Recognized State via Kosovo Heritage",
    description: "Kosovo offers citizenship by descent to children of Kosovo citizens. Dual citizenship is permitted. Kosovo is recognized by ~100 countries including the US and most EU members, but not by Russia, China, or Serbia.",
    intro: "Kosovo declared independence from Serbia in February 2008 and is recognized by approximately 100 countries, including the United States, the United Kingdom, and the majority of EU member states. Kosovo is not recognized by Russia, China, Serbia, and approximately 90 other countries, which limits the practical effectiveness of a Kosovo passport. However, Kosovo achieved visa-free Schengen access in January 2024 — a significant development for its citizens. Kosovo offers automatic citizenship by descent, and dual citizenship is fully permitted.",
    eligibilityOverview: "A child born to at least one Kosovo citizen parent automatically acquires Kosovo citizenship at birth, regardless of birth location. Dual citizenship is fully permitted. Kosovo is an EU candidate country. The limited international recognition means that a Kosovo passport has restricted utility compared to EU or other widely-recognized passports — certain countries will not recognize it as a valid travel document.",
    keyRequirements: [
      "At least one parent is or was a Kosovo citizen",
      "Documented lineage from the Kosovo ancestor to the applicant",
      "Application at the Ministry of Internal Affairs of Kosovo or Kosovo consulate abroad",
      "Dual citizenship fully permitted — no renunciation required",
      "Be aware: Kosovo is not universally recognized — about 90 countries do not recognize Kosovo citizenship documents"
    ],
    documents: [
      "Applicant's birth certificate showing at least one Kosovo parent",
      "Kosovo parent's proof of Kosovo citizenship (Kosovo biometric passport or identity card)",
      "Marriage certificate if applicable",
      "Apostilles on all foreign documents (where apostilles are accepted)",
      "Certified Albanian or Serbian translations of non-Albanian/non-Serbian documents",
      "Applicant's current valid national passport"
    ],
    timeline: "Citizenship registration at a Kosovo consulate: 3–12 months. Kosovo has limited consular representation worldwide due to partial recognition; applicants may need to travel to a country where Kosovo has an embassy.",
    commonPitfalls: [
      "Limited international recognition: ~90 countries do not recognize Kosovo; a Kosovo passport will not be accepted as a valid travel document in those countries (including Russia, China, Serbia, and parts of Asia and Africa)",
      "Limited consular network: Kosovo's partial recognition means it has fewer embassies and consulates than fully recognized states; finding a Kosovo diplomatic mission near you may be challenging",
      "Overlap with Serbia: ethnic Serbs from Kosovo may have dual Serbian-Kosovo identity document issues; Serbia does not recognize Kosovo",
      "Schengen visa-free only since 2024: Kosovo only gained Schengen visa-free access in January 2024 — prior to this, Kosovo passport holders needed visas for Schengen; some information online may be outdated"
    ],
    officialLinks: [
      { name: "Ministry of Internal Affairs of Kosovo — Citizenship", url: "https://mpb.rks-gov.net/en-US/Home" },
      { name: "Kosovo e-Government Portal", url: "https://www.rks-gov.net/" },
      { name: "Kosovo MFA — Consular Services", url: "https://www.mfa-ks.net/?page=2,1" }
    ],
    faqAnswers: {
      whoQualifies: "Any person born to at least one Kosovo citizen parent automatically acquires Kosovo citizenship, regardless of birth location. Dual citizenship is fully permitted. The practical consideration is that Kosovo is only recognized by ~100 countries — a Kosovo passport will not be accepted by the other ~90 countries that do not recognize Kosovo's independence.",
      documentsNeeded: "Your birth certificate showing a Kosovo parent, the Kosovo parent's proof of Kosovo citizenship (Kosovo passport or ID), and your current national passport. Foreign documents need apostilles and certified translations into Albanian or Serbian.",
      processingTime: "3–12 months at a Kosovo consulate or Ministry of Internal Affairs. Kosovo has limited consular representation worldwide, which may affect accessibility."
    },
    legalBasis: "Kosovo's citizenship is governed by the Law on Kosovo Citizenship (Law No. 04/L-215 of 2013). Kosovo declared independence on February 17, 2008. The law permits dual citizenship. Kosovo is an EU candidate country (applied in December 2022). Schengen visa-free access for Kosovo passport holders was granted effective January 1, 2024.",
    dualCitizenshipRules: "Kosovo fully permits dual and multiple citizenship. Kosovo citizens who acquire foreign nationality do not lose their Kosovo citizenship, and foreign nationals who acquire Kosovo citizenship by descent are not required to renounce their existing nationality. Despite this permissive policy, the practical value of a Kosovo passport is constrained by limited international recognition.",
    costEstimate: "Ministry of Internal Affairs application fee: approximately €20–€50. Consular fees: variable. Apostilles: €10–€40 per document. Certified translations: €30–€80 per document. Total: approximately €100–€400.",
    keyArchives: [
      { name: "Kosovo State Archives (Arkivi Shtetëror i Kosovës)", url: "https://www.arkivi.com/" },
      { name: "Ministry of Internal Affairs of Kosovo (MPB)", url: "https://mpb.rks-gov.net/" },
      { name: "Kosovo Agency of Statistics — civil registry data", url: "https://ask.rks-gov.net/" }
    ],
    relatedCountries: ["albania-citizenship-by-descent", "north-macedonia-citizenship-by-descent", "serbia-citizenship-by-descent", "montenegro-citizenship-by-descent"]
  },

  "moldova-citizenship-by-descent": {
    title: "Moldova Citizenship by Descent",
    description: "Moldova offers citizenship by descent through a parent or grandparent of Moldovan origin. Ethnic Moldovans may also have a parallel claim through Romania. Learn the requirements and process.",
    intro: "Moldova recognises citizenship by descent allowing individuals with Moldovan parents or grandparents to reclaim their heritage citizenship. Uniquely, many ethnic Moldovans also qualify for Romanian citizenship — providing EU rights — given Moldova's shared history with Romania.",
    eligibilityOverview: "Moldovan citizenship by descent is available if at least one parent is a Moldovan citizen. A grandparent route may apply in certain circumstances. Moldova permits dual citizenship freely.",
    keyRequirements: [
      "At least one parent who is a Moldovan citizen (or was at the time of your birth)",
      "Proof of lineage through birth certificates and identity documents",
      "Grandparent route available where parents have renounced citizenship",
      "Application filed at Bureau of Migration and Asylum or Moldovan consulate abroad",
      "No renunciation of existing citizenship required — dual citizenship is permitted",
    ],
    documents: [
      "Applicant's birth certificate (apostilled and translated)",
      "Parent's or grandparent's Moldovan birth certificate and identity documents",
      "Documentary proof of any name changes or civil status changes",
      "Marriage certificates linking family members across generations",
      "Completed application form from Bureau of Migration and Asylum",
      "Valid passport or identity document of applicant",
    ],
    timeline: "Processing typically takes 3–6 months via the Bureau of Migration and Asylum in Chișinău. Consular applications can take longer — 6–12 months — due to international coordination.",
    commonPitfalls: [
      "Confusing Moldovan CBD with the separate Romanian citizenship claim (both may apply)",
      "Missing Soviet-era or Romanian-era birth records that require specialist archive research",
      "Grandparent route is less straightforward — consult a specialist",
      "Some consulates have limited capacity; appointment waits can be long",
    ],
    officialLinks: [
      { name: "Bureau of Migration and Asylum (Moldova)", url: "https://bma.gov.md/ro/" },
      { name: "Ministry of Foreign Affairs — Consular Info", url: "https://www.mfa.gov.md/en" },
    ],
    faqAnswers: {
      whoQualifies: "Anyone with at least one Moldovan parent qualifies. Grandchildren of Moldovan citizens may qualify if parents have renounced citizenship. Ethnic Moldovans may also have a parallel Romanian citizenship claim.",
      documentsNeeded: "Birth certificates, parental Moldovan identity documents, marriage certificates, and apostilled translations are the core documents required.",
      processingTime: "Typically 3–6 months domestically; 6–12 months via consulate.",
    },
    legalBasis: "Law on Citizenship of the Republic of Moldova No. 1024-XIV (2000), as amended.",
    dualCitizenshipRules: "Moldova freely permits dual and multiple citizenship. No renunciation required.",
    costEstimate: "State fees are modest — approximately €50–€150 equivalent. Legal/translation costs typically add €300–€800.",
    keyArchives: [
      { name: "National Archives of Moldova", url: "https://arhiva.gov.md/en" },
      { name: "Civil Status Offices (STAS Moldova)", url: "https://stas.md/" },
    ],
    relatedCountries: ["romania-citizenship-by-descent", "ukraine-citizenship-by-descent", "bulgaria-citizenship-by-descent"]
  },

  "georgia-citizenship-by-descent": {
    title: "Georgia Citizenship by Descent",
    description: "Georgia offers citizenship by descent for individuals with Georgian parents. An ethnic Georgians pathway also exists. Dual citizenship is permitted. Learn how to claim Georgian citizenship.",
    intro: "Georgia recognises citizenship by descent for those born to Georgian citizen parents. An 'ethnic Georgian' pathway also exists which is administered by the President. Georgia applied for EU candidate status in 2022, raising the profile of Georgian citizenship internationally.",
    eligibilityOverview: "Citizenship by descent applies where at least one parent was a Georgian citizen at the time of birth. An ethnic Georgian route, recognised by Presidential decree, provides a separate pathway for the Georgian diaspora worldwide.",
    keyRequirements: [
      "At least one parent who was a Georgian citizen at time of applicant's birth",
      "Ethnic Georgian descent pathway available by Presidential discretion",
      "Application submitted to Civil Registry Agency or Georgian embassy/consulate",
      "Documentary proof of lineage required",
      "Dual citizenship permitted; no renunciation needed",
    ],
    documents: [
      "Applicant's birth certificate (apostilled and translated into Georgian)",
      "Parent's Georgian identity documents or citizenship certificate",
      "Marriage certificates for linking family members",
      "Any documentary evidence of Georgian ethnic identity (passports, church records, etc.) for ethnic route",
      "Completed application form and current passport",
    ],
    timeline: "Processing at the Civil Registry Agency typically takes 3–6 months. For applicants abroad, the embassy route may take 6–12 months including document authentication.",
    commonPitfalls: [
      "Soviet-era records may be held in Russian, Armenian, or Azerbaijani archives depending on family history — research is essential",
      "The ethnic Georgian presidential route is discretionary and not guaranteed",
      "Georgian does not use Latin script — all documents must be professionally translated",
      "EU candidate status is aspirational; Georgian citizenship does not currently confer EU rights",
    ],
    officialLinks: [
      { name: "Civil Registry Agency of Georgia", url: "https://sda.gov.ge/en" },
      { name: "Ministry of Foreign Affairs of Georgia", url: "https://www.mfa.gov.ge/en" },
    ],
    faqAnswers: {
      whoQualifies: "Anyone born to a Georgian citizen parent qualifies by right. Ethnic Georgians born abroad may apply via the presidential ethnic Georgian route.",
      documentsNeeded: "Birth certificate, parental Georgian identity documents, marriage certificates, and translations into Georgian are required.",
      processingTime: "Approximately 3–6 months domestically; 6–12 months via Georgian consulate.",
    },
    legalBasis: "Law of Georgia on Georgian Citizenship (1993), as amended, including amendments allowing dual citizenship.",
    dualCitizenshipRules: "Georgia permits dual citizenship. Georgian citizens may hold foreign passports without needing to renounce Georgian citizenship.",
    costEstimate: "State fees are approximately GEL 50–200 (€15–€70). Professional translation, apostille, and legal fees typically total €300–€700.",
    keyArchives: [
      { name: "National Archives of Georgia", url: "https://archives.gov.ge/en" },
      { name: "Civil Registry Agency Records", url: "https://sda.gov.ge/en" },
    ],
    relatedCountries: ["armenia-citizenship-by-descent", "ukraine-citizenship-by-descent", "moldova-citizenship-by-descent"]
  },

  "armenia-citizenship-by-descent": {
    title: "Armenia Citizenship by Descent",
    description: "Armenia offers citizenship by descent to those with an Armenian parent. The Armenian diaspora — including descendants of Genocide survivors — has a dedicated pathway. Dual citizenship is freely permitted.",
    intro: "Armenia has one of the world's most accessible citizenship-by-descent programmes, reflecting its large global diaspora. Individuals with at least one Armenian parent qualify automatically. A separate special pathway exists for ethnic Armenians and, most notably, for descendants of survivors of the 1915 Armenian Genocide.",
    eligibilityOverview: "Armenian citizenship by descent is available to any person born to an Armenian citizen parent. Ethnic Armenians without a direct citizen parent line may apply under special provisions. The diaspora pathway allows ethnic Armenians who were never citizens to reclaim ancestral citizenship.",
    keyRequirements: [
      "At least one Armenian citizen parent (birth-right descent)",
      "Ethnic Armenian descent route available for diaspora and Genocide descendants",
      "Application filed with the Passport and Visa Department (OVIR) or Armenian embassy",
      "No renunciation of existing citizenship — dual citizenship explicitly permitted",
      "Ethnic pathway may require declaration and language proficiency in some cases",
    ],
    documents: [
      "Applicant's birth certificate (apostilled and translated into Armenian)",
      "Parent's Armenian passport or birth certificate confirming Armenian citizenship",
      "Marriage certificates linking family members across generations",
      "For diaspora/ethnic route: evidence of Armenian descent, family history, church records",
      "For Genocide descendants: any documentary proof of pre-1915 Armenian origin",
      "Completed application form and valid passport",
    ],
    timeline: "Standard descent applications are typically processed within 3–6 months by the Passport and Visa Department. The ethnic/diaspora pathway can take 6–18 months due to additional review.",
    commonPitfalls: [
      "Pre-1915 records may be lost or held in Turkish or Ottoman archives — genealogical research is complex",
      "The diaspora ethnic route requires demonstrating Armenian identity, which can be subjective",
      "Names may have been changed or transliterated differently across generations",
      "Some applicants confuse the ethnic pathway with standard CBD — they have different procedures",
    ],
    officialLinks: [
      { name: "Passport and Visa Department of Armenia (OVIR)", url: "https://www.police.am/en/" },
      { name: "Ministry of Foreign Affairs of Armenia", url: "https://www.mfa.am/en/" },
      { name: "Diaspora Armenia Portal", url: "https://www.diaspora.am/en/" },
    ],
    faqAnswers: {
      whoQualifies: "Anyone born to an Armenian citizen parent has an automatic right. Ethnic Armenians worldwide — including Genocide descendants — may apply via the diaspora pathway.",
      documentsNeeded: "Birth certificates, parental Armenian documents, marriage records, and for the diaspora route, any evidence of Armenian heritage or church records.",
      processingTime: "Standard CBD: 3–6 months. Diaspora/ethnic route: 6–18 months.",
    },
    legalBasis: "Law on Citizenship of the Republic of Armenia (1995), as amended; Presidential Decree No. 222-A (diaspora pathway).",
    dualCitizenshipRules: "Armenia fully permits dual and multiple citizenship. No renunciation of other citizenships required.",
    costEstimate: "State fees are minimal — AMD 3,000–10,000 (approx. €7–€25). Professional translation and legal support typically costs €300–€600.",
    keyArchives: [
      { name: "National Archives of Armenia", url: "https://www.archives.am/en" },
      { name: "Armenian Apostolic Church Records (Patriarchate)", url: "https://www.stJames.am/" },
    ],
    relatedCountries: ["georgia-citizenship-by-descent", "ukraine-citizenship-by-descent", "bulgaria-citizenship-by-descent"]
  },

  "belarus-citizenship-by-descent": {
    title: "Belarus Citizenship by Descent",
    description: "Belarus offers citizenship by descent through a Belarusian parent, but prohibits dual citizenship. Political sanctions and stability concerns make this a complex choice. Learn the requirements.",
    intro: "Belarus allows citizenship by descent where a parent is a Belarusian citizen. However, Belarus strictly prohibits dual citizenship — acquiring Belarusian citizenship requires renouncing all other nationalities. Given ongoing EU and US sanctions since the 2020 disputed elections and the regime's suppression of political dissent, prospective applicants should weigh significant political and practical considerations.",
    eligibilityOverview: "Belarusian citizenship by descent is available to individuals born to a Belarusian citizen parent. However, dual citizenship is not permitted. Belarusian citizens who acquire foreign nationality are considered to automatically lose Belarusian citizenship, and vice versa.",
    keyRequirements: [
      "At least one Belarusian citizen parent at time of applicant's birth",
      "Renunciation of all other citizenships before or upon receiving Belarusian citizenship",
      "Application filed at Department of Citizenship and Migration or Belarusian embassy",
      "Documentary proof of lineage — birth, marriage, and citizenship records",
      "Be aware: EU/US/UK travel bans and sanctions create significant travel complications for Belarusian passport holders",
    ],
    documents: [
      "Applicant's birth certificate (apostilled and translated into Russian/Belarusian)",
      "Parent's Belarusian passport or Soviet passport showing Belarusian citizenship",
      "Marriage certificates linking family members",
      "Renunciation documents from country of existing citizenship",
      "Completed application form and valid identity document",
    ],
    timeline: "Processing typically takes 6–12 months. Requires renunciation of other citizenship — which itself can take several months depending on your current country of citizenship.",
    commonPitfalls: [
      "Dual citizenship is prohibited — you MUST renounce other citizenships, which is irreversible",
      "A Belarusian passport currently carries significant travel restrictions due to international sanctions",
      "The political situation since 2020 makes consular services unpredictable in some countries",
      "Soviet-era records may require research in Russian or Soviet archives",
    ],
    officialLinks: [
      { name: "Department of Citizenship and Migration, Ministry of Internal Affairs", url: "https://mvd.gov.by/en/main.aspx" },
      { name: "Ministry of Foreign Affairs of Belarus", url: "https://mfa.gov.by/en/" },
    ],
    faqAnswers: {
      whoQualifies: "Anyone born to a Belarusian citizen parent qualifies by descent — but you must renounce all other citizenships to proceed.",
      documentsNeeded: "Birth certificate, parental Belarusian citizenship documents, marriage certificates, renunciation documents, and translations.",
      processingTime: "Approximately 6–12 months, excluding time to arrange renunciation of other citizenships.",
    },
    legalBasis: "Law of the Republic of Belarus on Citizenship of the Republic of Belarus No. 136-Z (2002), as amended.",
    dualCitizenshipRules: "Dual citizenship is strictly prohibited. Belarusian citizens acquiring foreign citizenship are considered to automatically lose Belarusian citizenship.",
    costEstimate: "State fees are modest — approximately BYR equivalent of €30–€80. However, renunciation costs in your home country and legal/translation fees typically total €400–€1,000.",
    keyArchives: [
      { name: "National Historical Archive of Belarus", url: "https://niab.by/en/" },
      { name: "Civil Status Offices of Belarus", url: "https://mvd.gov.by/en/" },
    ],
    relatedCountries: ["ukraine-citizenship-by-descent", "poland-citizenship-by-descent", "lithuania-citizenship-by-descent"]
  },

  "san-marino-citizenship-by-descent": {
    title: "San Marino Citizenship by Descent",
    description: "San Marino — the world's oldest republic — offers citizenship by descent through patrilineal lines. Dual citizenship has been newly permitted. Learn how to claim Sammarinese citizenship.",
    intro: "The Republic of San Marino, a microstate of around 34,000 citizens entirely surrounded by Italy, has traditionally granted citizenship by descent through the paternal line. A historic 2024–2026 legal reform has opened dual citizenship for those acquiring San Marino citizenship by descent or naturalization. While the country is not an EU member, it has a deep relationship with Italy and Europe.",
    eligibilityOverview: "San Marino citizenship by descent is available to those with a Sammarinese father (patrilineal) or, following recent legal reforms being implemented, through either parent. The process is administered by the Civil Status Office of San Marino directly or via Italian consulates for diaspora applicants.",
    keyRequirements: [
      "Sammarinese father (patrilineal line) — or mother under newer reforms being implemented",
      "Continuous generational chain of citizenship (rules on how far back vary)",
      "Application through the Civil Status office or through San Marino's diplomatic representation in Italy",
      "Documentary proof of lineage dating back to Sammarinese-origin ancestor",
      "Dual citizenship now permitted following 2024–2026 reforms",
    ],
    documents: [
      "Applicant's full birth certificate (apostilled and translated)",
      "Birth certificates for each ancestor in the chain up to the Sammarinese citizen",
      "Marriage certificates linking family members",
      "San Marino civil status records or extracts (available from San Marino archives)",
      "Declarations of family status (estratti di stato di famiglia)",
    ],
    timeline: "Processing times vary — allow 12–24 months as records research in San Marino's archives is needed. The Civil Status office has limited capacity given the country's small size.",
    commonPitfalls: [
      "Traditionally patrilineal — maternal-line claims may be more complex depending on timing of reforms",
      "San Marino records may not be digitised — physical archive research may be required",
      "Only a small number of diplomatic posts handle San Marino consular services (mostly via Italian embassy network)",
      "San Marino is not an EU member — citizenship does not confer direct EU free movement rights (though close integration with Italy provides practical benefits)",
    ],
    officialLinks: [
      { name: "San Marino Civil Status Office (Ufficio di Stato Civile)", url: "https://www.gov.sm/pub/StatoSanMarino/Segreteria-Affari-Interni/Ufficio-di-Stato-Civile.html" },
      { name: "Secretary of State for Internal Affairs", url: "https://www.gov.sm/pub/StatoSanMarino/Segreteria-Affari-Interni/" },
    ],
    faqAnswers: {
      whoQualifies: "Historically, those with a Sammarinese father qualify. Ongoing legal reforms are expanding this to matrilineal descent. Consult the Civil Status Office for current rules.",
      documentsNeeded: "Full birth certificate chain from applicant back to the Sammarinese ancestor, plus marriage certificates and translations.",
      processingTime: "Expect 12–24 months due to limited administrative capacity and archive research requirements.",
    },
    legalBasis: "Law on Sammarinese Citizenship (Legge sulla Cittadinanza Sammarinese) and 2024 constitutional reforms on dual citizenship.",
    dualCitizenshipRules: "Dual citizenship is now permitted following reforms enacted in 2024–2026. Previously single citizenship only.",
    costEstimate: "State fees are nominal. Archive research fees, apostilles, and professional translations typically total €500–€1,500.",
    keyArchives: [
      { name: "State Archives of San Marino (Archivio di Stato)", url: "https://www.archiviodigitalesanmarino.sm/" },
      { name: "San Marino Civil Status Office", url: "https://www.gov.sm/pub/StatoSanMarino/Segreteria-Affari-Interni/Ufficio-di-Stato-Civile.html" },
    ],
    relatedCountries: ["italy-citizenship-by-descent", "monaco-citizenship-by-descent", "liechtenstein-citizenship-by-descent"]
  },

  "monaco-citizenship-by-descent": {
    title: "Monaco Citizenship by Descent",
    description: "Monaco citizenship by descent is available to those with a Monégasque parent, but dual citizenship is prohibited. With only ~10,000 citizens, it is one of the rarest citizenships in the world.",
    intro: "Monaco — a sovereign city-state on the French Riviera — grants citizenship to children of Monégasque citizens. With approximately 10,000 Monégasque citizens in a total population of around 40,000, it is one of the rarest citizenships globally. Dual citizenship is strictly prohibited: acquiring foreign nationality automatically results in loss of Monaco citizenship, and vice versa.",
    eligibilityOverview: "Monaco citizenship by descent requires a Monégasque citizen parent. Historically patrilineal, reforms have extended this to matrilineal descent. Dual citizenship is absolutely prohibited — holding Monaco citizenship means you cannot concurrently hold another nationality.",
    keyRequirements: [
      "At least one Monégasque citizen parent (now applicable through both parents after matrilineal reforms)",
      "No dual citizenship — you must renounce all other nationalities",
      "Application to the Department of Interior (Direction de la Sûreté Publique) in Monaco",
      "Full chain of lineage documentation required",
      "Born outside Monaco may still qualify if parent was a Monégasque citizen",
    ],
    documents: [
      "Applicant's birth certificate (apostilled and translated into French)",
      "Parent's Monaco identity card or citizenship certificate",
      "Marriage certificates linking family members",
      "Proof of renunciation of other citizenship(s)",
      "Completed application form from Direction de la Sûreté Publique",
    ],
    timeline: "Processing typically takes 6–18 months. Given the small scale of Monaco's administration and the rarity of applications, timelines vary.",
    commonPitfalls: [
      "Dual citizenship is ABSOLUTELY prohibited — acquiring Monaco citizenship means renouncing all other nationalism, a major and irreversible step",
      "Monaco citizenship confers no EU rights — Monaco is not an EU member state, though it uses the Euro and has close ties with France",
      "Matrilineal descent reforms are relatively recent — older applicants may need to re-assess eligibility",
      "With so few citizens, administrative processes are bespoke and not well-documented publicly",
    ],
    officialLinks: [
      { name: "Direction de la Sûreté Publique (Monaco Interior)", url: "https://www.gouv.mc/Action-Gouvernementale/La-Securite-des-Monegasques-et-des-Residents/La-Surete-Publique" },
      { name: "Monaco Ministry of State (official portal)", url: "https://www.gouv.mc/" },
    ],
    faqAnswers: {
      whoQualifies: "Children of Monégasque citizen parents qualify. Both patrilineal and matrilineal descent are now recognised.",
      documentsNeeded: "Birth certificate, parental Monaco citizenship evidence, marriage certificates, and renunciation of all other nationalities before or upon grant.",
      processingTime: "Approximately 6–18 months depending on completeness of documentation.",
    },
    legalBasis: "Monégasque Nationality Code (Code de la Nationalité Monégasque), as amended.",
    dualCitizenshipRules: "Dual citizenship is completely prohibited. A Monégasque citizen who acquires foreign nationality automatically loses Monaco citizenship. Foreign nationals who acquire Monaco citizenship must renounce all other nationalities.",
    costEstimate: "Official fees are minimal. Legal counsel and document legalisation costs typically range €500–€1,500.",
    keyArchives: [
      { name: "Monaco State Archives (Archives du Palais Princier)", url: "https://www.palais.mc/en/the-principality/archive.html" },
      { name: "Direction de la Sûreté Publique — Civil Status", url: "https://www.gouv.mc/" },
    ],
    relatedCountries: ["france-citizenship-by-descent", "san-marino-citizenship-by-descent", "liechtenstein-citizenship-by-descent"]
  },

  "liechtenstein-citizenship-by-descent": {
    title: "Liechtenstein Citizenship by Descent",
    description: "Liechtenstein offers citizenship by descent through a Liechtenstein parent. Dual citizenship is allowed via descent (CBD). Naturalization, however, requires 30 years of residency. Learn how to qualify.",
    intro: "Liechtenstein — a tiny alpine principality between Switzerland and Austria — grants citizenship to children of Liechtenstein citizen parents. One parent being a citizen at birth is sufficient to transfer citizenship by descent, and dual citizenship is permitted for those acquiring Liechtenstein citizenship by descent. Liechtenstein is an EFTA and EEA member state, giving its citizens Schengen and European Economic Area rights.",
    eligibilityOverview: "At least one Liechtenstein citizen parent is required for citizenship by descent. Children born to a Liechtenstein citizen abroad acquire citizenship automatically. Dual citizenship is allowed for CBD cases — holders need not renounce foreign nationality. Note: naturalization requires 30 years of residency, making CBD the primary route for diaspora.",
    keyRequirements: [
      "At least one parent who was a Liechtenstein citizen at the time of birth",
      "Automatic acquisition at birth — formal registration may still be required",
      "Dual citizenship permitted for CBD cases (not for naturalization)",
      "Application/registration via the Office of Civil Status and Persons Registry",
      "Documentary proof of parental citizenship and lineage",
    ],
    documents: [
      "Applicant's birth certificate (apostilled and translated into German)",
      "Parent's Liechtenstein identity card or citizenship certificate",
      "Marriage certificates linking family members",
      "Completed registration form with the Office of Civil Status (Amt für Bürgerrecht und Ausweis)",
      "Valid passport or identity document of applicant",
    ],
    timeline: "Registration/confirmation of citizenship by descent is typically processed within 3–6 months. The process is relatively straightforward for direct parent-child cases.",
    commonPitfalls: [
      "Liechtenstein is tiny — administrative capacity is limited and personal engagement may be required",
      "German is the official language — all documents must be translated",
      "Dual citizenship is permitted for CBD but NOT for naturalization — be clear about which route applies",
      "The 30-year naturalization requirement means CBD is effectively the only realistic route for most people",
    ],
    officialLinks: [
      { name: "Office of Civil Status and Persons Registry (Liechtenstein)", url: "https://www.llv.li/en/state-and-government/agv" },
      { name: "Government of Liechtenstein — official portal", url: "https://www.llv.li/en" },
    ],
    faqAnswers: {
      whoQualifies: "Anyone with at least one Liechtenstein citizen parent qualifies by descent. Citizenship transfers automatically at birth; formal registration confirms it.",
      documentsNeeded: "Birth certificate, parental citizenship documents, marriage certificates, and translations into German.",
      processingTime: "Approximately 3–6 months for registration and confirmation of CBD status.",
    },
    legalBasis: "Liechtenstein Citizenship Act (Bürgerrechtsgesetz, BüG), as amended.",
    dualCitizenshipRules: "Dual citizenship is permitted when citizenship is acquired by descent (CBD). It is not permitted for naturalization applicants.",
    costEstimate: "Official fees are modest — CHF 100–300 equivalent. Translation, apostille, and legal costs typically total CHF 400–900 (approx. €430–€970).",
    keyArchives: [
      { name: "Liechtenstein National Archives (Liechtensteinisches Landesarchiv)", url: "https://www.landesarchiv.li/en" },
      { name: "Office of Civil Status and Persons Registry", url: "https://www.llv.li/en/state-and-government/agv" },
    ],
    relatedCountries: ["switzerland-citizenship-by-descent", "austria-citizenship-by-descent", "monaco-citizenship-by-descent"]
  },

  "andorra-citizenship-by-descent": {
    title: "Andorra Citizenship by Descent",
    description: "Andorra offers citizenship by descent through one Andorran parent, but strictly prohibits dual citizenship. Naturalization requires 10–20 years of residency. Learn the eligibility requirements.",
    intro: "Andorra — a microstate in the Pyrenees co-governed by France and Spain — grants citizenship by descent to children of Andorran citizens. However, Andorra strictly prohibits dual citizenship, making it a significant commit for anyone who already holds another nationality. Naturalization requires 10 years of residency (20 years for certain categories), making descent the primary pathway for diaspora Andorrans.",
    eligibilityOverview: "One Andorran citizen parent is sufficient for citizenship by descent. Children born to an Andorran citizen abroad may register for citizenship. Dual citizenship is prohibited — you must renounce all other nationalities. As Andorra is neither an EU member nor EEA member, Andorran citizenship does not directly confer EU rights.",
    keyRequirements: [
      "At least one Andorran citizen parent at time of birth",
      "No dual citizenship — renunciation of all other nationalities is required",
      "Registration via the Arxiu Nacional d'Andorra or Andorran consular services",
      "Full documentary proof of parental Andorran citizenship and lineage",
      "Declaration renouncing other citizenships required upon registration",
    ],
    documents: [
      "Applicant's birth certificate (apostilled and translated into Catalan)",
      "Parent's Andorran national identity document (CDUIA) or citizenship certificate",
      "Marriage certificates linking family members",
      "Renunciation documents from country of other citizenship(s)",
      "Completed registration form from the Arxiu Nacional d'Andorra",
    ],
    timeline: "Processing typically takes 6–12 months. The renunciation of other citizenships adds time as this must be completed in your home country before or concurrent with the Andorran application.",
    commonPitfalls: [
      "Dual citizenship is strictly prohibited — renouncing other nationalities is an irreversible step",
      "Andorra uses Catalan as its official language — all documents must be translated",
      "Andorra is not EU/EEA — no automatic EU free movement right",
      "Limited consular infrastructure outside of Andorra, Spain, and France",
    ],
    officialLinks: [
      { name: "Govern d'Andorra — Citizenship information", url: "https://www.govern.ad/afers-exteriors/es-informacio-per-a-estrangers/cat_view/134-tramits-de-ciutadania" },
      { name: "Arxiu Nacional d'Andorra", url: "https://www.arxiu.ad/en/" },
    ],
    faqAnswers: {
      whoQualifies: "Anyone born to an Andorran citizen parent may register for citizenship by descent. Renunciation of all other citizenships is mandatory.",
      documentsNeeded: "Birth certificate, parental Andorran identity documents, marriage certificates, renunciation documents, and Catalan translations.",
      processingTime: "Approximately 6–12 months, plus time to arrange foreign citizenship renunciation.",
    },
    legalBasis: "Llei de la Nacionalitat Andorrana (Law on Andorran Nationality), as amended.",
    dualCitizenshipRules: "Dual citizenship is absolutely prohibited. Andorran citizenship is lost upon acquiring a foreign nationality, and foreign nationals acquiring Andorran citizenship must renounce other nationalities.",
    costEstimate: "Official fees are minimal. Professional Catalan translation, renunciation costs in home country, and legal fees typically total €500–€1,200.",
    keyArchives: [
      { name: "Arxiu Nacional d'Andorra (National Archive)", url: "https://www.arxiu.ad/en/" },
      { name: "Govern d'Andorra Civil Registry", url: "https://www.govern.ad/" },
    ],
    relatedCountries: ["spain-citizenship-by-descent", "france-citizenship-by-descent", "monaco-citizenship-by-descent"]
  },

  "vatican-city-citizenship": {
    title: "Vatican City Citizenship — What You Need to Know",
    description: "Vatican City does not offer citizenship by descent. Vatican citizenship is functional, granted only to clergy and workers living and serving in Vatican City. Learn how it actually works.",
    intro: "Vatican City State is unique among the world's nations: it does not offer citizenship by descent, by birth, or by ethnicity. Vatican citizenship is entirely functional — it is granted by the Holy See to Catholic clergy, members of the Pontifical Swiss Guard, and lay workers who live and work within Vatican City itself. It has nothing to do with Italian descent, Catholic faith, or family heritage.",
    eligibilityOverview: "There is no citizenship by descent pathway in Vatican City. Citizenship is granted exclusively to those performing official roles within Vatican City: the Pope himself, resident Cardinals, Vatican diplomatic staff, Swiss Guards, and some lay employees. Citizenship is lost automatically when the role ends. Approximately 800 people hold Vatican citizenship at any given time.",
    keyRequirements: [
      "Must be an active clergy member, Vatican diplomat, or Swiss Guard serving in Vatican City",
      "Must reside in Vatican City or in a Vatican diplomatic post abroad",
      "Citizenship is automatically revoked when service ends",
      "No descent, bloodline, or heritage route exists",
      "Cannot be applied for — it is conferred by the Holy See based on appointment",
    ],
    documents: [
      "Not applicable — Vatican citizenship cannot be applied for by individuals",
      "Appointment documents from the Holy See are the trigger for citizenship status",
    ],
    timeline: "Not applicable — citizenship is conferred upon appointment and revoked upon termination of service.",
    commonPitfalls: [
      "Many people mistakenly believe Catholic faith or Italian-Vatican heritage leads to Vatican citizenship — it does not",
      "Vatican citizenship confers Papal travel documents but is not useful for immigration purposes",
      "Vatican is not an EU member and citizenship does not confer EU rights",
      "Holy See and Vatican City State are legally distinct entities — citizenship belongs to Vatican City State only",
    ],
    officialLinks: [
      { name: "Holy See — official portal", url: "https://www.vatican.va/content/vatican/en.html" },
      { name: "Vatican City State official site", url: "https://www.vaticanstate.va/en.html" },
    ],
    faqAnswers: {
      whoQualifies: "No one qualifies through descent. Only clergy, diplomats, Swiss Guards, and certain Vatican employees who live and serve in Vatican City hold citizenship — and only for as long as they serve.",
      documentsNeeded: "Not applicable — citizenship cannot be applied for.",
      processingTime: "Not applicable.",
    },
    legalBasis: "Vatican City State Fundamental Law (2001); Law on Citizenship and Residence of Vatican City State (2011).",
    dualCitizenshipRules: "Vatican citizens almost always hold another citizenship (usually Italian) simultaneously. There is no official dual citizenship rule as citizenship is functional and service-based.",
    costEstimate: "Not applicable.",
    keyArchives: [
      { name: "Vatican Apostolic Archive (formerly Secret Archive)", url: "https://www.vaticanapostolicarchive.va/content/vaticansecretarchive/en.html" },
    ],
    relatedCountries: ["italy-citizenship-by-descent", "san-marino-citizenship-by-descent", "monaco-citizenship-by-descent"]
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
