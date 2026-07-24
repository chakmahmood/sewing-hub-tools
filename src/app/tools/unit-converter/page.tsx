"use client";

import { useMemo, useState } from "react";

import { ToolShell } from "@/components/ui/ToolShell";
import { AffiliateCard } from "@/components/ui/AffiliateCard";

import { affiliateProducts } from "@/lib/affiliate-links";

import { ConverterCard } from "@/components/ConverterCard";
import { FractionConverter } from "@/components/FractionConverter";
import { ConversionTable } from "@/components/ConversionTable";

import {
  SEAM_ALLOWANCES as COMMON_SEAM_ALLOWANCES,
  FABRIC_WIDTH_REFERENCE as COMMON_MEASUREMENTS,
} from "@/data/conversions";

import { convertFromInches } from "@/lib/converter";

export default function UnitConverterPage() {
  const [inches, setInches] = useState("1");

  const value = parseFloat(inches) || 0;

  const converted = useMemo(() => {
    return convertFromInches(value);
  }, [value]);

  return (
    <ToolShell
      title="Sewing Unit Converter"
      tagline="Quickly convert inches, centimeters, millimeters, yards, and meters without leaving your sewing table."
    >
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT */}

        <div className="space-y-8">
          {/* INPUT */}

          <section className="rounded-2xl border border-seam bg-chalk p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Unit Converter
              </h2>

              <p className="mt-2 text-sm text-ink/70">
                Enter a measurement in inches to instantly convert it into
                centimeters, millimeters, yards, and meters.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-ink/80">
                Inches
              </label>

              <input
                type="number"
                step="0.01"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border
                  border-seam
                  bg-white
                  px-4
                  py-3
                  text-lg
                  font-mono
                  text-ink
                  outline-none
                  transition
                  focus:border-denim
                  focus:ring-2
                  focus:ring-denim/20
                "
              />
            </div>
          </section>

          {/* RESULTS */}

          <section className="rounded-2xl border border-seam bg-chalk p-6 shadow-sm">
            <div className="mb-5">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Conversion Results
              </h2>

              <p className="mt-2 text-sm text-ink/70">
                Converted automatically from <strong>{value || 0} inch</strong>.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ConverterCard
                title="Centimeters"
                value={converted.cm}
                unit="cm"
              />

              <ConverterCard
                title="Millimeters"
                value={converted.mm}
                unit="mm"
              />

              <ConverterCard title="Meters" value={converted.meters} unit="m" />

              <ConverterCard title="Yards" value={converted.yards} unit="yd" />
            </div>
          </section>

          {/* FRACTIONS */}

          <FractionConverter />

          {/* TABLE */}

          <ConversionTable
            title="Common Seam Allowances"
            description="Frequently used seam allowances for garment sewing and quilting."
            rows={COMMON_SEAM_ALLOWANCES}
          />

          <ConversionTable
            title="Common Sewing Measurements"
            description="Quick reference conversions used in sewing patterns."
            rows={COMMON_MEASUREMENTS}
          />
        </div>

        {/* RIGHT */}

        <div className="space-y-6">
          <section className="rounded-2xl border border-seam bg-chalk p-6 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Sewing Tips
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-ink/75">
              <p>
                Most commercial sewing patterns from the US use inches while
                many fabric shops worldwide use centimeters or meters.
              </p>

              <p>
                Keeping a reliable converter nearby helps prevent cutting
                mistakes and buying the wrong amount of fabric.
              </p>

              <p>
                For garment sewing, always verify seam allowances before cutting
                because different pattern companies use different standards.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50">
              Recommended Tools
            </p>

            <AffiliateCard product={affiliateProducts.seamGauge} />

            <AffiliateCard product={affiliateProducts.measuringTape} />

            <AffiliateCard product={affiliateProducts.rotaryCutter} />
          </section>
        </div>
      </div>
    </ToolShell>
  );
}
