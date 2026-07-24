// lib/converter.ts

/**
 * Sewing Hub
 * Universal unit conversion library
 */

const INCH_TO_CM = 2.54;
const INCH_TO_MM = 25.4;
const YARD_TO_METER = 0.9144;

export function round(value: number, decimals = 2): number {
  return Number(value.toFixed(decimals));
}

/* ---------------------------------------------------------
 * Inches
 * -------------------------------------------------------*/

export function inchToCm(inches: number): number {
  return round(inches * INCH_TO_CM);
}

export function inchToMm(inches: number): number {
  return round(inches * INCH_TO_MM, 1);
}

export function inchToMeter(inches: number): number {
  return round(inches * 0.0254, 4);
}

export function inchToYard(inches: number): number {
  return round(inches / 36, 4);
}

/**
 * Convenience helper that returns multiple unit conversions from an inches value
 */
export function convertFromInches(inches: number) {
  return {
    cm: inchToCm(inches),
    mm: inchToMm(inches),
    meters: inchToMeter(inches),
    yards: inchToYard(inches),
  };
}

/* ---------------------------------------------------------
 * Centimeters
 * -------------------------------------------------------*/

export function cmToInch(cm: number): number {
  return round(cm / INCH_TO_CM, 4);
}

export function cmToMm(cm: number): number {
  return round(cm * 10, 1);
}

export function cmToMeter(cm: number): number {
  return round(cm / 100, 4);
}

export function cmToYard(cm: number): number {
  return round(cm / 91.44, 4);
}

/* ---------------------------------------------------------
 * Millimeters
 * -------------------------------------------------------*/

export function mmToCm(mm: number): number {
  return round(mm / 10, 2);
}

export function mmToInch(mm: number): number {
  return round(mm / INCH_TO_MM, 4);
}

/* ---------------------------------------------------------
 * Yards
 * -------------------------------------------------------*/

export function yardToMeter(yards: number): number {
  return round(yards * YARD_TO_METER, 2);
}

export function yardToInch(yards: number): number {
  return round(yards * 36, 2);
}

export function yardToCm(yards: number): number {
  return round(yards * 91.44, 2);
}

/* ---------------------------------------------------------
 * Meters
 * -------------------------------------------------------*/

export function meterToYard(meters: number): number {
  return round(meters / YARD_TO_METER, 2);
}

export function meterToCm(meters: number): number {
  return round(meters * 100, 2);
}

export function meterToInch(meters: number): number {
  return round(meters / 0.0254, 2);
}

/* ---------------------------------------------------------
 * Fraction helpers
 * -------------------------------------------------------*/

export function fractionToDecimal(fraction: string): number {
  if (!fraction.includes("/")) {
    return Number(fraction);
  }

  const [top, bottom] = fraction.split("/").map(Number);

  if (!bottom) return 0;

  return round(top / bottom, 4);
}

export function decimalToFraction(decimal: number): string {
  const fractions = [
    { value: 1 / 16, label: "1/16" },
    { value: 1 / 8, label: "1/8" },
    { value: 3 / 16, label: "3/16" },
    { value: 1 / 4, label: "1/4" },
    { value: 5 / 16, label: "5/16" },
    { value: 3 / 8, label: "3/8" },
    { value: 7 / 16, label: "7/16" },
    { value: 1 / 2, label: "1/2" },
    { value: 9 / 16, label: "9/16" },
    { value: 5 / 8, label: "5/8" },
    { value: 11 / 16, label: "11/16" },
    { value: 3 / 4, label: "3/4" },
    { value: 13 / 16, label: "13/16" },
    { value: 7 / 8, label: "7/8" },
    { value: 15 / 16, label: "15/16" },
    { value: 1, label: "1" },
  ];

  let closest = fractions[0];

  for (const item of fractions) {
    if (Math.abs(item.value - decimal) < Math.abs(closest.value - decimal)) {
      closest = item;
    }
  }

  return closest.label;
}

/* ---------------------------------------------------------
 * Round to nearest sewing fraction
 * (1/16")
 * -------------------------------------------------------*/

export function roundFraction(decimal: number): number {
  return Math.round(decimal * 16) / 16;
}

/* ---------------------------------------------------------
 * Format helpers
 * -------------------------------------------------------*/

export function formatLength(
  value: number,
  unit: string,
  decimals = 2,
): string {
  return `${value.toFixed(decimals)} ${unit}`;
}

export function formatYards(yards: number): string {
  return `${yards.toFixed(2)} yd`;
}

export function formatMeters(meters: number): string {
  return `${meters.toFixed(2)} m`;
}

export function formatInches(inches: number): string {
  return `${inches.toFixed(2)}"`;
}

export function formatCm(cm: number): string {
  return `${cm.toFixed(2)} cm`;
}
