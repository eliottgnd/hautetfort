import { useState } from 'react';
import '../styles/Offers.css';

const Offers = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    if (openCardId === id) {
      setOpenCardId(null);
    } else {
      setOpenCardId(id);
    }
  };

  const offers = [
    {
      id: 'card1',
      title: 'Formation en Entreprise',
      image: '/assets/images/hef5.jpg',
      description: "Des formations personnalisées pour renforcer la prise de parole et la communication en entreprise. Bénéficiez d'exercices pratiques et de sessions adaptées à vos besoins.",
      details: [
        'Objectifs : Améliorer la communication interne et externe.',
        'Devis : Disponible sur demande.',
        'Durée : 3h à 2 jours selon le programme.'
      ],
      gallery: [
        '/assets/images/hef5.jpg',
        '/assets/images/hef6.jpg'
      ]
    },
    {
      id: 'card2',
      title: 'Atelier Éloquence / Atelier pour Adulte',
      image: '/assets/images/hef11.jpg',
      description: "Améliorez votre aisance à l'oral grâce à nos ateliers interactifs. Apprenez à gérer votre stress et à captiver votre audience.",
      details: [
        'Objectifs : Développer la confiance, l\'audace, la créativité et la technique.',
        'Devis : Sur mesure selon vos besoins.',
        'Ateliers : 1 par mois, infos sur Facebook : Haut et Fort Eloquence.',
        'Public : Entrepreneurs, cadres et étudiants...'
      ],
      gallery: [
        '/assets/images/hef11.jpg',
        '/assets/images/hef12.jpg'
      ]
    },
    {
      id: 'card3',
      title: 'Concours d\'Éloquence : Tout âge',
      image: '/assets/images/hef9.jpg',
      description: "Participez à nos concours pour développer votre talent d'orateur. Mesurez-vous à d'autres participants dans un cadre bienveillant.",
      details: [
        'Objectifs : Stimuler la créativité et la prise de parole en public.',
        'Inscription : En ligne via notre formulaire.',
        'Devis : Sur mesure selon vos besoins.',
        'Publics : Écoles, Facultés, Entreprises...',
        'Modalités : Demi-journée à 3 jours, lien théorico-pratique.'
      ],
      gallery: [
        '/assets/images/hef9.jpg',
        '/assets/images/hef10.jpg'
      ]
    },
    {
      id: 'card4',
      title: 'Théâtre Forum',
      image: '/assets/images/hef12.jpg',
      description: "Découvrez le théâtre-forum comme moyen de résoudre des problématiques sociales dans un environnement collaboratif.",
      details: [
        'Objectifs : Encourager l\'engagement collectif et la prise de recul.',
        'Public : Associations, entreprises et particuliers.',
        'Durée : Entre 3 et 10 séances.'
      ],
      gallery: [
        '/assets/images/hef12.jpg',
        '/assets/images/hef13.jpeg'
      ]
    },
    {
      id: 'card5',
      title: 'Team Building',
      image: '/assets/images/hef8.jpg',
      description: "En utilisant l'art et le théâtre, nous développons les liens d'un collectif. Notre expérience nous permet de fédérer le groupe rapidement, de le mettre en confiance pour apprendre à rire de soi, à prendre confiance en soi et à se dévoiler.",
      details: [
        'Objectifs : Souder et renforcer les liens entre collègues, cohésion de groupe, intelligence collective.',
        'Durée : Demi-journée ou journée complète'
      ],
      gallery: [
        '/assets/images/hef8.jpg',
        '/assets/images/hef9.jpg'
      ]
    }
  ];

  return (
    <section id="offres" className="offers-section">
      <div className="offers-container">
        <h2 className="section-title">Nos Offres</h2>

        <div className="offers-list">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className={`offer-card ${openCardId === offer.id ? 'expanded' : ''}`}
              onClick={() => toggleCard(offer.id)}
            >
              <div className="offer-card-inner">
                <div className="offer-front">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="offer-image"
                  />
                  <div className="offer-title-container">
                    <h3 className="offer-title">{offer.title}</h3>
                    <span className="offer-icon">
                      {openCardId === offer.id ? '−' : '+'}
                    </span>
                  </div>
                </div>
                
                {openCardId === offer.id && (
                  <div className="offer-back">
                    <div className="offer-gallery">
                      {offer.gallery.map((image, index) => (
                        <img 
                          key={index} 
                          src={image} 
                          alt={`${offer.title} - Image ${index + 1}`}
                          className="gallery-image"
                        />
                      ))}
                    </div>
                    <p className="offer-description">
                      {offer.description}
                    </p>
                    <ul className="offer-details">
                      {offer.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers; 