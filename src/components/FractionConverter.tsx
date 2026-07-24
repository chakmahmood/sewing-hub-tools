"use client";

import { useMemo, useState } from "react";

import { COMMON_FRACTIONS } from "@/data/conversions";

import { fractionToDecimal, inchToCm, inchToMm } from "@/lib/converter";

export function FractionConverter() {
  const [fraction, setFraction] = useState<string>("5/8");

  const result = useMemo(() => {
    const decimal = fractionToDecimal(fraction);

    return {
      decimal,

      cm: inchToCm(decimal),

      mm: inchToMm(decimal),
    };
  }, [fraction]);

  return (
    <section
      className="
        rounded-2xl
        border
        border-seam
        bg-chalk
        p-6
        shadow-sm
      "
    >
      <div className="mb-6">
        <h2
          className="
            font-display
            text-2xl
            font-semibold
            text-ink
          "
        >
          Fraction Converter
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-ink/70
          "
        >
          Quickly convert common sewing fractions into decimal inches,
          centimeters, and millimeters.
        </p>
      </div>

      {/* Selector */}

      <div className="mb-6">
        <label
          className="
            mb-2
            block
            text-sm
            font-medium
            text-ink
          "
        >
          Select a fraction
        </label>

        <select
          value={fraction}
          onChange={(e) => setFraction(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-seam
            bg-white
            px-4
            py-3
            text-lg
            font-medium
            text-ink
            outline-none
            transition
            focus:border-denim
            focus:ring-2
            focus:ring-denim/20
          "
        >
          {COMMON_FRACTIONS.map((item) => (
            <option key={item} value={item}>
              {item}&quot;
            </option>
          ))}
        </select>
      </div>

      {/* Results */}

      <div
        className="
          grid
          gap-4
          sm:grid-cols-3
        "
      >
        <div
          className="
            rounded-xl
            border
            border-seam
            bg-white
            p-4
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-widest
              text-ink/50
            "
          >
            Decimal
          </p>

          <p
            className="
              mt-2
              font-mono
              text-3xl
              font-bold
              text-denim
            "
          >
            {result.decimal.toFixed(4)}
          </p>

          <p
            className="
              mt-1
              text-sm
              text-ink/60
            "
          >
            inches
          </p>
        </div>

        <div
          className="
            rounded-xl
            border
            border-seam
            bg-white
            p-4
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-widest
              text-ink/50
            "
          >
            Centimeters
          </p>

          <p
            className="
              mt-2
              font-mono
              text-3xl
              font-bold
              text-denim
            "
          >
            {result.cm.toFixed(2)}
          </p>

          <p
            className="
              mt-1
              text-sm
              text-ink/60
            "
          >
            cm
          </p>
        </div>

        <div
          className="
            rounded-xl
            border
            border-seam
            bg-white
            p-4
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-widest
              text-ink/50
            "
          >
            Millimeters
          </p>

          <p
            className="
              mt-2
              font-mono
              text-3xl
              font-bold
              text-denim
            "
          >
            {result.mm.toFixed(1)}
          </p>

          <p
            className="
              mt-1
              text-sm
              text-ink/60
            "
          >
            mm
          </p>
        </div>
      </div>

      {/* Info */}

      <div
        className="
          mt-6
          rounded-xl
          border
          border-seam
          bg-white
          p-4
        "
      >
        <p
          className="
            text-sm
            leading-7
            text-ink/75
          "
        >
          <strong>{fraction}&quot;</strong> equals{" "}
          <strong>{result.decimal.toFixed(4)}</strong> inches,{" "}
          <strong>{result.cm.toFixed(2)} cm</strong>, or{" "}
          <strong>{result.mm.toFixed(1)} mm</strong>. This conversion is
          commonly used when reading sewing patterns, seam allowances, quilting
          measurements, and fabric cutting guides.
        </p>
      </div>
    </section>
  );
}

export default FractionConverter;
