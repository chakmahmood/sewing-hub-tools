"use client";

import { useMemo, useState } from "react";
import { ToolShell } from "@/components/ui/ToolShell";
import { AffiliateCard } from "@/components/ui/AffiliateCard";
import { affiliateProducts } from "@/lib/affiliate-links";

// Approximate women's wear size chart, bust measurement in cm mapped to
// US / UK / EU sizing. Real production data should replace this table.
const SIZE_TABLE: { maxBustCm: number; us: string; uk: string; eu: string }[] = [
  { maxBustCm: 80, us: "0", uk: "4", eu: "32" },
  { maxBustCm: 83, us: "2", uk: "6", eu: "34" },
  { maxBustCm: 86, us: "4", uk: "8", eu: "36" },
  { maxBustCm: 91, us: "6", uk: "10", eu: "38" },
  { maxBustCm: 96, us: "8", uk: "12", eu: "40" },
  { maxBustCm: 101, us: "10", uk: "14", eu: "42" },
  { maxBustCm: 106, us: "12", uk: "16", eu: "44" },
  { maxBustCm: 111, us: "14", uk: "18", eu: "46" },
  { maxBustCm: 116, us: "16", uk: "20", eu: "48" },
  { maxBustCm: 122, us: "18", uk: "22", eu: "50" },
];

export default function SizeChartPage() {
  const [bust, setBust] = useState("91");
  const [unit, setUnit] = useState<"cm" | "in">("cm");

  const match = useMemo(() => {
    const raw = parseFloat(bust) || 0;
    const bustCm = unit === "in" ? raw * 2.54 : raw;
    return SIZE_TABLE.find((row) => bustCm <= row.maxBustCm) ?? SIZE_TABLE[SIZE_TABLE.length - 1];
  }, [bust, unit]);

  return (
    <ToolShell
      title="Pattern Size Chart Converter"
      tagline="Enter your bust measurement to see where you land across US, UK and EU pattern sizing."
    >
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-ink/80 mb-1.5">
            Bust measurement
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={bust}
              onChange={(e) => setBust(e.target.value)}
              className="flex-1 rounded-md border border-seam bg-chalk px-3 py-2.5 text-lg font-mono text-ink focus:outline-none focus:ring-2 focus:ring-denim"
            />
            <div className="flex rounded-md border border-seam overflow-hidden">
              {(["cm", "in"] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`px-3 text-sm font-medium ${
                    unit === u ? "bg-denim text-chalk" : "bg-chalk text-ink/70"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-ink/50 mt-1.5">
            Measure around the fullest part of your bust, tape parallel to the floor.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "US", value: match.us },
            { label: "UK", value: match.uk },
            { label: "EU", value: match.eu },
          ].map((row) => (
            <div
              key={row.label}
              className="rounded-xl border border-seam bg-chalk p-5 text-center"
            >
              <p className="text-xs uppercase tracking-widest text-ink/50">{row.label}</p>
              <p className="font-display text-4xl font-semibold text-tomato mt-1">
                {row.value}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-ink/50">
          Sizing is a general guide — always check the specific pattern brand&apos;s own
          chart, since fit runs differently across companies.
        </p>

        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
            Measure accurately
          </p>
          <AffiliateCard product={affiliateProducts.measuringTape} />
        </div>
      </div>
    </ToolShell>
  );
}
