import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import { SiNextdotjs } from "react-icons/si";
import '../styles/Experience.css';

function Experience() {
  const siteUrl = 'https://agitrahadian.my.id';

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
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pengalaman",
        item: `${siteUrl}/experience`
      }
    ]
  };

  // Schema: WebPage
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/experience`,
    url: `${siteUrl}/experience`,
    name: "Pengalaman Kerja – Agit Rahadian",
    description: "Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, termasuk pengembangan website sekolah, aplikasi internal, dan kontribusi pada solusi digital pendidikan."
  };

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
      "@id": `${siteUrl}/experience`
    }
  };

  // Schema: Organization
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

  const structuredData = [
    breadcrumbSchema,
    webpageSchema,
    personSchema,
    organizationSchema,
    webSiteSchema
  ];

  return (
    <>
      <SEO
        title="Pengalaman Kerja – Agit Rahadian"
        description="Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, termasuk pengembangan website sekolah, aplikasi internal, dan kontribusi pada solusi digital pendidikan."
        keywords="Agit Rahadian, pengalaman kerja, Full-Stack Web Developer, React, Laravel, PHP, Pendidikan, Digital Solutions"
        canonical={`${siteUrl}/experience`}
        structuredData={structuredData}
      />

      <Navbar />

      <main className="experience-wrapper" role="main" aria-label="Pengalaman Kerja Agit Rahadian">
        <h1>Pengalaman Kerja</h1>

        <section className="timeline" aria-label="Timeline Pengalaman Kerja">
          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2023">2023 - Sekarang</time>
            <h3>
              <SiNextdotjs 
                style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }} 
                aria-label="Next.js Icon" 
              /> 
              Full-Stack Web Developer (Freelance)
            </h3>
            <h4>Remote & Garut, Jawa Barat</h4>
            <p>
              Membangun dan mengembangkan berbagai Website profil sekolah, aplikasi internal madrasah, serta sistem manajemen informasi akademik. Fokus pada clean code, performa optimal, dan desain responsif. Berpengalaman menggunakan React, Laravel, PHP, dan MySQL.
            </p>
            <ul>
              <li>Website Profil Madrasah Aliyah AS-SIROJI (maassiroji.sch.id)</li>
              <li>Aplikasi PPDB Online & Sistem Informasi Akademik</li>
              <li>Website profil sekolah dan landing page edukasi</li>
            </ul>
          </article>

          <article className="timeline-element" tabIndex={0}>
            <time className="date" dateTime="2021">2021 - 2023</time>
            <h3>
              <SiNextdotjs 
                style={{ verticalAlign: 'middle', marginRight: 6, color: '#00adb5' }} 
                aria-label="Next.js Icon" 
              /> 
              Web Developer (Project Based)
            </h3>
            <h4>STMIK Mardira Indonesia</h4>
            <p>
              Berperan dalam tim pengembangan aplikasi internal kampus dan sistem informasi akademik. Bertanggung jawab pada pengembangan frontend dan backend, deployment, serta optimasi performa aplikasi.
            </p>
            <ul>
              <li>Pengembangan aplikasi manajemen data mahasiswa</li>
              <li>Integrasi API dan deployment ke server kampus</li>
              <li>Maintenance dan update sistem internal</li>
            </ul>
          </article>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
