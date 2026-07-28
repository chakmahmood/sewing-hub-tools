interface WebsiteSchemaProps {
  name: string;
  url: string;
  description: string;
}

export default function WebsiteSchema({
  name,
  url,
  description,
}: WebsiteSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${url}#website`,

    url,

    name,

    description,

    inLanguage: "en",

    publisher: {
      "@id": `${url}#organization`,
    },

    // potentialAction: {
    //   "@type": "SearchAction",

    //   target: `${url}/search?q={search_term_string}`,

    //   "query-input": "required name=search_term_string",
    // },
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
