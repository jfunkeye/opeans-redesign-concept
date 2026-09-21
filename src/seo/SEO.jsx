import { Helmet } from "react-helmet-async";
import { SITE } from "./seoConfig";

/**
 * Reusable SEO component.
 * Usage: <SEO title="..." description="..." path="/about" />
 */
export default function SEO({
  title,
  description = SITE.description,
  path = "/",
  image = SITE.defaultImage,
  type = "website",
  noindex = false,
  keywords,
  jsonLd,
  breadcrumbs,
}) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} | Offshore & Industrial Safety Training`;

  const canonical = `${SITE.url}${path === "/" ? "" : path}`;

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: SITE.logo,
    description: SITE.description,
    foundingDate: SITE.foundingDate,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    sameAs: Object.values(SITE.social).filter(Boolean),
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/training?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbLd = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${SITE.url}${b.path}`,
        })),
      }
    : null;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large"
        }
      />
      <meta name="author" content={SITE.name} />
      <meta name="theme-color" content="#323465" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteLd)}
      </script>
      {breadcrumbLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>
      )}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}