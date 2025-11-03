"use client";
import ReactCountryFlag from "react-country-flag";

export function CountryFlag({ code, className = "" }: { code: string; className?: string }) {
  return (
    <ReactCountryFlag
      svg
      countryCode={code.toUpperCase()}
      className={className}
      style={{ width: "1.5em", height: "1.5em" }}
      aria-label={`${code} flag`}
      title={`${code} flag`}
    />
  );
}
