import { useState, useRef } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const galleryRef = useRef(null);

  const images = [
    '/assets/images/Eloquentia Jules Ferry Janv 2023 (1).jpg',
    '/assets/images/Eloquentia Jules Ferry Janv 2023 (2).jpg',
    '/assets/images/Eloquentia Jules Ferry Janv 2023 (3).jpg',
    '/assets/images/Eloquentia Jules Ferry Janv 2023 (4).jpg',
    '/assets/images/Eloquentia Jules Ferry Janv 2023.jpg',
    '/assets/images/Photo enfant de Eliott.jpg',
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

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      navigateImage('next');
    } else if (isRightSwipe && currentIndex > 0) {
      navigateImage('prev');
    }
  };

  const navigateImage = (direction) => {
    if (direction === 'next' && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">Galerie</h2>
        <div 
          className="gallery-main"
          ref={galleryRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-main-image-container">
            <img 
              src={images[currentIndex]} 
              alt={`Photo ${currentIndex + 1}`} 
              className="gallery-main-image"
            />
            <div className="gallery-main-nav">
              <button 
                className="gallery-nav-button prev"
                onClick={() => navigateImage('prev')}
                disabled={currentIndex === 0}
              >
                ‹
              </button>
              <span className="gallery-counter">
                {currentIndex + 1} / {images.length}
              </span>
              <button 
                className="gallery-nav-button next"
                onClick={() => navigateImage('next')}
                disabled={currentIndex === images.length - 1}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 