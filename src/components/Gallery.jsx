import { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/assets/images/hef1.jpg',
    '/assets/images/hef2.jpg',
    '/assets/images/hef3.jpg',
    '/assets/images/hef4.jpg',
    '/assets/images/hef5.jpg',
    '/assets/images/hef6.jpg',
    '/assets/images/hef7.jpg',
    '/assets/images/hef8.jpg',
    '/assets/images/hef9.jpg',
    '/assets/images/hef10.jpg',
    '/assets/images/hef11.jpg',
    '/assets/images/hef12.jpg',
    '/assets/images/hef13.jpeg',
    '/assets/images/hef14.jpeg',
    '/assets/images/hef15.png',
    '/assets/images/hef16.png',
    '/assets/images/hef17.jpg'
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="section-title">Notre Galerie</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(image, index)}
            >
              <img 
                src={image} 
                alt={`Photo ${index + 1}`}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h3 className="gallery-item-title">Photo {index + 1}</h3>
                <p className="gallery-item-subtitle">Cliquez pour agrandir</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal active" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>×</button>
            <img 
              src={selectedImage} 
              alt="Photo en grand format" 
              className="gallery-modal-image"
            />
            <div className="gallery-modal-nav gallery-modal-prev" onClick={() => navigateImage('prev')}>
              ‹
            </div>
            <div className="gallery-modal-nav gallery-modal-next" onClick={() => navigateImage('next')}>
              ›
            </div>
            <div className="gallery-modal-caption">
              Photo {currentIndex + 1} sur {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 