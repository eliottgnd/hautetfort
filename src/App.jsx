import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import CurrentEvent from './components/CurrentEvent';
import Offers from './components/Offers';
import Quote from './components/Quote';
import Founders from './components/Founders';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import './App.css';

// Composant réutilisable pour les titres de section
export const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simuler un temps de chargement
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <SectionDivider />
            <About />
            <SectionDivider />
            <CurrentEvent />
            <SectionDivider />
            <Offers />
            <SectionDivider />
            <Quote />
            <SectionDivider />
            <Founders />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <SectionDivider />
      <Footer />
    </div>
  );
}

export default App;
