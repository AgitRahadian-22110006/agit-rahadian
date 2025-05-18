// src/pages/Experience.jsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiNextdotjs } from 'react-icons/si';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';

export default function Experience() {
  // Breadcrumb schema
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
        "name": "Experience",
        "item": "https://agitrahadian.my.id/experience"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Experience"
        description="Lihat pengalaman kerja Agit Rahadian sebagai Full-Stack Web Developer: pengembangan website sekolah, aplikasi internal, dan solusi digital pendidikan menggunakan React, Laravel, dan PHP."
        keywords="Pengalaman Kerja, Full-Stack Web Developer, React, Laravel, PHP, Garut"
        canonical="/experience"
        structuredData={breadcrumbSchema}
      >
        <meta name="robots" content="index, follow" />
      </SEO>

      <Navbar />

      <main className="wrapper">
        <h1>Pengalaman Kerja</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Sekarang"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiNextdotjs aria-label="Next.js Icon" />}
          >
            <h3 className="vertical-timeline-element-title">
              Full-Stack Web Developer (Freelance)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Remote &amp; Garut, Jawa Barat
            </h4>
            <p>
              Membangun dan mengembangkan berbagai website profil sekolah,
              aplikasi internal madrasah, serta sistem manajemen informasi akademik.
              Fokus pada clean code, performa optimal, dan desain responsif.
            </p>
            <ul>
              <li>Website Profil Madrasah Aliyah AS-SIROJI (maassiroji.sch.id)</li>
              <li>Aplikasi PPDB Online &amp; Sistem Informasi Akademik</li>
              <li>Landing page edukasi dan situs profil sekolah</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#222831', color: '#fff' }}
            icon={<SiNextdotjs aria-label="Next.js Icon" />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer (Project Based)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              STMIK Mardira Indonesia
            </h4>
            <p>
              Berperan dalam tim pengembangan aplikasi internal kampus dan
              sistem informasi akademik. Bertanggung jawab pada frontend,
              backend, deployment, dan optimasi performa.
            </p>
            <ul>
              <li>Pengembangan aplikasi manajemen data mahasiswa</li>
              <li>Integrasi API dan deployment ke server kampus</li>
              <li>Maintenance dan update sistem internal</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
