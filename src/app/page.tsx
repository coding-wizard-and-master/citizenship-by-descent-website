"use client";
import React, { useMemo, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Script from "next/script";
import Image from "next/image";

type Q = {
  key: string;
  label: string;
  hint?: string;
  type: "radio" | "select";
  options: { value: string; label: string }[];
  required?: boolean;
  showIf?: (form: any) => boolean;
};

type CountryMeta = {
  code?: string;
  ancestorLabel?: string;
  supportsResidencyFallback?: boolean;
  residencyPathLabel?: string;
};

type CountryQuestions = CountryMeta & {
  questions: Q[];
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I get citizenship if my great-grandparent was from Italy or another European country?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the country and whether the citizenship chain was broken by naturalization. Italy has no generational limit — if no ancestor naturalized before their child in your line was born, you may qualify regardless of how many generations back. Countries like Ireland only go to grandparent level without extra steps. Use the checker above to see your specific situation."
      }
    },
    {
      "@type": "Question",
      name: "Does naturalization automatically break the citizenship by descent chain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — in most countries including Italy, Germany, and Poland, if your ancestor naturalized as a citizen of another country before the next generation in your line was born, the citizenship chain is broken and you cannot claim through that ancestor. The exact rules vary by country and the year of naturalization."
      }
    },
    {
      "@type": "Question",
      name: "What is the 1948 rule for Italian citizenship by descent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before January 1, 1948, Italian law only allowed citizenship to pass through the male line. If your claim passes through a female Italian ancestor and the next child in your line was born before that date, you cannot use the standard consular process. You must file a lawsuit in Italian court — typically in Rome — to obtain recognition under gender-equality precedents established since the 1980s."
      }
    },
    {
      "@type": "Question",
      name: "Can I hold dual citizenship if I claim European citizenship through ancestry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most EU countries on this site allow dual citizenship for descent claimants — including Italy, Ireland, Germany (since 2024), Poland, Greece, Hungary, Estonia, Latvia, Luxembourg, and Lithuania. Notable exceptions: Slovakia generally forbids dual citizenship, and Portugal requires proof of community ties. Always verify the specific dual citizenship rules with the relevant consulate before starting your application."
      }
    },
    {
      "@type": "Question",
      name: "What documents do I need to apply for citizenship by descent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The core requirement across all countries is a chain of vital records — birth, marriage, and death certificates — for every generation from your European ancestor to you. You also typically need proof the ancestor held citizenship (not residency only) and, for countries with naturalization chain-break rules, evidence of when or whether naturalization occurred. All foreign documents usually require an apostille seal and a certified translation into the target country's language."
      }
    },
    {
      "@type": "Question",
      name: "How long does citizenship by descent take from start to finish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary significantly. Irish Foreign Births Register applications currently take 12–18 months. Italian consulate appointments in the US can have 2–5 year backlogs, though applying directly in Italy can take 3–6 months. German recognition typically takes 12–24 months. Polish confirmation takes 6–12 months. Document preparation — gathering, apostilling, and translating records — can add 3–12 months on top of government processing time."
      }
    },
    {
      "@type": "Question",
      name: "Is this tool an official government service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Heritage Passport Finder is a free educational tool, not a government service. It does not submit applications, store your data, or provide legal advice. Results are for informational purposes only. Always confirm your eligibility directly with the relevant consulate or embassy, and consider consulting a qualified immigration attorney for complex cases."
      }
    }
  ]
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://heritagepassportfinder.com/"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Eligibility Checker",
      item: "https://heritagepassportfinder.com/#eligibility"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Resources",
      item: "https://heritagepassportfinder.com/#resources"
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Research Tips",
      item: "https://heritagepassportfinder.com/#tips"
    }
  ]
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Heritage Passport Finder — Citizenship by Descent Checker",
  url: "https://heritagepassportfinder.com",
  description: "Free interactive tool to check whether you qualify for European citizenship by descent across 46 countries — including Italy, Ireland, Germany, Poland, Spain, Portugal, Greece, Lithuania, Hungary, Estonia, Latvia, Czech Republic, Slovakia, Luxembourg, France, Romania, Croatia, Bulgaria, and more.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  creator: {
    "@type": "Organization",
    name: "Heritage Passport Finder",
    url: "https://heritagepassportfinder.com"
  }
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Research Your Ancestry for European Citizenship by Descent",
  description: "Step-by-step guide to tracing your family history and assembling the document chain required for a European citizenship by descent application.",
  totalTime: "P3M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Create an Ancestry account", text: "Sign up at Ancestry.com and start a family tree with everything you already know — names, birthplaces, and dates for parents, grandparents, and great-grandparents." },
    { "@type": "HowToStep", position: 2, name: "Search vital records", text: "Use Ancestry databases to find birth, marriage, and death certificates. These are essential for proving your lineage and eligibility for citizenship by descent." },
    { "@type": "HowToStep", position: 3, name: "Explore immigration records", text: "Look for ship manifests, immigration documents, and naturalization records. These establish when ancestors moved and their citizenship status at the time." },
    { "@type": "HowToStep", position: 4, name: "Review census data", text: "Census records provide clues about family relationships, places of birth, and citizenship changes, often filling in gaps where vital records are missing." },
    { "@type": "HowToStep", position: 5, name: "Collaborate and verify", text: "Connect with distant relatives who may have already done research. Always cross-reference sources against official government archives." },
    { "@type": "HowToStep", position: 6, name: "Organize your lineage chain", text: "Save certified copies and organize documents by generation and type — birth, marriage, naturalization — to build a clear, provable chain from your ancestor to you." },
    { "@type": "HowToStep", position: 7, name: "Translate and apostille", text: "Most countries require certified translations and apostilles on foreign documents. Budget for this cost and allow time when preparing your application." },
    { "@type": "HowToStep", position: 8, name: "Assess and apply", text: "Once you have a complete chain, consult the consulate for application instructions. Consider a citizenship attorney for complex or multi-generational cases." }
  ]
};

