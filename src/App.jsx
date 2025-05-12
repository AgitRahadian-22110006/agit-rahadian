import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = lazy(() => import('./pages/Home'));
const DetailPortfolio = lazy(() => import('./pages/DetailPortfolio'));
const Experience = lazy(() => import('./pages/Experience'));
const About = lazy(() => import('./components/About'));

function App() {
  return (
    <>
      <Helmet>
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
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio/:id' element={<DetailPortfolio />} />
            <Route path='/experience' element={<Experience />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
