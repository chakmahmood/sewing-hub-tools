import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

import BreadcrumbSchema from "@/components/Seo/BreadcrumbSchema";
import FAQSchema from "@/components/Seo/FAQSchema";

import { SizeCalculator } from "@/features/size-chart/components/SizeCalculator";
import { SIZE_CHART_FAQS } from "@/features/size-chart/faq";
import SizeChartArticle from "@/features/size-chart/components/SizeChartArticle";

export const metadata: Metadata = {
  title: "Sewing Pattern Size Chart & Size Calculator | Sewing Hub",

  description:
    "Free sewing pattern size calculator. Find your US, UK, EU and letter size using your bust, waist and hip measurements. Includes printable sewing size charts, body measurement guide, and pattern size conversion.",

  keywords: [
    "sewing size chart",
    "sewing pattern size chart",
    "pattern size calculator",
    "body measurement calculator",
    "dress size calculator",
    "sewing measurements",
    "US UK EU size conversion",
    "how to measure for sewing",
    "how to choose sewing pattern size",
  ],

  alternates: {
    canonical: `${siteConfig.url}/tools/size-chart`,
  },

  openGraph: {
    title: "Sewing Pattern Size Chart & Size Calculator",

    description:
      "Find your sewing pattern size instantly using your body measurements.",

    url: `${siteConfig.url}/tools/size-chart`,

    siteName: siteConfig.name,

    type: "website",

    images: [
      {
        url: `${siteConfig.url}/og/size-chart.png`,
        width: 1200,
        height: 630,
        alt: "Sewing Pattern Size Calculator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sewing Pattern Size Chart & Size Calculator",

    description:
      "Find your sewing pattern size instantly using your body measurements.",

    images: [`${siteConfig.url}/og/size-chart.png`],
  },
};

export default function SizeChartPage() {
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
            name: "Size Chart",
            url: `${siteConfig.url}/tools/size-chart`,
          },
        ]}
      />

      <FAQSchema faqs={[...SIZE_CHART_FAQS]} />

      <SizeCalculator />

      <SizeChartArticle />
    </>
  );
}
