import { NextResponse } from "next/server";

export function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: https://ifpmtc.vercel.app/sitemap.xml\n`;
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain" },
  });
}
