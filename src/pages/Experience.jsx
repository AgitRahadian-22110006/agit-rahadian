import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import { SiNextdotjs } from "react-icons/si";
import '../styles/Experience.css';

function Experience() {
  // Breadcrumb schema JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://agitrahadian.my.id/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pengalaman",
        "item": "https://agitrahadian.my.id/experience"
      }
    ]
  };

  // WebPage schema JSON-LD
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://agitrahadian.my.id/experience",
    "url": "https://agitrahadian.my.id/experience",
    "name": "Pengalaman Kerja – Agit Rahadian",
    "description": "Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, termasuk pengembangan website sekolah, aplikasi internal, dan kontribusi pada solusi digital pendidikan."
  };

  const structuredData = [breadcrumbSchema, webpageSchema];

  return (
    <>
      <SEO
        title="Pengalaman Kerja – Agit Rahadian"
        description="Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer, termasuk pengembangan website sekolah, aplikasi internal, dan kontribusi pada solusi digital pendidikan."
        keywords="Agit Rahadian, pengalaman kerja, Full-Stack Web Developer, React, Laravel, PHP, Pendidikan, Digital Solutions"
        canonical="https://agitrahadian.my.id/experience"
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
