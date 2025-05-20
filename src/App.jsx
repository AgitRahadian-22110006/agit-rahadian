import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { portfolioList } from './data/DataPortfolio';

const Home = lazy(() => import('./pages/Home'));
const DetailPortfolio = lazy(() => import('./pages/DetailPortfolio'));
const Experience = lazy(() => import('./pages/Experience'));
const About = lazy(() => import('./components/About'));
const Tugas = lazy(() => import('./pages/Tugas'));
const Tugas1 = lazy(() => import('./pages/Tugas1'));

// Wrapper for dynamic portfolio page metadata
function PortfolioPage() {
  const { id } = useParams();
  const project = portfolioList.find(p => p.id.toString() === id) || {};
  const title = project.title
    ? `${project.title} – Agit Rahadian`
    : 'Portfolio – Agit Rahadian';
  const description = project.description
    || 'Detail proyek saya sebagai Full-Stack Web Developer.';
  const imageUrl = project.images?.[0]?.src
    || 'https://agitrahadian.my.id/og/portfolio1.webp';
  const url = `https://agitrahadian.my.id/portfolio/${id}`;

  return (
    <>
    <SpeedInsights />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <DetailPortfolio project={project} />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      {/* Global Default Meta Tags & JSON-LD Schema */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Agit Rahadian – Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio resmi Agit Rahadian – Full-Stack Web Developer. Lihat proyek, pengalaman, dan kontak untuk kerja sama."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://agitrahadian.my.id/" />

        {/* Open Graph */}
        <meta property="og:title" content="Agit Rahadian – Full-Stack Web Developer" />
        <meta
          property="og:description"
          content="Portfolio resmi Agit Rahadian – Full-Stack Web Developer. Lihat proyek, pengalaman, dan kontak untuk kerja sama."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id/" />
        <meta property="og:image" content="https://agitrahadian.my.id/og/profile-picture.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Agit Rahadian",
            "url": "https://agitrahadian.my.id/",
           "logo": "https://agitrahadian.my.id/android-chrome-512x512.png"
            "jobTitle": "Full-Stack Web Developer",
            "email": "mailto:agitrahadian140702@gmail.com",
            "telephone": "+6287758263820",
            "sameAs": [
              "https://github.com/agitrahadian-22110006",
              "https://www.instagram.com/agitrhdn",
              "https://www.tiktok.com/@agitrahadian",
              "https://www.facebook.com/share/16HuZskNh5/",
              "https://wa.me/6287758263820"
            ]
          }`}
        </script>
      </Helmet>

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Home – Agit Rahadian</title>
                    <meta
                      name="description"
                      content="Selamat datang di portfolio Agit Rahadian. Temukan proyek terbaru dan pengalaman saya sebagai Full-Stack Developer."
                    />
                    <link rel="canonical" href="https://agitrahadian.my.id/" />
                    <meta property="og:title" content="Home – Agit Rahadian" />
                    <meta
                      property="og:description"
                      content="Selamat datang di portfolio Agit Rahadian. Temukan proyek terbaru dan pengalaman saya sebagai Full-Stack Developer."
                    />
                    <meta property="og:url" content="https://agitrahadian.my.id/" />
                  </Helmet>
                  <Home />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Helmet>
                    <title>Tentang Saya – Agit Rahadian</title>
                    <meta
                      name="description"
                      content="Profil lengkap Agit Rahadian, keahlian, dan latar belakang sebagai Full-Stack Web Developer."
                    />
                    <link rel="canonical" href="https://agitrahadian.my.id/about" />
                    <meta property="og:title" content="Tentang Saya – Agit Rahadian" />
                    <meta
                      property="og:description"
                      content="Profil lengkap Agit Rahadian, keahlian, dan latar belakang sebagai Full-Stack Web Developer."
                    />
                    <meta property="og:url" content="https://agitrahadian.my.id/about" />
                  </Helmet>
                  <About />
                </>
              }
            />
            <Route path="/portfolio/:id" element={<PortfolioPage />} />
            <Route
              path="/experience"
              element={
                <>
                  <Helmet>
                    <title>Pengalaman – Agit Rahadian</title>
                    <meta
                      name="description"
                      content="Detail pengalaman kerja dan proyek yang pernah saya kerjakan sebagai Full-Stack Developer."
                    />
                    <link rel="canonical" href="https://agitrahadian.my.id/experience" />
                    <meta property="og:title" content="Pengalaman – Agit Rahadian" />
                    <meta
                      property="og:description"
                      content="Detail pengalaman kerja dan proyek yang pernah saya kerjakan sebagai Full-Stack Developer."
                    />
                    <meta property="og:url" content="https://agitrahadian.my.id/experience" />
                  </Helmet>
                  <Experience />
                </>
              }
            />
            <Route
              path="/tugas"
              element={
                <>
                  <Helmet>
                    <title>Daftar Tugas – Agit Rahadian</title>
                    <meta
                      name="description"
                      content="Koleksi tugas dan proyek kecil yang telah saya kerjakan."
                    />
                    <link rel="canonical" href="https://agitrahadian.my.id/tugas" />
                    <meta property="og:title" content="Daftar Tugas – Agit Rahadian" />
                    <meta
                      property="og:description"
                      content="Koleksi tugas dan proyek kecil yang telah saya kerjakan."
                    />
                    <meta property="og:url" content="https://agitrahadian.my.id/tugas" />
                  </Helmet>
                  <Tugas />
                </>
              }
            />
            <Route
              path="/tugas/1"
              element={
                <>
                  <Helmet>
                    <title>Detail Tugas 1 – Agit Rahadian</title>
                    <meta
                      name="description"
                      content="Penjelasan detail tugas 1, teknologi yang dipakai, dan hasil implementasinya."
                    />
                    <link rel="canonical" href="https://agitrahadian.my.id/tugas/1" />
                    <meta property="og:title" content="Detail Tugas 1 – Agit Rahadian" />
                    <meta
                      property="og:description"
                      content="Penjelasan detail tugas 1, teknologi yang dipakai, dan hasil implementasinya."
                    />
                    <meta property="og:url" content="https://agitrahadian.my.id/tugas/1" />
                  </Helmet>
                  <Tugas1 />
                </>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
