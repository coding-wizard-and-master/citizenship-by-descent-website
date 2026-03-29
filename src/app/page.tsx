"use client";
import React, { useMemo, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Script from "next/script";
import Image from "next/image";

type Q = {
  key: string;
  label: string;
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
  description: "Free interactive tool to check whether you qualify for European citizenship by descent across 14 countries including Italy, Ireland, Germany, Poland, Spain, Portugal, Greece, Lithuania, Hungary, Estonia, Latvia, Czech Republic, Slovakia, and Luxembourg.",
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
  lu1: "", lu2: "", lu3: ""
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
      lu1: "", lu2: "", lu3: ""
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
          label: "Do you have a parent, grandparent, or great-grandparent who was born in present-day Slovakia and held Czechoslovak citizenship?",
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
          label:
            "If born abroad to a German also born abroad (after 1999): was your birth registered at a German mission within 1 year?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "na", label: "Not applicable" }],
          required: true,
          showIf: f => f.de1 === "no"
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
        // Path A — Verification/registration (already citizen by parent)
        {
          key: "huA1",
          label: "Path A — Was either parent a Hungarian citizen at your birth?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (verification/registration)" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "huA2",
          label: "Was your birth registered with the Hungarian civil registry/consulate?",
          type: "radio",
          options: [
            { value: "yes", label: "Yes (already in system)" },
            { value: "no", label: "No (can register now)" },
            { value: "na", label: "Not applicable" }
          ],
          required: true,
          showIf: f => f.huA1 === "yes"
        },

        // Path B — Simplified naturalization (ancestry + language)
        {
          key: "huB1",
          label:
            "Do you have any ancestor — there’s no generational limit — who was a Hungarian citizen or whose documents show Hungarian origin from territories of historical Hungary (before 1920 or between 1941 and 1945)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes (ancestry proven)" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "huB2",
          label: "Can you converse in basic Hungarian (or will you learn to a basic conversational level before applying)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes / Will learn" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.huB1 === "yes"
        },
        {
          key: "huB3",
          label:
            "Can you provide civil chain documents and proof of the ancestor’s Hungarian citizenship or residence (passport, ID, registry, or archival record)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.huB1 === "yes"
        },
        {
          key: "huB4",
          label: "Do you have a clean criminal record (good-character requirement)?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.huB1 === "yes"
        }
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
  if (form.ee1 === "yes" && form.ee2 === "yes") return "Eligible for Estonian citizenship by descent.";
  return "Not eligible for citizenship by descent.";
    }

    // Latvia
    if (form.country === "Latvia") {
    if (form.lv1 === "yes" && form.lv2 === "yes") return "Eligible for Latvian citizenship by descent.";
    return "Not eligible.";
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
    if (form.sk1 === "yes" && form.sk2 === "yes") return "Eligible for Slovak citizenship by descent.";
    return "Not eligible";
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
      // Path A – verification/registration via parent
      if (form.huA1 === "yes") {
        if (form.huA2 === "yes") return "Eligible for Hungarian citizenship (already recognized; apply for passport).";
        if (form.huA2 === "no" || form.huA2 === "na") return "Eligible for Hungarian citizenship (register your birth with Hungary; no language/residency required).";
      } else {
        // Path B – simplified naturalization (ancestry + language + clean record + docs)
        if (form.huB1 === "yes" && form.huB3 === "yes" && form.huB4 === "yes") {
          if (form.huB2 === "yes") return "Eligible for Hungarian citizenship via simplified naturalization (ancestry + basic Hungarian).";
          if (form.huB2 === "no") return "Not eligible now. You will be eligible once you learn basic Hungarian.";
        }
      }
      return "Not eligible for Hungarian citizenship by descent/ancestry.";
    }

    // Germany — parent/remedies/restoration
    if (form.country === "Germany") {
      if (form.de1 === "yes") return "You are eligible for German citizenship by descent (recognition via parent).";
      if (form.de1 === "no") {
        if (form.de2 === "yes") return "You are eligible for German citizenship via declaration (historical remedy).";
        if (form.de3 === "yes") return "You are eligible for German citizenship via restoration (Article 116(2)).";
        return "You are not eligible for German citizenship by descent.";
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
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-3 leading-relaxed">
                        <span className="text-emerald-500 mr-2 font-bold">Q{idx + 1}.</span>
                        {q.label}
                      </p>
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
                <li><a href="/#eligibility" className="hover:text-emerald-400 transition-colors font-medium text-zinc-300">See all 47 countries →</a></li>
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
