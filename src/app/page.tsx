"use client";
import React, { useMemo, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
// If you don't actually have this component yet, comment out the import below or replace with your own.
import { ResourceCard } from "../components/ResourceCard";

type Q = {
  key: string;
  label: string;
  type: "radio" | "select";
  options: { value: string; label: string }[];
  required?: boolean;
  showIf?: (form: any) => boolean; // visibility predicate
};

export default function HeritagePassportLanding() {
  const [navOpen, setNavOpen] = useState(false);
  // Google AdSense loader
  useEffect(() => {
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
    lt1: "", lt2: "", lt3: "",
    huA1: "", huA2: "",
    huB1: "", huB2: "", huB3: "", huB4: ""
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
      lt1: "", lt2: "", lt3: "",
      huA1: "", huA2: "",
      huB1: "", huB2: "", huB3: "", huB4: ""
    });
  }

  // ---------- question sets with showIf ----------
  const countryQuestions: Record<string, { questions: Q[] }> = {
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
          label:
            "Do you have a parent, grandparent, or great-grandparent who was a Lithuanian citizen before 15 June 1940?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true
        },
        {
          key: "lt2",
          label: "Did that ancestor emigrate or was exiled/deported before 1990?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No / Unsure" }],
          required: true,
          showIf: f => f.lt1 === "yes"
        },
        {
          key: "lt3",
          label:
            "Can you obtain proof of the ancestor’s Lithuanian citizenship (passport/archives) and the civil chain to you?",
          type: "radio",
          options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }],
          required: true,
          showIf: f => f.lt1 === "yes" && f.lt2 === "yes"
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

    // Lithuania — restoration
    if (form.country === "Lithuania") {
      if (form.lt1 === "yes" && form.lt2 === "yes" && form.lt3 === "yes") return "Eligible for Lithuanian citizenship restoration (descendant of pre-1940 citizen).";
      return "Not eligible for Lithuanian citizenship by descent.";
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
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-zinc-900 shadow-sm z-20">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center overflow-hidden h-15">
            <img src="/logo.svg" alt="Heritage Passport Logo" className="h-40" />
          </div>
          {/* Hamburger Icon */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 focus:outline-none"
            aria-label="Open navigation menu"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className={`block w-7 h-0.5 bg-zinc-700 dark:bg-zinc-200 transition-all duration-200 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-zinc-700 dark:bg-zinc-200 my-1 transition-all duration-200 ${navOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-zinc-700 dark:bg-zinc-200 transition-all duration-200 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-zinc-700 dark:text-zinc-200">
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="hover:text-green-700 dark:hover:text-green-400 cursor-pointer">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="eligibility" smooth={true} duration={500} offset={-80} className="hover:text-green-700 dark:hover:text-green-400 cursor-pointer">
                Eligibility
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="resources" smooth={true} duration={500} offset={-80} className="hover:text-green-700 dark:hover:text-green-400 cursor-pointer">
                Resources
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="tips" smooth={true} duration={500} offset={-80} className="hover:text-green-700 dark:hover:text-green-400 cursor-pointer">
                Research Tips
              </ScrollLink>
            </li>
          </ul>
          {/* Mobile Nav */}
          {navOpen && (
            <ul className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 shadow-md flex flex-col items-center gap-6 py-6 z-30 md:hidden animate-fade-in">
              <li>
                <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="hover:text-green-700 dark:hover:text-green-400 cursor-pointer" onClick={() => setNavOpen(false)}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="eligibility" smooth={true} duration={500} offset={-80} className="hover:text-green-700 dark:hover:text-green-400 cursor-pointer" onClick={() => setNavOpen(false)}>
                  Eligibility
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="resources" smooth={true} duration={500} offset={-80} className="hover:text-green-700 dark:hover:text-green-400 cursor-pointer" onClick={() => setNavOpen(false)}>
                  Resources
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="tips" smooth={true} duration={500} offset={-80} className="hover:text-green-700 dark:hover:text-green-400 cursor-pointer" onClick={() => setNavOpen(false)}>
                  Research Tips
                </ScrollLink>
              </li>
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
  <section className="flex flex-col items-center text-center py-24 px-6 bg-linear-to-b from-green-50 to-transparent dark:from-green-950">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Check Your Ancestral Citizenship Eligibility</h1>
        <p className="text-lg max-w-2xl text-zinc-600 dark:text-zinc-300 mb-8">
          Discover whether your family heritage could entitle you to European citizenship. Answer a few guided questions—no account needed.
        </p>
        <ScrollLink
          to="eligibility"
          smooth={true}
          duration={500}
          offset={-80}
          className="bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-green-800 transition-colors cursor-pointer"
        >
          Start Eligibility Check
        </ScrollLink>
      </section>

      {/* About Section */}
      <section id="about" className="relative max-w-6xl mx-auto my-24 px-6">
        <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-lg overflow-hidden min-h-[500px]">
          {/* Full-height image on right */}
          <div className="absolute top-0 right-0 h-full w-1/2 rounded-r-2xl hidden md:block overflow-hidden">
            <img
              src="/passport-photo.jpeg"
              alt="Open passport with stamps"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative z-10 md:w-1/2 p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">About Heritage Passport Finder</h2>
            <hr className="h-[3px] bg-green-700 dark:bg-zinc-700 border-0 rounded mb-6 w-2/3" />
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              Heritage Passport Finder is a free, educational tool designed to help people with European ancestry understand if they may qualify for <strong>citizenship by descent</strong>. Many countries allow descendants of former citizens to reclaim nationality based on family lineage — but the rules vary widely, and the process can be confusing.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              Our platform simplifies the first step by offering an <strong>interactive questionnaire</strong> built on verified legal pathways for countries such as Italy, Ireland, Germany, Hungary, and more. It is <em>not</em> a government site and does not collect personal data — your answers stay on your device until you choose to restart or clear them.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              The goal is to make citizenship research accessible and transparent for everyone — whether you’re reconnecting with your heritage, exploring family migration history, or considering a future in Europe.
            </p>
          </div>
        </div>
      </section>

      {/* === Eligibility Section (Redesigned) === */}
      <section
        id="eligibility"
        className="relative mx-auto my-24 px-6 max-w-5xl"
        aria-labelledby="eligibility-title"
      >
        {/* Decorative gradient ring */}
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-30 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(34,197,94,0.15), rgba(34,197,94,0) 60%), radial-gradient(50% 60% at 80% 30%, rgba(21,128,61,0.12), rgba(21,128,61,0) 60%)",
          }}
        />

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden">
          {/* Header Strip */}
          <div className="bg-linear-to-r from-green-700 to-green-600 text-white px-6 sm:px-10 py-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-mt-px">
                  <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {/* <img src="/passport-logo-icon.svg" alt="Passport Icon" className="w-18 rounded-full" /> */}
              </span>
              <h2 id="eligibility-title" className="text-2xl sm:text-3xl font-bold tracking-tight">
                Eligibility Checker
              </h2>
            </div>
            <p className="mt-2 text-white/90 text-sm sm:text-base">
              Choose a country and your link to an ancestor. We’ll show only the questions you need.
            </p>
          </div>

          {/* Form body */}
          <div className="p-6 sm:p-10">
            {/* Progress hint */}
            <div className="mb-6 flex items-center gap-3 text-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              <span className="text-zinc-600 dark:text-zinc-300">Step 1 of 2 · Select country & ancestor</span>
            </div>

            {/* Inputs row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto]">
              {/* Country select */}
              <label className="sr-only" htmlFor="country">Country to check</label>
              <select
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Country to check for eligibility</option>
                <option>Italy</option>
                <option>Ireland</option>
                <option>Germany</option>
                <option>Poland</option>
                <option>Greece</option>
                <option>Spain</option>
                <option>Portugal</option>
                <option>Lithuania</option>
                <option>Hungary</option>
                <option>Other</option>
              </select>

              {/* Ancestor select */}
              <label className="sr-only" htmlFor="ancestor">Ancestor link</label>
              <select
                id="ancestor"
                name="ancestor"
                value={form.ancestor}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Which ancestor are you claiming through?</option>
                <option value="parent">Parent</option>
                <option value="grandparent">Grandparent</option>
                <option value="great-grandparent">Great-grandparent</option>
                <option value="great-great-grandparent">Great-great-grandparent</option>
              </select>

              {/* Continue button */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("form");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                disabled={!form.country || !form.ancestor}
                className={`rounded-xl px-6 py-3 font-semibold shadow transition
                  ${form.country && form.ancestor
                    ? "bg-green-700 text-white hover:bg-green-800"
                    : "bg-zinc-300 text-zinc-500 cursor-not-allowed"}`}
              >
                Continue
              </button>
            </div>

            {/* Helper strip */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                We’ll never submit an application—this just estimates eligibility based on your answers.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Italy","Ireland","Germany","Hungary","Poland","Spain","Portugal","Lithuania","Greece"].map((c) => (
                  <span key={c} className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-linear-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

            {/* Step 2 header */}
            {form.country && form.ancestor && (
              <div className="mb-4 flex items-center gap-3 text-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-600"></span>
                <span className="text-zinc-600 dark:text-zinc-300">Step 2 of 2 · Answer the relevant questions</span>
              </div>
            )}

            {/* Dynamic questions + submit */}
            <form id="form" onSubmit={handleSubmit} className="w-full">
              {form.country && form.ancestor && (
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 p-6 sm:p-8 grid grid-cols-1 gap-6">
                  {visibleQuestions(form.country).map((q: Q) => (
                    <div className="flex flex-col gap-2" key={q.key}>
                      <span className="text-zinc-800 dark:text-zinc-100 text-base sm:text-lg font-semibold">
                        {q.label}
                      </span>

                      {q.type === "radio" && (
                        <div className="flex gap-3 flex-wrap">
                          {q.options.map((opt) => (
                            <label key={opt.value}>
                              <input
                                type="radio"
                                name={q.key}
                                value={opt.value}
                                checked={form[q.key] === opt.value}
                                onChange={handleChange}
                                className="peer sr-only"
                              />
                              <span className="block w-[260px] px-4 py-2 text-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-medium cursor-pointer transition-colors peer-checked:bg-green-700 peer-checked:text-white peer-checked:border-green-700">
                                {opt.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}

                      {q.type === "select" && (
                        <select
                          name={q.key}
                          value={form[q.key] || ""}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-green-600"
                        >
                          <option value="">Select...</option>
                          {q.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className={`mt-2 w-full rounded-lg font-semibold py-3 text-lg shadow transition-colors ${
                      isFormComplete ? "bg-green-700 hover:bg-green-800 text-white" : "bg-zinc-400 text-zinc-200 cursor-not-allowed"
                    }`}
                    disabled={!isFormComplete}
                  >
                    CHECK ELIGIBILITY
                  </button>
                </div>
              )}
            </form>

            {/* RESULT */}
            {submitted && result && (
              <div className="mt-8">
                <div className={`p-6 rounded-xl border-2 ${
                  result.toLowerCase().includes("eligible")
                    ? "border-green-600 bg-green-50 dark:bg-green-900/20"
                    : "border-red-600 bg-red-50 dark:bg-red-900/20"
                }`}>
                  <p className="text-lg">{result}</p>
                </div>
                <button
                  type="button"
                  onClick={handleBack}
                  className="mt-4 px-6 py-2 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors"
                >
                  Check another path
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="max-w-6xl mx-auto my-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Resources</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { code: "IT", name: "Italy", desc: "Official Consulate Directory & 1948 Rule Info", href: "https://www.esteri.it/" },
            { code: "IE", name: "Ireland", desc: "Department of Foreign Affairs — Citizenship by Descent", href: "https://www.dfa.ie/" },
            { code: "DE", name: "Germany", desc: "Federal Office — Citizenship by Descent & Declaration", href: "https://www.bundesverwaltungsamt.de/" },
            { code: "PL", name: "Poland", desc: "Polish Citizenship Confirmation & Consulate Info", href: "https://www.gov.pl/web/dyplomacja" },
            { code: "GR", name: "Greece", desc: "Greek Ministry of Foreign Affairs — Citizenship", href: "https://www.mfa.gr/" },
            { code: "ES", name: "Spain", desc: "Spanish Ministry — Citizenship by Descent & DML", href: "https://www.exteriores.gob.es/" },
            { code: "PT", name: "Portugal", desc: "Portuguese Nationality Portal — Descent & Grandchild Route", href: "https://justica.gov.pt/Servicos/Nacionalidade" },
            { code: "LT", name: "Lithuania", desc: "Lithuanian Migration Dept. — Citizenship Restoration", href: "https://migracija.lrv.lt/" },
            { code: "HU", name: "Hungary", desc: "Hungarian Consular Service — Simplified Naturalization", href: "https://konzuliszolgalat.kormany.hu/" },
          ].map((item) => (
            <ResourceCard key={item.code} item={item} />
          ))}
        </div>
      </section>

      {/* Research Tips Section */}
  <section id="tips" className="relative max-w-6xl mx-auto mb-10 px-6">
        <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-lg overflow-hidden min-h-[500px]">
          {/* Full-height right image */}
          <img
            src="/maps-wall.jpeg"
            alt="Wall of vintage maps and genealogy documents"
            className="absolute top-0 right-0 h-full w-1/2 object-cover rounded-r-2xl hidden md:block"
          />

          <div className="relative z-10 md:w-1/2 p-10 sm:p-14">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-green-800 dark:text-green-400">
              How to Research Your Family Citizenship Path
            </h2>
            <hr className="h-[3px] bg-green-700 dark:bg-zinc-700 border-0 rounded mb-6 w-2/3" />
            <ul className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <li>
                <strong>1. Start with what you know:</strong> Gather full names, birthplaces, and dates for your parents, grandparents, and great-grandparents. Family records, old letters, or photos can help fill in gaps.
              </li>
              <li>
                <strong>2. Collect civil records:</strong> Look for birth, marriage, and death certificates in your home country first. Then search national or church archives for those born abroad.
              </li>
              <li>
                <strong>3. Trace immigration:</strong> Search passenger lists, Ellis Island or ship manifests, and census data to see when ancestors arrived in their new country.
              </li>
              <li>
                <strong>4. Find naturalization details:</strong> Check national archives or local court records for naturalization certificates — the date they became citizens elsewhere can affect your eligibility.
              </li>
              <li>
                <strong>5. Confirm citizenship retention:</strong> For European ancestors, determine if they ever lost citizenship through foreign service, marriage, or renunciation.
              </li>
              <li>
                <strong>6. Organize your lineage chain:</strong> Each link between you and your ancestor must be proven with civil documents — from birth to marriage to your own record.
              </li>
              <li>
                <strong>7. Translate and legalize:</strong> Most countries require certified translations and apostilles on foreign documents before submission.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Google AdSense Ad */}
      <div className="flex justify-center my-8">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1772060773365341"
          data-ad-slot="7043924687"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
  <footer className="mt-10 border-t border-zinc-200 dark:border-zinc-700 py-8 text-center text-sm text-zinc-500">
        © 2025 Heritage Passport Finder · Built for educational and informational use only.
      </footer>
    </div>
  );
}
