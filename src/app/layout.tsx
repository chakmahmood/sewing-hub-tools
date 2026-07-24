import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "../styles/globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sewing Hub — Free tools for people who sew",
  description:
    "Fabric yardage calculator, unit converter, size charts, and needle & thread matcher. Built for sewists who need an answer fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-linen text-ink">
        <Analytics />
        <header className="border-b border-seam/60">
          <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="font-display italic text-xl font-semibold text-denim"
            >
              Sewing Hub
            </Link>
            <nav className="hidden sm:flex gap-6 text-sm font-medium text-ink/70">
              <Link
                href="/tools/fabric-calculator"
                className="hover:text-tomato transition-colors"
              >
                Yardage
              </Link>
              <Link
                href="/tools/unit-converter"
                className="hover:text-tomato transition-colors"
              >
                Converter
              </Link>
              <Link
                href="/tools/size-chart"
                className="hover:text-tomato transition-colors"
              >
                Size chart
              </Link>
              <Link
                href="/tools/needle-thread-matcher"
                className="hover:text-tomato transition-colors"
              >
                Needle & thread
              </Link>
            </nav>
          </div>
          <div className="tape-divider" />
        </header>
        <main className="flex-1">{children}</main>
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div id="container-d061fee37804c828ec0c47560e88296e" />
        </div>

        <Script
          src="https://pl30512595.effectivecpmnetwork.com/d061fee37804c828ec0c47560e88296e/invoke.js"
          strategy="afterInteractive"
          async
        />
        <footer className="border-t border-seam/60 mt-16">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-ink/60 flex flex-col sm:flex-row justify-between gap-2">
            <span>Sewing Hub — measured twice, cut once.</span>
            <span>
              Some links are affiliate links. We may earn a small commission at
              no extra cost to you.
            </span>
          </div>
        </footer>
        <Script
          src="https://pl30512594.effectivecpmnetwork.com/ae/e7/8c/aee78cff825414d97ef58ade024a2ccd.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
