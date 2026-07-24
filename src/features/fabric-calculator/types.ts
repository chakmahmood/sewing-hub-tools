// features/fabric-yardage/types.ts

/* ============================================================
 * Shared Types
 * ============================================================ */

export type Primitive = string | number;

export interface SelectOption<T extends Primitive> {
  value: T;
  label: string;
}

/* ============================================================
 * Domain Types
 * ============================================================ */

export type MeasurementUnit = "yards" | "meters";

export type Unit = MeasurementUnit;

export type ProjectId =
  | "dress"
  | "shirt"
  | "tshirt"
  | "pants"
  | "shorts"
  | "skirt"
  | "jacket"
  | "hoodie"
  | "tote-bag"
  | "apron"
  | "pillow-cover"
  | "curtain"
  | "table-runner"
  | "quilt";

export type SizeId = "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl";

export type SleeveId = "none" | "short" | "three-quarter" | "long";

/**
 * Fabric categories
 */
export type FabricTypeId =
  | "woven"
  | "lightweight-woven"
  | "knit"
  | "stretch-knit"
  | "denim"
  | "canvas"
  | "linen"
  | "quilting-cotton";

/* ============================================================
 * Fabric Type
 * ============================================================ */

export interface FabricType {
  id: FabricTypeId;

  label: string;

  description: string;

  /**
   * Yardage adjustment multiplier
   *
   * 1.00 = normal fabric
   * 1.10 = needs 10% more fabric
   */
  multiplier: number;

  recommendedNeedle: string;

  recommendedThread: string;

  recommendedFoot?: string;
}

/* ============================================================
 * Dropdown Options
 * ============================================================ */

export type ProjectOption = SelectOption<ProjectId>;

export type FabricWidthOption = SelectOption<number>;

export type SizeOption = SelectOption<SizeId>;

export type SleeveOption = SelectOption<SleeveId>;

export type AllowanceOption = SelectOption<number>;

export type FabricTypeOption = SelectOption<FabricTypeId>;

/* ============================================================
 * Calculator Input
 * ============================================================ */

export interface FabricCalculationInput {
  /**
   * Sewing project
   */
  project: ProjectId;

  /**
   * Garment size
   */
  size: SizeId;

  /**
   * Sleeve style
   */
  sleeve: SleeveId;

  /**
   * Fabric type
   */
  fabricType: FabricTypeId;

  /**
   * Fabric width
   *
   * Inches:
   * 36
   * 44
   * 45
   * 54
   * 58
   * 60
   *
   * Centimeters:
   * 90
   * 110
   * 140
   * 150
   */
  fabricWidth: number;

  /**
   * Extra allowance percentage
   *
   * Example:
   * 0
   * 5
   * 10
   * 15
   */
  allowance: number;
}

/* ============================================================
 * Shopping Checklist
 * ============================================================ */

export interface ChecklistItem {
  id: string;

  label: string;

  checked: boolean;
}

/* ============================================================
 * Affiliate Recommendation
 * ============================================================ */

export type RecommendationCategory =
  | "fabric"
  | "needle"
  | "thread"
  | "pattern"
  | "tool"
  | "notion";

export interface RecommendationItem {
  id: string;

  title: string;

  description: string;

  category: RecommendationCategory;

  affiliateUrl?: string;

  image?: string;

  featured?: boolean;
}

export type RecommendationMap = Partial<
  Record<ProjectId, RecommendationItem[]>
>;

/* ============================================================
 * Dynamic SEO
 * ============================================================ */

export interface SeoExplanation {
  heading: string;

  description: string;
}

/* ============================================================
 * Calculator Result
 * ============================================================ */

/* ============================================================
 * Calculator Result
 * ============================================================ */

export interface FabricCalculationResult {
  /**
   * Final fabric required
   * Rounded to nearest 1/4 yard
   */
  neededYards: number;

  /**
   * Suggested amount to purchase
   * Includes safety extra fabric
   */
  recommendedPurchase: number;

  /**
   * Converted meter value
   */
  meters: number;

  /**
   * Extra reserved fabric
   */
  estimatedWaste: number;

  /* ========================================================
   * Calculation Breakdown
   * ======================================================== */

  /**
   * Original project requirement
   *
   * Before adjustments
   */
  baseYards: number;

  /**
   * After fabric width adjustment
   */
  widthAdjustedYards: number;

  /**
   * After fabric multiplier adjustment
   */
  fabricAdjustedYards: number;

  /**
   * Final allowance percentage used
   */
  allowancePercent: number;

  /**
   * Selected fabric multiplier
   */
  fabricMultiplier: number;

  /* ========================================================
   * Display Information
   * ======================================================== */

  /**
   * Human readable explanation
   */
  summary: string;

  /**
   * Fabric sewing tips
   */
  fabricTip?: string;

  /**
   * Cutting notes
   */
  cuttingNote?: string;
}

/* ============================================================
 * Calculator State
 * ============================================================ */

export interface FabricCalculatorState extends FabricCalculationInput {
  unit: MeasurementUnit;
}

/* ============================================================
 * Hook
 * ============================================================ */

export interface UseFabricCalculatorReturn {
  state: FabricCalculatorState;

  result: FabricCalculationResult;

  updateField: <K extends keyof FabricCalculatorState>(
    key: K,
    value: FabricCalculatorState[K],
  ) => void;

  setProject: (value: ProjectId) => void;

  setSize: (value: SizeId) => void;

  setSleeve: (value: SleeveId) => void;

  setFabricType: (value: FabricTypeId) => void;

  setFabricWidth: (value: number) => void;

  setAllowance: (value: number) => void;

  setUnit: (value: Unit) => void;

  reset: () => void;
}
