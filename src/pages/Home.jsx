// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

function Home() {
  const siteUrl = 'https://agitrahadian.my.id';

  // Schema: Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agit Rahadian",
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    image: `${siteUrl}/android-chrome-512x512.png`,
    sameAs: [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn",
      "https://www.tiktok.com/@agitrahadian",
      "https://www.facebook.com/share/16HuZskNh5/",
      "https://wa.me/6287758263820"
    ],
    jobTitle: "Full-Stack Web Developer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "STMIK Mardira Indonesia",
      department: "Teknik Informatika - Prodi Sistem Informasi"
    },
    description: "Full-Stack Web Developer dari Garut yang berspesialisasi dalam pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Garut",
      addressRegion: "Jawa Barat",
      addressCountry: "Indonesia"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl
    }
  };

  // Schema: Organization (untuk logo Google)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agit Rahadian",
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    sameAs: [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn",
      "https://www.tiktok.com/@agitrahadian",
      "https://www.facebook.com/share/16HuZskNh5/",
      "https://wa.me/6287758263820"
    ]
  };

  // Schema: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: siteUrl
      }
    ]
  };

  // Schema: WebSite
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agit Rahadian",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Person",
      name: "Agit Rahadian"
    },
    logo: `${siteUrl}/android-chrome-512x512.png`
  };

  // Gabungkan semua schema
  const structuredData = [
    personSchema,
    organizationSchema,
    breadcrumbSchema,
    webSiteSchema
  ];

  return (
    <>
      <SEO
        title="Agit Rahadian – Full-Stack Web Developer"
        description="Agit Rahadian adalah Full-Stack Web Developer lulusan STMIK Mardira Indonesia. Berspesialisasi dalam pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis di Garut, Jawa Barat."
        keywords="Agit Rahadian, Full-Stack Developer, Web Developer, Garut, Indonesia, Website Sekolah, Aplikasi Pendidikan, React, Laravel"
        canonical={siteUrl}
        structuredData={structuredData}
      >
        {/* Tambahkan Open Graph dan Twitter Card khusus halaman Home */}
        <meta property="og:title" content="Agit Rahadian – Full-Stack Web Developer" />
        <meta property="og:description" content="Agit Rahadian adalah Full-Stack Web Developer dari Garut yang ahli membangun website sekolah, aplikasi pendidikan, dan solusi digital." />
        <meta property="og:image" content={`${siteUrl}/og/profile-picture.avif`} />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:title" content="Agit Rahadian – Full-Stack Web Developer" />
        <meta name="twitter:description" content="Agit Rahadian adalah Full-Stack Web Developer dari Garut yang ahli membangun website sekolah, aplikasi pendidikan, dan solusi digital." />
        <meta name="twitter:image" content={`${siteUrl}/og/profile-picture.avif`} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
      </SEO>

      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}

export default Home;
