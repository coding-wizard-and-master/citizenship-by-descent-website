// lib/seo.ts
export const buildCanonical = (base: string) => {
  return ({ pathname }: { pathname?: string } = {}) => {
    const path = typeof window === "undefined"
      ? "" // Next will resolve from metadataBase for static routes
      : window.location.pathname;
    return new URL(pathname ?? path ?? "/", base).toString();
  };
};
