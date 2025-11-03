"use client";
import { CountryFlag } from "./CountryFlag";

type Resource = {
  code: string;      // ISO 3166-1 alpha-2 (IT, IE, DE, etc.)
  name: string;
  desc: string;
  href: string;
};

export function ResourceCard({ item }: { item: Resource }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-6 shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <div className="flex items-center gap-3">
        <CountryFlag code={item.code} />
        <h3 className="text-xl sm:text-2xl font-semibold">{item.name}</h3>
      </div>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">{item.desc}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-green-700 dark:text-green-400 font-semibold">
        Visit Official Site <span aria-hidden>→</span>
      </span>
    </a>
  );
}
