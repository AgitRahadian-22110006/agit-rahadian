import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const useSeoKeywords = () => {
  // Kata kunci utama terkait Agit Rahadian
  const mainKeywords = [
    'Agit Rahadian', 'AgitRahadian', 'Agit', 'Full-Stack Developer Garut',
    'Web Developer Agit Rahadian', 'Programmer Garut', 'Agit Rahadian Portfolio',
    'Website Sekolah Developer', 'Aplikasi Pendidikan Developer'
  ];

  // Kata kunci sekunder (related/long-tail)
  const secondaryKeywords = [
    'Jasa Pembuatan Website Garut', 'Pengembang Website Profesional',
    'Full-Stack Developer Indonesia', 'Web Developer Lulusan STMIK Mardira',
    'Programmer Indonesia Berpengalaman', 'Ahli Website Sekolah',
    'Aplikasi Pendidikan Custom', 'Sistem Informasi Akademik Developer',
    'Portfolio Web Developer Terbaik'
  ];

  // Kombinasikan kata kunci dalam format yang tepat untuk SEO metadata
  return [...mainKeywords, ...secondaryKeywords].join(', ');
};

const CustomPageSEO = ({ 
  title = "Agit Rahadian - Full-Stack Web Developer",
  description = "Portfolio resmi Agit Rahadian, Full-Stack Web Developer asal Garut yang berspesialisasi dalam pengembangan website sekolah dan aplikasi pendidikan.",
  image = "/assets/profile-picture.webp",
  url = "",
  type = "website",
  publishedTime = "",
  modifiedTime = "",
  author = "Agit Rahadian",
  section = "",
  tags = []
}) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const seoKeywords = useSeoKeywords();
  
  useEffect(() => {
    // Set URL berdasarkan lokasi halaman saat ini
    if (typeof window !== 'undefined') {
      const domain = window.location.hostname;
      const path = window.location.pathname;
      setCurrentUrl(`https://${domain}${path}`);
    }
  }, []);
  
  // Format tags untuk keywords
  const tagsAsKeywords = tags.length ? tags.join(', ') : "";
  
  // Kombinasikan keywords unik
  const combinedKeywords = [seoKeywords, tagsAsKeywords].filter(Boolean).join(', ');
  
  // Format tanggal untuk standar ISO
  const publishDate = publishedTime || new Date().toISOString();
  const modifyDate = modifiedTime || new Date().toISOString();
  
  // URL lengkap untuk canonical dan OpenGraph
  const fullUrl = url || currentUrl;
  
  // Schema.org markup untuk artikel/halaman
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "headline": title,
    "description": description,
    "image": image.startsWith("http") ? image : `https://agitrahadian.my.id${image}`,
    "datePublished": publishDate,
    "dateModified": modifyDate,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Person",
      "name": "Agit Rahadian",
      "logo": {
        "@type": "ImageObject",
        "url": "https://agitrahadian.my.id/assets/profile-picture.webp"
      }
    },
    "mainEntityOfPage": fullUrl
  };
  
  return (
    <Helmet>
      {/* Dasar */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={combinedKeywords} />
      <meta name="author" content={author} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith("http") ? image : `https://agitrahadian.my.id${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Agit Rahadian Portfolio" />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith("http") ? image : `https://agitrahadian.my.id${image}`} />
      
      {/* Artikel metadata spesifik */}
      {type === "article" && (
        <>
          <meta property="article:published_time" content={publishDate} />
          <meta property="article:modified_time" content={modifyDate} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
    </Helmet>
  );
};

export default CustomPageSEO;