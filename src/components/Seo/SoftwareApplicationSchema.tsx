interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function SoftwareApplicationSchema({
  name,
  description,
  url,
}: SoftwareApplicationSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "SoftwareApplication",

    name,

    description,

    url,

    applicationCategory: "UtilitiesApplication",

    applicationSubCategory: "Sewing Calculator",

    operatingSystem: "Any",

    browserRequirements: "Requires JavaScript",

    isAccessibleForFree: true,

    offers: {
      "@type": "Offer",

      price: "0",

      priceCurrency: "USD",
    },

    creator: {
      "@type": "Organization",

      name: "Sewing Hub",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

export default SoftwareApplicationSchema;
