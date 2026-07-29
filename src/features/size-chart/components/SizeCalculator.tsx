"use client";

import { useMemo, useState } from "react";

import { ToolShell } from "@/components/ui/ToolShell";
import { AffiliateCard } from "@/components/ui/AffiliateCard";

import { affiliateProducts } from "@/lib/affiliate-links";

import { calculateSize, normalizeMeasurement } from "../lib/calculateSize";

import { MeasurementInput } from "./MeasurementInput";
import { ResultCards } from "./ResultCards";
import { MeasurementGuide } from "./MeasurementGuide";
import { SizeTable } from "./SizeTable";
import { SizeFAQ } from "./SizeFAQ";

export function SizeCalculator() {
  const [gender, setGender] = useState<"women" | "men">("women");
  const [unit, setUnit] = useState<"cm" | "in">("cm");

  const [primary, setPrimary] = useState("91");
  const [waist, setWaist] = useState("74");
  const [hip, setHip] = useState("98");

  const primaryLabel = gender === "women" ? "Bust" : "Chest";
  const primaryHelper =
    gender === "women"
      ? "Measure around the fullest part of your bust."
      : "Measure around the fullest part of your chest.";

  const result = useMemo(() => {
    const primaryCm = normalizeMeasurement(parseFloat(primary) || 0, unit);
    const waistCm = normalizeMeasurement(parseFloat(waist) || 0, unit);
    const hipCm = normalizeMeasurement(parseFloat(hip) || 0, unit);

    return calculateSize({
      gender,
      measurement: primaryCm,
      waist: waistCm,
      hip: hipCm,
    });
  }, [gender, primary, waist, hip, unit]);

  return (
    <ToolShell
      title="Sewing Pattern Size Calculator"
      tagline="Find your recommended sewing pattern size using your body measurements."
    >
      <div className="space-y-8">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}

          <div className="space-y-8">
            <section className="rounded-2xl border border-seam bg-chalk p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Body Measurements
                </h2>

                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Enter your body measurements to estimate the best sewing
                  pattern size for women or men.
                </p>
              </div>

              <div className="mb-6 inline-flex overflow-hidden rounded-xl border border-seam">
                {(["women", "men"] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setGender(value)}
                    className={`px-5 py-2 text-sm font-medium transition ${
                      gender === value
                        ? "bg-denim text-white"
                        : "bg-white text-ink hover:bg-linen"
                    }`}
                  >
                    {value === "women" ? "Women" : "Men"}
                  </button>
                ))}
              </div>

              {/* UNIT SWITCHER */}

              <div className="mb-6 inline-flex overflow-hidden rounded-xl border border-seam">
                {(["cm", "in"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUnit(u)}
                    className={`px-5 py-2 text-sm font-medium transition ${
                      unit === u
                        ? "bg-denim text-white"
                        : "bg-white text-ink hover:bg-linen"
                    }`}
                  >
                    {u === "cm" ? "Centimeters" : "Inches"}
                  </button>
                ))}
              </div>

              <div className="grid gap-5">
                <MeasurementInput
                  label={primaryLabel}
                  value={primary}
                  onChange={setPrimary}
                  unit={unit}
                  helper={primaryHelper}
                  placeholder={gender === "women" ? "91" : "96"}
                  required
                  min={50}
                  max={180}
                />

                <MeasurementInput
                  label="Waist"
                  value={waist}
                  onChange={setWaist}
                  unit={unit}
                  helper="Measure around your natural waist."
                  placeholder="74"
                  required
                  min={40}
                  max={180}
                />

                <MeasurementInput
                  label="Hip"
                  value={hip}
                  onChange={setHip}
                  unit={unit}
                  helper="Measure around the fullest part of your hips."
                  placeholder="98"
                  required
                  min={50}
                  max={220}
                />
              </div>
            </section>

            <MeasurementGuide />

            <SizeTable gender={gender} />
          </div>

          {/* RIGHT */}

          <div className="space-y-6">
            <ResultCards result={result} />

            <section className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50">
                Recommended Tools
              </p>

              <AffiliateCard product={affiliateProducts.measuringTape} />

              <AffiliateCard product={affiliateProducts.seamGauge} />

              <AffiliateCard product={affiliateProducts.allPurposeThread} />
            </section>
          </div>
        </div>

        {/* FAQ */}

        <SizeFAQ />
      </div>
    </ToolShell>
  );
}

export default SizeCalculator;
