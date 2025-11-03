import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const primaryHost = "heritagepassportfinder.com";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get("host") || "";

  // force apex
  if (host.startsWith("www.")) {
    url.host = primaryHost;
    return NextResponse.redirect(url, 301);
  }

  // force https in case of proxies
  if (url.protocol === "http:") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // optional: drop trailing slash except root
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