export default function HeritagePassportLanding() {
  const [navOpen, setNavOpen] = useState(false);
  // Google AdSense loader (production only — avoids empty container gap in development)
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);
  // ---------- state ----------
  const [form, setForm] = useState<any>({
  country: "",
  ancestor: "",
  it1: "", it2: "", it3: "", it4: "", it5: "",
  ie1: "", ie2: "", ie3: "",
  de1: "", de2: "", de3: "", de4: "",
  pl1: "", pl2: "", pl3: "", pl4: "",
  gr1: "", gr2: "", gr3: "",
  es1: "", es2: "", es3: "", es4: "",
  pt1: "", pt2: "", pt3: "", pt4: "",
  lt1: "", lt2: "", lt3: "", lt4: "", lt5: "",
  huA1: "", huA2: "",
  huB1: "", huB2: "", huB3: "", huB4: "",
  ee1: "", ee2: "",
  lv1: "", lv2: "",
  cz1: "", cz2: "", cz3: "", cz4: "",
  sk1: "", sk2: "",
  lu1: "", lu2: "", lu3: "",
  fr1: "", fr2: "", fr3: "",
  ro1: "", ro2: "", ro3: "",
  hr1: "", hr2: "",
  bg1: "", bg2: "", bg3: "",
  se1: "", se2: "", se3: "",
  dk1: "", dk2: "", dk3: "",
  fi1: "", fi2: "", fi3: "",
  nl1: "", nl2: "", nl3: "",
  be1: "", be2: "", be3: "",
  si1: "", si2: "", si3: "",
  at1: "", at2: "", at3: "",
  cy1: "", cy2: "", cy3: "",
  mt1: "", mt2: "", mt3: "",
  gb1: "", gb2: "", gb3: "",
  ua1: "", ua2: "",
  no1: "", no2: "", no3: "",
  ch1: "", ch2: "", ch3: "",
  is1: "", is2: "", is3: "",
  rs1: "", rs2: "",
  me1: "", me2: "",
  al1: "", al2: "",
  ba1: "", ba2: "", ba3: "",
  mk1: "", mk2: "",
  xk1: "", xk2: "",
  md1: "", md2: "", md3: "",
  ge1: "", ge2: "", ge3: "",
  am1: "", am2: "", am3: "",
  by1: "", by2: "",
  sm1: "", sm2: "",
  mc1: "", mc2: "",
  li1: "", li2: "",
  ad1: "", ad2: "", ad3: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  function handleBack() {
    setSubmitted(false);
    setResult(null);
    setForm({
      country: "",
      ancestor: "",
      it1: "", it2: "", it3: "", it4: "", it5: "",
      ie1: "", ie2: "", ie3: "",
      de1: "", de2: "", de3: "", de4: "",
      pl1: "", pl2: "", pl3: "", pl4: "",
      gr1: "", gr2: "", gr3: "",
      es1: "", es2: "", es3: "", es4: "",
      pt1: "", pt2: "", pt3: "", pt4: "",
      lt1: "", lt2: "", lt3: "", lt4: "", lt5: "",
      huA1: "", huA2: "",
      huB1: "", huB2: "", huB3: "", huB4: "",
      ee1: "", ee2: "",
      lv1: "", lv2: "",
      cz1: "", cz2: "", cz3: "", cz4: "",
      sk1: "", sk2: "",
      lu1: "", lu2: "", lu3: "",
      fr1: "", fr2: "", fr3: "",
      ro1: "", ro2: "", ro3: "",
      hr1: "", hr2: "",
      bg1: "", bg2: "", bg3: "",
      se1: "", se2: "", se3: "",
      dk1: "", dk2: "", dk3: "",
      fi1: "", fi2: "", fi3: "",
      nl1: "", nl2: "", nl3: "",
      be1: "", be2: "", be3: "",
      si1: "", si2: "", si3: "",
      at1: "", at2: "", at3: "",
      cy1: "", cy2: "", cy3: "",
      mt1: "", mt2: "", mt3: "",
      gb1: "", gb2: "", gb3: "",
      ua1: "", ua2: "",
      no1: "", no2: "", no3: "",
      ch1: "", ch2: "", ch3: "",
      is1: "", is2: "", is3: "",
      rs1: "", rs2: "",
      me1: "", me2: "",
      al1: "", al2: "",
      ba1: "", ba2: "", ba3: "",
      mk1: "", mk2: "",
      xk1: "", xk2: "",
      md1: "", md2: "", md3: "",
      ge1: "", ge2: "", ge3: "",
      am1: "", am2: "", am3: "",
      by1: "", by2: "",
      sm1: "", sm2: "",
      mc1: "", mc2: "",
      li1: "", li2: "",
      ad1: "", ad2: "", ad3: ""
    });
  }

  // ---------- question sets with showIf ----------
  const countryQuestions: Record<string, CountryQuestions> = {
    Estonia: {
      questions: [
        {
          key: "ee1",
          label: "Do you have a parent, grandparent, or great-grandparent who was an Estonian citizen before June 16, 1940?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "ee2",
          label: "Can you provide official documents proving that ancestor’s Estonian citizenship and your family connection?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.ee1 === "yes"
        }
      ]
    },
    Latvia: {
      questions: [
        {
          key: "lv1",
          label: "Do you have a parent, grandparent, or great-grandparent who was a Latvian citizen on June 17, 1940?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "lv2",
          label: "Can you provide documents proving that ancestor’s Latvian citizenship and your relationship?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.lv1 === "yes"
        }
      ]
    },
    CzechRepublic: {
      code: "CZ",
      ancestorLabel: "Which ancestor are you claiming through?",
      supportsResidencyFallback: true,
      residencyPathLabel: "Apply for Permanent Residence if Czech origin proven",
  questions: [
        {
          key: "cz1",
          label: "Was one of your parents a Czech (or Czechoslovak) citizen at the time of your birth?",
          type: "radio",
          options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
          required: true
        },
        {
          key: "cz2",
          label: "If not, was one of your grandparents a Czech (or Czechoslovak) citizen?",
          type: "radio",
          options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
          required: true,
          showIf: f => f.cz1 === "No"
        },
        {
          key: "cz3",
          label: "Did your Czech/Czechoslovak ancestor lose citizenship under Nazi, postwar, or Slovak separation laws (e.g., minority decrees or Slovak acquisition)?",
          type: "radio",
          options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
          required: true,
          showIf: f => f.cz1 === "Yes" || f.cz2 === "Yes"
        },
        {
          key: "cz4",
          label: "Are you of Czech origin (can you prove your ancestor was Czech)?",
          type: "radio",
          options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
          required: true,
          showIf: f => (f.cz1 === "No" && f.cz2 === "No") || ((f.cz1 === "Yes" || f.cz2 === "Yes") && f.cz3 === "Yes")
        }
      ]
    },
    Slovakia: {
      questions: [
        {
          key: "sk1",
          label: "Do you have a parent, grandparent, or great-grandparent who held Slovak or Czechoslovak citizenship (or was a Slovak national before 1993)?",
          hint: "Slovak ancestry does not require that the ancestor was born in present-day Slovakia — a Slovak national could have lived anywhere. After the 1993 split of Czechoslovakia, Slovak citizens automatically became citizens of the Slovak Republic. Answer 'Yes' if a close ancestor was Slovak or held Czechoslovak citizenship.",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "sk2",
          label: "Can you provide official documentation to prove both birth and descent?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.sk1 === "yes"
        }
      ]
    },
    Luxembourg: {
      code: "LU",
      ancestorLabel: "Which ancestor are you claiming through?",
      supportsResidencyFallback: false,
      questions: [
        {
          key: "lu1",
          label: "Do you have a parent or grandparent who is/was a Luxembourg citizen?",
          type: "radio",
          options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
          required: true
        },
        {
          key: "lu2",
          label: "Do you have an all-male lineage (father → grandfather → etc.) leading back to a Luxembourg citizen born between 1815 and 1943?",
          type: "radio",
          options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
          required: true,
          showIf: f => f.lu1 === "No"
        },
        {
          key: "lu3",
          label: "Was your mother eligible for all-male descent (per above) and were you born after Jan 1, 1969?",
          type: "radio",
          options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }],
          required: true,
          showIf: f => f.lu2 === "Yes"
        }
      ]
    },
    Italy: {
      questions: [
        {
          key: "it1",
          label: "Was either parent an Italian citizen at the time of your birth?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "it2",
          label: "Do you have a direct-line Italian ancestor (parent → grandparent → great-grandparent, etc.) who was born in Italy?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.it1 === "no"
        },
        {
          key: "it3",
          label: "Did anyone in that direct line naturalize as a foreign citizen BEFORE their child in your line was born?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.it1 === "no" && f.it2 === "yes"
        },
        {
          key: "it4",
          label: "Does your direct line pass through a female ancestor where the next child in line was born BEFORE 1 Jan 1948?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (1948 rule)" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.it1 === "no" && f.it2 === "yes"
        },
        {
          key: "it5",
          label: "Can you obtain civil records for each generation AND naturalization/non-naturalization proof for the Italian emigrant ancestor?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.it1 === "no" && f.it2 === "yes"
        }
      ]
    },

    Ireland: {
      questions: [
        {
          key: "ie1",
          label: "Was either parent an Irish citizen at your birth?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "ie2",
          label: "Was at least one grandparent born on the island of Ireland?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.ie1 === "no"
        },
        {
          key: "ie3",
          label: "Can you supply long-form civil records for each link + your ID (Foreign Births Register)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.ie1 === "no" && f.ie2 === "yes"
        }
      ]
    },

    Germany: {
      questions: [
        {
          key: "de1",
          label: "Was either legal parent a German citizen at your birth?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "de2",
          label:
            "Were you/your parent excluded historically (German mother before 1 Jan 1975 OR out of wedlock to German father before 1 July 1993)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (declaration remedy)" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.de1 === "no"
        },
        {
          key: "de3",
          label:
            "Are you a descendant of someone who lost German citizenship due to Nazi persecution (1933–1945)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (Art. 116(2))" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.de1 === "no"
        },
        {
          key: "de4",
          label: "Was your German parent born IN Germany (or elsewhere within Germany's borders) — or were they also born abroad to a German parent?",
          hint: "Under § 4(4) StAG, if your German parent was ALSO born abroad after 1999 and your birth was not registered at a German mission within one year, automatic transmission of German citizenship does not apply. If your German parent was born in Germany, this rule does not affect you — answer 'Born in Germany'.",
          type: "radio",
          options: [
            { value: "yes", label: "Born in Germany (or before 1999)" },
            { value: "no", label: "Also born abroad after 1999" },
            { value: "registered", label: "Also born abroad after 1999, but my birth WAS registered at a German mission within 1 year" }
          ],
          required: true,
          showIf: f => f.de1 === "yes"
        }
      ]
    },

    Poland: {
      questions: [
        {
          key: "pl1",
          label: "Was either parent a Polish citizen at your birth?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "pl2",
          label:
            "Do you have a direct-line ancestor (parent, grandparent, or great-grandparent) who held Polish citizenship after 1918?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.pl1 === "no"
        },
        {
          key: "pl3",
          label:
            "Did any ancestor in that line lose Polish citizenship BEFORE the next generation was born?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (chain broken)" }, { value: "no", label: "No / Unsure" }],
          required: true,
          showIf: f => f.pl1 === "no" && f.pl2 === "yes"
        },
        {
          key: "pl4",
          label:
            "Can you obtain proof of the ancestor’s Polish citizenship (passport/archives) AND the civil chain to you?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.pl1 === "no" && f.pl2 === "yes"
        }
      ]
    },

    Greece: {
      questions: [
        {
          key: "gr1",
          label: "Was either parent registered as a Greek citizen at your birth (municipal rolls)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "gr2",
          label:
            "Was a grandparent a Greek citizen or born in Greece and recorded in Greek registers?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (Greek-origin path)" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.gr1 === "no"
        },
        {
          key: "gr3",
          label:
            "Can you provide the Greek ancestor’s record(s) + the civil chain (apostilled/translated)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.gr1 === "no" && f.gr2 === "yes"
        }
      ]
    },

    Spain: {
      questions: [
        {
          key: "es1",
          label: "Was either parent a Spanish citizen at your birth?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "es2",
          label: "Was a grandparent Spanish by origin (born in Spain)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.es1 === "no"
        },
        {
          key: "es3",
          label:
            "Did that grandparent go into exile/lose or leave Spain due to Civil War/Francoism OR is your parent the child of a Spanish woman who lost nationality pre-1978 by marriage?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (Democratic Memory Law)" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.es1 === "no" && f.es2 === "yes"
        },
        {
          key: "es4",
          label:
            "Can you provide grandparent’s Spanish docs + civil chain + exile/loss evidence?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.es1 === "no" && f.es2 === "yes" && f.es3 === "yes"
        }
      ]
    },

    Portugal: {
      questions: [
        {
          key: "pt1",
          label: "Was either parent a Portuguese citizen at your birth?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "pt2",
          label:
            "Do you have at least one Portuguese grandparent (born in Portugal or otherwise a Portuguese citizen)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (grandchild route)" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.pt1 === "no"
        },
        {
          key: "pt3",
          label: "Do you have (or will you obtain) A2 Portuguese language proof?",
          type: "radio",
          options: [{ value: "yes", label: "Yes / Will obtain" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.pt1 === "no" && f.pt2 === "yes"
        },
        {
          key: "pt4",
          label:
            "Can you provide grandparent’s Portuguese proof + civil chain + police clearances (apostilled/translated)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.pt1 === "no" && f.pt2 === "yes"
        }
      ]
    },

    Lithuania: {
      questions: [
        {
          key: "lt1",
          label: "Do you have a parent, grandparent, or great-grandparent who held Lithuanian citizenship before 1940?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "lt2",
          label: "Did that ancestor leave Lithuania (or were they exiled) during the Soviet era (approximately 1940–1990)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.lt1 === "yes"
        },
        {
          key: "lt3",
          label: "Can you provide documents proving your ancestor’s Lithuanian citizenship and your family connection (birth/death certificates, etc.)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.lt2 === "yes"
        },
        {
          key: "lt4",
          label: "Have you legally resided in Lithuania for at least 10 years?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.lt1 === "no" || (f.lt1 === "yes" && (f.lt2 === "no" || f.lt3 === "no"))
        },
        {
          key: "lt5",
          label: "Have you demonstrated Lithuanian language proficiency and passed the citizenship exam (language and basics of Constitution)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.lt4 === "yes"
        }
      ]
    },

    Hungary: {
      questions: [
        // Gate question: is the chain unbroken (verification) or broken (simplified naturalization)?
        {
          key: "huA1",
          label: "Do you have a Hungarian ancestor — parent, grandparent, great-grandparent, or further — AND do you believe the chain of Hungarian citizenship passed unbroken from that ancestor to you (meaning no ancestor in the line formally naturalised in another country BEFORE the next generation in your line was born)?",
          hint: "Hungarian citizenship passes automatically by blood — even without a passport. If your grandparent was Hungarian and never formally naturalised abroad before your parent was born, your parent may also be a Hungarian citizen without knowing it. Simply emigrating does NOT break the chain — only formal foreign naturalisation before the next generation was born does. If the chain stayed fully intact all the way down to you, you may already BE a Hungarian citizen (no language test needed).",
          type: "radio",
          options: [
            { value: "yes", label: "Yes — I have a Hungarian ancestor and the chain appears unbroken" },
            { value: "no", label: "No — an ancestor formally naturalised abroad (chain is broken)" },
            { value: "unsure", label: "Unsure — ancestor emigrated but I don't know if they naturalised" }
          ],
          required: true
        },
        // Verification route — document the unbroken chain
        {
          key: "huA2",
          label: "Can you document the unbroken chain with birth and marriage certificates for each generation, plus evidence that no ancestor formally naturalised abroad before the next generation was born?",
          type: "radio",
          options: [
            { value: "yes", label: "Yes — documents available" },
            { value: "partial", label: "Partial — have some documents, still gathering" },
            { value: "no", label: "No" }
          ],
          required: true,
          showIf: f => f.huA1 === "yes" || f.huA1 === "unsure"
        },

        // Simplified naturalization — chain was broken
        {
          key: "huB1",
          label: "Do you have any ancestor — there is no generational limit — who was a Hungarian citizen or whose origin is documented from historical Hungarian territories (including areas now in Romania, Slovakia, Serbia, or Ukraine, which were part of Hungary before 1920)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.huA1 === "no"
        },
        {
          key: "huB2",
          label: "Can you demonstrate basic conversational Hungarian in a casual interview with a consular officer? (This is not a formal test — but genuine basic communication ability is assessed.)",
          type: "radio",
          options: [{ value: "yes", label: "Yes / Will learn" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.huA1 === "no" && f.huB1 === "yes"
        },
        {
          key: "huB3",
          label: "Can you provide civil chain documents and proof of the ancestor's Hungarian citizenship or origin (birth certificate, passport, registry record, church record, or archival record)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.huA1 === "no" && f.huB1 === "yes"
        },
        {
          key: "huB4",
          label: "Do you have a clean criminal record?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.huA1 === "no" && f.huB1 === "yes"
        }
      ]
    },
    France: {
      questions: [
        { key: "fr1", label: "Was at least one parent a French citizen at the time of your birth?", hint: "Your parent may have been a French citizen automatically by birth or descent — even if they never held a French passport and even if they didn't know it themselves. Answer 'Yes' if a parent was born in France, or was born abroad to a French parent.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "fr2", label: "Does your claim pass through a female ancestor who married a foreigner BEFORE 1973 — meaning she may have automatically lost French nationality?", type: "radio", options: [{ value: "yes", label: "Yes — lineage runs through a pre-1973 female immigrant" }, { value: "no", label: "No / Not applicable" }], required: true, showIf: f => f.fr1 === "yes" },
        { key: "fr3", label: "Can you provide birth and civil registration certificates for every link in the chain?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.fr1 === "yes" }
      ]
    },

    Romania: {
      questions: [
        { key: "ro1", label: "Was at least one parent a Romanian citizen at the time of your birth (standard jus sanguinis — no generational cap)?", hint: "Your parent may have been Romanian automatically — even if they never held a Romanian passport or lived in Romania. If a parent was born in Romania or had a Romanian parent themselves, they are very likely a Romanian citizen by descent. Answer 'Yes' even if your parent never knew about or claimed it.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "ro2", label: "Do you have a parent OR grandparent who was a Romanian citizen deprived of citizenship between 1940–1989 by Communist or wartime coercion (Article 11 repatriation route)?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.ro1 === "no" },
        { key: "ro3", label: "Can you document each generational link with birth and marriage certificates?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.ro1 === "yes" || f.ro2 === "yes" }
      ]
    },

    Croatia: {
      questions: [
        { key: "hr1", label: "Do you have ANY direct-line ancestor (parent, grandparent, great-grandparent, or further) who was a Croatian émigré or person of Croatian origin? Croatia's Article 11 has NO generational limit.", hint: "This question is about origin, not formal papers. If your great-grandmother emigrated from what is now Croatia (including historical territories like Dalmatia or Slavonia), that counts — regardless of whether anyone in the chain ever held a Croatian passport.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "hr2", label: "Can you document Croatian origin through birth records, Yugoslav-era identity documents, church records, or emigration records from Croatian territory?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.hr1 === "yes" }
      ]
    },

    Bulgaria: {
      questions: [
        { key: "bg1", label: "Was at least one parent OR grandparent OR great-grandparent a Bulgarian citizen? Bulgaria allows descent claims up to the 3rd generation (great-grandparent).", hint: "Your relative may have been a Bulgarian citizen without a Bulgarian passport — citizenship passes automatically. Answer 'Yes' if a parent, grandparent, or great-grandparent was born in Bulgaria or was Bulgarian by descent, even if they emigrated and never returned.", type: "radio", options: [{ value: "yes", label: "Yes — within 3 generations" }, { value: "no", label: "No — further back than great-grandparent" }], required: true },
        { key: "bg2", label: "Can you demonstrate Bulgarian ethnic origin through language, culture, or family records (ethnic Bulgarian pathway via DABA)?", type: "radio", options: [{ value: "yes", label: "Yes — can show ethnic Bulgarian origin" }, { value: "no", label: "No" }], required: true, showIf: f => f.bg1 === "no" },
        { key: "bg3", label: "Can you document the lineage with civil records?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.bg1 === "yes" || f.bg2 === "yes" }
      ]
    },

    Sweden: {
      questions: [
        { key: "se1", label: "Was at least one parent a Swedish citizen at the time of your birth?", hint: "A parent born in Sweden is a Swedish citizen automatically. A parent born abroad to a Swedish parent also acquired Swedish citizenship automatically — even without a Swedish passport. Answer 'Yes' if a parent had Swedish ancestry, as they very likely had Swedish citizenship whether or not they knew it.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "se2", label: "Were you born outside Sweden AND do you hold another citizenship AND have never been registered in Sweden?", type: "radio", options: [{ value: "yes", label: "Yes — all three apply" }, { value: "no", label: "No — at least one does not apply" }], required: true, showIf: f => f.se1 === "yes" },
        { key: "se3", label: "Have you either: (a) lived in Sweden for 2+ consecutive years, OR (b) notified the Swedish Tax Agency (Skatteverket) that you wish to retain citizenship — before age 22?", type: "radio", options: [{ value: "yes", label: "Yes — retention established" }, { value: "no", label: "No" }, { value: "under22", label: "Not yet — but I am under 22" }], required: true, showIf: f => f.se1 === "yes" && f.se2 === "yes" }
      ]
    },

    Denmark: {
      questions: [
        { key: "dk1", label: "Was at least one parent a Danish citizen at the time of your birth? (Since July 1, 2014, children of Danish parents acquire citizenship automatically regardless of birth location.)", hint: "A parent born in Denmark is Danish automatically. A parent born abroad to a Danish parent may also have been automatically Danish. Answer 'Yes' if a parent had Danish ancestry — they likely held Danish citizenship whether they knew it or not.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "dk2", label: "Were you born outside Denmark AND do you hold another citizenship AND have never been resident in Denmark?", type: "radio", options: [{ value: "yes", label: "Yes — all three apply" }, { value: "no", label: "No" }], required: true, showIf: f => f.dk1 === "yes" },
        { key: "dk3", label: "Have you applied to retain Danish citizenship (Section 8 of the Danish Nationality Act) — must be done between ages 18 and 22?", type: "radio", options: [{ value: "yes", label: "Yes — retention applied for" }, { value: "no", label: "No" }, { value: "under18", label: "Not yet — I am under 18" }], required: true, showIf: f => f.dk1 === "yes" && f.dk2 === "yes" }
      ]
    },

    Finland: {
      questions: [
        { key: "fi1", label: "Was at least one parent a Finnish citizen at the time of your birth? (For unmarried Finnish fathers, legal paternity must be established.)", hint: "Finnish citizenship passes automatically by descent. A parent born in Finland, or born abroad to a Finnish parent, is a Finnish citizen — even without a Finnish passport and even if they never registered it. Answer 'Yes' if a parent had Finnish roots.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "fi2", label: "Were you born outside Finland AND hold another citizenship AND have never been registered in a Finnish municipality?", type: "radio", options: [{ value: "yes", label: "Yes — all three apply" }, { value: "no", label: "No" }], required: true, showIf: f => f.fi1 === "yes" },
        { key: "fi3", label: "Have you filed a retention declaration with the Finnish Population Register Centre (Digi- ja väestötietovirasto) OR have you lived in Finland — before age 22? (Section 33 of the Nationality Act 359/2003.)", type: "radio", options: [{ value: "yes", label: "Yes — connection established before 22" }, { value: "no", label: "No" }, { value: "under22", label: "Not yet — but I am under 22" }], required: true, showIf: f => f.fi1 === "yes" && f.fi2 === "yes" }
      ]
    },

    Netherlands: {
      questions: [
        { key: "nl1", label: "Was at least one parent a Dutch citizen at the time of your birth? (Gender-equal transmission since 1985.)", hint: "A parent born in the Netherlands is Dutch automatically. A parent born abroad to a Dutch parent may also have Dutch citizenship by descent — even if they never applied for a passport. Answer 'Yes' if a parent was born in the Netherlands or had Dutch ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "nl2", label: "Was your Dutch parent born inside the Kingdom of the Netherlands (Netherlands, Aruba, Curaçao, or Sint Maarten), OR were they naturalized/registered in the Netherlands — OR was your birth registered at a Dutch consulate within one year?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No — Dutch parent was also born abroad to a Dutch parent" }], required: true, showIf: f => f.nl1 === "yes" },
        { key: "nl3", label: "Do you currently live OUTSIDE the EU and have you gone 10+ consecutive years without renewing your Dutch passport? (Article 15 of the Kingdom Act — this triggers automatic loss of Dutch citizenship for dual nationals outside the EU.)", type: "radio", options: [{ value: "yes", label: "Yes — this situation applies to me" }, { value: "no", label: "No — I live in the EU or have kept my passport current" }], required: true, showIf: f => f.nl1 === "yes" && f.nl2 === "yes" }
      ]
    },

    Belgium: {
      questions: [
        { key: "be1", label: "Was at least one parent a Belgian citizen at the time of your birth? (Gender-equal transmission since 1985.)", hint: "Belgian citizenship passes automatically by birth or descent. A parent born in Belgium is Belgian automatically. Answer 'Yes' if a parent was born in Belgium or had Belgian ancestry — they may well have been Belgian citizens even without a Belgian passport.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "be2", label: "Were you born outside Belgium AND hold another citizenship AND are NOT currently resident in Belgium?", type: "radio", options: [{ value: "yes", label: "Yes — all three apply" }, { value: "no", label: "No" }], required: true, showIf: f => f.be1 === "yes" },
        { key: "be3", label: "Have you filed a declaration of conservation with Belgian authorities (Article 22 §2 of the Belgian Nationality Code) — must be done between ages 18 and 28?", type: "radio", options: [{ value: "yes", label: "Yes — conservation declared" }, { value: "no", label: "No" }, { value: "under18", label: "Not yet — I am under 18" }], required: true, showIf: f => f.be1 === "yes" && f.be2 === "yes" }
      ]
    },

    Slovenia: {
      questions: [
        { key: "si1", label: "Was at least one parent a Slovenian citizen AND was their Slovenian citizenship formally registered?", hint: "Slovenia is unusual — citizenship here does depend on whether the ancestor formally registered it. If your parent or grandparent emigrated from Slovenia (or the former Yugoslav Republic of Slovenia) but never officially registered Slovenian citizenship, the automatic path may not apply. If unsure, answer 'No' and see the diaspora route.", type: "radio", options: [{ value: "yes", label: "Yes — parent's citizenship was registered" }, { value: "no", label: "No — or unsure if registered" }], required: true },
        { key: "si2", label: "Are you a descendant up to the 4th generation of a Slovenian diaspora member (Articles 19 and 40 of the ZDRS)? This route requires 1 year of residency in Slovenia but allows dual citizenship.", type: "radio", options: [{ value: "yes", label: "Yes — within 4 generations" }, { value: "no", label: "No" }], required: true, showIf: f => f.si1 === "no" },
        { key: "si3", label: "Are you willing and able to establish 1 year of residency in Slovenia for the diaspora route?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.si1 === "no" && f.si2 === "yes" }
      ]
    },

    Austria: {
      questions: [
        { key: "at1", label: "Was at least one parent an Austrian citizen at the time of your birth?", hint: "A parent born in Austria is likely a citizen automatically. Even if your parent never held an Austrian passport, they may have had Austrian citizenship by descent. Answer 'Yes' if a parent was born in Austria or had Austrian parentage.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "at2", label: "Do you have an ancestor who lost Austrian citizenship under the Nazi regime (1933–1945, including the 1938 Anschluss period) due to political, racial, religious, or military resistance grounds? (§58c StbG — the persecution pathway — permits dual citizenship and has no generational limit.)", type: "radio", options: [{ value: "yes", label: "Yes — Nazi persecution applies" }, { value: "no", label: "No" }], required: true, showIf: f => f.at1 === "no" },
        { key: "at3", label: "Are you prepared to renounce ALL other citizenships? Standard Austrian naturalization requires renunciation — Austria has among the strictest dual-citizenship rules in the EU for non-persecution cases.", type: "radio", options: [{ value: "yes", label: "Yes, willing to renounce all other nationalities" }, { value: "no", label: "No, want to retain existing citizenship(s)" }], required: true, showIf: f => f.at1 === "yes" }
      ]
    },

    Cyprus: {
      questions: [
        { key: "cy1", label: "Was at least one parent a Cypriot citizen at the time of your birth?", hint: "Cypriot citizenship passes automatically. A parent born in Cyprus is a Cypriot citizen — even without a Cypriot passport or ID. Answer 'Yes' if a parent was born in Cyprus or had Cypriot ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "cy2", label: "Is your claim through a grandparent (rather than parent)? Grandchild claims require a formal application demonstrating documented lineage.", type: "radio", options: [{ value: "yes", label: "Yes — claiming through grandparent" }, { value: "no", label: "No — claiming through parent" }], required: true, showIf: f => f.cy1 === "yes" },
        { key: "cy3", label: "Can you document the lineage with civil records?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.cy1 === "yes" }
      ]
    },

    Malta: {
      questions: [
        { key: "mt1", label: "Was at least one parent a Maltese citizen at the time of your birth?", hint: "A parent born in Malta is a Maltese citizen automatically — even if they emigrated and never held a Maltese passport. Answer 'Yes' if a parent was born in Malta or acquired Maltese citizenship.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "mt2", label: "Was your Maltese parent themselves born in Malta OR did they formally register/affirm their Maltese citizenship in their generation? (Each generation must have registered — automatic transmission does not silently pass for generations that never registered.)", type: "radio", options: [{ value: "yes", label: "Yes — parent was born in Malta or registered their citizenship" }, { value: "no", label: "No — parent was also born abroad and never registered" }], required: true, showIf: f => f.mt1 === "yes" },
        { key: "mt3", label: "Do you have a Maltese-born grandparent or great-grandparent (lineal ascendant pathway)?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.mt1 === "no" || (f.mt1 === "yes" && f.mt2 === "no") }
      ]
    },

    "United Kingdom": {
      questions: [
        { key: "gb1", label: "Was at least one parent a British citizen at the time of your birth?", hint: "A parent born in the UK is a British citizen automatically. A parent born abroad to a British parent may also have been British by descent — even without a UK passport. Answer 'Yes' if a parent was born in the UK or had British ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "gb2", label: "Was your British parent a citizen 'otherwise than by descent' — i.e., born in the UK, naturalised in the UK, or registered in the UK (not simply inheriting citizenship from their own parent born abroad)? This is the key test under Section 2 BNA 1981 — citizenship by descent does NOT automatically pass beyond one generation born abroad.", type: "radio", options: [{ value: "yes", label: "Yes — parent was born/naturalised/registered IN the UK" }, { value: "no", label: "No — parent was also a citizen by descent only (born abroad)" }], required: true, showIf: f => f.gb1 === "yes" },
        { key: "gb3", label: "If your parent was a citizen by descent only (born abroad), are you under 18? Children under 18 may apply to register under Section 3(2) or 3(5) BNA 1981 — grandchildren of British-born citizens.", type: "radio", options: [{ value: "yes", label: "Yes — I am under 18" }, { value: "no", label: "No — I am 18 or older" }], required: true, showIf: f => f.gb1 === "yes" && f.gb2 === "no" }
      ]
    },

    Ukraine: {
      questions: [
        { key: "ua1", label: "Was at least one parent a Ukrainian citizen at the time of your birth?", hint: "A parent born in Ukraine is a Ukrainian citizen automatically. This includes anyone born in the territory of Ukraine before or after 1991 independence. Answer 'Yes' if a parent was born in Ukraine, even if they emigrated and never held a Ukrainian passport.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "ua2", label: "If no parent was a Ukrainian citizen, were you OR a parent/grandparent born in Ukraine before 1991 (territorial origin pathway under Articles 9–10)?", type: "radio", options: [{ value: "yes", label: "Yes — territorial origin applies" }, { value: "no", label: "No" }], required: true, showIf: f => f.ua1 === "no" }
      ]
    },

    Norway: {
      questions: [
        { key: "no1", label: "Was at least one parent a Norwegian citizen at the time of your birth? (Dual citizenship permitted since January 1, 2020.)", hint: "Norwegian citizenship passes automatically by descent. A parent born in Norway is Norwegian — even without a passport. A parent born abroad to a Norwegian parent may also have been Norwegian automatically. Answer 'Yes' if a parent had Norwegian ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "no2", label: "Were you born outside Norway AND hold another citizenship AND have never been resident in Norway?", type: "radio", options: [{ value: "yes", label: "Yes — all three apply" }, { value: "no", label: "No" }], required: true, showIf: f => f.no1 === "yes" },
        { key: "no3", label: "Have you either: (a) lived in Norway for 2+ consecutive years, OR (b) applied to retain Norwegian citizenship before age 22 (Section 24 of the Nationality Act)?", type: "radio", options: [{ value: "yes", label: "Yes — retention established" }, { value: "no", label: "No" }, { value: "under22", label: "Not yet — but I am under 22" }], required: true, showIf: f => f.no1 === "yes" && f.no2 === "yes" }
      ]
    },

    Switzerland: {
      questions: [
        { key: "ch1", label: "Was at least one parent a Swiss citizen at the time of your birth? (For unmarried Swiss fathers, legal paternity must be established.)", hint: "Swiss citizenship is passed automatically by descent. A parent born in Switzerland, or born abroad to a Swiss parent, is a Swiss citizen — even without a Swiss passport. Answer 'Yes' if a parent had Swiss ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "ch2", label: "Were you born outside Switzerland AND hold another citizenship AND have NEVER resided in Switzerland?", type: "radio", options: [{ value: "yes", label: "Yes — all three apply" }, { value: "no", label: "No" }], required: true, showIf: f => f.ch1 === "yes" },
        { key: "ch3", label: "Have you filed a retention declaration with a Swiss consulate or cantonal authority before turning 25? (Article 8 BüG — Switzerland's loss cutoff is age 25, giving one more year than the Nordic age-22 rule.)", type: "radio", options: [{ value: "yes", label: "Yes — declaration filed" }, { value: "no", label: "No" }, { value: "under25", label: "Not yet — but I am under 25" }], required: true, showIf: f => f.ch1 === "yes" && f.ch2 === "yes" }
      ]
    },

    Iceland: {
      questions: [
        { key: "is1", label: "Was at least one parent an Icelandic citizen at the time of your birth? (For unmarried Icelandic fathers, paternity must be registered before the child turns 18.)", hint: "Icelandic citizenship passes automatically by descent. A parent born in Iceland or born to Icelandic parents is Icelandic — even without a passport. Answer 'Yes' if a parent had Icelandic ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "is2", label: "Were you born outside Iceland AND hold another citizenship?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.is1 === "yes" },
        { key: "is3", label: "Have you notified Þjóðskrá Íslands (Registers Iceland) that you wish to retain Icelandic citizenship before age 22? (Article 8 of the Nationality Act — failure to notify causes automatic loss.)", type: "radio", options: [{ value: "yes", label: "Yes — notification made" }, { value: "no", label: "No" }, { value: "under22", label: "Not yet — but I am under 22" }], required: true, showIf: f => f.is1 === "yes" && f.is2 === "yes" }
      ]
    },

    Serbia: {
      questions: [
        { key: "rs1", label: "Was at least one parent a Serbian citizen at the time of your birth?", hint: "Serbian citizenship passes automatically by descent. A parent born in Serbia (or the former Yugoslavia) is very likely a Serbian citizen — even without a Serbian passport. Answer 'Yes' if a parent had Serbian ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "rs2", label: "If you were born abroad and are under age 23, have you applied to have your citizenship formally registered? (Descendants under 23 born abroad may file an application under the Citizenship Law.)", type: "radio", options: [{ value: "yes", label: "Yes — registered, or not applicable (born in Serbia or over 23)" }, { value: "no", label: "No — born abroad and under 23, not yet registered" }], required: true, showIf: f => f.rs1 === "yes" }
      ]
    },

    Montenegro: {
      questions: [
        { key: "me1", label: "Was at least one parent a Montenegrin citizen at the time of your birth?", hint: "A parent born in Montenegro is a Montenegrin citizen automatically — even without a passport. Montenegro was part of Yugoslavia and later Serbia and Montenegro — ancestry from that territory counts. Answer 'Yes' if a parent had Montenegrin roots.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "me2", label: "IMPORTANT — Montenegro prohibits dual citizenship. Are you prepared to renounce ALL other citizenships? Acquiring Montenegrin citizenship requires renouncing all foreign nationalities, and Montenegrin citizens who acquire foreign citizenship automatically lose Montenegrin citizenship.", type: "radio", options: [{ value: "yes", label: "Yes, willing to renounce all other nationalities" }, { value: "no", label: "No, want to retain existing citizenship(s)" }], required: true, showIf: f => f.me1 === "yes" }
      ]
    },

    Albania: {
      questions: [
        { key: "al1", label: "Was at least one parent an Albanian citizen at the time of your birth?", hint: "Albanian citizenship passes automatically by descent. A parent born in Albania is an Albanian citizen — even if they emigrated and never held a current Albanian passport. Answer 'Yes' if a parent was born in Albania or had Albanian ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "al2", label: "If no Albanian citizen parent, do you have an Albanian grandparent? A documented Albanian grandparent qualifies you for the reduced 3-year residency naturalization route (vs 5 years standard).", type: "radio", options: [{ value: "yes", label: "Yes — Albanian grandparent" }, { value: "no", label: "No" }], required: true, showIf: f => f.al1 === "no" }
      ]
    },

    "Bosnia & Herzegovina": {
      questions: [
        { key: "ba1", label: "Were BOTH parents BiH citizens at the time of your birth?", hint: "A parent born in Bosnia & Herzegovina is a BiH citizen automatically — even without a BiH passport. Answer based on whether a parent was born there or had Bosnian ancestry, not just whether they hold a current document.", type: "radio", options: [{ value: "yes", label: "Yes — both parents are BiH citizens" }, { value: "no", label: "No — only one parent is a BiH citizen" }], required: true },
        { key: "ba2", label: "Were you born IN Bosnia and Herzegovina (while one parent is a BiH citizen)?", type: "radio", options: [{ value: "yes", label: "Yes — born in BiH" }, { value: "no", label: "No — born outside BiH" }], required: true, showIf: f => f.ba1 === "no" },
        { key: "ba3", label: "Are you currently stateless — meaning you hold NO other citizenship? (Under Article 7, the one-parent rule for those born outside BiH only applies if the child would otherwise be stateless.)", type: "radio", options: [{ value: "yes", label: "Yes — I am stateless / hold no other nationality" }, { value: "no", label: "No — I hold another citizenship" }], required: true, showIf: f => f.ba1 === "no" && f.ba2 === "no" }
      ]
    },

    "North Macedonia": {
      questions: [
        { key: "mk1", label: "Was at least one parent a North Macedonian citizen at the time of your birth?", hint: "A parent born in North Macedonia (or the former Yugoslav Republic of Macedonia) is a citizen automatically — even without a passport. Answer 'Yes' if a parent was born there or had Macedonian ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "mk2", label: "If born abroad and under age 23, have you filed an application to formally acquire citizenship? (Descent-born applicants abroad under 23 should file promptly under the Citizenship Law.)", type: "radio", options: [{ value: "yes", label: "Yes — applied/registered, or not under-23 concern" }, { value: "no", label: "No — born abroad and under 23, not yet filed" }], required: true, showIf: f => f.mk1 === "yes" }
      ]
    },

    Kosovo: {
      questions: [
        { key: "xk1", label: "Was at least one parent a Kosovo citizen at the time of your birth?", hint: "Kosovo declared independence in 2008. A parent born in Kosovo or with documented Kosovo Albanian or Kosovo heritage may automatically be a Kosovo citizen. Answer 'Yes' if a parent had Kosovo ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "xk2", label: "Are you aware that Kosovo is only partially internationally recognised (~100 of 193 UN members)? A Kosovo passport has restricted utility — for example, it is not recognised by Russia, China, Spain, or Serbia.", type: "radio", options: [{ value: "yes", label: "Yes, understood" }, { value: "no", label: "No, I was not aware" }], required: true, showIf: f => f.xk1 === "yes" }
      ]
    },

    Moldova: {
      questions: [
        { key: "md1", label: "Was at least one parent a Moldovan citizen at the time of your birth?", hint: "A parent born in Moldova is a Moldovan citizen automatically — even without a Moldovan passport. Moldova was part of the USSR as the Moldavian SSR until 1991. Answer 'Yes' if a parent was born in Moldova or had Moldovan ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "md2", label: "If no citizen parent, do you have a grandparent who was a Moldovan citizen (grandparent route may apply)?", type: "radio", options: [{ value: "yes", label: "Yes — Moldovan grandparent" }, { value: "no", label: "No" }], required: true, showIf: f => f.md1 === "no" },
        { key: "md3", label: "Are you of ethnic Moldovan/Romanian origin? If so, you may ALSO have a separate Romanian citizenship claim (separate from Moldovan CBD).", type: "radio", options: [{ value: "yes", label: "Yes — ethnic Moldovan / Romanian origin" }, { value: "no", label: "No" }], required: true, showIf: f => f.md1 === "yes" || f.md2 === "yes" }
      ]
    },

    Georgia: {
      questions: [
        { key: "ge1", label: "Was at least one parent a Georgian citizen at the time of your birth?", hint: "A parent born in Georgia (the country) is a Georgian citizen automatically — even without a Georgian passport. Georgia was part of the USSR until 1991. Answer 'Yes' if a parent was born in Georgia or had Georgian ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "ge2", label: "If no citizen parent, do you identify as ethnically Georgian (diaspora descendants, including Georgians who emigrated during Soviet era)? A Presidential decree ethnic Georgian pathway exists.", type: "radio", options: [{ value: "yes", label: "Yes — ethnically Georgian / diaspora" }, { value: "no", label: "No" }], required: true, showIf: f => f.ge1 === "no" },
        { key: "ge3", label: "Can you document your Georgian descent or ethnic identity (civil records, church records, Soviet-era documents)?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.ge1 === "yes" || f.ge2 === "yes" }
      ]
    },

    Armenia: {
      questions: [
        { key: "am1", label: "Was at least one parent an Armenian citizen at the time of your birth?", hint: "A parent born in Armenia is an Armenian citizen automatically — even without an Armenian passport. Armenia was part of the USSR until 1991. Answer 'Yes' if a parent was born in Armenia or had Armenian ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "am2", label: "If no citizen parent, are you of Armenian ethnic descent? This includes descendants of the 1915 Genocide survivors — the diaspora pathway (Presidential Decree No. 222-A) is specifically open to ethnic Armenians worldwide.", type: "radio", options: [{ value: "yes", label: "Yes — ethnic Armenian, including Genocide descendants" }, { value: "no", label: "No" }], required: true, showIf: f => f.am1 === "no" },
        { key: "am3", label: "Can you document Armenian descent — civil records, church records, diaspora community records, or Genocide survivor documentation?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.am1 === "yes" || f.am2 === "yes" }
      ]
    },

    Belarus: {
      questions: [
        { key: "by1", label: "Was at least one parent a Belarusian citizen at the time of your birth?", hint: "A parent born in Belarus is a Belarusian citizen automatically — even without a passport. Belarus was part of the USSR (Byelorussian SSR) until 1991. Answer 'Yes' if a parent was born in Belarus or had Belarusian ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "by2", label: "IMPORTANT — Belarus strictly prohibits dual citizenship (Law No. 136-Z). Belarusian citizens who acquire foreign citizenship automatically lose Belarusian citizenship. Have you considered the significant political and practical implications, including that a Belarusian passport currently carries EU/US/UK travel restrictions under international sanctions?", type: "radio", options: [{ value: "yes", label: "Yes, aware and prepared to renounce all other citizenships" }, { value: "no", label: "No, want to retain existing citizenship(s)" }], required: true, showIf: f => f.by1 === "yes" }
      ]
    },

    "San Marino": {
      questions: [
        { key: "sm1", label: "Was at least one parent a Sammarinese citizen at the time of your birth? (Historically patrilineal — recent 2024–2026 reforms are extending this to matrilineal descent. Confirm current eligibility with the Civil Status Office.)", hint: "San Marino is a tiny microstate; citizenship records are closely maintained. A parent with Sammarinese ancestry may well have been a citizen — even without a current Sammarinese ID. Answer 'Yes' if a parent was born in San Marino or had Sammarinese ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "sm2", label: "Can you provide the complete birth certificate chain back to the Sammarinese ancestor, plus marriage certificates at every generational link?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No / Unsure" }], required: true, showIf: f => f.sm1 === "yes" }
      ]
    },

    Monaco: {
      questions: [
        { key: "mc1", label: "Was at least one parent a Monégasque (Monaco) citizen at the time of your birth?", hint: "Monaco citizenship is extremely rare (~10,000 people). A parent born in Monaco is a Monégasque citizen automatically. Answer 'Yes' only if a parent was specifically a Monaco national.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "mc2", label: "CRITICAL — Monaco absolutely prohibits dual citizenship (Monégasque Nationality Code). A Monégasque citizen who acquires foreign nationality automatically loses Monaco citizenship. Are you prepared to renounce ALL other nationalities?", type: "radio", options: [{ value: "yes", label: "Yes — willing to renounce all other nationalities (rare commitment given Monaco's ~10,000 citizens)" }, { value: "no", label: "No — want to retain existing citizenship(s)" }], required: true, showIf: f => f.mc1 === "yes" }
      ]
    },

    Liechtenstein: {
      questions: [
        { key: "li1", label: "Was at least one parent a Liechtenstein citizen at the time of your birth?", hint: "Liechtenstein is a tiny principality; citizenship is relatively rare. A parent born in Liechtenstein is a Liechtenstein citizen automatically — even without a Liechtenstein passport. Answer 'Yes' if a parent was born there or had Liechtenstein ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "li2", label: "Note: dual citizenship IS permitted for citizenship acquired by descent (CBD). It is NOT permitted for naturalization (which requires 30 years of residency). Can you document the descent with civil records?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.li1 === "yes" }
      ]
    },

    Andorra: {
      questions: [
        { key: "ad1", label: "Was at least one parent an Andorran citizen?", hint: "Andorran citizenship is rare. A parent born in Andorra is a citizen automatically — even without current documentation. Answer 'Yes' if a parent was born in Andorra or had Andorran ancestry.", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true },
        { key: "ad2", label: "IMPORTANT — Andorra does NOT permit dual citizenship. You must renounce your other citizenship(s) to acquire Andorran citizenship. Are you prepared to do this?", type: "radio", options: [{ value: "yes", label: "Yes — willing to renounce other citizenship(s)" }, { value: "no", label: "No — want to retain existing citizenship" }], required: true, showIf: f => f.ad1 === "yes" },
        { key: "ad3", label: "Can you document the descent with civil records from Andorran authorities?", type: "radio", options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }], required: true, showIf: f => f.ad1 === "yes" && f.ad2 === "yes" }
      ]
    }
  };

  // ------- helpers to compute visible keys & unify validation -------
  const visibleQuestions = (country: string, state = form) => {
    const all = countryQuestions[country]?.questions ?? [];
    return all.filter((q: Q) => (q.showIf ? q.showIf(state) : true));
  };

  const allKeysForCountry = (country: string) =>
    (countryQuestions[country]?.questions ?? []).map(q => q.key);

  const missingRequiredForCountry = (country: string, state = form) => {
    if (!country) return [];
    const visible = visibleQuestions(country, state);
    const missing = visible
      .filter(q => q.required)
      .filter(q => !state[q.key]); // empty string means unanswered
    return missing.map(q => q.key);
  };

  const isFormComplete = useMemo(() => {
    if (!form.country || !form.ancestor) return false;
    return missingRequiredForCountry(form.country).length === 0;
  }, [form]);

  // Auto-clear hidden answers whenever an input changes or country/ancestor changes.
  function handleChange(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev: any) => {
      const next = { ...prev, [name]: value };

      // After updating, clear all answers for questions that are not currently visible
      // in the *current* country.
      const c = next.country;
      if (c) {
        const visibleNow = new Set(visibleQuestions(c, next).map(q => q.key));
        const allKeys = allKeysForCountry(c);
        for (const k of allKeys) {
          if (!visibleNow.has(k)) {
            next[k] = ""; // clear hidden field to avoid stale values
          }
        }
      }
      return next;
    });
  }

  // ---------- decision engine ----------
  function checkEligibility() {
    // Estonia
    if (form.country === "Estonia") {
      if (form.ee1 === "yes" && form.ee2 === "yes") return "Eligible for Estonian citizenship by restoration of descent (Citizenship Act § 5). Estonia grants citizenship to persons whose parent, grandparent, or great-grandparent was an Estonian citizen before the Soviet occupation on June 16, 1940. Dual citizenship is permitted in this specific restoration context. Apply through a Estonian embassy, consulate, or the Police and Border Guard Board (PPA) in Estonia. Documents required: the ancestor's Estonian citizenship records (from the National Archives of Estonia — ERA) plus the civil certificate chain to you.";
      if (form.ee1 === "yes" && form.ee2 === "no") return "Potentially eligible for Estonian citizenship by descent — but you need to gather documents. Key records: the ancestor's Estonian pre-1940 citizenship documentation (Estonian National Archives — ERR/ERA), and birth/marriage certificates for each generation from them to you. Contact the Estonian Embassy once documentation is assembled.";
      return "Not eligible for Estonian citizenship by descent. The Estonian restoration route requires a pre-1940 citizen ancestor within three generations.";
    }

    // Latvia
    if (form.country === "Latvia") {
      if (form.lv1 === "yes" && form.lv2 === "yes") return "Eligible for Latvian citizenship by registration (Section 3 of the Citizenship Law). Latvia grants citizenship to persons whose parent, grandparent, or great-grandparent was a Latvian citizen on June 17, 1940 (date of Soviet occupation). Dual citizenship is permitted for this restoration pathway. Apply at a Latvian consulate or the Office of Citizenship and Migration Affairs (OCMA). Key documents: the ancestor's pre-1940 Latvian citizenship evidence (Latvian State Historical Archives — LVVA) and civil certificates for each generation.";
      if (form.lv1 === "yes" && form.lv2 === "no") return "Potentially eligible for Latvian citizenship by descent — gather documents. Key records: the ancestor's Latvian pre-1940 citizenship documentation (from LVVA — Latvijas Valsts vēstures arhīvs) and birth/marriage certificates for each generation. Contact the Latvian Embassy once documentation is ready.";
      return "Not eligible for Latvian citizenship by descent. The Latvian restoration route requires a pre-occupation (June 17, 1940) citizen ancestor within three generations.";
    }

    // Czech Republic
    if (form.country === "CzechRepublic") {
      if (form.cz1 === "Yes" && form.cz3 === "No") {
        return "✅ Eligible for Czech citizenship by descent via parent.";
      } else if (form.cz2 === "Yes" && form.cz3 === "No") {
        return "✅ Eligible for Czech citizenship by declaration via grandparent.";
      } else if ((form.cz1 === "Yes" || form.cz2 === "Yes") && form.cz3 === "Yes") {
        if (form.cz4 === "Yes") {
          return "✅ You qualify for Czech permanent residency as a person of Czech origin.";
        } else {
          return "❌ Not eligible: ancestry lost Czech citizenship under disqualifying historical laws, and you do not qualify for permanent residency.";
        }
      } else {
        if (form.cz4 === "Yes") {
          return "✅ You qualify for Czech permanent residency as a person of Czech origin.";
        } else {
          return "❌ Not eligible for Czech citizenship or permanent residency by origin.";
        }
      }
    }

    // Slovakia
    if (form.country === "Slovakia") {
      if (form.sk1 === "yes" && form.sk2 === "yes") return "Potentially eligible for Slovak citizenship by descent (Act No. 40/1993 Coll.). IMPORTANT: Slovakia has strict dual citizenship rules. A Slovak citizen who voluntarily acquires foreign citizenship automatically loses Slovak citizenship (Section 7(1)(b)). A 2022 amendment added exceptions — you do NOT lose Slovak citizenship if the foreign citizenship was acquired by birth, marriage, adoption, or after 5 years of registered foreign residence. Carefully assess this trade-off before applying. Apply through the Slovak Embassy or Ministry of Interior (Ministerstvo vnútra SR).";
      return "Not eligible for Slovak citizenship by descent.";
    }

    // Luxembourg
    if (form.country === "Luxembourg") {
      if (form.lu1 === "Yes") {
        return "✅ Eligible for Luxembourg citizenship via parent or grandparent (Article 23)";
      } else if (form.lu2 === "Yes" && form.lu3 === "Yes") {
        return "✅ Eligible for Luxembourg citizenship via maternal all-male lineage (Article 7)";
      } else if (form.lu2 === "Yes" && form.lu3 === "No") {
        return "✅ Eligible for Luxembourg citizenship via paternal lineage (Article 7)";
      } else {
        return "❌ Not eligible for Luxembourg citizenship by descent.";
      }
    }
    if (!form.country || !form.ancestor) return "Please fill out all required fields.";

    // Single source of truth for “unanswered”
    const missing = missingRequiredForCountry(form.country);
    if (missing.length > 0) {
      return "Please answer all ancestry questions.";
    }

    // Hungary
    if (form.country === "Hungary") {
      // Path A – Citizenship by Verification (állampolgárság igazolása) — unbroken chain, NO language test
      if (form.huA1 === "yes") {
        if (form.huA2 === "yes") return "You may already BE a Hungarian citizen by operation of law under the citizenship by verification route (állampolgárság igazolása / megállapítása, Section 11 of Act LV of 1993). No language test is required — you are not applying for new citizenship, you are confirming existing citizenship. Apply through a Hungarian consulate, providing the birth and marriage certificate chain and evidence the chain remained unbroken. Dual citizenship is fully permitted.";
        if (form.huA2 === "partial") return "Potentially eligible for Hungarian citizenship by verification (no language test required) — but you need to complete your documentary evidence. Key documents to find: birth certificates for each generation, marriage certificates, and proof that no ancestor formally naturalised abroad before the next generation was born. Contact the Hungarian National Archives (MNL) and relevant local archives. Once documentation is complete, apply through a Hungarian consulate.";
        if (form.huA2 === "no") return "Potentially eligible for Hungarian citizenship by verification, but documentation is needed. Start by gathering birth and marriage certificates for each generation, and research whether any ancestor formally naturalised abroad (and if so, when — if after your parent was born, the chain may still be intact). The Hungarian National Archives (MNL) and FamilySearch can help. If the verification route cannot be established, the simplified naturalization route (which does require a language interview) is still available.";
      }
      if (form.huA1 === "unsure") {
        if (form.huA2 === "yes") return "You may be eligible for Hungarian citizenship by verification (no language test), but you need to confirm whether the chain is truly unbroken. Research whether any ancestor formally naturalised abroad — and if so, whether it happened before or after the next generation was born. If the chain is intact, use the verification route (Section 11, Act LV of 1993). If it was broken, you still qualify for simplified naturalization with a basic Hungarian language interview. Contact a Hungarian consulate to assess your specific chain.";
        return "Your situation needs more research. Determine whether any ancestor formally naturalised outside Hungary, and if so, when. If the chain is unbroken, you may already be a Hungarian citizen (no language test needed). If it was broken, simplified naturalization is still available — no generational limit, but a basic Hungarian language interview is required. Contact the Hungarian consulate and begin document gathering.";
      }
      // Path B – Simplified Naturalization (kedvezményes honosítás) — chain broken, language interview required
      if (form.huA1 === "no") {
        if (form.huB1 === "yes" && form.huB3 === "yes" && form.huB4 === "yes") {
          if (form.huB2 === "yes") return "Eligible for Hungarian citizenship via simplified naturalization (kedvezményes honosítás). No residency in Hungary required. The language interview is a casual conversation — not a formal test — but genuine basic conversational ability is assessed. Apply through a Hungarian consulate. Dual citizenship is fully permitted. Processing typically takes 3–6 months after the interview.";
          if (form.huB2 === "no") return "You have Hungarian ancestry and the documentation, but need basic conversational Hungarian to use the simplified naturalization route. Once you reach a conversational level (many applicants use tutors or apps over 3–6 months of preparation), you will be eligible. No residency in Hungary required — just the ancestry, language, clean record, and documents.";
        }
        if (form.huB1 === "no") return "Not eligible for Hungarian citizenship by descent or simplified naturalization. Hungarian ancestry — or ancestry from historical Hungarian territories — is required for both routes.";
      }
      return "Not eligible for Hungarian citizenship by descent/ancestry based on the information provided.";
    }

    // Germany — parent/remedies/restoration
    if (form.country === "Germany") {
      if (form.de1 === "yes") {
        if (form.de4 === "no") return "Potentially not eligible — under § 4(4) StAG, if your German parent was also born abroad after 1999 and your birth was not registered at a German mission within one year, automatic transmission of citizenship does not apply. However, if you are under 23, late registration may still be possible. Contact the German Embassy immediately to assess your options.";
        return "Eligible for German citizenship by descent (§ 4(1) StAG — citizenship passes via a German parent). Dual citizenship is fully permitted since the June 2024 reform. Apply for recognition at the German Embassy or consulate in your country of residence.";
      }
      if (form.de1 === "no") {
        if (form.de2 === "yes") return "Eligible for German citizenship via the declaration remedy — this covers historical gender or legitimacy-based exclusions (German mother before 1 Jan 1975, or out-of-wedlock to German father before 1 July 1993). Dual citizenship permitted. Contact the German Embassy.";
        if (form.de3 === "yes") return "Eligible for German citizenship restoration under Article 116(2) of the Basic Law — for descendants of persecuted persons who lost German citizenship under National Socialism (1933–1945). No generational limit, dual citizenship fully permitted. Contact the German Embassy or Federal Administration Office (Bundesverwaltungsamt).";
        return "Not eligible for German citizenship by descent or via the historical remedies based on the information provided.";
      }
    }

    // Italy — jure sanguinis
    if (form.country === "Italy") {
      if (form.it1 === "yes") return "You are eligible for Italian citizenship by descent (recognition via parent).";
      if (form.it2 === "yes" && form.it3 === "no" && form.it5 === "yes") {
        return form.it4 === "yes"
          ? "Eligible for Italian citizenship by descent, but the 1948 rule applies (court route)."
          : "Eligible for Italian citizenship by descent (standard recognition).";
      }
      if (form.it2 === "no" || form.it3 === "yes" || form.it5 === "no") return "Not eligible for Italian citizenship by descent (lineage/documents).";
      return "Not eligible for Italian citizenship by descent.";
    }

    // Ireland — parent | FBR
    if (form.country === "Ireland") {
      if (form.ie1 === "yes") return "Eligible for Irish citizenship by birth/parentage (register if needed).";
      if (form.ie2 === "yes" && form.ie3 === "yes") return "Eligible for Irish citizenship via the Foreign Births Register.";
      return "Not eligible for Irish citizenship by descent.";
    }

    // Poland — confirmation with intact chain
    if (form.country === "Poland") {
      if (form.pl1 === "yes") return "Eligible for Polish citizenship (confirmation via voivode).";
      if (form.pl2 === "yes" && form.pl3 !== "yes" && form.pl4 === "yes") return "Eligible for Polish citizenship (confirmation by descent).";
      if (form.pl2 === "no" || form.pl3 === "yes" || form.pl4 === "no") return "Not eligible for Polish citizenship by descent (consider Karta Polaka if ethnically Polish).";
      return "Not eligible for Polish citizenship by descent.";
    }

    // Greece — parent | Greek-origin naturalization
    if (form.country === "Greece") {
      if (form.gr1 === "yes") return "Eligible for Greek citizenship by descent (recognition via parent).";
      if (form.gr1 === "no" && form.gr2 === "yes" && form.gr3 === "yes") return "Eligible for Greek citizenship via Greek-origin naturalization (consular process).";
      return "Not eligible for Greek citizenship by descent.";
    }

    // Spain — parent | DML grandchildren/exile
    if (form.country === "Spain") {
      if (form.es1 === "yes") return "Eligible for Spanish citizenship by origin (parent).";
      if (form.es2 === "yes" && form.es3 === "yes" && form.es4 === "yes") return "Eligible for Spanish citizenship under the Democratic Memory Law (grandchildren/exile category).";
      return "Not eligible for Spanish citizenship by descent (consider 1-year residency if you have a Spanish grandparent).";
    }

    // Portugal — parent | grandchild + A2
    if (form.country === "Portugal") {
      if (form.pt1 === "yes") return "Eligible for Portuguese citizenship (registration as child).";
      if (form.pt2 === "yes" && form.pt3 === "yes" && form.pt4 === "yes") return "Eligible for Portuguese citizenship via the grandchild route (A2 language).";
      if (form.pt2 === "yes" && form.pt3 === "no") return "Not eligible now. You will be eligible once you obtain A2 Portuguese.";
      return "Not eligible for Portuguese citizenship by descent.";
    }

    // Lithuania — restoration or residency-based naturalization
    if (form.country === "Lithuania") {
      if (form.lt1 === "yes" && form.lt2 === "yes" && form.lt3 === "yes")
        return "Eligible for Lithuanian citizenship by reinstatement (descent).";
      if (form.lt4 === "yes" && form.lt5 === "yes")
        return "Eligible for Lithuanian citizenship via naturalization (10-year residency + language exam).";
      if (form.lt4 === "yes" && form.lt5 === "no")
        return "Not eligible yet. You will be eligible once you pass the language and Constitution exam.";
      return "Not eligible for Lithuanian citizenship by descent or naturalization.";
    }

    // France
    // France
    if (form.country === "France") {
      if (form.fr1 === "no") return "Not eligible for French citizenship by descent.";
      if (form.fr1 === "yes" && form.fr2 === "yes") return "⚠️ Chain potentially broken — French women who married foreigners before 1973 automatically lost French nationality under old law, which can sever the descent chain. Contact the French consulate (Service de la nationalité) to assess whether the chain survives despite this rule.";
      if (form.fr1 === "yes" && form.fr2 === "no" && form.fr3 === "yes") return "Eligible for French citizenship by descent (Article 18 of the Civil Code). There is no generational limit and dual citizenship is fully permitted. You will need a complete chain of birth and civil registration certificates.";
      if (form.fr1 === "yes" && form.fr2 === "no" && form.fr3 === "no") return "Potentially eligible, but you will need to gather the documentary evidence. Contact the French consulate once documentation is complete.";
      return "Consult the French consulate for your specific situation.";
    }

    // Romania
    if (form.country === "Romania") {
      if (form.ro1 === "no" && form.ro2 === "no") return "Not eligible for Romanian citizenship by descent. Romania's standard route requires a Romanian citizen parent, and the Article 11 repatriation route requires an ancestor whose citizenship was coercively removed in 1940–1989.";
      if (form.ro1 === "yes" && form.ro3 === "yes") return "Eligible for Romanian citizenship by descent (Law 21/1991, standard jus sanguinis). There is no generational cap. Dual citizenship is permitted. You will need civil records for each generational link.";
      if (form.ro1 === "no" && form.ro2 === "yes" && form.ro3 === "yes") return "Eligible via the Article 11 repatriation route — descendants (children and grandchildren) of Romanians denaturalised by Communist or wartime coercion between 1940 and 1989 may reclaim Romanian citizenship. No residency requirement, no language test. Dual citizenship permitted. Consult the Romanian National Authority for Citizenship (ANC).";
      if ((form.ro1 === "yes" || form.ro2 === "yes") && form.ro3 === "no") return "Potentially eligible, but you will need documentary evidence. Gather birth and marriage certificates for each link in the chain, then contact the Romanian consulate.";
      return "Consult the Romanian consulate or ANC for your specific situation.";
    }

    // Croatia
    if (form.country === "Croatia") {
      if (form.hr1 === "no") return "Not eligible for Croatian citizenship by descent.";
      if (form.hr1 === "yes" && form.hr2 === "yes") return "Eligible for Croatian citizenship by descent under Article 11 of the Croatian Citizenship Act. Croatia has NO generational limit — any documented descendant of a Croatian émigré qualifies regardless of how many generations have passed. Dual citizenship is fully permitted. Key documents: birth certificates, marriage certificates, and evidence of Croatian origin (Yugoslav-era ID, church records, emigration records).";
      if (form.hr1 === "yes" && form.hr2 === "no") return "Potentially eligible — Croatia has no generational limit — but you will need to locate documentary evidence of Croatian origin. Croatian church records and Yugoslav civil registry records are held by parish offices and state archives. Contact the Croatian Ministry of the Interior (MUP).";
      return "Consult the Croatian consulate for your specific situation.";
    }

    // Bulgaria
    if (form.country === "Bulgaria") {
      if (form.bg1 === "no" && form.bg2 === "no") return "Not eligible for Bulgarian citizenship. Standard descent is limited to the 3rd generation (great-grandparent), and you do not qualify for the ethnic Bulgarian pathway.";
      if (form.bg1 === "yes" && form.bg3 === "yes") return "Eligible for Bulgarian citizenship by descent (Article 8, Bulgarian Citizenship Act). Claims are accepted up to the 3rd generation (great-grandparent). Dual citizenship is permitted. Gather civil records for each generational link.";
      if (form.bg1 === "yes" && form.bg3 === "no") return "Potentially eligible — you have a Bulgarian ancestor within 3 generations. Gather civil records and contact the Bulgarian State Agency for Bulgarians Abroad (DABA) or the Bulgarian Ministry of Justice.";
      if (form.bg1 === "no" && form.bg2 === "yes" && form.bg3 === "yes") return "Potentially eligible via the ethnic Bulgarian pathway (Article 15 of the Bulgarian Citizenship Act and DABA — State Agency for Bulgarians Abroad). You may qualify by demonstrating Bulgarian ethnic identity through language, cultural ties, and family records, even beyond the 3rd generation. This is a discretionary application process — contact DABA directly.";
      if (form.bg1 === "no" && form.bg2 === "yes" && form.bg3 === "no") return "Potentially eligible via the ethnic pathway — but you need documentary evidence of Bulgarian ethnic origin. Contact DABA (State Agency for Bulgarians Abroad) for guidance.";
      return "Consult the Bulgarian consulate for your specific situation.";
    }

    // Sweden
    if (form.country === "Sweden") {
      if (form.se1 === "no") return "Not eligible for Swedish citizenship by descent.";
      if (form.se1 === "yes" && form.se2 === "no") return "Eligible for Swedish citizenship by descent (Lag 2001:82 om svenskt medborgarskap). Dual citizenship has been fully permitted since 2001.";
      if (form.se1 === "yes" && form.se2 === "yes" && form.se3 === "yes") return "Eligible for Swedish citizenship by descent — retention of citizenship is established. Dual citizenship is permitted.";
      if (form.se1 === "yes" && form.se2 === "yes" && form.se3 === "under22") return "You are still within the window to act. Under Section 14 of the Swedish Nationality Act, born-abroad dual nationals must establish a genuine connection before age 22: either 2+ consecutive years of residence in Sweden, or notifying the Swedish Tax Agency (Skatteverket). Act immediately — do not wait.";
      if (form.se1 === "yes" && form.se2 === "yes" && form.se3 === "no") return "⚠️ Swedish citizenship may have lapsed under the age-22 loss rule. If you have already turned 22 without establishing residency in Sweden or filing a retention declaration, citizenship was automatically lost at 22. Contact the Swedish Tax Agency (Skatteverket) or Swedish consulate to determine current status.";
      return "Consult the Swedish consulate for your specific situation.";
    }

    // Denmark
    if (form.country === "Denmark") {
      if (form.dk1 === "no") return "Not eligible for Danish citizenship by descent.";
      if (form.dk1 === "yes" && form.dk2 === "no") return "Eligible for Danish citizenship by descent. Dual citizenship has been permitted since September 1, 2015.";
      if (form.dk1 === "yes" && form.dk2 === "yes" && form.dk3 === "yes") return "Eligible for Danish citizenship by descent — retention is established. Dual citizenship is permitted.";
      if (form.dk1 === "yes" && form.dk2 === "yes" && form.dk3 === "under18") return "You are under 18, so the retention window (ages 18–22) has not yet opened. When you turn 18, you must apply to retain Danish citizenship before turning 22 under Section 8 of the Danish Nationality Act. Mark this date in your calendar — missing the window causes automatic loss.";
      if (form.dk1 === "yes" && form.dk2 === "yes" && form.dk3 === "no") return "⚠️ Danish citizenship may have lapsed. Under Section 8 of the Danish Nationality Act, born-abroad dual nationals who have never been resident in Denmark and did not apply to retain citizenship between ages 18 and 22 lose citizenship automatically. Contact the Danish Agency for International Recruitment and Integration (SIRI) to determine current status.";
      return "Consult the Danish consulate for your specific situation.";
    }

    // Finland
    if (form.country === "Finland") {
      if (form.fi1 === "no") return "Not eligible for Finnish citizenship by descent.";
      if (form.fi1 === "yes" && form.fi2 === "no") return "Eligible for Finnish citizenship by descent (Nationality Act 359/2003). Dual citizenship has been permitted since 2003.";
      if (form.fi1 === "yes" && form.fi2 === "yes" && form.fi3 === "yes") return "Eligible for Finnish citizenship by descent — connection to Finland established, retention satisfied. Dual citizenship is permitted.";
      if (form.fi1 === "yes" && form.fi2 === "yes" && form.fi3 === "under22") return "You are still within the window to act. Under Section 33 of the Finnish Nationality Act, born-abroad dual nationals must file a retention declaration with the Finnish Digital and Population Data Services Agency (DVV) before age 22. Act immediately.";
      if (form.fi1 === "yes" && form.fi2 === "yes" && form.fi3 === "no") return "⚠️ Finnish citizenship may have been automatically lost at age 22 under Section 33 of the Nationality Act. Contact the Finnish Digital and Population Data Services Agency (DVV) or a Finnish consulate to determine current status.";
      return "Consult the Finnish consulate for your specific situation.";
    }

    // Netherlands
    if (form.country === "Netherlands") {
      if (form.nl1 === "no") return "Not eligible for Dutch citizenship by descent.";
      if (form.nl1 === "yes" && form.nl2 === "no") return "Likely subject to the Option procedure — where a Dutch parent was also born abroad and Dutch citizenship was passed down through them, the automatic transmission rules may require an Option declaration rather than automatic acquisition. This applies particularly to pre-1985 maternal lineages. Consult the Dutch Immigration and Naturalisation Service (IND) or a Dutch consulate.";
      if (form.nl1 === "yes" && form.nl2 === "yes" && form.nl3 === "yes") return "⚠️ Important warning — eligible by descent, BUT your Dutch citizenship may have lapsed under Article 15 of the Kingdom Act on Netherlands Nationality. Dutch dual nationals who live outside the EU for 10+ consecutive years without renewing their Dutch passport automatically lose Dutch citizenship. If this applies, contact the IND or Dutch consulate immediately, as there may be reinstatement options in limited circumstances.";
      if (form.nl1 === "yes" && form.nl2 === "yes" && form.nl3 === "no") return "Eligible for Dutch citizenship by descent. Dual citizenship rules for the Netherlands are complex — while permitted in certain circumstances, the Netherlands discourages dual nationality for naturalization. For descent-based citizenship, dual is generally accepted. Keep your Dutch passport renewed every 10 years if you live outside the EU to avoid the Article 15 loss rule.";
      return "Consult the Dutch consulate (IND) for your specific situation.";
    }

    // Belgium
    if (form.country === "Belgium") {
      if (form.be1 === "no") return "Not eligible for Belgian citizenship by descent.";
      if (form.be1 === "yes" && form.be2 === "no") return "Eligible for Belgian citizenship by descent. Dual citizenship has been permitted since April 28, 2008.";
      if (form.be1 === "yes" && form.be2 === "yes" && form.be3 === "yes") return "Eligible for Belgian citizenship by descent — conservation of citizenship declared. Dual citizenship is permitted.";
      if (form.be1 === "yes" && form.be2 === "yes" && form.be3 === "under18") return "You are under 18. Under Article 22 §2 of the Belgian Nationality Code, born-abroad dual nationals must file a conservation declaration between ages 18 and 28. Note: Belgium's cutoff is age 28 (not 22 like Nordic countries). When you turn 18, file the declaration — you have until age 28.";
      if (form.be1 === "yes" && form.be2 === "yes" && form.be3 === "no") return "⚠️ Belgian citizenship may have lapsed under Article 22 §2 of the Belgian Nationality Code. Born-abroad dual nationals who are not resident in Belgium must file a conservation declaration between ages 18–28 or Belgian citizenship is automatically lost. If you are already over 28 without having filed, contact the Belgian consulate — restoration may be possible in limited circumstances.";
      return "Consult the Belgian consulate for your specific situation.";
    }

    // Slovenia
    if (form.country === "Slovenia") {
      if (form.si1 === "yes") return "Eligible for Slovenian citizenship by descent via the standard registered descent route (Article 14 ZDRS). Dual citizenship is permitted for this route. Contact the Slovenian Administrative Unit (upravna enota) where your ancestor was registered, or the Slovenian consulate.";
      if (form.si1 === "no" && form.si2 === "no") return "Not eligible for Slovenian citizenship by descent. The standard route requires a formally registered Slovenian citizen parent, and the diaspora route requires ancestry within 4 generations.";
      if (form.si1 === "no" && form.si2 === "yes" && form.si3 === "yes") return "Potentially eligible via the Slovenian diaspora route (Articles 19 and 40 ZDRS — up to 4th generation of diaspora members). This route requires 1 year of residency in Slovenia and allows dual citizenship. Contact the Slovenian Ministry of the Interior or a Slovenian consulate.";
      if (form.si1 === "no" && form.si2 === "yes" && form.si3 === "no") return "Potentially eligible via the 'active ties' route — descendants of Slovenian diaspora members can sometimes demonstrate sufficient economic or cultural connection to Slovenia without establishing full residency. This is a discretionary route. Consult the Slovenian Ministry of the Interior for your specific situation.";
      return "Consult the Slovenian consulate for your specific situation.";
    }

    // Austria
    if (form.country === "Austria") {
      if (form.at1 === "no" && form.at2 === "no") return "Not eligible for Austrian citizenship. The standard route requires a citizen parent, and the §58c persecution pathway requires an ancestor who lost citizenship under Nazi persecution between 1933–1945.";
      if (form.at1 === "no" && form.at2 === "yes") return "Potentially eligible under §58c of the Austrian Citizenship Act (StbG) — the Nazi persecution pathway. Descendants of Austrians who were stripped of citizenship or forced to flee due to Nazi persecution between 1933–1945 (including political, racial, religious, and military resistance grounds) may reclaim Austrian citizenship with NO generational limit and dual citizenship fully permitted. Contact the Austrian Embassy or the relevant Austrian state authority (Landeshauptmann). Expanded eligibility since September 2020 now includes political and military resistance, not just racial persecution.";
      if (form.at1 === "yes" && form.at2 === "yes") return "Eligible under §58c of the Austrian Citizenship Act (StbG) — the Nazi persecution pathway. Dual citizenship is fully permitted under this route, no generational limit applies. Contact the Austrian Embassy — do NOT apply under the standard route which would require renunciation.";
      if (form.at1 === "yes" && form.at2 === "no" && form.at3 === "yes") return "Potentially eligible for Austrian citizenship by standard descent (§1 StbG) — but Austria does NOT permit dual citizenship for standard cases. You will be required to renounce all other nationalities. Contact the Austrian consulate to begin the process.";
      if (form.at1 === "yes" && form.at2 === "no" && form.at3 === "no") return "Not eligible — Austrian standard citizenship descent requires renunciation of all other nationalities. Since you are unwilling to renounce, this route is not available. Note: if any ancestor fled Austria due to Nazi persecution (1933–1945), ask about the §58c pathway, which allows dual citizenship.";
      return "Consult the Austrian consulate for your specific situation.";
    }

    // Cyprus
    if (form.country === "Cyprus") {
      if (form.cy1 === "no") return "Not eligible for Cypriot citizenship by descent.";
      if (form.cy1 === "yes" && form.cy2 === "no" && form.cy3 === "yes") return "Eligible for Cypriot citizenship by descent through a citizen parent. Dual citizenship is fully permitted. Apply through the Civil Registry and Migration Department of Cyprus.";
      if (form.cy1 === "yes" && form.cy2 === "yes" && form.cy3 === "yes") return "Potentially eligible via the grandchild pathway — Cypriot citizenship through a grandparent requires a formal application demonstrating documented lineage. Dual citizenship is permitted. Contact the Civil Registry and Migration Department of Cyprus or a Cypriot consulate.";
      if (form.cy1 === "yes" && form.cy3 === "no") return "Potentially eligible, but you will need to gather the documentary evidence. Contact the Cypriot consulate once documentation is in order.";
      return "Consult the Cypriot consulate for your specific situation.";
    }

    // Malta
    if (form.country === "Malta") {
      if (form.mt1 === "no" && form.mt3 === "no") return "Not eligible for Maltese citizenship by descent.";
      if (form.mt1 === "no" && form.mt3 === "yes") return "Potentially eligible via the Maltese lineal ascendant pathway — if you have a Maltese-born grandparent or great-grandparent, you may claim citizenship through that direct lineage. Dual citizenship is permitted (since 2000). Contact Identity Malta or Citizenship Malta.";
      if (form.mt1 === "yes" && form.mt2 === "yes") return "Eligible for Maltese citizenship by descent. Dual citizenship is permitted. Contact Identity Malta (now Identità) to begin the application.";
      if (form.mt1 === "yes" && form.mt2 === "no" && form.mt3 === "yes") return "Potentially eligible via the lineal ascendant pathway — your Maltese parent may not have registered their own citizenship, but if you have a Maltese-born grandparent or great-grandparent, that generation's citizenship can form the basis of a claim. Contact Identity Malta (Identità).";
      if (form.mt1 === "yes" && form.mt2 === "no" && form.mt3 === "no") return "Likely not eligible automatically — Malta does not silently pass citizenship across multiple generations born abroad if intermediate generations never formally registered. Consult Identity Malta to explore any available registration route.";
      return "Consult Identity Malta for your specific situation.";
    }

    // United Kingdom
    if (form.country === "United Kingdom") {
      if (form.gb1 === "no") return "Not eligible for British citizenship by descent.";
      if (form.gb1 === "yes" && form.gb2 === "yes") return "Eligible for British citizenship by descent under Section 2(1)(a) of the British Nationality Act 1981. Your parent was a citizen 'otherwise than by descent' (born/naturalised/registered in the UK), so citizenship passes automatically. Dual citizenship is fully permitted. Apply through His Majesty's Passport Office.";
      if (form.gb1 === "yes" && form.gb2 === "no" && form.gb3 === "yes") return "Potentially registrable under Section 3(2) or 3(5) of the British Nationality Act 1981 — children under 18 whose British grandparent was born in the UK can sometimes be registered by the Home Secretary. This is discretionary. Contact UK Visas and Immigration (UKVI).";
      if (form.gb1 === "yes" && form.gb2 === "no" && form.gb3 === "no") return "Not automatically eligible — British citizenship by descent (Section 2 BNA 1981) does not pass beyond one generation born abroad unless the parent was born/naturalised in the UK. There is no automatic second-generation-abroad pathway. Consult an immigration solicitor about registration routes or discretionary provisions under Section 4B (historical unfairness).";
      return "Consult UK Visas and Immigration (UKVI) for your specific situation.";
    }

    // Ukraine
    if (form.country === "Ukraine") {
      if (form.ua1 === "no" && form.ua2 === "no") return "Not eligible for Ukrainian citizenship by descent.";
      if (form.ua1 === "yes") return "Eligible for Ukrainian citizenship by descent. Note: Ukraine fully legalised dual citizenship in June 2025 — a historic change. You no longer face a legal prohibition on holding Ukrainian citizenship alongside another nationality. Contact a Ukrainian consulate to begin the process.";
      if (form.ua1 === "no" && form.ua2 === "yes") return "Potentially eligible via the territorial origin pathway (Articles 9–10 of the Ukrainian Citizenship Law) — persons born in Ukraine before 1991, or children/grandchildren of such persons, may apply for citizenship on grounds of territorial origin. Note: dual citizenship is now fully permitted since June 2025. Contact a Ukrainian consulate.";
      return "Consult the Ukrainian consulate for your specific situation.";
    }

    // Norway
    if (form.country === "Norway") {
      if (form.no1 === "no") return "Not eligible for Norwegian citizenship by descent.";
      if (form.no1 === "yes" && form.no2 === "no") return "Eligible for Norwegian citizenship by descent. Dual citizenship has been fully permitted since January 1, 2020. Contact a Norwegian consulate or the Norwegian Directorate of Immigration (UDI).";
      if (form.no1 === "yes" && form.no2 === "yes" && form.no3 === "yes") return "Eligible for Norwegian citizenship by descent — retention confirmed. Dual citizenship is permitted.";
      if (form.no1 === "yes" && form.no2 === "yes" && form.no3 === "under22") return "You are still within the window. File a retention declaration with the Norwegian Directorate of Immigration (UDI) or a Norwegian consulate immediately — you must do this before age 22 to preserve Norwegian citizenship under Section 24 of the Nationality Act.";
      if (form.no1 === "yes" && form.no2 === "yes" && form.no3 === "no") return "⚠️ Norwegian citizenship may have lapsed. Under Section 24 of the Norwegian Nationality Act, born-abroad dual nationals who do not establish a connection to Norway before age 22 lose citizenship automatically. Contact the Norwegian Directorate of Immigration (UDI) — if you lost Norwegian citizenship before January 1, 2020 specifically because you acquired foreign nationality, you may be able to reclaim it by filing a simple declaration under the 2020 reformed rules.";
      return "Consult the Norwegian consulate for your specific situation.";
    }

    // Switzerland
    if (form.country === "Switzerland") {
      if (form.ch1 === "no") return "Not eligible for Swiss citizenship by descent.";
      if (form.ch1 === "yes" && form.ch2 === "no") return "Eligible for Swiss citizenship by descent. Dual citizenship has been permitted since 1992. Contact your cantonal authority (Gemeindeverwaltung) or a Swiss consulate.";
      if (form.ch1 === "yes" && form.ch2 === "yes" && form.ch3 === "yes") return "Eligible for Swiss citizenship by descent — retention declaration filed. Dual citizenship is permitted.";
      if (form.ch1 === "yes" && form.ch2 === "yes" && form.ch3 === "under25") return "You are still within the window. Under Article 8 of the Swiss Citizenship Act (BüG), born-abroad dual nationals who have never resided in Switzerland must file a retention declaration before age 25. Contact a Swiss consulate immediately.";
      if (form.ch1 === "yes" && form.ch2 === "yes" && form.ch3 === "no") return "⚠️ Swiss citizenship may have lapsed under Article 8 BüG. Born-abroad dual nationals who never resided in Switzerland and did not file a retention declaration before age 25 lose citizenship automatically. Contact the Swiss State Secretariat for Migration (SEM) or Swiss consulate to determine current status.";
      return "Consult the Swiss consulate for your specific situation.";
    }

    // Iceland
    if (form.country === "Iceland") {
      if (form.is1 === "no") return "Not eligible for Icelandic citizenship by descent.";
      if (form.is1 === "yes" && form.is2 === "no") return "Eligible for Icelandic citizenship by descent. Dual citizenship has been permitted since 2003. Contact Registers Iceland (Þjóðskrá Íslands).";
      if (form.is1 === "yes" && form.is2 === "yes" && form.is3 === "yes") return "Eligible for Icelandic citizenship by descent — retention notification made. Dual citizenship is permitted.";
      if (form.is1 === "yes" && form.is2 === "yes" && form.is3 === "under22") return "You are still within the window. Under Article 8 of the Icelandic Nationality Act, you must notify Þjóðskrá Íslands (Registers Iceland) that you wish to retain citizenship before age 22. Act now.";
      if (form.is1 === "yes" && form.is2 === "yes" && form.is3 === "no") return "⚠️ Icelandic citizenship may have lapsed. Under Article 8 of the Icelandic Nationality Act, born-abroad dual nationals who do not notify Registers Iceland before age 22 lose citizenship automatically. Contact Þjóðskrá Íslands to determine current status.";
      return "Consult the Icelandic consulate for your specific situation.";
    }

    // Serbia
    if (form.country === "Serbia") {
      if (form.rs1 === "no") return "Not eligible for Serbian citizenship by descent.";
      if (form.rs1 === "yes" && form.rs2 === "yes") return "Eligible for Serbian citizenship by descent. Dual citizenship is fully permitted. Contact the Serbian consulate or the Ministry of Interior of Serbia.";
      if (form.rs1 === "yes" && form.rs2 === "no") return "Eligible for Serbian citizenship by descent — but if you were born abroad and are under 23, register your citizenship promptly under the Serbian Citizenship Law. Missing this window may complicate the process. Contact the Serbian consulate.";
      return "Consult the Serbian consulate for your specific situation.";
    }

    // Montenegro
    if (form.country === "Montenegro") {
      if (form.me1 === "no") return "Not eligible for Montenegrin citizenship by descent.";
      if (form.me1 === "yes" && form.me2 === "no") return "Not eligible — Montenegro strictly prohibits dual citizenship. Montenegrin citizens who acquire foreign nationality AUTOMATICALLY lose Montenegrin citizenship, and to acquire Montenegrin citizenship you must permanently renounce all other nationalities. Since you are unwilling to renounce, this route is not available to you.";
      if (form.me1 === "yes" && form.me2 === "yes") return "Potentially eligible for Montenegrin citizenship by descent — but you must permanently renounce ALL other nationalities. Montenegro has zero tolerance for dual citizenship. Contact the Montenegrin Ministry of Interior (Ministarstvo unutrašnjih poslova). Consider carefully whether this trade-off makes sense for you.";
      return "Consult the Montenegrin consulate for your specific situation.";
    }

    // Albania
    if (form.country === "Albania") {
      if (form.al1 === "no" && form.al2 === "no") return "Not eligible for Albanian citizenship by descent or by the grandparent reduced-naturalization route.";
      if (form.al1 === "yes") return "Eligible for Albanian citizenship by descent (Law 8389/1998). Dual citizenship is fully permitted. Contact the Albanian Ministry of Interior or a consulate.";
      if (form.al1 === "no" && form.al2 === "yes") return "While you do not qualify for automatic citizenship by descent, documented Albanian grandparent ancestry qualifies you for a reduced 3-year residency naturalization pathway (vs 5 years standard). This is not automatic citizenship by descent — it requires residency in Albania. Contact the Albanian Ministry of Interior.";
      return "Consult the Albanian consulate for your specific situation.";
    }

    // Bosnia & Herzegovina
    if (form.country === "Bosnia & Herzegovina") {
      if (form.ba1 === "yes") return "Potentially eligible for BiH citizenship — both parents are BiH citizens, making acquisition straightforward under Article 9 of the BiH Citizenship Law. Note: Bosnia does NOT permit dual citizenship — you will be required to renounce other nationalities. Contact the BiH Ministry of Civil Affairs.";
      if (form.ba1 === "no" && form.ba2 === "yes") return "Potentially eligible — one BiH citizen parent and born in Bosnia satisfies the Article 7 criteria. Note: BiH does NOT permit dual citizenship. Contact the BiH Ministry of Civil Affairs to confirm and begin the renunciation process.";
      if (form.ba1 === "no" && form.ba2 === "no" && form.ba3 === "yes") return "Potentially eligible under the statelessness exception (Article 7 BiH Citizenship Law) — one BiH citizen parent applying to a child who would otherwise be stateless. Note: since you are currently stateless, you would not need to formally renounce, but this is a rare situation. Consult the BiH Ministry of Civil Affairs immediately.";
      if (form.ba1 === "no" && form.ba2 === "no" && form.ba3 === "no") return "Not eligible under standard rules. Bosnia's citizenship law for those born outside BiH to only one BiH parent who already hold another citizenship does not grant automatic citizenship, and no exceptions apply. Dual citizenship is prohibited, making the path even more restrictive.";
      return "Consult the BiH Ministry of Civil Affairs for your specific situation.";
    }

    // North Macedonia
    if (form.country === "North Macedonia") {
      if (form.mk1 === "no") return "Not eligible for North Macedonian citizenship by descent.";
      if (form.mk1 === "yes" && form.mk2 === "yes") return "Eligible for North Macedonian citizenship by descent (Article 4 of the Citizenship Law). Dual citizenship is permitted. Contact the Ministry of Internal Affairs (MIA) of North Macedonia.";
      if (form.mk1 === "yes" && form.mk2 === "no") return "Eligible for North Macedonian citizenship by descent — but if you were born abroad and are under 23, file a formal application promptly under the Citizenship Law. Contact the North Macedonian consulate.";
      return "Consult the North Macedonian consulate for your specific situation.";
    }

    // Kosovo
    if (form.country === "Kosovo") {
      if (form.xk1 === "no") return "Not eligible for Kosovo citizenship by descent.";
      if (form.xk1 === "yes" && form.xk2 === "yes") return "Eligible for Kosovo citizenship by descent (Law 04/L-215 on Citizenship). Dual citizenship is fully permitted. Contact the Kosovo Ministry of Internal Affairs. Important: Kosovo is only partially internationally recognised (~100 of 193 UN members) — a Kosovo passport has restricted utility and is not accepted by Russia, China, Spain, Serbia, and others. Factor this into your decision.";
      if (form.xk1 === "yes" && form.xk2 === "no") return "Eligible for Kosovo citizenship by descent — but be aware Kosovo is only partially recognised internationally and its passport has restricted utility. Confirm you understand this before applying. Contact the Kosovo Ministry of Internal Affairs.";
      return "Consult the Kosovo consulate for your specific situation.";
    }

    // Moldova
    if (form.country === "Moldova") {
      if (form.md1 === "no" && form.md2 === "no") return "Not eligible for Moldovan citizenship by descent.";
      if (form.md1 === "yes") {
        const romanianNote = form.md3 === "yes" ? " Also note: as a person of Moldovan/Romanian ethnic origin, you may SEPARATELY qualify for Romanian citizenship — a full EU passport. Romanian citizenship is available to descendants of pre-1940 Romanian citizens from the territories now forming Moldova. Consider exploring both pathways." : "";
        return `Eligible for Moldovan citizenship by descent (Law 1024-XIV). Dual citizenship is freely permitted.${romanianNote} Contact the Moldovan Agency for Public Services.`;
      }
      if (form.md1 === "no" && form.md2 === "yes") {
        const romanianNote = form.md3 === "yes" ? " Also note: as a person of Moldovan/Romanian ethnic origin, you may SEPARATELY qualify for Romanian citizenship — a full EU passport. Explore Romanian citizenship in the checker above." : "";
        return `Potentially eligible via the grandparent route under Moldovan citizenship law. Contact the Moldovan Agency for Public Services.${romanianNote}`;
      }
      return "Consult the Moldovan consulate for your specific situation.";
    }

    // Georgia
    if (form.country === "Georgia") {
      if (form.ge1 === "no" && form.ge2 === "no") return "Not eligible for Georgian citizenship by descent.";
      if (form.ge1 === "yes" && form.ge3 === "yes") return "Eligible for Georgian citizenship by descent. Dual citizenship is permitted. Contact the Civil Registry Agency of Georgia or a Georgian consulate.";
      if (form.ge1 === "yes" && form.ge3 === "no") return "Potentially eligible for Georgian citizenship by descent — gather civil records for the generational chain and contact the Georgian consulate.";
      if (form.ge1 === "no" && form.ge2 === "yes" && form.ge3 === "yes") return "Potentially eligible via the ethnic Georgian presidential pathway — this is a DISCRETIONARY route available to ethnic Georgians in the diaspora (including those whose families emigrated during the Soviet era). Approval is not guaranteed. Contact the Georgian consulate or the Public Services Development Agency.";
      if (form.ge1 === "no" && form.ge2 === "yes" && form.ge3 === "no") return "Potentially eligible via the ethnic Georgian pathway, but documentary evidence is needed. Contact the Georgian consulate for guidance on what records are accepted.";
      return "Consult the Georgian consulate for your specific situation.";
    }

    // Armenia
    if (form.country === "Armenia") {
      if (form.am1 === "no" && form.am2 === "no") return "Not eligible for Armenian citizenship by descent.";
      if (form.am1 === "yes" && form.am3 === "yes") return "Eligible for Armenian citizenship by descent. Dual citizenship is fully permitted. Contact the Armenian consulate or the Diaspora Affairs ministry.";
      if (form.am1 === "yes" && form.am3 === "no") return "Potentially eligible for Armenian citizenship by descent — gather the documentary evidence and contact the Armenian consulate.";
      if (form.am1 === "no" && form.am2 === "yes" && form.am3 === "yes") return "Potentially eligible via the ethnic Armenian diaspora pathway (Presidential Decree No. 222-A) — this includes descendants of 1915 Armenian Genocide survivors. Church records, diaspora community records, and Genocide survivor documentation are accepted. Contact the Armenian consulate or apply through the Republic of Armenia's Diaspora Ministry.";
      if (form.am1 === "no" && form.am2 === "yes" && form.am3 === "no") return "Potentially eligible via the ethnic Armenian pathway — gather documentary evidence (church records, community records) and contact the Armenian consulate.";
      return "Consult the Armenian consulate for your specific situation.";
    }

    // Belarus
    if (form.country === "Belarus") {
      if (form.by1 === "no") return "Not eligible for Belarusian citizenship by descent.";
      if (form.by1 === "yes" && form.by2 === "no") return "Not eligible — Belarus strictly prohibits dual citizenship (Law No. 136-Z on Citizenship). You must permanently renounce ALL other nationalities to acquire Belarusian citizenship. Additionally: a Belarusian passport currently carries significant EU/US/UK travel restrictions due to international sanctions on the Lukashenko regime. Strongly consider these implications.";
      if (form.by1 === "yes" && form.by2 === "yes") return "Potentially eligible for Belarusian citizenship by descent — but you must permanently renounce ALL other nationalities first. Belarus will not accept dual citizenship under any circumstances. Important: a Belarusian passport is currently subject to EU/US/UK travel restrictions due to international sanctions. Consult the Belarusian consulate, and carefully consider the practical implications before proceeding.";
      return "Consult the Belarusian consulate for your specific situation.";
    }

    // San Marino
    if (form.country === "San Marino") {
      if (form.sm1 === "no") return "Not eligible for Sammarinese citizenship by descent.";
      if (form.sm1 === "yes" && form.sm2 === "yes") return "Eligible for Sammarinese citizenship by descent. New legislation (2024–2026 reform) now permits dual citizenship, which was previously prohibited or severely restricted. Note: the rules have historically been primarily patrilineal — confirm current matrilineal eligibility with the San Marino Civil Status Office (Ufficio di Stato Civile), as reforms are still being implemented.";
      if (form.sm1 === "yes" && form.sm2 === "no") return "Potentially eligible — gather the birth and marriage certificate chain and contact the San Marino Civil Status Office. Dual citizenship is now permitted under recent reforms.";
      return "Consult the San Marino Civil Status Office for your specific situation.";
    }

    // Monaco
    if (form.country === "Monaco") {
      if (form.mc1 === "no") return "Not eligible for Monégasque citizenship by descent.";
      if (form.mc1 === "yes" && form.mc2 === "no") return "Not eligible — Monaco absolutely prohibits dual citizenship under the Monégasque Nationality Code. A person who acquires foreign nationality loses Monégasque citizenship automatically, and to acquire Monaco citizenship you must renounce all other nationalities without exception. Since you are unwilling to renounce, this route is not available.";
      if (form.mc1 === "yes" && form.mc2 === "yes") return "Potentially eligible for Monégasque citizenship by descent — but you must permanently renounce ALL other nationalities. Monaco citizenship is one of the rarest in the world (~10,000 holders). Contact Monaco's Direction de la Sûreté Publique. This is an extraordinary step — consider carefully.";
      return "Consult Monaco's Direction de la Sûreté Publique for your specific situation.";
    }

    // Liechtenstein
    if (form.country === "Liechtenstein") {
      if (form.li1 === "no") return "Not eligible for Liechtenstein citizenship by descent.";
      if (form.li1 === "yes" && form.li2 === "yes") return "Eligible for Liechtenstein citizenship by descent. Dual citizenship IS permitted specifically for citizenship acquired by descent (CBD) — this is an exception to Liechtenstein's general rule that naturalization requires renunciation (and 30 years of residency). Contact the Liechtenstein Office of Domestic Affairs (Amt für Inneres).";
      if (form.li1 === "yes" && form.li2 === "no") return "Potentially eligible — gather the documentary evidence and contact the Office of Domestic Affairs (Amt für Inneres) in Liechtenstein. Note: dual citizenship is permitted for descent-based claims.";
      return "Consult the Liechtenstein authorities for your specific situation.";
    }

    // Andorra
    if (form.country === "Andorra") {
      if (form.ad1 === "no") return "Not eligible for Andorran citizenship by descent.";
      if (form.ad1 === "yes" && form.ad2 === "no") return "Not eligible — Andorra does not permit dual citizenship. You must permanently renounce all other citizenship(s) to acquire Andorran nationality. Since you are unwilling to renounce, this route is not available.";
      if (form.ad1 === "yes" && form.ad2 === "yes" && form.ad3 === "yes") return "Eligible for Andorran citizenship by descent — but you must permanently renounce your other citizenship(s). Contact the Andorran Ministry of Justice and Interior (Ministeri de Justícia i Interior). Carefully consider whether the trade-off is worthwhile for your situation.";
      if (form.ad1 === "yes" && form.ad2 === "yes" && form.ad3 === "no") return "Potentially eligible — but you will need to gather documentation. Contact the Andorran Ministry of Justice and Interior once records are assembled. Remember: renunciation of all other nationalities is mandatory.";
      return "Consult the Andorran authorities for your specific situation.";
    }

    return "Eligibility rules are complex. Please consult the relevant consulate.";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setResult(checkEligibility());
  }

  // ---------- UI ----------
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-zinc-950/90 backdrop-blur border-b border-zinc-100 dark:border-zinc-800">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Heritage Passport Finder" width={36} height={36} priority />
            <span className="font-bold text-lg tracking-tight hidden sm:block">Heritage Passport Finder</span>
          </div>

          <ul className="hidden md:flex items-center gap-1">
            {[
              { label: "About", to: "about" },
              { label: "Eligibility", to: "eligibility" },
              { label: "Countries", to: "resources" },
              { label: "Research Guide", to: "ancestry-guide" },
            ].map(({ label, to }) => (
              <li key={to}>
                <ScrollLink
                  to={to} smooth offset={-80} duration={400}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
            <li>
              <ScrollLink
                to="eligibility" smooth offset={-80} duration={400}
                className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer transition-colors"
              >
                Check Eligibility
              </ScrollLink>
            </li>
          </ul>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Open navigation menu"
            onClick={() => setNavOpen(o => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {navOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              )}
            </svg>
          </button>
        </nav>

        {navOpen && (
          <div className="md:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 flex flex-col gap-1">
            {[
              { label: "About", to: "about" },
              { label: "Eligibility Checker", to: "eligibility" },
              { label: "Countries", to: "resources" },
              { label: "Research Guide", to: "ancestry-guide" },
              { label: "Research Tips", to: "tips" },
            ].map(({ label, to }) => (
              <ScrollLink
                key={to}
                to={to} smooth offset={-80} duration={400}
                className="px-4 py-3 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
                onClick={() => setNavOpen(false)}
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: "32px 32px" }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-zinc-950 to-zinc-950" aria-hidden />

        <div className="relative max-w-5xl mx-auto px-6 py-28 sm:py-36 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            Free
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
            Private
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
            No signup required
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            Do you qualify for{" "}
            <span className="text-emerald-400">European</span>
            <br />citizenship by descent?
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Answer a few guided questions about your ancestry and find out if you may be entitled to a second passport through your family heritage.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <ScrollLink
              to="eligibility" smooth offset={-80} duration={400}
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-base transition-colors cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Check My Eligibility →
            </ScrollLink>
            <ScrollLink
              to="about" smooth offset={-80} duration={400}
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/10 transition-colors cursor-pointer"
            >
              Learn How It Works
            </ScrollLink>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-zinc-400">
            {[
              { flag: "🇮🇹", name: "Italy" }, { flag: "🇮🇪", name: "Ireland" },
              { flag: "🇩🇪", name: "Germany" }, { flag: "🇵🇱", name: "Poland" },
              { flag: "🇬🇷", name: "Greece" }, { flag: "🇪🇸", name: "Spain" },
              { flag: "🇵🇹", name: "Portugal" }, { flag: "🇱🇹", name: "Lithuania" },
              { flag: "🇭🇺", name: "Hungary" }, { flag: "🇪🇪", name: "Estonia" },
              { flag: "🇱🇻", name: "Latvia" }, { flag: "🇨🇿", name: "Czech Rep." },
              { flag: "🇸🇰", name: "Slovakia" }, { flag: "🇱🇺", name: "Luxembourg" },
            ].map(({ flag, name }) => (
              <span key={name} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span>{flag}</span>
                <span>{name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ── HOW IT WORKS / ABOUT ────────────────────────────────── */}
      <section id="about" className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">How it works</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">Three simple steps to find out if your family history could entitle you to a European passport.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                title: "Choose a country",
                desc: "Select which European country you want to explore and which ancestor you are claiming through.",
              },
              {
                step: "02",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                  </svg>
                ),
                title: "Answer questions",
                desc: "We show only the questions relevant to your situation — no irrelevant forms, no personal data collected.",
              },
              {
                step: "03",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Get your result",
                desc: "See whether you likely qualify and what documents you will need to start the process.",
              },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm">
                <div className="flex items-center gap-3 w-full">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <span className="text-xs font-bold text-zinc-200 dark:text-zinc-700 ml-auto">{step}</span>
                </div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">About Heritage Passport Finder</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Heritage Passport Finder is a free, educational tool that helps people with European ancestry understand whether they may qualify for <strong className="text-zinc-900 dark:text-zinc-200">citizenship by descent</strong>. Many European countries allow descendants of former citizens to reclaim nationality — but the rules vary widely and the process can be confusing.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                This is <em>not</em> a government site and does not collect personal data. Your answers stay on your device. Always consult an immigration attorney for your specific situation.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-72">
              <Image
                src="/passport-photo.jpeg"
                alt="Open passport with travel stamps"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY CHECKER ─────────────────────────────────── */}
      <section id="eligibility" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Eligibility Checker</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Select a country and answer a few questions. Takes under 2 minutes.</p>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
          {/* Step indicator */}
          <div className="px-6 sm:px-8 pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${form.country && form.ancestor ? "bg-emerald-500 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"}`}>1</span>
                <span className={`text-sm font-medium ${form.country && form.ancestor ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400"}`}>Select</span>
              </div>
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${submitted ? "bg-emerald-500 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"}`}>2</span>
                <span className={`text-sm font-medium ${submitted ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400"}`}>Answer</span>
              </div>
              <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${submitted && result ? "bg-emerald-500 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"}`}>3</span>
                <span className={`text-sm font-medium ${submitted && result ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400"}`}>Result</span>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-8 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5" htmlFor="country">Country</label>
                <select
                  id="country" name="country" value={form.country} onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                >
                  <option value="">Select a country...</option>
                  <option>Italy</option>
                  <option>Ireland</option>
                  <option>Germany</option>
                  <option>Poland</option>
                  <option>Greece</option>
                  <option>Spain</option>
                  <option>Portugal</option>
                  <option>Lithuania</option>
                  <option>Hungary</option>
                  <option>Estonia</option>
                  <option>Latvia</option>
                  <option value="CzechRepublic">Czech Republic</option>
                  <option>Slovakia</option>
                  <option>Luxembourg</option>
                  <option>France</option>
                  <option>Romania</option>
                  <option>Croatia</option>
                  <option>Bulgaria</option>
                  <option>Sweden</option>
                  <option>Denmark</option>
                  <option>Finland</option>
                  <option>Netherlands</option>
                  <option>Belgium</option>
                  <option>Slovenia</option>
                  <option>Austria</option>
                  <option>Cyprus</option>
                  <option>Malta</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option>Ukraine</option>
                  <option>Norway</option>
                  <option>Switzerland</option>
                  <option>Iceland</option>
                  <option>Serbia</option>
                  <option>Montenegro</option>
                  <option>Albania</option>
                  <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                  <option value="North Macedonia">North Macedonia</option>
                  <option>Kosovo</option>
                  <option>Moldova</option>
                  <option>Georgia</option>
                  <option>Armenia</option>
                  <option>Belarus</option>
                  <option value="San Marino">San Marino</option>
                  <option>Monaco</option>
                  <option>Liechtenstein</option>
                  <option>Andorra</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5" htmlFor="ancestor">Ancestor</label>
                <select
                  id="ancestor" name="ancestor" value={form.ancestor} onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                >
                  <option value="">Select ancestor...</option>
                  <option value="parent">Parent</option>
                  <option value="grandparent">Grandparent</option>
                  <option value="great-grandparent">Great-grandparent</option>
                  <option value="great-great-grandparent">Great-great-grandparent</option>
                </select>
              </div>
            </div>

            {form.country && form.ancestor && !submitted && (
              <form id="form" onSubmit={handleSubmit} className="mt-6">
                <div className="flex flex-col gap-5">
                  {visibleQuestions(form.country).map((q: Q, idx: number) => (
                    <div key={q.key} className="rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 p-5">
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-1 leading-relaxed">
                        <span className="text-emerald-500 mr-2 font-bold">Q{idx + 1}.</span>
                        {q.label}
                      </p>
                      {q.hint && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 leading-relaxed pl-5 border-l-2 border-zinc-200 dark:border-zinc-700">
                          {q.hint}
                        </p>
                      )}
                      {q.type === "radio" && (
                        <div className="flex flex-wrap gap-2">
                          {q.options.map((opt) => (
                            <label key={opt.value} className="cursor-pointer">
                              <input
                                type="radio" name={q.key} value={opt.value}
                                checked={form[q.key] === opt.value}
                                onChange={handleChange}
                                className="peer sr-only"
                              />
                              <span className="block px-4 py-2 rounded-lg border text-sm font-medium transition-all border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-checked:text-white">
                                {opt.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                      {q.type === "select" && (
                        <select
                          name={q.key} value={form[q.key] || ""}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-sm bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="">Select...</option>
                          {q.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  disabled={!isFormComplete}
                  className={`mt-6 w-full py-4 rounded-xl font-bold text-base transition-all ${
                    isFormComplete
                      ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20 cursor-pointer"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed"
                  }`}
                >
                  Check My Eligibility
                </button>
              </form>
            )}

            {submitted && result && (
              <div className="mt-6">
                <div className={`rounded-2xl p-6 border-2 ${
                  result.toLowerCase().includes("eligible") && !result.toLowerCase().includes("not eligible")
                    ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                    : "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20"
                }`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      result.toLowerCase().includes("eligible") && !result.toLowerCase().includes("not eligible")
                        ? "bg-emerald-500" : "bg-red-500"
                    }`}>
                      {result.toLowerCase().includes("eligible") && !result.toLowerCase().includes("not eligible") ? (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed">{result}</p>
                      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">This is an estimate only. Consult an immigration attorney and official consulate sources for your specific case.</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleBack}
                  className="mt-4 w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  &#8592; Check Another Country
                </button>
              </div>
            )}

            {!submitted && (
              <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500 text-center">
                &#128274; Your answers are never stored or transmitted. Everything stays in your browser.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── COUNTRY GUIDES ─────────────────────────────────────── */}
      <section id="resources" className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Country Guides</h2>
            <p className="text-zinc-500 dark:text-zinc-400">In-depth eligibility guides and official resources for each country.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { flag: "🇮🇹", code: "IT", name: "Italy", slug: "italy-citizenship-by-descent", desc: "Jure sanguinis — no generational limit" },
              { flag: "🇮🇪", code: "IE", name: "Ireland", slug: "ireland-citizenship-by-descent", desc: "Foreign Births Register — grandparent route" },
              { flag: "🇩🇪", code: "DE", name: "Germany", slug: "germany-citizenship-by-descent", desc: "Art. 116 restoration & declaration remedy" },
              { flag: "🇵🇱", code: "PL", name: "Poland", slug: "poland-citizenship-by-descent", desc: "Citizenship confirmation via voivode" },
              { flag: "🇬🇷", code: "GR", name: "Greece", slug: "greece-citizenship-by-descent", desc: "Dimotologio registration & omogenis path" },
              { flag: "🇪🇸", code: "ES", name: "Spain", slug: "spain-citizenship-by-descent", desc: "Democratic Memory Law — grandchildren of exiles" },
              { flag: "🇵🇹", code: "PT", name: "Portugal", slug: "portugal-citizenship-by-descent", desc: "Grandchild route with A2 Portuguese" },
              { flag: "🇱🇹", code: "LT", name: "Lithuania", slug: "lithuania-citizenship-by-descent", desc: "Citizenship restoration for pre-1940 descendants" },
              { flag: "🇭🇺", code: "HU", name: "Hungary", slug: "hungary-citizenship-by-descent", desc: "Simplified naturalization — no generational limit" },
              { flag: "🇪🇪", code: "EE", name: "Estonia", slug: "estonia-citizenship-by-descent", desc: "Pre-1940 citizenship restoration route" },
              { flag: "🇱🇻", code: "LV", name: "Latvia", slug: "latvia-citizenship-by-descent", desc: "People's Register descendants — June 17, 1940" },
              { flag: "🇨🇿", code: "CZ", name: "Czech Republic", slug: "czech-republic-citizenship-by-descent", desc: "Descent & declaration route for expellees" },
              { flag: "🇸🇰", code: "SK", name: "Slovakia", slug: "slovakia-citizenship-by-descent", desc: "Czechoslovak heritage via Slovak-born ancestor" },
              { flag: "🇱🇺", code: "LU", name: "Luxembourg", slug: "luxembourg-citizenship-by-descent", desc: "Reacquisition route — multiple citizenship allowed" },
              { flag: "🇫🇷", code: "FR", name: "France", slug: "france-citizenship-by-descent", desc: "Jure sanguinis — no generational limit, dual citizenship allowed" },
              { flag: "🇷🇴", code: "RO", name: "Romania", slug: "romania-citizenship-by-descent", desc: "EU passport via descent or Communist-era repatriation route" },
              { flag: "🇭🇷", code: "HR", name: "Croatia", slug: "croatia-citizenship-by-descent", desc: "All descendants of Croatian emigrants — EU & Schengen passport" },
              { flag: "🇧🇬", code: "BG", name: "Bulgaria", slug: "bulgaria-citizenship-by-descent", desc: "EU passport — descent or ethnic Bulgarian pathway" },
              { flag: "🇸🇪", code: "SE", name: "Sweden", slug: "sweden-citizenship-by-descent", desc: "Auto-transmission to children of Swedish parents, dual allowed" },
              { flag: "🇩🇰", code: "DK", name: "Denmark", slug: "denmark-citizenship-by-descent", desc: "EU passport by descent — dual allowed since 2015" },
              { flag: "🇫🇮", code: "FI", name: "Finland", slug: "finland-citizenship-by-descent", desc: "Auto-transmission to children of Finnish parents, dual allowed" },
              { flag: "🇳🇱", code: "NL", name: "Netherlands", slug: "netherlands-citizenship-by-descent", desc: "Dutch citizenship by descent — beware the 10-year loss rule" },
              { flag: "🇧🇪", code: "BE", name: "Belgium", slug: "belgium-citizenship-by-descent", desc: "EU passport by descent — file conservation declaration by age 28" },
              { flag: "🇸🇮", code: "SI", name: "Slovenia", slug: "slovenia-citizenship-by-descent", desc: "4-generation diaspora route — EU & Schengen passport" },
              { flag: "🇦🇹", code: "AT", name: "Austria", slug: "austria-citizenship-by-descent", desc: "Standard descent or §58c pathway for Nazi persecution descendants" },
              { flag: "🇨🇾", code: "CY", name: "Cyprus", slug: "cyprus-citizenship-by-descent", desc: "EU & Commonwealth passport via Cypriot parentage" },
              { flag: "🇲🇹", code: "MT", name: "Malta", slug: "malta-citizenship-by-descent", desc: "EU, Schengen & Commonwealth passport via Maltese heritage" },
              { flag: "🇬🇧", code: "GB", name: "United Kingdom", slug: "uk-citizenship-by-descent", desc: "British citizenship by descent — one-generation abroad cutoff" },
              { flag: "🇺🇦", code: "UA", name: "Ukraine", slug: "ukraine-citizenship-by-descent", desc: "Dual citizenship legal since June 2025 — descent route available" },
              { flag: "🇳🇴", code: "NO", name: "Norway", slug: "norway-citizenship-by-descent", desc: "Dual citizenship permitted since 2020 — reclaim lost citizenship by declaration" },
              { flag: "🇨🇭", code: "CH", name: "Switzerland", slug: "switzerland-citizenship-by-descent", desc: "Swiss citizenship by descent — act before age 25 to retain" },
              { flag: "🇮🇸", code: "IS", name: "Iceland", slug: "iceland-citizenship-by-descent", desc: "Nordic Schengen passport — act before age 22 to retain" },
              { flag: "🇷🇸", code: "RS", name: "Serbia", slug: "serbia-citizenship-by-descent", desc: "EU candidate — citizenship by descent, dual permitted" },
              { flag: "🇲🇪", code: "ME", name: "Montenegro", slug: "montenegro-citizenship-by-descent", desc: "EU candidate — descent route requires renouncing existing citizenship" },
              { flag: "🇦🇱", code: "AL", name: "Albania", slug: "albania-citizenship-by-descent", desc: "EU candidate — descent plus grandparent reduced naturalization route" },
              { flag: "🇧🇦", code: "BA", name: "Bosnia & Herzegovina", slug: "bosnia-citizenship-by-descent", desc: "Restrictive rules — no dual citizenship, statelessness condition" },
              { flag: "🇲🇰", code: "MK", name: "North Macedonia", slug: "north-macedonia-citizenship-by-descent", desc: "EU & NATO candidate — descent route, dual citizenship allowed" },
              { flag: "🇽🇰", code: "XK", name: "Kosovo", slug: "kosovo-citizenship-by-descent", desc: "Partially recognized state — Schengen visa-free since 2024" },
              { flag: "🇲🇩", code: "MD", name: "Moldova", slug: "moldova-citizenship-by-descent", desc: "EU candidate — dual citizenship allowed, ethnic Moldovans may also claim Romanian citizenship" },
              { flag: "🇬🇪", code: "GE", name: "Georgia", slug: "georgia-citizenship-by-descent", desc: "EU candidate — descent route through Georgian parent, ethnic Georgian pathway available" },
              { flag: "🇦🇲", code: "AM", name: "Armenia", slug: "armenia-citizenship-by-descent", desc: "Diaspora-friendly — open ethnic pathway, Genocide descendants route, dual citizenship allowed" },
              { flag: "🇧🇾", code: "BY", name: "Belarus", slug: "belarus-citizenship-by-descent", desc: "Descent route through Belarusian parent — no dual citizenship, renunciation required" },
              { flag: "🇸🇲", code: "SM", name: "San Marino", slug: "san-marino-citizenship-by-descent", desc: "World's oldest republic — descent route, dual citizenship now permitted" },
              { flag: "🇲🇨", code: "MC", name: "Monaco", slug: "monaco-citizenship-by-descent", desc: "One of the rarest citizenships — descent route, absolutely no dual citizenship" },
              { flag: "🇱🇮", code: "LI", name: "Liechtenstein", slug: "liechtenstein-citizenship-by-descent", desc: "EEA/Schengen microstate — descent route, dual citizenship permitted for CBD" },
              { flag: "🇦🇩", code: "AD", name: "Andorra", slug: "andorra-citizenship-by-descent", desc: "Pyrenean microstate — one-parent descent route, no dual citizenship" },
              { flag: "🇻🇦", code: "VA", name: "Vatican City", slug: "vatican-city-citizenship", desc: "No citizenship by descent — functional citizenship for clergy and Vatican workers only" },
            ].map((item) => (
              <a
                key={item.code}
                href={`/${item.slug}`}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-md transition-all"
              >
                <span className="text-3xl flex-shrink-0">{item.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100">{item.name}</h3>
                    <svg className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{item.desc}</p>
                  <span className="mt-2 inline-block text-xs text-emerald-600 dark:text-emerald-400 font-medium">Read full guide</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH GUIDE ──────────────────────────────────────── */}
      <section id="ancestry-guide" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Genealogy Research Guide</h2>
          <p className="text-zinc-500 dark:text-zinc-400">How to use Ancestry.com and other resources to build your document chain.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { num: "01", title: "Create an Ancestry account", body: "Sign up at Ancestry.com and start a family tree with everything you already know about names, birthplaces, and dates for parents, grandparents, and great-grandparents." },
            { num: "02", title: "Search vital records", body: "Use Ancestry databases to find birth, marriage, and death certificates. These are essential for proving your lineage and eligibility for citizenship by descent." },
            { num: "03", title: "Explore immigration records", body: "Look for ship manifests, immigration documents, and naturalization records. These establish when ancestors moved and their citizenship status at the time." },
            { num: "04", title: "Review census data", body: "Census records provide clues about family relationships, places of birth, and citizenship changes over time, often filling in gaps where vital records are missing." },
            { num: "05", title: "Collaborate and verify", body: "Connect with distant relatives who may have already done research. Always cross-reference against official government sources before relying on any record." },
            { num: "06", title: "Organize your chain", body: "Save certified copies and organize documents by generation and type (birth, marriage, naturalization) to build a clear, provable chain from ancestor to you." },
            { num: "07", title: "Translate and apostille", body: "Most countries require certified translations and apostilles on foreign documents. Plan for this cost and time when preparing your application." },
            { num: "08", title: "Assess and apply", body: "Once you have a complete chain, consult the consulate for application instructions. Consider a citizenship attorney for complex cases or large families." },
          ].map(({ num, title, body }) => (
            <div key={num} className="flex gap-4 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <span className="text-2xl font-black text-zinc-100 dark:text-zinc-800 flex-shrink-0 w-8">{num}</span>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESEARCH TIPS ───────────────────────────────────────── */}
      <section id="tips" className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-3">Research Tips</h2>
              <p className="text-zinc-500 dark:text-zinc-400 mb-8">Key steps to trace your family citizenship path.</p>
              <div className="flex flex-col gap-5">
                {[
                  { title: "Start with what you know", body: "Gather full names, birthplaces, and dates for parents and grandparents. Old letters, photos, and family records can fill in gaps." },
                  { title: "Collect civil records first", body: "Find birth, marriage, and death certificates in your home country, then search national or church archives for ancestors born abroad." },
                  { title: "Trace immigration", body: "Search passenger lists, Ellis Island manifests, and census data to see when and where your ancestors moved." },
                  { title: "Find naturalization dates", body: "The exact date an ancestor naturalized abroad can make or break your eligibility claim. Check national archives and local court records." },
                  { title: "Confirm citizenship retention", body: "Determine if European ancestors lost citizenship through foreign service, marriage, or renunciation — this affects the chain." },
                  { title: "Organize your lineage chain", body: "Each link from your ancestor to you must be evidenced with a civil document. Do not assume — prove it." },
                  { title: "Translate and legalize", body: "Budget for certified translations and apostilles. Most countries require these before accepting foreign documents." },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden h-72 mb-4">
                <Image
                  src="/maps-wall.jpeg"
                  alt="Vintage maps and genealogy documents"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="rounded-2xl bg-emerald-600 dark:bg-emerald-700 p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Ready to check your eligibility?</h3>
                <p className="text-emerald-100 text-sm mb-4">Takes under 2 minutes. No signup required.</p>
                <ScrollLink
                  to="eligibility" smooth offset={-80} duration={400}
                  className="block text-center bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer text-sm"
                >
                  Start the Checker
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADSENSE ─────────────────────────────────────────────── */}
      {process.env.NODE_ENV === "production" && (
        <div className="bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-1772060773365341"
              data-ad-slot="7043924687"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      )}

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-zinc-950 text-white">
        {/* Main grid */}
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.svg" alt="Heritage Passport Finder" width={28} height={28} />
                <span className="font-bold text-white text-sm">Heritage Passport Finder</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Free educational guidance for people exploring European citizenship by descent. Covers 47 European countries.
              </p>
              <ScrollLink
                to="eligibility" smooth offset={-80} duration={400}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Check Eligibility →
              </ScrollLink>
            </div>

            {/* Countries */}
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Countries</p>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                {[
                  ["Italy", "/italy-citizenship-by-descent"],
                  ["Ireland", "/ireland-citizenship-by-descent"],
                  ["Germany", "/germany-citizenship-by-descent"],
                  ["Poland", "/poland-citizenship-by-descent"],
                  ["Greece", "/greece-citizenship-by-descent"],
                  ["Spain", "/spain-citizenship-by-descent"],
                  ["Portugal", "/portugal-citizenship-by-descent"],
                ].map(([name, href]) => (
                  <li key={name}><a href={href} className="hover:text-emerald-400 transition-colors">{name}</a></li>
                ))}
                <li><a href="/#eligibility" className="hover:text-emerald-400 transition-colors font-medium text-zinc-300">See all 46 countries →</a></li>
              </ul>
            </div>

            {/* More Countries */}
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">More Countries</p>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                {[
                  ["Hungary", "/hungary-citizenship-by-descent"],
                  ["France", "/france-citizenship-by-descent"],
                  ["Romania", "/romania-citizenship-by-descent"],
                  ["Ukraine", "/ukraine-citizenship-by-descent"],
                  ["Armenia", "/armenia-citizenship-by-descent"],
                  ["Norway", "/norway-citizenship-by-descent"],
                  ["Switzerland", "/switzerland-citizenship-by-descent"],
                ].map(([name, href]) => (
                  <li key={name}><a href={href} className="hover:text-emerald-400 transition-colors">{name}</a></li>
                ))}
                <li><a href="/citizenship-by-descent-requirements-by-country" className="hover:text-emerald-400 transition-colors font-medium text-zinc-300">Compare all countries →</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Resources</p>
              <ul className="space-y-2.5 text-sm text-zinc-400">
                {[
                  ["Compare Countries", "/citizenship-by-descent-requirements-by-country"],
                  ["Apostille Guide", "/apostille-guide"],
                  ["Document Checklist", "/documents-checklist"],
                  ["Italy 1948 Rule", "/italy-1948-rule"],
                  ["Ireland FBR", "/ireland-foreign-births-register"],
                  ["German Article 116", "/german-article-116-citizenship"],
                  ["About", "/about"],
                  ["Privacy Policy", "/privacy-policy"],
                ].map(([name, href]) => (
                  <li key={name}><a href={href} className="hover:text-emerald-400 transition-colors">{name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-500">
            <p>&#169; {new Date().getFullYear()} Heritage Passport Finder &#183; Educational and informational use only.</p>
            <p className="text-zinc-600">Not a government service &#183; Not legal advice</p>
          </div>
        </div>
      </footer>

      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="webapp-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <Script id="howto-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
    </div>
  );
}
