// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import SEO from '../components/SEO'; // Komponen SEO yang memakai react-helmet-async

function Home() {
  // Person schema for rich results, termasuk logo dan profile image
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Agit Rahadian",
    "url": "https://agitrahadian.my.id/",
    "logo": "https://agitrahadian.my.id/android-chrome-512x512.png",
    "image": "https://agitrahadian.my.id/assets/profile-picture.avif",
    "sameAs": [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn",
      "https://www.tiktok.com/@agitrahadian",
      "https://www.facebook.com/share/16HuZskNh5/"
    ],
    "jobTitle": "Full-Stack Web Developer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "STMIK Mardira Indonesia",
      "department": "Teknik Informatika - Prodi Sistem Informasi"
    },
    "description": "Full-Stack Web Developer dari Garut yang berspesialisasi dalam pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Garut",
      "addressRegion": "Jawa Barat",
      "addressCountry": "Indonesia"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://agitrahadian.my.id/"
    }
  };

  // Breadcrumb schema for rich results
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://agitrahadian.my.id/"
      }
    ]
  };

  // Gabungkan semua structured data
  const structuredData = [personSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        title="Home – Agit Rahadian"
        description="Agit Rahadian adalah Full-Stack Web Developer lulusan STMIK Mardira Indonesia yang berspesialisasi dalam pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis. Lihat portfolio dan pengalaman membangun aplikasi dengan teknologi React, Laravel, dan PHP."
        keywords="Website Sekolah, Aplikasi Pendidikan, React Developer, Laravel Developer, Garut, Jawa Barat, Indonesia"
        canonical="https://agitrahadian.my.id/"
        structuredData={structuredData}
      >
        {/* Meta tags khusus untuk Home */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="revisit-after" content="7 days" />
        {/* Preload profile image */}
        <link
          rel="preload"
          as="image"
          href="https://agitrahadian.my.id/assets/profile-picture.avif"
        />
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
