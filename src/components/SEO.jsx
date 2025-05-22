import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  structuredData,
  favicon = "/favicon.ico", // default favicon path di public/
}) => {
  // Jika keywords array, gabung jadi string
  const keywordsContent = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // Structured data JSON-LD harus berupa string
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
      <title>{title}</title>

      <meta name="description" content={description} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Favicon */}
      <link rel="icon" href={favicon} />

      {/* Open Graph for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured data JSON-LD */}
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
  favicon: PropTypes.string,
};

export default SEO;
