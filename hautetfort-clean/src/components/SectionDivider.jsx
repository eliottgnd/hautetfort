import React from 'react';
import '../styles/SectionDivider.css';

const SectionDivider = () => {
  // Créer un tableau pour générer plusieurs instances de chaque forme
  const shapes = [];
  
  // Formes différentes pour la première piste
  for (let i = 0; i < 12; i++) {
    shapes.push(
      <div key={`shape-${i}`} className="divider-shape" style={{ animationDelay: `${i * 0.15}s` }}>
        {i % 5 === 0 && <div className="shape-square"></div>}
        {i % 5 === 1 && <div className="shape-circle"></div>}
        {i % 5 === 2 && <div className="shape-triangle"></div>}
        {i % 5 === 3 && <div className="shape-rectangle"></div>}
        {i % 5 === 4 && <div className="shape-diamond"></div>}
      </div>
    );
  }
  
  // Formes alternatives pour la deuxième piste
  const altShapes = [];
  for (let i = 0; i < 12; i++) {
    altShapes.push(
      <div key={`alt-shape-${i}`} className="divider-shape" style={{ 
        animationDelay: `${i * 0.25 + 0.1}s`,
        transform: i % 2 === 0 ? 'scale(1.2)' : 'scale(0.9)'
      }}>
        {i % 5 === 0 && <div className="shape-square alt rotating"></div>}
        {i % 5 === 1 && <div className="shape-circle alt"></div>}
        {i % 5 === 2 && <div className="shape-triangle alt rotating"></div>}
        {i % 5 === 3 && <div className="shape-rectangle alt"></div>}
        {i % 5 === 4 && <div className="shape-diamond alt rotating"></div>}
      </div>
    );
  }

  // Troisième jeu de formes pour plus de diversité
  const extraShapes = [];
  for (let i = 0; i < 10; i++) {
    extraShapes.push(
      <div key={`extra-shape-${i}`} className="divider-shape" style={{ 
        animationDelay: `${i * 0.3 + 0.2}s`,
        transform: `scale(${0.7 + Math.random() * 0.5})`
      }}>
        {i % 5 === 0 && <div className="shape-square" style={{ transform: 'rotate(45deg)' }}></div>}
        {i % 5 === 1 && <div className="shape-circle" style={{ opacity: 0.8 }}></div>}
        {i % 5 === 2 && <div className="shape-triangle" style={{ transform: 'rotate(180deg)' }}></div>}
        {i % 5 === 3 && <div className="shape-rectangle" style={{ transform: 'rotate(30deg)' }}></div>}
        {i % 5 === 4 && <div className="shape-diamond" style={{ opacity: 0.9 }}></div>}
      </div>
    );
  }

  return (
    <div className="section-divider">
      <div className="divider-track">
        {shapes}
        {altShapes}
        {extraShapes}
        {/* Répéter les formes pour assurer un défilement continu */}
        {shapes}
        {altShapes}
        {extraShapes}
      </div>
    </div>
  );
};

export default SectionDivider; 