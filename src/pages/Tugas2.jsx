// src/pages/Tugas2.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SEO from '../components/SEO';
import '../styles/IsiTugas.css';

export default function Tugas2() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Tugas 2: Coming Soon",
    "description": "Materi dan tugas kedua masih dalam tahap pengembangan dan akan segera hadir.",
    "educationalLevel": "Perguruan Tinggi",
    "inLanguage": "id",
    "url": "https://agitrahadian.my.id/tugas/2",
    "datePublished": "2025-05-31",
    "dateModified": "2025-05-31",
    "educationalUse": "Pembelajaran",
    "learningResourceType": "Tugas Mahasiswa",
    "author": {
      "@type": "Person",
      "name": "Agit Rahadian",
      "url": "https://agitrahadian.my.id"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Agit Rahadian Personal Website",
      "url": "https://agitrahadian.my.id",
      "logo": {
        "@type": "ImageObject",
        "url": "https://agitrahadian.my.id/logo192.png"
      }
    }
  };

  return (
    <>
      <SEO
        title="Tugas 2: Coming Soon"
        description="Tugas 2 untuk mata kuliah Kecerdasan Buatan saat ini masih menunggu arahan dari dosen pengampu, Bapak Dani Rohpandi, M. Kom. Nantikan pembaruan terbaru di halaman ini."
        keywords="Tugas 2, Kecerdasan Buatan, Agit Rahadian, Materi Pembelajaran"
        canonical="https://agitrahadian.my.id/tugas/2"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="detail-tugas-page container" role="main" aria-label="Detail Tugas 2">
        <section className="detail-tugas-content glass-card">
          <h1 className="detail-tugas-title">Tugas 2: Coming Soon</h1>
          <p>
            Terima kasih atas kunjungannya ke halaman <strong>Tugas 2</strong> untuk mata kuliah <strong>Kecerdasan Buatan</strong>. 
            Saat ini, materi dan arahan terkait tugas ini masih menunggu instruksi resmi dari dosen pengampu kami, 
            <strong> Bapak Dani Rohpandi, M. Kom.</strong>
          </p>
          <p>
            Sebagai mahasiswa, kami senantiasa siap untuk menerima dan mempelajari materi yang diberikan. 
            Kami menghargai waktu dan perhatian Bapak Dani Rohpandi, M. Kom. dalam menyusun tugas ini agar lebih bermanfaat 
            bagi seluruh mahasiswa.
          </p>
          <p>
            Jika Anda memiliki pertanyaan, mengenai tugas-tugas sebelumnya,
            jangan ragu untuk bertanya kepada saya : 
            <a href="https://wa.me/6287758263820" target="_blank" rel="noopener noreferrer"> WhatsApp</a>. 
            Dukungan dan partisipasi Anda sangat berharga!
          </p>
          <p>
            Kami berharap pembaruan materi segera tersedia agar dapat memajukan proses pembelajaran kita bersama. 
            Terima kasih atas pengertiannya dan sampai jumpa di materi berikutnya!
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
