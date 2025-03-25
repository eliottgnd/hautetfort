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
import Gallery from './components/Gallery';
import Home from './pages/Home';
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
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <SectionDivider />
              <Quote />
              <SectionDivider />
              <About />
              <SectionDivider />
              <CurrentEvent />
              <SectionDivider />
              <Offers />
              <SectionDivider />
              <Founders />
              <SectionDivider />
              <Gallery />
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
