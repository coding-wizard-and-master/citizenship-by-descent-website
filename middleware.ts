import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const primaryHost = "heritagepassportfinder.com";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get("host") || "";

  // Keep static files and API routes unchanged
  if (
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/static") ||
    url.pathname.startsWith("/favicon.ico") ||
    url.pathname.startsWith("/ads.txt") ||
    url.pathname.startsWith("/robots.txt") ||
    url.pathname.startsWith("/sitemap.xml")
  ) {
    return NextResponse.next();
  }

  // Rewrite all other paths to homepage
  if (url.pathname !== "/") {
    url.pathname = "/";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
