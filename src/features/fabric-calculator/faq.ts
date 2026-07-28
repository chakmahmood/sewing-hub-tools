export interface FAQItem {
  question: string;
  answer: string;
}

export const FABRIC_CALCULATOR_FAQS: readonly FAQItem[] = [
  {
    question: "What is a fabric yardage calculator?",
    answer:
      "A fabric yardage calculator estimates how much fabric you need based on your sewing project, size, fabric width, sleeve style, and seam allowance. It helps reduce waste and prevents buying too little fabric.",
  },

  {
    question: "How do I calculate fabric yardage?",
    answer:
      "Choose your sewing project, fabric width, garment size, sleeve style, and seam allowance. The calculator automatically estimates the required fabric in both yards and meters.",
  },

  {
    question: "How much fabric do I need for clothing?",
    answer:
      "The amount depends on the garment, body size, fabric width, and design details. Simple skirts may need around 1–2 yards, while dresses, coats, or long garments often require 2–5 yards or more.",
  },

  {
    question: "Can I use this fabric yardage calculator for quilts?",
    answer:
      "Yes. It can provide a general estimate for quilt projects. For quilt backing, binding, and complex quilt layouts, a dedicated quilt calculator may provide more precise measurements.",
  },

  {
    question: "How do I calculate fabric yardage for quilt backing?",
    answer:
      "Measure the quilt's finished width and length, then add extra inches for overhang and quilting. Large quilts often require pieced backing, which changes the total yardage needed.",
  },

  {
    question: "Can I calculate fabric yardage for curtains?",
    answer:
      "Curtain fabric depends on window width, curtain length, fullness, hems, and fabric width. This calculator provides a general estimate, while dedicated curtain calculators offer more detailed results.",
  },

  {
    question: "Can I calculate fabric yardage for upholstery or cushions?",
    answer:
      "Yes, but upholstery projects require furniture dimensions, seam placement, pattern repeat, and fabric direction. This calculator is best suited for general sewing and garment projects.",
  },

  {
    question: "Does fabric width affect the amount of fabric required?",
    answer:
      "Yes. Wider fabrics allow more pattern pieces to fit across the fabric, reducing the total yardage required compared with narrower fabric widths.",
  },

  {
    question: "Why should I add extra fabric allowance?",
    answer:
      "Additional fabric helps account for shrinkage, directional prints, pattern matching, cutting mistakes, seam allowances, and future alterations or repairs.",
  },

  {
    question: "Is this fabric yardage calculator free?",
    answer:
      "Yes. Sewing Hub's Fabric Yardage Calculator is completely free to use online without registration or downloads.",
  },
];
