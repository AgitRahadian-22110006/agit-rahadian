// src/pages/Tugas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/tugas.css';
import profileImg from '../assets/profile-picture.avif';
import tugasList from '../data/TugasData';

export default function Tugas() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://agitrahadian.my.id/" },
      { "@type": "ListItem", "position": 2, "name": "Tugas", "item": "https://agitrahadian.my.id/tugas" }
    ]
  };

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
            <h1 id="judul-tugas" className="judul-tugas">Tugas Kecerdasan Buatan</h1>
            <img
              src={profileImg}
              alt="Foto Agit Rahadian"
              className="foto-agit"
              width="140"
              height="140"
            />
          </div>

          {tugasList.map((tugas) => (
            <article
              key={tugas.id}
              className="glass-card tugas-card"
              tabIndex="0"
              aria-label={tugas.title}
            >
              <h2>{tugas.title}</h2>
              <p>{tugas.description}</p>
              <Link
                to={tugas.link}
                className="btn-profil"
                role="button"
                aria-label={`Lihat detail ${tugas.title}`}
              >
                Lihat Detail
              </Link>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
