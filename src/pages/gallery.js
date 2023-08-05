import React, { useState, useEffect } from 'react';
import RotatingFrame from './shop-rotating-imgs';

const Gallery = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/images')
      .then((response) => response.json())
      .then((data) => {
        const processedImages = data.map((image) => ({
          ...image,
          img: `data:image/jpeg;base64,${image.img}`,
        }));
        setImages(processedImages);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

    return (
      <div className='gallery-page-wrapper'>
        
        <div className='gallery-header'>
          - Gallery -
          <div className='gallery-header-text'>
            These are pieces that are one of a kind, they are not for sale and will never be reproduced.<br />
            They are the honorable mentions that date from a decade ago, to current works.<br/>
            Most of these show work in progress, practices, commissions, or one of a kind pieces for family or friends and <br/>
            all I was able to capture was a single photo of them before they went on to grace the spaces of those they were given to. <br/>
            Although not always the best quality image, I hope you enjoy them!
          </div>
        </div>

        <div className='gallery-rotating-images'>
          <RotatingFrame images={images.map((image) => image.img)} interval={2900} width='700px' />
        </div>
      </div>
    );
  }

  export default(Gallery);