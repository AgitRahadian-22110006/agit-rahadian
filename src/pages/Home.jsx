import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Agit Rahadian – Full-Stack Web Developer</title>
          <meta
            name="description"
            content="Portfolio Agit Rahadian - Full-Stack Web Developer berpengalaman dalam pengembangan website sekolah, aplikasi pendidikan & solusi digital modern."
          />
          <link rel="canonical" href="https://agitrahadian.my.id/" />
          {/* Preload gambar profil dengan as="image" */}
          <link rel="preload" href="/assets/profile-picture.avif" as="image" />
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://agitrahadian.my.id/" />
          <meta property="og:title" content="Agit Rahadian – Full-Stack Web Developer" />
          <meta
            property="og:description"
            content="Portfolio resmi Agit Rahadian. Lihat proyek, pengalaman, dan kontak untuk kerja sama."
          />
          <meta property="og:image" content="https://agitrahadian.my.id/og/profile-picture.avif" />
          <meta property="og:image:alt" content="Agit Rahadian – Full-Stack Web Developer" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@agitrhdn" />
          <meta name="twitter:title" content="Agit Rahadian – Full-Stack Web Developer" />
          <meta
            name="twitter:description"
            content="Portfolio resmi Agit Rahadian. Lihat proyek, pengalaman, dan kontak untuk kerja sama."
          />
          <meta name="twitter:image" content="https://agitrahadian.my.id/og/profile-picture.avif" />
        </Helmet>

        <main style={{ padding: '2rem', fontFamily: "'Nunito Sans', sans-serif" }}>
          <section style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontFamily: "'Kanit', sans-serif", fontWeight: '700' }}>
              Halo, saya Agit Rahadian
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Saya seorang Full-Stack Web Developer dari Garut yang berspesialisasi dalam pengembangan
              website sekolah, aplikasi pendidikan, dan solusi digital praktis.
            </p>
            <img
              src="/assets/profile-picture.avif"
              alt="Foto profil Agit Rahadian"
              width={200}
              height={200}
              loading="lazy"
              style={{ borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            />
          </section>
        </main>
      </>
    </HelmetProvider>
  );
};

export default Home;
