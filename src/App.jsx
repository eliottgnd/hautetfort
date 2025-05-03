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
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Gallery from './components/Gallery';
import Popup from './components/Popup';
import './styles/App.css';

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
      <div id="top" style={{ position: 'absolute', top: 0, left: 0, opacity: 0 }} />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Quote />
              <About />
              <CurrentEvent />
              <Offers />
              <Founders />
              <Gallery />
            </>
          } />
        </Routes>
      </div>
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
