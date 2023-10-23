import React, { useState, useEffect } from 'react';

const RotatingFrame = ({ images, interval, width = '100%' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log('images in RotatingFrame:', images);
    
    const timer = setInterval(() => {  
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  console.log('images in RotatingFrame:', images);

  return (
    <div className='rotating-images-wrapper'>
      {images.length > 0 ? (
      <img src={images[currentImageIndex]} alt="Rotating Gallery Art" style={{ width: width }} className='rotating-images'/>
      ) : (
        <div>No imags available</div>
      )}
    </div>
  );
};

export default RotatingFrame;