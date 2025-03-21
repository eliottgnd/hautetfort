import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnimation, useScroll } from 'framer-motion';

// Composant qui gère le scroll fluide et le retour en haut lors des changements de route
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const controls = useAnimation();

  // Remonter en haut de la page lors d'un changement de route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Configurer le smooth scroll global
  useEffect(() => {
    // Définir une fonction de défilement fluide
    const smoothScroll = (e) => {
      // Vérifier si c'est un lien interne
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerOffset = 80; // Compenser la hauteur de la navbar
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Ajouter le gestionnaire d'événements pour les clics sur les liens
    document.addEventListener('click', smoothScroll);
    
    return () => {
      document.removeEventListener('click', smoothScroll);
    };
  }, []);

  // Configurer l'animation de défilement
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      controls.start({ y: -latest * 0.1 });
    });
    
    return unsubscribe;
  }, [controls, scrollY]);

  return null;
};

export default ScrollToTop; 