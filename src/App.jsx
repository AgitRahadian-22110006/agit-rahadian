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
        <title>Agit Rahadian - Full-Stack Web Developer</title>
        <meta name="description" content="Hai, saya Agit Rahadian, seorang Full-Stack Web Developer yang fokus menciptakan solusi digital praktis dan user-friendly." />
        <meta name="keywords" content="Agit Rahadian, Agit, agit, AGIT, AgitRahadian, Agitrahadian, agitrahadian, AGITRAHADIAN, AGIT RAHADIAN, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA Full-Stack Developer, Web Developer, Programmer, Digital Solutions, Clean Code, Responsive Design" />
        <meta name="author" content="Agit Rahadian" />
        <meta property="og:title" content="Agit Rahadian - Full-Stack Web Developer" />
        <meta property="og:description" content="Profil Agit Rahadian, seorang Full-Stack Web Developer yang fokus menciptakan solusi digital praktis dan user-friendly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id" />
        <meta property="og:image" content="https://agitrahadian.my.id/assets/profile-picture.webp" />
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