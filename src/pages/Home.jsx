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
  const organizationSchema = {
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

  // Schema: WebSite + logo + search (optional)
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

  // Combine all schemas
  const structuredData = [organizationSchema, breadcrumbSchema, webSiteSchema];

  return (
    <>
      <SEO
        title="Home"
        description="Agit Rahadian adalah Full-Stack Web Developer lulusan STMIK Mardira Indonesia yang berspesialisasi dalam pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis. Lihat portfolio dan pengalaman membangun aplikasi dengan teknologi React, Laravel, dan PHP."
        keywords="Website Sekolah, Aplikasi Pendidikan, React Developer, Laravel Developer, Garut, Jawa Barat, Indonesia"
        canonical={siteUrl}
        structuredData={structuredData}
      >
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
