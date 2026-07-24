import Link from "next/link";
import { tools } from "@/lib/tools-config";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-tomato mb-3">
        Free tools for people who sew
      </p>
      <h1 className="font-display italic text-5xl sm:text-6xl font-semibold text-denim max-w-2xl leading-tight">
        Answers as fast as you can thread a needle.
      </h1>
      <p className="mt-4 text-lg text-ink/70 max-w-xl">
        No sign-up, no fluff. Pick a tool, get your number, get back to the
        machine.
      </p>

      <div className="tape-divider my-10" />

      <div className="grid sm:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group rounded-xl border border-seam bg-chalk p-6 transition-colors hover:border-tomato"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-thread-gold mb-2">
              {tool.priority}
            </p>
            <h2 className="font-display text-2xl font-semibold text-denim group-hover:text-tomato transition-colors">
              {tool.name}
            </h2>
            <p className="mt-1.5 text-sm text-ink/60">{tool.tagline}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
