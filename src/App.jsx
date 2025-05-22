// src/App.jsx
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
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

// Dynamic portfolio page with metadata
function PortfolioPage() {
  const { id } = useParams();
  const project = portfolioList.find(p => p.id.toString() === id) || {};
  const title = project.title ? `${project.title} – Agit Rahadian` : 'Portfolio – Agit Rahadian';
  const description = project.description || 'Detail proyek saya sebagai Full-Stack Web Developer.';
  const imageUrl = project.images?.[0]?.src || 'https://agitrahadian.my.id/og/portfolio1.avif';
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
      {/* Global Meta */}
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

        {/* Open Graph */}
        <meta property="og:title" content="Agit Rahadian – Full-Stack Web Developer" />
        <meta
          property="og:description"
          content="Portfolio resmi Agit Rahadian – Full-Stack Web Developer. Lihat proyek, pengalaman, dan kontak untuk kerja sama."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id/" />
        <meta property="og:image" content="https://agitrahadian.my.id/og/profile-picture.avif" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {`{
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
          }`}
        </script>
      </Helmet>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/:id" element={<PortfolioPage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/tugas" element={<Tugas />} />
            <Route path="/tugas1" element={<Tugas1 />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
