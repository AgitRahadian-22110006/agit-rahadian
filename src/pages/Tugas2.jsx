// src/pages/Tugas2.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import '../styles/IsiTugas.css';

export default function Tugas2() {
  const siteUrl = 'https://agitrahadian.my.id';

  // LearningResource JSON-LD
  const learningResourceSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Tugas 2: Coming Soon",
    description: "Tugas 2 untuk mata kuliah Kecerdasan Buatan masih menunggu arahan dari dosen pengampu, Bapak Dani Rohpandi, M. Kom.",
    educationalLevel: "Perguruan Tinggi",
    inLanguage: "id",
    url: `${siteUrl}/tugas/2`,
    datePublished: "2025-05-31",
    dateModified: "2025-05-31",
    educationalUse: "Pembelajaran",
    learningResourceType: "Tugas Mahasiswa",
    author: {
      "@type": "Person",
      name: "Agit Rahadian",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "Agit Rahadian Personal Website",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo192.png`
      }
    }
  };

  return (
    <>
      <SEO
        title="Tugas 2: Coming Soon – Agit Rahadian"
        description="Halaman Tugas 2 untuk mata kuliah Kecerdasan Buatan saat ini sedang menunggu instruksi dari dosen pengampu, Bapak Dani Rohpandi, M. Kom. Nantikan pembaruan materi."
        keywords="Tugas 2, Kecerdasan Buatan, Coming Soon, Agit Rahadian"
        canonical={`${siteUrl}/tugas/2`}
        structuredData={learningResourceSchema}
      />

      <Navbar />

      <main className="detail-tugas-page container" role="main" aria-label="Detail Tugas 2">
        <section className="detail-tugas-content glass-card">
          <h1 className="detail-tugas-title">Tugas 2: Coming Soon</h1>
          <p>
            Terima kasih telah mengunjungi halaman <strong>Tugas 2</strong> untuk mata kuliah <strong>Kecerdasan Buatan</strong>. 
            Saat ini, materi dan petunjuk terkait tugas ini masih menunggu arahan resmi dari <strong>Bapak Dani Rohpandi, M. Kom.</strong>
          </p>
          <p>
            Sebagai mahasiswa, kami siap mempelajari setiap instruksi yang diberikan korektif dan bermanfaat. 
            Kami menghargai dedikasi Bapak Dani Rohpandi dalam menyusun materi agar dapat mendukung pemahaman kami secara menyeluruh.
          </p>
          <p>
            Apabila ada hal yang ingin ditanyakan mengenai Tugas 1 atau topik sebelumnya, jangan ragu untuk menghubungi saya melalui 
            <a 
              href="https://wa.me/6287758263820" 
              target="_blank" 
              rel="noopener noreferrer"
            > WhatsApp</a>. 
            Dukungan dan masukan Anda sangat berharga bagi proses pembelajaran kami.
          </p>
          <p>
            Kami berharap Tugas 2 segera tersedia agar dapat lebih memajukan diskusi dan penerapan konsep. 
            Terima kasih atas pengertian dan partisipasi Anda. Sampai jumpa pada materi selanjutnya!
          </p>

          {/* Tombol Kembali */}
          <nav className="back-link" aria-label="Kembali ke daftar tugas">
            <Link to="/tugas" className="btn-back">
              ← Kembali ke Daftar Tugas
            </Link>
          </nav>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
