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
              <a 
                href="https://www.linkedin.com/in/k%C3%A9vin-vavasseur-10b8a563/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin-button"
              >
                <svg className="linkedin-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Suivre sur LinkedIn
              </a>
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
              <a 
                href="https://www.linkedin.com/in/dylan-masson-298375b8/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin-button"
              >
                <svg className="linkedin-icon" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Suivre sur LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders; 