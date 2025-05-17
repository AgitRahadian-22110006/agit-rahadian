import './App.css';
import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = lazy(() => import('./pages/Home'));
const DetailPortfolio = lazy(() => import('./pages/DetailPortfolio'));
const Experience = lazy(() => import('./pages/Experience'));
const About = lazy(() => import('./components/About'));

function App() {
  return (
    <>
      <Helmet>
        <title>Agit Rahadian - Full-Stack Web Developer | Portfolio Resmi</title>
        <meta name="description" content="Agit Rahadian adalah Full-Stack Web Developer berpengalaman dari Garut yang fokus pada pengembangan website sekolah, aplikasi pendidikan, dan solusi digital praktis." />
        <meta name="keywords" content="Agit Rahadian, Agit, agit, AGIT, AgitRahadian, Agitrahadian, agitrahadian, AGITRAHADIAN, AGIT RAHADIAN, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA, Full-Stack Developer, Web Developer, Programmer, Garut, Website Sekolah, Aplikasi Pendidikan, Pengembang Web, Portfolio Developer Indonesia" />
        <meta name="author" content="Agit Rahadian" />
        
        {/* Open Graph Meta Tags yang Ditingkatkan */}
        <meta property="og:title" content="Agit Rahadian - Full-Stack Web Developer | Portfolio Resmi" />
        <meta property="og:description" content="Website resmi Agit Rahadian, Full-Stack Web Developer asal Garut yang berspesialisasi dalam pengembangan website sekolah dan aplikasi pendidikan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id" />
        <meta property="og:image" content="https://agitrahadian.my.id/assets/profile-picture.png" />
        <meta property="og:site_name" content="Agit Rahadian" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agit Rahadian - Full-Stack Web Developer" />
        <meta name="twitter:description" content="Website resmi Agit Rahadian, Full-Stack Web Developer asal Garut yang berspesialisasi dalam pengembangan website sekolah dan aplikasi pendidikan." />
        <meta name="twitter:image" content="https://agitrahadian.my.id/assets/profile-picture.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://agitrahadian.my.id" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio/:id' element={<DetailPortfolio />} />
            <Route path='/experience' element={<Experience />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;