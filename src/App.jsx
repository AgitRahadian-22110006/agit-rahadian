// src/App.jsx
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';

// Data portfolio
import { portfolioList } from './data/DataPortfolio';

// Lazy loading halaman
const Home = lazy(() => import('./pages/Home'));
const DetailPortfolio = lazy(() => import('./pages/DetailPortfolio'));
const Experience = lazy(() => import('./pages/Experience'));
const About = lazy(() => import('./components/About'));
const Tugas = lazy(() => import('./pages/Tugas'));
const Tugas1 = lazy(() => import('./pages/Tugas1'));
const Tugas2 = lazy(() => import('./pages/Tugas2'));
const Blog = lazy(() => import('./pages/Blog'));
const PostDetail = lazy(() => import('./pages/PostDetail'));
const AdminLogin = lazy(() => import('./pages/Login'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// Komponen dinamis untuk halaman portfolio detail
function PortfolioPage() {
  const { id } = useParams();
  const project = portfolioList.find(p => p.id.toString() === id) || {};

  // Jika data proyek ditemukan, gunakan metadata khusus; kalau tidak, pakai default
  const title = project.title
    ? `${project.title} – Agit Rahadian`
    : 'Portfolio – Agit Rahadian';
  const description = project.description || 'Detail proyek saya sebagai Full-Stack Web Developer.';
  const imageUrl = project.images?.[0]?.src || 'https://agitrahadian.my.id/og/portfolio1.avif';
  const url = `https://agitrahadian.my.id/portfolio/${id}`;

  return (
    <>
      {/* SpeedInsights: gunakan di development/testing untuk analisis performance */}
      <SpeedInsights />

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
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
      {/* Metadata dasar, akan di‐override per‐halaman lewat React Helmet */}
      <Helmet>
        <html lang="id" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />

        <title>Agit Rahadian – Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio resmi Agit Rahadian – Full-Stack Web Developer. Lihat proyek, pengalaman, dan kontak untuk kerja sama."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://agitrahadian.my.id/" />
        <meta property="og:title" content="Agit Rahadian – Full-Stack Web Developer" />
        <meta
          property="og:description"
          content="Portfolio resmi Agit Rahadian – Full-Stack Web Developer. Lihat proyek, pengalaman, dan kontak untuk kerja sama."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id/" />
        <meta property="og:image" content="https://agitrahadian.my.id/og/profile-picture.avif" />

        {/* Structured Data JSON-LD (Person) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Agit Rahadian",
            "url": "https://agitrahadian.my.id/",
            "logo": "https://agitrahadian.my.id/android-chrome-512x512.png",
            "jobTitle": "Full-Stack Web Developer",
            "sameAs": [
              "https://github.com/agitrahadian-22110006",
              "https://www.instagram.com/agitrhdn",
              "https://www.tiktok.com/@agitrahadian",
              "https://www.facebook.com/share/16HuZskNh5/",
              "https://wa.me/6287758263820"
            ]
          }
          `}
        </script>
      </Helmet>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <BrowserRouter>
          <Routes>
            {/* Halaman utama */}
            <Route path="/" element={<Home />} />

            {/* Portfolio detail (dinamis) */}
            <Route path="/portfolio/:id" element={<PortfolioPage />} />

            {/* Halaman Experience, About */}
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />

            {/* Halaman Tugas */}
            <Route path="/tugas" element={<Tugas />} />
            <Route path="/tugas/1" element={<Tugas1 />} />
            <Route path="/tugas/2" element={<Tugas2 />} />

            {/* Halaman Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostDetail />} />

            {/* Halaman Admin (jika tidak ingin di‐index, tambahkan <meta name="robots" content="noindex"> di komponen Login & Dashboard) */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
