// src/App.jsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DetailPortfolio from './pages/DetailPortfolio';
import Experience from './pages/Experience';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio/:id' element={<DetailPortfolio />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
