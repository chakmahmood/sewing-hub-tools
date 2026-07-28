"use client";

import { CalculatorForm } from "./CalculatorForm";

import { useFabricCalculator } from "../hooks/useFabricCalculator";

import { ToolShell } from "@/components/ui/ToolShell";
import { ResultMetric } from "@/components/ui/ResultMetric";
import { AffiliateCard } from "@/components/ui/AffiliateCard";

import { affiliateProducts } from "@/lib/affiliate-links";

import { getFabricType } from "../data";

import { getRecommendations } from "../lib/recommendations";
import { BookmarkPrompt } from "@/components/ui/BookmarkPrompt";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { FABRIC_CALCULATOR_FAQS } from "../faq";

export function FabricYardageCalculator() {
  const calculator = useFabricCalculator();

  const { state, result } = calculator;

  const recommendations = getRecommendations({
    project: state.project,
    fabricType: state.fabricType,
  });

  const selectedFabric = getFabricType(state.fabricType);

  return (
    <ToolShell
      title="Fabric Yardage Calculator"
      tagline="Choose your project and fabric details to get a reliable yardage estimate."
    >
      <div
        className="
          grid
          gap-8
          xl:grid-cols-[1.2fr_0.8fr]
        "
      >
        {/* LEFT COLUMN */}

        <div className="space-y-6">
          <CalculatorForm calculator={calculator} />

          {/* RECOMMENDATIONS */}

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
                Recommended supplies
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-ink/70
                "
              >
                Based on your sewing project and selected fabric.
              </p>
            </div>

            <div className="space-y-4">
              {recommendations.length > 0 ? (
                recommendations.map((item) => (
                  <div
                    key={item.id}
                    className="
                        rounded-xl
                        bg-white
                        p-4
                        ring-1
                        ring-seam
                        transition
                        hover:shadow-md
                      "
                  >
                    <div
                      className="
                          flex
                          items-start
                          justify-between
                          gap-4
                        "
                    >
                      <h4
                        className="
                            font-semibold
                            leading-snug
                            text-ink
                          "
                      >
                        {item.title}
                      </h4>

                      {item.featured && (
                        <span
                          className="
                                shrink-0
                                rounded-full
                                bg-denim/10
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                text-denim
                                ring-1
                                ring-denim/20
                              "
                        >
                          Recommended
                        </span>
                      )}
                    </div>

                    <p
                      className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-ink/70
                        "
                    >
                      {item.description}
                    </p>

                    <span
                      className="
                          mt-3
                          inline-flex
                          rounded-full
                          bg-seam/40
                          px-2.5
                          py-1
                          text-xs
                          font-medium
                          capitalize
                          text-ink/70
                        "
                    >
                      {item.category}
                    </span>
                  </div>
                ))
              ) : (
                <p
                  className="
                      text-sm
                      text-ink/70
                    "
                >
                  No recommendations available.
                </p>
              )}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}

        <div className="space-y-6">
          {/* RESULT CARD */}

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
                Yardage estimate
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-ink/70
                "
              >
                Calculated using <strong>{selectedFabric.label}</strong>, fabric
                width, size, sleeve style, and sewing allowance.
              </p>

              <div
                className="
                  mt-4
                  rounded-xl
                  bg-white
                  p-4
                  text-sm
                  leading-relaxed
                  text-ink/70
                  ring-1
                  ring-seam
                "
              >
                <p>
                  <strong>Fabric tip:</strong>{" "}
                  {result.fabricTip ?? selectedFabric.description}
                </p>

                {result.cuttingNote && (
                  <p className="mt-3">
                    <strong>Cutting note:</strong> {result.cuttingNote}
                  </p>
                )}
              </div>
            </div>

            <div
              className="
                grid
                gap-4
                sm:grid-cols-2
              "
            >
              <ResultMetric
                title="Needed"
                value={`${result.neededYards.toFixed(2)} yd`}
                subtitle="Rounded up to nearest 1/4 yard"
              />

              <ResultMetric
                title="Buy"
                value={`${result.recommendedPurchase.toFixed(2)} yd`}
                subtitle="Suggested purchase amount"
              />

              <ResultMetric
                title="Meters"
                value={`${result.meters.toFixed(2)} m`}
                subtitle="Converted from yards"
              />

              <ResultMetric
                title="Waste"
                value={`${result.estimatedWaste.toFixed(2)} yd`}
                subtitle="Extra fabric reserved"
              />
            </div>
          </section>

          {/* AFFILIATE */}

          <section className="space-y-3">
            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-widest
                text-ink/50
              "
            >
              Get the right supplies
            </p>

            <AffiliateCard product={affiliateProducts.cottonFabric} />

            <AffiliateCard product={affiliateProducts.measuringTape} />
          </section>
        </div>
      </div>
      <BookmarkPrompt enabled={result.neededYards > 0} />
      <FAQAccordion
        faqs={FABRIC_CALCULATOR_FAQS}
        title="Fabric Yardage Calculator FAQ"
        description="Everything you need to know before buying fabric for your next sewing project."
      />
    </ToolShell>
  );
}
