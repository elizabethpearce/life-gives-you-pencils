import React, { useState, useEffect } from 'react';
import RotatingFrame from './shop-rotating-imgs';

const Gallery = () => {

  const [images, setImages] = useState(null);

  useEffect(() => {
    fetch('https://life-gives-you-pencils-api-f1604f957ec2.herokuapp.com/images')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data fetched:', data);
        setImages(data);
      })
        .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  useEffect(() => {
    console.log(images);
  }, [images]);

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
        {images === null ? (
          <div>Loading...</div>
        ) : images.length > 0 ? (
          <RotatingFrame images={images.map((image) => image.user_file)} interval={2900} width='700px' />
        ) : (
          <div>No images available</div>
        )}
      </div>
      </div>
    );
  }

  export default(Gallery);