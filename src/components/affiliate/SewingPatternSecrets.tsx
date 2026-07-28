"use client";

import Link from "next/link";

const CLICKBANK_URL =
  "https://2adb1jw8ncht9uajismbvcqyrr.hop.clickbank.net/?&traffic_source=blog&traffic_type=organic&campaign=tools";

export default function SewingPatternSecrets() {
  return (
    <section
      className="
        mx-auto
        my-10
        max-w-5xl
        rounded-2xl
        border
        border-seam
        bg-chalk
        p-8
        shadow-sm
      "
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span
            className="
              inline-flex
              rounded-full
              bg-thread-gold/20
              px-3
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-denim
            "
          >
            Recommended Resource
          </span>

          <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
            Sewing Pattern Secrets
          </h2>

          <p className="mt-4 leading-7 text-ink/75">
            Access over <strong>160 printable sewing patterns</strong> plus
            <strong> 50+ step-by-step video tutorials</strong> for garments,
            bags, home décor, quilting, accessories, and more.
          </p>

          <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/75">
            <li>✅ 160+ beginner-friendly sewing patterns</li>
            <li>✅ 50+ detailed video tutorials</li>
            <li>✅ Printable PDF patterns</li>
            <li>✅ Learn sewing techniques from home</li>
            <li>✅ Instant digital access</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:w-64">
          <Link
            href={CLICKBANK_URL}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="
              rounded-xl
              bg-tomato
              px-6
              py-4
              text-center
              font-semibold
              text-white
              transition
              hover:bg-tomato-dark
            "
          >
            View Sewing Patterns →
          </Link>

          <p className="text-center text-xs leading-6 text-ink/50">
            Digital download • Instant access
          </p>
        </div>
      </div>
    </section>
  );
}
