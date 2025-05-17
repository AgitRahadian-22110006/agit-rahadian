// src/pages/Tugas.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/tugas.css';
import profileImg from '../assets/profile-picture.png';

export default function Tugas() {
  return (
    <>
      <Helmet>
        <title>Agit Rahadian | Halaman Tugas</title>
        <meta
          name="description"
          content="Daftar tugas dan materi yang dibawakan oleh Agit Rahadian, Full-Stack Web Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Fonts & Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
      </Helmet>

      <Navbar />

      <main className="tugas-page container" role="main">
        <section className="tugas-hero" aria-labelledby="judul-tugas">
          <div className="judul-wrapper">
            <h1 id="judul-tugas" className="judul-tugas">
              TugasKu
            </h1>
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
