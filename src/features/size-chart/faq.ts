export type FAQ = {
  question: string;
  answer: string;
};

export const SIZE_CHART_FAQS = [
  {
    question: "How do I measure myself for a sewing pattern?",
    answer:
      "Use a flexible measuring tape to measure your bust, waist, and hips while wearing lightweight clothing. Keep the tape level around your body without pulling it too tight. Compare your measurements with the pattern manufacturer's size chart instead of your everyday clothing size.",
  },
  {
    question: "Should I use my clothing size or my body measurements?",
    answer:
      "Always use your body measurements. Ready-to-wear clothing sizes vary widely between brands, while sewing patterns are drafted using body measurements.",
  },
  {
    question:
      "Why are sewing pattern sizes different from store clothing sizes?",
    answer:
      "Commercial sewing patterns follow standardized body measurements and often include wearing ease. Clothing brands frequently use vanity sizing, making ready-to-wear sizes larger than traditional pattern sizes.",
  },
  {
    question:
      "What if my bust, waist, and hip measurements fall into different sizes?",
    answer:
      "Choose the size that best matches your largest measurement, then blend between pattern sizes where needed. Many sewists grade between sizes for a better fit.",
  },
  {
    question: "Can I convert US sewing sizes to UK or EU sizes?",
    answer:
      "Yes. This size chart converter estimates equivalent US, UK, and EU sewing pattern sizes based on your body measurements.",
  },
  {
    question: "How accurate is this sewing size calculator?",
    answer:
      "The calculator provides an estimated sewing pattern size using standard body measurement charts. Always compare the result with the specific size chart included with your sewing pattern before cutting fabric.",
  },
  {
    question: "What measurements are most important for sewing patterns?",
    answer:
      "Bust, waist, and hip measurements are the most important for most garments. Some patterns may also require shoulder width, back length, inseam, sleeve length, or neck circumference.",
  },
  {
    question: "Can I use this calculator for dressmaking?",
    answer:
      "Yes. It is suitable for dresses, tops, skirts, jackets, pants, and many other garment sewing projects that use standard body measurements.",
  },
  {
    question: "Do different sewing pattern brands use different sizing?",
    answer:
      "Yes. Independent designers and commercial pattern companies may use different size charts. Always verify your measurements against the brand's own chart before selecting a pattern size.",
  },
  {
    question: "Why should I measure myself every time?",
    answer:
      "Body measurements naturally change over time. Measuring yourself before starting a new sewing project helps ensure a better fit and reduces the need for alterations.",
  },
] as const;
