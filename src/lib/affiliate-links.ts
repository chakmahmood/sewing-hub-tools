// Swap in real affiliate URLs (Amazon Associates, Etsy, LoveCrafts, fabric.com, etc).
// Keeping this separate from components means updating a link never needs a redeploy
// of page logic — and later this can move to a CMS or DB table.

export type AffiliateProduct = {
  id: string;
  label: string;
  note: string;
  url: string; // replace YOUR_TAG with your real affiliate tag
};

export const affiliateProducts: Record<string, AffiliateProduct> = {
  cottonFabric: {
    id: "cottonFabric",
    label: "Quilting-weight cotton fabric",
    note: "Good default for the yardage this calculator just gave you.",
    url: "https://www.amazon.com/s?k=quilting+cotton+fabric&tag=shofy0f-20",
  },
  stretchKnit: {
    id: "stretchKnit",
    label: "Stretch knit fabric",
    note: "For knit / jersey projects.",
    url: "https://www.amazon.com/s?k=stretch+knit+fabric&tag=shofy0f-20",
  },
  measuringTape: {
    id: "measuringTape",
    label: "Soft dressmaker's measuring tape",
    note: "Needed to take the body measurements this tool asks for.",
    url: "https://www.amazon.com/s?k=dressmaker+measuring+tape&tag=shofy0f-20",
  },
  universalNeedles: {
    id: "universalNeedles",
    label: "Universal machine needle multipack",
    note: "Covers most woven fabrics.",
    url: "https://www.amazon.com/s?k=universal+sewing+machine+needles&tag=shofy0f-20",
  },
  stretchNeedles: {
    id: "stretchNeedles",
    label: "Stretch/ballpoint needles",
    note: "Prevents skipped stitches on knits.",
    url: "https://www.amazon.com/s?k=ballpoint+stretch+sewing+needles&tag=shofy0f-20",
  },
  denimNeedles: {
    id: "denimNeedles",
    label: "Denim/jeans needles",
    note: "Sized for heavyweight woven fabric.",
    url: "https://www.amazon.com/s?k=denim+jeans+sewing+machine+needles&tag=shofy0f-20",
  },
  allPurposeThread: {
    id: "allPurposeThread",
    label: "All-purpose polyester thread",
    note: "Matches most fabric weights.",
    url: "https://www.amazon.com/s?k=all+purpose+sewing+thread&tag=shofy0f-20",
  },
  seamGauge: {
    id: "seamGauge",
    label: "6-inch seam gauge",
    note: "Handy for checking seam allowance fast.",
    url: "https://www.amazon.com/s?k=sewing+seam+gauge&tag=shofy0f-20",
  },
  rotaryCutter: {
    id: "rotaryCutter",
    label: "Rotary Cutter",
    note: "Cuts fabric quickly with clean, accurate edges.",
    url: "https://www.amazon.com/s?k=rotary+cutter+sewing&tag=shofy0f-20",
  },
  cuttingMat: {
    id: "cuttingMat",
    label: "Self-Healing Cutting Mat",
    note: "Protects your table while using a rotary cutter.",
    url: "https://www.amazon.com/s?k=self+healing+cutting+mat&tag=shofy0f-20",
  },
};
