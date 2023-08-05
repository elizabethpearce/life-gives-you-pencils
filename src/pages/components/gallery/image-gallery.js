import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-gallery">
      <button className="arrow left" onClick={handlePrev}>
        &lt;
      </button>
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Services ${currentIndex}`} />
      </div>
      <button className="arrow right" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageGallery;

