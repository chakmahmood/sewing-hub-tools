"use client";

import { getEaseRecommendation, type SizeResult } from "../lib/calculateSize";

interface ResultCardsProps {
  result: SizeResult;
}

export function ResultCards({ result }: ResultCardsProps) {
  const ease = getEaseRecommendation(result.score);
  const primaryLabel = result.primaryLabel;

  const cards = [
    {
      label: "Letter",
      value: result.size.letter,
    },
    {
      label: "US",
      value: result.size.us,
    },
    {
      label: "UK",
      value: result.size.uk,
    },
    {
      label: "EU",
      value: result.size.eu,
    },
  ];

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
        <h2 className="font-display text-2xl font-semibold text-ink">
          Recommended Pattern Size
        </h2>

        <p className="mt-2 text-sm leading-6 text-ink/70">
          Based on your body measurements, this is the closest standard sewing
          pattern size.
        </p>
      </div>

      {/* Size Cards */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="
              rounded-xl
              border
              border-seam
              bg-white
              p-5
              text-center
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
              {card.label}
            </p>

            <p
              className="
                mt-2
                font-display
                text-4xl
                font-semibold
                text-denim
              "
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Fit */}

      <div
        className="
          mt-6
          rounded-xl
          border
          border-seam
          bg-white
          p-5
        "
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold text-denim">Fit Recommendation</h3>

            <p className="mt-2 text-sm text-ink/70">{ease.description}</p>
          </div>

          <span
            className="
              rounded-full
              bg-denim
              px-4
              py-2
              text-sm
              font-semibold
              text-white
            "
          >
            {ease.level}
          </span>
        </div>
      </div>

      {/* Differences */}

      <div
        className="
          mt-6
          rounded-xl
          border
          border-seam
          bg-white
          p-5
        "
      >
        <h3 className="font-semibold text-denim">Measurement Difference</h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-xs uppercase tracking-wide text-ink/50">
              {primaryLabel}
            </p>

            <p className="mt-2 font-mono text-2xl font-semibold text-ink">
              {result.differences.primary.toFixed(1)} cm
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-wide text-ink/50">Waist</p>

            <p className="mt-2 font-mono text-2xl font-semibold text-ink">
              {result.differences.waist.toFixed(1)} cm
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-wide text-ink/50">Hip</p>

            <p className="mt-2 font-mono text-2xl font-semibold text-ink">
              {result.differences.hip.toFixed(1)} cm
            </p>
          </div>
        </div>
      </div>

      {/* Tip */}

      <div
        className="
          mt-6
          rounded-xl
          border
          border-blue-200
          bg-blue-50
          p-5
        "
      >
        <h3 className="font-semibold text-blue-900">Sewing Tip</h3>

        <p className="mt-3 text-sm leading-7 text-blue-900/80">
          Sewing pattern sizes are based on body measurements, not ready-to-wear
          clothing sizes. Always compare your measurements with the pattern
          manufacturer&apos;s size chart before cutting your fabric.
        </p>
      </div>
    </section>
  );
}

export default ResultCards;
