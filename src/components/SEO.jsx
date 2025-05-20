import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

function SEO({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogType = "website",
  canonical,
  structuredData,
  children
}) {
  // Base URL
  const siteUrl = "https://agitrahadian.my.id";
  
  // Default image if none provided
  const image = ogImage || `${siteUrl}/assets/profile-picture.webp`;
  
  // Canonical URL
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title ? `${title} - Agit Rahadian` : "Agit Rahadian - Full-Stack Web Developer"}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`Agit Rahadian, Full-Stack Developer, Web Developer, Programmer, ${keywords}`} />
      <meta name="author" content="Agit Rahadian" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title ? `${title} - Agit Rahadian` : "Agit Rahadian - Full-Stack Web Developer"} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Agit Rahadian" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} - Agit Rahadian` : "Agit Rahadian - Full-Stack Web Developer"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Additional meta tags */}
      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  canonical: PropTypes.string,
  structuredData: PropTypes.object,
  children: PropTypes.node
};

export default SEO;