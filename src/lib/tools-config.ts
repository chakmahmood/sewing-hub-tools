// Central registry of tools — powers the homepage grid and (later)
// any programmatic-SEO index pages. Add a tool here, it shows up everywhere.
export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  priority: "P0" | "P1" | "P2";
};

export const tools: Tool[] = [
  {
    slug: "fabric-calculator",
    name: "Fabric Yardage Calculator",
    tagline: "How much fabric do I need for this project?",
    priority: "P0",
  },
  {
    slug: "unit-converter",
    name: "Sewing Unit Converter",
    tagline: "Inches, cm, yards, meters & seam allowance — instantly.",
    priority: "P0",
  },
  {
    slug: "size-chart",
    name: "Pattern Size Chart Converter",
    tagline: "Convert body measurements to US / UK / EU / Asia sizing.",
    priority: "P0",
  },
  {
    slug: "needle-thread-matcher",
    name: "Needle & Thread Matcher",
    tagline: "Tell us your fabric, get the right needle & thread.",
    priority: "P0",
  },
];
