// features/fabric-yardage/lib/calculator.ts

import { FabricCalculationInput, FabricCalculationResult } from "../types";

import { PROJECT_DATABASE } from "../data/projects";

import { getFabricType } from "../data/fabricTypes";

/**
 * Convert fabric width into inches
 *
 * Common fabric widths:
 *
 * 90cm  = 35.43"
 * 110cm = 43.31"
 * 140cm = 55.12"
 * 150cm = 59.06"
 */
function normalizeWidth(width: number): number {
  switch (width) {
    case 90:
      return 35.43;

    case 110:
      return 43.31;

    case 140:
      return 55.12;

    case 150:
      return 59.06;

    default:
      return width;
  }
}

/**
 * Round up to nearest 1/4 yard
 */
function roundQuarter(value: number): number {
  return Math.ceil(value * 4) / 4;
}

/**
 * Calculate fabric yardage
 */
export function calculateFabric(
  input: FabricCalculationInput,
): FabricCalculationResult {
  /**
   * Get project requirement
   *
   * Example:
   * Dress + M + Long Sleeve
   */
  const project = PROJECT_DATABASE[input.project];

  if (!project) {
    throw new Error(`Unknown project: ${input.project}`);
  }

  const base = project.base[input.size][input.sleeve];

  /**
   * Fabric width adjustment
   *
   * Database reference:
   * 45 inch fabric
   */
  const width = normalizeWidth(input.fabricWidth);

  const widthAdjusted = base * (45 / width);

  /**
   * Fabric behavior adjustment
   *
   * Example:
   *
   * Woven = 1.00
   * Denim = 1.15
   * Canvas = 1.20
   */
  const fabric = getFabricType(input.fabricType);

  const fabricAdjusted = widthAdjusted * fabric.multiplier;

  /**
   * Allowance adjustment
   *
   * seams
   * shrinkage
   * pattern matching
   * mistakes
   */
  const withAllowance = fabricAdjusted * (1 + input.allowance / 100);

  /**
   * Final rounded result
   */
  const neededYards = roundQuarter(withAllowance);

  /**
   * Recommended purchase
   *
   * Add extra 1/4 yard buffer
   */
  const recommendedPurchase = roundQuarter(neededYards + 0.25);

  /**
   * Convert yard to meter
   */
  const meters = Number((neededYards * 0.9144).toFixed(2));

  /**
   * Extra reserved fabric
   */
  const estimatedWaste = Number(
    Math.max(0, recommendedPurchase - neededYards).toFixed(2),
  );

  /**
   * Human readable summary
   */
  const summary = `${fabric.label} fabric with ${input.fabricWidth}" width requires approximately ${neededYards} yards.`;

  /**
   * Sewing tips
   */
  const fabricTip = fabric.description;

  /**
   * Cutting advice
   */
  const cuttingNote =
    input.allowance >= 15
      ? "Extra allowance included. Useful for pattern matching, shrinkage, or fitting adjustments."
      : "Pre-wash fabric before cutting to minimize shrinkage after sewing.";

  return {
    /**
     * Final result
     */
    neededYards,

    recommendedPurchase,

    meters,

    estimatedWaste,

    /**
     * Calculation breakdown
     */
    baseYards: Number(base.toFixed(2)),

    widthAdjustedYards: Number(widthAdjusted.toFixed(2)),

    fabricAdjustedYards: Number(fabricAdjusted.toFixed(2)),

    allowancePercent: input.allowance,

    fabricMultiplier: fabric.multiplier,

    /**
     * Display data
     */
    summary,

    fabricTip,

    cuttingNote,
  };
}
