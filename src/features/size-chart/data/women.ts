export interface WomenSize {
  id: string;
  letter: string;
  us: string;
  uk: string;
  eu: string;
  bust: number;
  waist: number;
  hip: number;
}

/**
 * FIX (prev bug): `letter` bukan identifier unik — ada 2 baris "S" (US 4 & 6)
 * dan 2 baris "M" (US 8 & 10). Ini valid secara industri (satu letter size
 * memang bisa mencakup >1 numeric size), TAPI kalau kode lain mencari row
 * berdasarkan `letter` saja, hasilnya ambigu (bisa dapat baris yang salah).
 * Solusi: tambahkan `id` unik per baris sebagai primary key. `letter` tetap
 * dipakai untuk label tampilan (UI), bukan untuk pencarian/lookup.
 *
 * Grading: 4cm/step untuk XXS–L, lalu 6cm/step untuk XL ke atas (plus-size
 * grading lebih lebar) — konsisten di bust/waist/hip, ini pola industri yang
 * disengaja, bukan bug.
 */
export const WOMEN_SIZE_CHART: readonly WomenSize[] = [
  {
    id: "women-xxs",
    letter: "XXS",
    us: "0",
    uk: "4",
    eu: "32",
    bust: 80,
    waist: 60,
    hip: 84,
  },
  {
    id: "women-xs",
    letter: "XS",
    us: "2",
    uk: "6",
    eu: "34",
    bust: 84,
    waist: 64,
    hip: 88,
  },
  {
    id: "women-s-4",
    letter: "S",
    us: "4",
    uk: "8",
    eu: "36",
    bust: 88,
    waist: 68,
    hip: 92,
  },
  {
    id: "women-s-6",
    letter: "S",
    us: "6",
    uk: "10",
    eu: "38",
    bust: 92,
    waist: 72,
    hip: 96,
  },
  {
    id: "women-m-8",
    letter: "M",
    us: "8",
    uk: "12",
    eu: "40",
    bust: 96,
    waist: 76,
    hip: 100,
  },
  {
    id: "women-m-10",
    letter: "M",
    us: "10",
    uk: "14",
    eu: "42",
    bust: 100,
    waist: 80,
    hip: 104,
  },
  {
    id: "women-l",
    letter: "L",
    us: "12",
    uk: "16",
    eu: "44",
    bust: 104,
    waist: 84,
    hip: 108,
  },
  {
    id: "women-xl",
    letter: "XL",
    us: "14",
    uk: "18",
    eu: "46",
    bust: 110,
    waist: 90,
    hip: 114,
  },
  {
    id: "women-2xl",
    letter: "2XL",
    us: "16",
    uk: "20",
    eu: "48",
    bust: 116,
    waist: 96,
    hip: 120,
  },
  {
    id: "women-3xl",
    letter: "3XL",
    us: "18",
    uk: "22",
    eu: "50",
    bust: 122,
    waist: 102,
    hip: 126,
  },
  {
    id: "women-4xl",
    letter: "4XL",
    us: "20",
    uk: "24",
    eu: "52",
    bust: 128,
    waist: 108,
    hip: 132,
  },
] as const;

export default WOMEN_SIZE_CHART;
