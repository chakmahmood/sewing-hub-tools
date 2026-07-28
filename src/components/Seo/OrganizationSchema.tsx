interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo?: string;
}

export default function OrganizationSchema({
  name,
  url,
  logo,
}: OrganizationSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": `${url}#organization`,

    name,

    url,

    logo: logo ?? `${url}/icons/icon-512.png`,

    image: logo ?? `${url}/icons/icon-512.png`,

    sameAs: [
      // Tambahkan nanti jika sudah punya
      // "https://www.pinterest.com/...",
      // "https://www.youtube.com/@...",
      // "https://www.facebook.com/..."
    ],
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
