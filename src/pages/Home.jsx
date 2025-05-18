// src/pages/Home.jsx
import React from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function Home() {
  // Person schema for rich results
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Agit Rahadian",
    "url": "https://agitrahadian.my.id",
    "image": "https://agitrahadian.my.id/assets/profile-picture.png",
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

  // Combined schema array
  const structuredData = [personSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        title="Beranda"
        description="Agit Rahadian adalah Full-Stack Web Developer lulusan STMIK Mardira Indonesia yang berspesialisasi dalam pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis. Lihat portfolio dan pengalaman membangun aplikasi dengan teknologi React, Laravel, dan PHP."
        keywords="Website Sekolah, Aplikasi Pendidikan, React Developer, Laravel Developer, Garut, Jawa Barat, Indonesia"
        canonical="/"
        structuredData={structuredData}
      >
        {/* Additional meta tags specific to the home page */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="revisit-after" content="7 days" />
      </SEO>

      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}
