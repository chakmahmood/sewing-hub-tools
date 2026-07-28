import type { Metadata } from "next";

import BreadcrumbSchema from "@/components/Seo/BreadcrumbSchema";

import { siteConfig } from "@/lib/site";

import { FabricYardageCalculator } from "@/features/fabric-calculator/components/FabricYardageCalculator";
import FAQSchema from "@/components/Seo/FAQSchema";
import { FABRIC_CALCULATOR_FAQS } from "@/features/fabric-calculator/faq";

export const metadata: Metadata = {
  title: "Fabric Yardage Calculator | Sewing Hub",

  description:
    "Free fabric yardage calculator for dresses, skirts, shirts, quilts, bags, and more. Estimate fabric requirements based on project, size, fabric width, sleeve style, and seam allowance.",

  alternates: {
    canonical: "/tools/fabric-calculator",
  },

  openGraph: {
    title: "Fabric Yardage Calculator | Sewing Hub",

    description: "Calculate fabric yardage instantly for your sewing project.",

    url: `${siteConfig.url}/tools/fabric-calculator`,

    siteName: siteConfig.name,

    type: "website",

    images: [
      {
        url: `${siteConfig.url}/og/fabric-yardage-calculator.png`,
        width: 1200,
        height: 630,
        alt: "Fabric Yardage Calculator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Fabric Yardage Calculator | Sewing Hub",

    description:
      "Estimate fabric yardage instantly for dresses, quilts, bags and more.",

    images: [`${siteConfig.url}/og/fabric-yardage-calculator.png`],
  },
};

export default function FabricCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: siteConfig.url,
          },
          {
            name: "Tools",
            url: `${siteConfig.url}/tools`,
          },
          {
            name: "Fabric Yardage Calculator",
            url: `${siteConfig.url}/tools/fabric-calculator`,
          },
        ]}
      />
      <FAQSchema faqs={FABRIC_CALCULATOR_FAQS} />
      <FabricYardageCalculator />
    </>
  );
}
