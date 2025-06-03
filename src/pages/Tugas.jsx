// src/pages/Tugas.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/tugas.css';
import profileImg from '../assets/profile-picture.avif';
import tugasList from '../data/TugasData';

export default function Tugas() {
  const siteUrl = 'https://agitrahadian.my.id';

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Tugas", item: `${siteUrl}/tugas` }
    ]
  };

  // WebPage JSON-LD
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/tugas`,
    url: `${siteUrl}/tugas`,
    name: "Halaman Tugas – Agit Rahadian",
    description: "Daftar tugas dan materi mata kuliah Kecerdasan Buatan yang dibawakan oleh Agit Rahadian, Full-Stack Web Developer."
  };

  // Person JSON-LD
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Agit Rahadian",
    url: siteUrl,
    image: `${siteUrl}/assets/profile-picture.avif`,
    jobTitle: "Full-Stack Web Developer",
    alumniOf: "STMIK Mardira Indonesia",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Garut",
      addressRegion: "Jawa Barat",
      addressCountry: "ID"
    }
  };

  // Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agit Rahadian Digital",
    url: siteUrl,
    logo: `${siteUrl}/assets/profile-picture.avif`,
    founder: {
      "@type": "Person",
      name: "Agit Rahadian"
    }
  };

  const structuredData = [
    breadcrumbSchema,
    webpageSchema,
    personSchema,
    organizationSchema
  ];

  return (
    <>
      <SEO
        title="Tugas Kecerdasan Buatan – Agit Rahadian"
        description="Halaman daftar tugas Mata Kuliah Kecerdasan Buatan yang dibawakan oleh Agit Rahadian, Full-Stack Web Developer. Temukan Tugas 1 dan Tugas 2 di sini."
        keywords="Tugas Kecerdasan Buatan, Agit Rahadian, Full-Stack Web Developer, AI Assignment"
        canonical={`${siteUrl}/tugas`}
        structuredData={structuredData}
      />

      <Navbar />

      <main className="tugas-page container" role="main" aria-label="Daftar Tugas Kecerdasan Buatan">
        <section className="tugas-hero" aria-labelledby="judul-tugas">
          <header className="judul-wrapper">
            <h1 id="judul-tugas" className="judul-tugas">Tugas Kecerdasan Buatan</h1>
            <img
              src={profileImg}
              alt="Foto Agit Rahadian"
              className="foto-agit"
              width="140"
              height="140"
              loading="lazy"
            />
          </header>
          <p><strong>Nama:</strong> Agit Rahadian</p>
          <p><strong>NIM:</strong> 22110006</p>
          <p><strong>Kelas:</strong> E2022</p>
          <p><strong>Dosen:</strong> Dani Rohpandi, M. Kom.</p>

          <section className="tugas-list" aria-label="Daftar Tugas">
            {tugasList.map((tugas) => (
              <article
                key={tugas.id}
                className="glass-card tugas-card"
                tabIndex="0"
                aria-labelledby={`tugas-title-${tugas.id}`}
              >
                <h2 id={`tugas-title-${tugas.id}`}>{tugas.title}</h2>
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
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
