import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-section">
      <div className="header-background">
        <div className="header-overlay"></div>
        <img 
          src="/assets/images/mission.jpg" 
          alt="Background" 
          className="header-image"
        />
      </div>
      
      {/* Éléments décoratifs */}
      <div className="header-shapes">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="floating-shape shape4"></div>
      </div>
      
      <div className="header-content">
        <div className="header-title-container">
          <div className="header-title-wrapper">
            <h1 className="header-title">
              Trouvez Votre Voix
            </h1>
          </div>
          <p className="header-subtitle">
            L'art de l'éloquence et du théâtre au cœur du Pays Basque
          </p>
          <div className="header-buttons">
            <button
              className="header-button primary"
              onClick={() => scrollToSection('offres')}
            >
              <span>Découvrir nos offres</span>
            </button>
            <button
              className="header-button secondary"
              onClick={() => scrollToSection('contact')}
            >
              <span>Nous contacter</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Découvrir</span>
      </div>
    </header>
  );
};

export default Header; 