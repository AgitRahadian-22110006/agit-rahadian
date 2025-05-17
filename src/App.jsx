// src/App.jsx
import './App.css';
import { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home            = lazy(() => import('./pages/Home'));
const DetailPortfolio = lazy(() => import('./pages/DetailPortfolio'));
const Experience      = lazy(() => import('./pages/Experience'));
const About           = lazy(() => import('./components/About'));
const Tugas           = lazy(() => import('./pages/Tugas'));
const Tugas1          = lazy(() => import('./pages/Tugas1')); // ← import detail tugas 1

function App() {
  return (
    <>
      <Helmet>
        {/* Global SEO Meta */}
        <title>Agit Rahadian - Full-Stack Web Developer | Portfolio Resmi</title>
        {/* ... semua meta tag seperti sebelumnya ... */}
      </Helmet>

      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/about"          element={<About />} />
            <Route path="/portfolio/:id"  element={<DetailPortfolio />} />
            <Route path="/experience"     element={<Experience />} />
            <Route path="/tugas"          element={<Tugas />} />   {/* daftar tugas */}
            <Route path="/tugas/1"        element={<Tugas1 />} />  {/* detail Tugas 1 */}
            {/* Tambahkan route lain sesuai kebutuhan */}
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
