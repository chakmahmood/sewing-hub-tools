import {
  MEN_SIZE_CHART,
  WOMEN_SIZE_CHART,
  type MenSize,
  type WomenSize,
} from "../data";

export type Unit = "cm" | "in";

export interface SizeInput {
  gender: "women" | "men";
  measurement: number;
  waist: number;
  hip: number;
  /**
   * FIX (prev bug): sebelumnya tidak ada param unit, sehingga fungsi ini
   * mengasumsikan input SELALU cm walau helper inchesToCm/cmToInches sudah
   * disediakan tapi tidak pernah dipanggil. Kalau caller lupa convert dari
   * inch, rekomendasi size jadi salah total tanpa error apapun.
   * Default "cm" agar backward compatible dengan pemanggilan lama.
   */
  unit?: Unit;
}

export interface SizeResult {
  size: MenSize | WomenSize;
  score: number;
  primaryLabel: string;
  differences: {
    primary: number;
    waist: number;
    hip: number;
  };
  /**
   * FIX (prev bug): tidak ada validasi range sebelumnya — user dengan
   * ukuran jauh di luar chart (mis. chest 40cm atau 400cm) tetap dipaksa
   * dapat "closest match" tanpa peringatan. Field ini memberi tahu caller
   * kalau hasil match sebenarnya di luar rentang chart yang wajar.
   */
  isOutOfRange: boolean;
}

/** Convert inch → cm */
export function inchesToCm(value: number): number {
  return value * 2.54;
}

/** Convert cm → inch */
export function cmToInches(value: number): number {
  return value / 2.54;
}

/** Normalize measurement ke cm (satuan internal chart) */
export function normalizeMeasurement(value: number, unit: Unit): number {
  return unit === "cm" ? value : inchesToCm(value);
}

function validatePositive(values: Record<string, number>) {
  for (const [key, value] of Object.entries(values)) {
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error(
        `Invalid measurement for "${key}": must be a positive number, received ${value}`,
      );
    }
  }
}

/**
 * Cek apakah measurement primary (chest/bust) berada di luar rentang
 * min–max chart yang bersangkutan.
 */
function isMeasurementOutOfRange(
  gender: "women" | "men",
  primaryCm: number,
): boolean {
  const values =
    gender === "men"
      ? MEN_SIZE_CHART.map((s) => s.chest)
      : WOMEN_SIZE_CHART.map((s) => s.bust);
  const min = Math.min(...values);
  const max = Math.max(...values);
  return primaryCm < min || primaryCm > max;
}

export function calculateSize({
  gender,
  measurement,
  waist,
  hip,
  unit = "cm",
}: SizeInput): SizeResult {
  // Validasi input dasar sebelum diproses
  validatePositive({ measurement, waist, hip });

  // FIX: normalisasi unit sekarang WAJIB dijalankan di dalam fungsi,
  // tidak lagi diserahkan ke caller.
  const measurementCm = normalizeMeasurement(measurement, unit);
  const waistCm = normalizeMeasurement(waist, unit);
  const hipCm = normalizeMeasurement(hip, unit);

  const primaryLabel = gender === "men" ? "Chest" : "Bust";

  const results =
    gender === "men"
      ? MEN_SIZE_CHART.map((size) => {
          const primaryDiff = Math.abs(size.chest - measurementCm);
          const waistDiff = Math.abs(size.waist - waistCm);
          const hipDiff = Math.abs(size.hip - hipCm);
          return {
            size,
            score: primaryDiff * 0.5 + waistDiff * 0.25 + hipDiff * 0.25,
            primaryLabel,
            differences: {
              primary: primaryDiff,
              waist: waistDiff,
              hip: hipDiff,
            },
          };
        })
      : WOMEN_SIZE_CHART.map((size) => {
          const primaryDiff = Math.abs(size.bust - measurementCm);
          const waistDiff = Math.abs(size.waist - waistCm);
          const hipDiff = Math.abs(size.hip - hipCm);
          return {
            size,
            score: primaryDiff * 0.5 + waistDiff * 0.25 + hipDiff * 0.25,
            primaryLabel,
            differences: {
              primary: primaryDiff,
              waist: waistDiff,
              hip: hipDiff,
            },
          };
        });

  results.sort((a, b) => a.score - b.score);
  const best = results[0];

  return {
    ...best,
    isOutOfRange: isMeasurementOutOfRange(gender, measurementCm),
  };
}

/** Returns recommended ease berdasarkan score fitting. */
export function getEaseRecommendation(score: number) {
  if (score <= 2) {
    return {
      level: "Excellent Fit",
      description: "Your measurements closely match this sewing pattern size.",
    };
  }
  if (score <= 5) {
    return {
      level: "Good Fit",
      description: "Minor fitting adjustments may be needed.",
    };
  }
  if (score <= 8) {
    return {
      level: "Loose Fit Recommended",
      description:
        "Consider choosing the next larger size if the pattern has little wearing ease.",
    };
  }
  return {
    level: "Custom Adjustment Recommended",
    description:
      "You may need to blend between sizes or alter the pattern for the best fit.",
  };
}
