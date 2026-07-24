// data/conversions.ts

/**
 * Sewing Hub
 * Shared conversion data & reference tables
 */

/* =========================================================
 * Conversion constants
 * =======================================================*/

export const CONVERSION = {
  INCH_TO_CM: 2.54,

  INCH_TO_MM: 25.4,

  INCH_TO_METER: 0.0254,

  YARD_TO_INCH: 36,

  YARD_TO_CM: 91.44,

  YARD_TO_METER: 0.9144,

  CM_TO_INCH: 0.393700787,

  MM_TO_INCH: 0.0393700787,
} as const;

/* =========================================================
 * Common sewing fractions
 * =======================================================*/

export const COMMON_FRACTIONS = [
  "1/16",
  "1/8",
  "3/16",
  "1/4",
  "5/16",
  "3/8",
  "7/16",
  "1/2",
  "9/16",
  "5/8",
  "11/16",
  "3/4",
  "13/16",
  "7/8",
  "15/16",
  "1",
] as const;

/* =========================================================
 * Fraction lookup
 * =======================================================*/

export const FRACTION_VALUES = [
  {
    fraction: "1/16",
    decimal: 0.0625,
    inches: 0.0625,
    cm: 0.16,
    mm: 1.6,
  },
  {
    fraction: "1/8",
    decimal: 0.125,
    inches: 0.125,
    cm: 0.32,
    mm: 3.2,
  },
  {
    fraction: "3/16",
    decimal: 0.1875,
    inches: 0.1875,
    cm: 0.48,
    mm: 4.8,
  },
  {
    fraction: "1/4",
    decimal: 0.25,
    inches: 0.25,
    cm: 0.64,
    mm: 6.4,
  },
  {
    fraction: "5/16",
    decimal: 0.3125,
    inches: 0.3125,
    cm: 0.79,
    mm: 7.9,
  },
  {
    fraction: "3/8",
    decimal: 0.375,
    inches: 0.375,
    cm: 0.95,
    mm: 9.5,
  },
  {
    fraction: "7/16",
    decimal: 0.4375,
    inches: 0.4375,
    cm: 1.11,
    mm: 11.1,
  },
  {
    fraction: "1/2",
    decimal: 0.5,
    inches: 0.5,
    cm: 1.27,
    mm: 12.7,
  },
  {
    fraction: "9/16",
    decimal: 0.5625,
    inches: 0.5625,
    cm: 1.43,
    mm: 14.3,
  },
  {
    fraction: "5/8",
    decimal: 0.625,
    inches: 0.625,
    cm: 1.59,
    mm: 15.9,
  },
  {
    fraction: "11/16",
    decimal: 0.6875,
    inches: 0.6875,
    cm: 1.75,
    mm: 17.5,
  },
  {
    fraction: "3/4",
    decimal: 0.75,
    inches: 0.75,
    cm: 1.91,
    mm: 19.1,
  },
  {
    fraction: "13/16",
    decimal: 0.8125,
    inches: 0.8125,
    cm: 2.06,
    mm: 20.6,
  },
  {
    fraction: "7/8",
    decimal: 0.875,
    inches: 0.875,
    cm: 2.22,
    mm: 22.2,
  },
  {
    fraction: "15/16",
    decimal: 0.9375,
    inches: 0.9375,
    cm: 2.38,
    mm: 23.8,
  },
  {
    fraction: "1",
    decimal: 1,
    inches: 1,
    cm: 2.54,
    mm: 25.4,
  },
] as const;

/* =========================================================
 * Common seam allowances
 * =======================================================*/

export const SEAM_ALLOWANCES = [
  {
    inches: "1/4",
    cm: "0.64",
    note: "Quilting standard",
  },
  {
    inches: "3/8",
    cm: "0.95",
    note: "Light garments",
  },
  {
    inches: "1/2",
    cm: "1.27",
    note: "Commercial patterns",
  },
  {
    inches: "5/8",
    cm: "1.59",
    note: "US Big 4 patterns",
  },
  {
    inches: "3/4",
    cm: "1.91",
    note: "Fitting adjustments",
  },
  {
    inches: "1",
    cm: "2.54",
    note: "Home décor & bags",
  },
] as const;

/* =========================================================
 * Common fabric widths
 * =======================================================*/

export const FABRIC_WIDTH_REFERENCE = [
  {
    inches: 36,
    cm: 91,
    label: '36"',
  },
  {
    inches: 44,
    cm: 112,
    label: '44"',
  },
  {
    inches: 45,
    cm: 114,
    label: '45"',
  },
  {
    inches: 54,
    cm: 137,
    label: '54"',
  },
  {
    inches: 58,
    cm: 147,
    label: '58"',
  },
  {
    inches: 60,
    cm: 152,
    label: '60"',
  },
] as const;

/* =========================================================
 * Common quilting sizes
 * =======================================================*/

export const QUILT_SIZES = [
  {
    name: "Baby",
    width: '36"',
    height: '45"',
  },
  {
    name: "Throw",
    width: '50"',
    height: '65"',
  },
  {
    name: "Twin",
    width: '70"',
    height: '90"',
  },
  {
    name: "Queen",
    width: '90"',
    height: '108"',
  },
  {
    name: "King",
    width: '108"',
    height: '108"',
  },
] as const;
