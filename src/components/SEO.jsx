// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  structuredData,
  ogImage = null,     // URL gambar Open Graph / Twitter Card jika ada
  ogType = 'website', // default type untuk Open Graph
  favicon = "/favicon.ico",
  preloadImages = [], // array URL gambar untuk preload
}) => {
  // Jika keywords array, gabung jadi string
  const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // Siapkan JSON-LD untuk structuredData
  const jsonLd = Array.isArray(structuredData)
    ? structuredData.map((data, i) => (
        <script
          key={`jsonld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))
    : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      );

  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta dasar */}
      <meta name="description" content={description} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Favicon */}
      <link rel="icon" href={favicon} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Preload images */}
      {preloadImages.map((imgSrc, i) => (
        <link
          key={`preload-img-${i}`}
          rel="preload"
          as="image"
          href={imgSrc}
          fetchpriority="high"
        />
      ))}

      {/* Structured Data JSON-LD */}
      {jsonLd}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  canonical: PropTypes.string.isRequired,
  structuredData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  favicon: PropTypes.string,
  preloadImages: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;
