import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

function SEOHead() {
  // State untuk nama domain situs
  const [domain, setDomain] = useState('agitrahadian.my.id');
  
  // Mengambil domain dari URL saat komponen dimount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDomain(window.location.hostname);
    }
  }, []);

  // Structured Data utama untuk personal website
  const personalWebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Agit Rahadian',
    'alternateName': ['AgitRahadian', 'agitrahadian', 'Agit'],
    'jobTitle': 'Full-Stack Web Developer',
    'description': 'Full-Stack Web Developer yang berspesialisasi dalam pengembangan website sekolah dan aplikasi pendidikan dari Garut, Indonesia.',
    'url': `https://${domain}`,
    'sameAs': [
      'https://github.com/agitrahadian-22110006',
      'https://www.instagram.com/agitrhdn',
      'https://www.tiktok.com/@agitrahadian',
      'https://www.facebook.com/share/16HuZskNh5/'
    ],
    'alumniOf': [
      {
        '@type': 'EducationalOrganization',
        'name': 'STMIK Mardira Indonesia',
        'department': 'Teknik Informatika - Prodi Sistem Informasi'
      }
    ],
    'knowsAbout': [
      'Web Development', 'React', 'Laravel', 'PHP', 
      'MySQL', 'JavaScript', 'CSS3', 'HTML5', 
      'Website Sekolah', 'Aplikasi Pendidikan'
    ],
    'image': `https://${domain}/assets/profile-picture.webp`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Garut',
      'addressRegion': 'Jawa Barat',
      'addressCountry': 'Indonesia'
    },
    'birthDate': '2002-07-14',
    'worksFor': {
      '@type': 'Organization',
      'name': 'Freelance Web Developer'
    }
  };

  // BreadcrumbList untuk memberikan struktur navigasi yang jelas ke search engine
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Beranda',
        'item': `https://${domain}`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Portfolio',
        'item': `https://${domain}/#portfolio`
      },
      {
        '@type': 'ListItem',
        'position': 3, 
        'name': 'About',
        'item': `https://${domain}/#about`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Experience',
        'item': `https://${domain}/experience`
      }
    ]
  };

  // WebSite schema untuk keseluruhan website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Portfolio Agit Rahadian',
    'url': `https://${domain}`,
    'description': 'Portfolio resmi Agit Rahadian, Full-Stack Web Developer yang berspesialisasi dalam pengembangan website sekolah dan aplikasi pendidikan.',
    'publisher': {
      '@type': 'Person',
      'name': 'Agit Rahadian'
    },
    'inLanguage': 'id-ID',
    'copyrightYear': new Date().getFullYear(),
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `https://${domain}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={`https://${domain}`} />
      
      {/* Alternate Languages */}
      <link rel="alternate" href={`https://${domain}`} hrefLang="id-id" />
      <link rel="alternate" href={`https://${domain}`} hrefLang="x-default" />
      
      {/* Primary Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Preconnect to essential resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Social Media Verification */}
      <meta name="google-site-verification" content="add-your-verification-code-here" />
      <meta name="facebook-domain-verification" content="add-your-verification-code-here" />
      
      {/* Rich Results / Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personalWebsiteSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}

export default SEOHead;