export type MenSize = {
  id: string;
  letter: string;
  chest: number;
  waist: number;
  hip: number;
  us: string;
  uk: string;
  eu: string;
};

/**
 * FIX (prev bug): `hip` sebelumnya di-copy-paste dari `chest` di semua baris
 * (chest === hip persis untuk 10 size). Secara anatomi pria, hip tidak pernah
 * identik dengan chest. Data di bawah menggunakan drop hip ~+2cm dari chest,
 * dengan grading 5cm per step (naik 6cm di step terakhir, konsisten dengan
 * pola grading chest & waist yang sudah ada — bukan bug, ini desain umum
 * "wider grading" di ukuran paling besar).
 *
 * CATATAN: Angka drop (+2cm) ini adalah asumsi umum industri untuk menswear
 * standar (woven, non-atletik). Sebelum rilis final, mohon konfirmasi ke
 * tim pattern/grading untuk validasi terhadap size spec brand yang sebenarnya.
 */
export const MEN_SIZE_CHART: readonly MenSize[] = [
  {
    id: "men-xs",
    letter: "XS",
    chest: 86,
    waist: 71,
    hip: 88,
    us: "34",
    uk: "34",
    eu: "44",
  },
  {
    id: "men-s",
    letter: "S",
    chest: 91,
    waist: 76,
    hip: 93,
    us: "36",
    uk: "36",
    eu: "46",
  },
  {
    id: "men-m",
    letter: "M",
    chest: 96,
    waist: 81,
    hip: 98,
    us: "38",
    uk: "38",
    eu: "48",
  },
  {
    id: "men-l",
    letter: "L",
    chest: 101,
    waist: 86,
    hip: 103,
    us: "40",
    uk: "40",
    eu: "50",
  },
  {
    id: "men-xl",
    letter: "XL",
    chest: 106,
    waist: 91,
    hip: 108,
    us: "42",
    uk: "42",
    eu: "52",
  },
  {
    id: "men-xxl",
    letter: "XXL",
    chest: 111,
    waist: 96,
    hip: 113,
    us: "44",
    uk: "44",
    eu: "54",
  },
  {
    id: "men-3xl",
    letter: "3XL",
    chest: 116,
    waist: 101,
    hip: 118,
    us: "46",
    uk: "46",
    eu: "56",
  },
  {
    id: "men-4xl",
    letter: "4XL",
    chest: 121,
    waist: 106,
    hip: 123,
    us: "48",
    uk: "48",
    eu: "58",
  },
  {
    id: "men-5xl",
    letter: "5XL",
    chest: 126,
    waist: 111,
    hip: 128,
    us: "50",
    uk: "50",
    eu: "60",
  },
  {
    id: "men-6xl",
    letter: "6XL",
    chest: 132,
    waist: 117,
    hip: 134,
    us: "52",
    uk: "52",
    eu: "62",
  },
] as const;

export default MEN_SIZE_CHART;
