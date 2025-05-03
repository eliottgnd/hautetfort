import '../styles/CurrentEvent.css';

const CurrentEvent = () => {
  return (
    <section className="current-event-section">
      <div className="current-event-container">
        <h2 className="section-title">En ce moment</h2>
        <div className="current-event-card">
          <div className="current-event-content">
            <div className="current-event-image-container">
              <img 
                src="/assets/images/en-ce-moment.jpeg" 
                alt="En ce moment" 
                className="current-event-image"
              />
            </div>
            <div className="current-event-info">
              <h3 className="current-event-name">Atelier d'Eloquence</h3>
              <div className="current-event-details">
                <div className="current-event-detail">
                  <svg className="current-event-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Vendredi 21 février à 19h30</span>
                </div>
                <div className="current-event-detail">
                  <svg className="current-event-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span><strong>STUDIO B.A</strong> 10 rue Chapeler, 64200 Biarritz</span>
                </div>
                <div className="current-event-detail">
                  <svg className="current-event-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <span className="font-medium">Tarifs :</span>
                    <span className="ml-2"><strong>Plein</strong>: 20€ <strong>Réduit</strong>: 15€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentEvent; 