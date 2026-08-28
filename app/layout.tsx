import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IFP-MTC AFES — Institut de Formation Professionnelle à Douala",
  description:
    "Formation technique, digitale et hôtelière à Douala : électricité, plomberie, informatique, cuisine, pâtisserie et plus. 95% d'insertion professionnelle.",
  openGraph: {
    title: "IFP-MTC AFES — Institut de Formation Professionnelle à Douala",
    description:
      "Formation technique, digitale et hôtelière à Douala : électricité, plomberie, informatique, cuisine, pâtisserie et plus. 95% d'insertion professionnelle.",
    images: ["/hero.jpeg"],
    siteName: "IFP-MTC AFES",
    url: "https://ifpmtc.vercel.app",
  },
  verification: {
    google: "BH6CNqgx2xuwfq4PjXjPbGMxJBuBZratDak4LCLzxBk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
