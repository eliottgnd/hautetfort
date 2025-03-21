import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    } else {
      scrollToTop();
    }
  };
  
  // Fonction pour remonter en haut de la page avec un défilement fluide
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
    };

    setScrolled(true);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Icônes SVG pour les liens
  const icons = {
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    about: (
      <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    ),
    workshops: (
      <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    gallery: (
      <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
    contact: (
      <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo-link" onClick={scrollToTop}>
            <img src="/assets/images/logo.png" alt="Logo Haut et Fort" className="navbar-logo" />
            <span className="navbar-title">Haut et Fort</span>
          </Link>
        </div>

        <div className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={scrollToTop}>
              {icons.home}
              <span>Accueil</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => scrollToSection('apropos')}>
              {icons.about}
              <span>À propos</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => scrollToSection('offres')}>
              {icons.workshops}
              <span>Ateliers</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={scrollToTop}>
              {icons.gallery}
              <span>Galerie</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => scrollToSection('contact')}>
              {icons.contact}
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 