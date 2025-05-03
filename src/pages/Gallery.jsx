import { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', name: 'Tous' },
    { id: 'ateliers', name: 'Ateliers' },
    { id: 'evenements', name: 'Événements' },
    { id: 'formations', name: 'Formations' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'ateliers',
      title: 'Atelier d\'éloquence',
      subtitle: 'Exercices d\'improvisation en groupe',
      image: '/assets/images/hef1.jpg'
    },
    {
      id: 2,
      category: 'formations',
      title: 'Formation en entreprise',
      subtitle: 'Développement des compétences oratoires professionnelles',
      image: '/assets/images/hef2.jpg'
    },
    {
      id: 3,
      category: 'ateliers',
      title: 'Techniques vocales',
      subtitle: 'Maîtriser sa voix et sa respiration',
      image: '/assets/images/hef3.jpg'
    },
    {
      id: 4,
      category: 'evenements',
      title: 'Concours d\'éloquence',
      subtitle: 'Grand prix Haut et Fort 2023',
      image: '/assets/images/hef4.jpg'
    },
    {
      id: 5,
      category: 'formations',
      title: 'Atelier pour adolescents',
      subtitle: 'Développer la confiance en soi par la parole',
      image: '/assets/images/hef7.jpg'
    },
    {
      id: 6,
      category: 'evenements',
      title: 'Soirée débats',
      subtitle: 'Rencontres et échanges mensuels',
      image: '/assets/images/hef10.jpg'
    },
    {
      id: 7,
      category: 'ateliers',
      title: 'Expression corporelle',
      subtitle: 'La communication non-verbale',
      image: '/assets/images/hef12.jpg'
    },
    {
      id: 8,
      category: 'formations',
      title: 'Média training',
      subtitle: 'Préparation aux interventions médiatiques',
      image: '/assets/images/hef14.jpeg'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Notre Galerie</h1>
      <p className="gallery-subtitle">
        Découvrez nos ateliers, nos formations et nos événements dédiés à l'art de la parole
      </p>

      <div className="gallery-filters">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`gallery-filter-button ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-item" onClick={() => openModal(item)}>
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3 className="gallery-item-title">{item.title}</h3>
              <p className="gallery-item-subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={`gallery-modal ${selectedImage ? 'active' : ''}`} onClick={closeModal}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} className="gallery-modal-image" />
            <div className="gallery-modal-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.subtitle}</p>
            </div>
            <div className="gallery-modal-close" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div className="gallery-modal-nav gallery-modal-prev" onClick={() => navigateImage('prev')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
            <div className="gallery-modal-nav gallery-modal-next" onClick={() => navigateImage('next')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 