import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const primaryHost = "heritagepassportfinder.com";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get("host") || "";

  // Allow all requests for static assets (files with an extension) and API routes to pass through
  if (
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/static") ||
    url.pathname.startsWith("/favicon.ico") ||
    url.pathname.startsWith("/ads.txt") ||
    url.pathname.startsWith("/robots.txt") ||
    url.pathname.startsWith("/sitemap.xml") ||
    /\.[a-zA-Z0-9]+$/.test(url.pathname) // matches any file with an extension
  ) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
