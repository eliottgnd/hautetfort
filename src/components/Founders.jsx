import React, { useEffect, useRef } from 'react';
import '../styles/Founders.css';

const Founders = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const founderElements = document.querySelectorAll('.founder-card');
    founderElements.forEach((el) => observer.observe(el));

    return () => {
      founderElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="founders" className="founders-section" ref={sectionRef}>
      <div className="founders-container">
        <h2 className="section-title">Les Fondateurs</h2>
        
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-image-container">
              <img src="/assets/images/kevin.jpeg" alt="Kévin" className="founder-image" />
              <div className="founder-overlay"></div>
            </div>
            <div className="founder-content">
              <h3 className="founder-name">Kévin</h3>
              <p className="founder-description">
                Fort de son expérience professionnelle d'éducateur spécialisé, et de 10 ans de pratique du théâtre, 
                Kévin jongle avec les arts pour faire grandir, accompagner et fédérer un groupe avec exigence et bienveillance.
              </p>
              <div className="founder-specialties">
                <span className="founder-specialty">Théâtre</span>
                <span className="founder-specialty">Éducation</span>
                <span className="founder-specialty">Coaching</span>
              </div>
            </div>
          </div>

          <div className="founder-card">
            <div className="founder-image-container">
              <img src="/assets/images/dylan.jpeg" alt="Dylan" className="founder-image" />
              <div className="founder-overlay"></div>
            </div>
            <div className="founder-content">
              <h3 className="founder-name">Dylan</h3>
              <p className="founder-description">
                Grâce à son expertise dans la conception et l'animation d'ateliers pédagogiques et de concours, 
                Dylan accompagne du CM1 au master la montée en compétence d'éloquence et de rhétorique.
              </p>
              <div className="founder-specialties">
                <span className="founder-specialty">Éloquence</span>
                <span className="founder-specialty">Pédagogie</span>
                <span className="founder-specialty">Rhétorique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders; 