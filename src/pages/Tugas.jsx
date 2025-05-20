// src/pages/Tugas.jsx
import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/tugas.css';
import profileImg from '../assets/profile-picture.avif';

export default function Tugas() {
  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://agitrahadian.my.id/" },
      { "@type": "ListItem", "position": 2, "name": "Tugas", "item": "https://agitrahadian.my.id/tugas" }
    ]
  };

  // WebPage schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://agitrahadian.my.id/tugas",
    "url": "https://agitrahadian.my.id/tugas",
    "name": "Halaman Tugas – Agit Rahadian",
    "description": "Daftar tugas dan materi yang dibawakan oleh Agit Rahadian, Full-Stack Web Developer."
  };

  const structuredData = [breadcrumbSchema, webpageSchema];

  return (
    <>
      <SEO
        title="Halaman Tugas"
        description="Daftar tugas dan materi yang dibawakan oleh Agit Rahadian, Full-Stack Web Developer."
        keywords="Tugas, Materi, Agit Rahadian, Full-Stack Web Developer"
        canonical="/tugas"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="tugas-page container" role="main">
        <section className="tugas-hero" aria-labelledby="judul-tugas">
          <div className="judul-wrapper">
            <h1 id="judul-tugas" className="judul-tugas">TugasKu</h1>
            <img
              src={profileImg}
              alt="Foto Agit Rahadian"
              className="foto-putri"
              width="140"
              height="140"
            />
          </div>

          <article className="glass-card tugas1-card" tabIndex="0" aria-label="Tugas 1">
            <h2>Tugas 1</h2>
            <p>
              Ini adalah deskripsi singkat untuk Tugas 1. Tambahkan detail
              seperti instruksi, deadline, atau materi pendukung di sini.
            </p>
            <Link
              to="/tugas/1"
              className="btn-profil"
              role="button"
              aria-label="Lihat detail Tugas 1"
            >
              Lihat Detail
            </Link>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
