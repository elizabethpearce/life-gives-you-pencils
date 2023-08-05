import React, { useState, useEffect } from 'react';
import RotatingFrame from './shop-rotating-imgs';
import boldLions from '../static/assets/images/bold-lions-watermark.jpg'
import castTheChains from '../static/assets/images/cast-the-chains-watermark.jpg'
import lilyPassThroughWaters from '../static/assets/images/lily-pass-through-the-waters.jpg'
import loveNeverFails from '../static/assets/images/love-never-fails-watermark.jpg'
import walkThroughFire from '../static/assets/images/when-you-walk-through-the-fire-lilies.jpg'
import restoreYouLily from '../static/assets/images/restore-you-through-the-years-lily.jpg'

const ShopTwo = () => { 
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const imagePaths = [
        boldLions,
        castTheChains,
        lilyPassThroughWaters,
        loveNeverFails,
        walkThroughFire,
        restoreYouLily
      ];  

      setImages(imagePaths);
    }, []);
    
  return (
    <div className='shop-page-wrapper'>    

      <div className='shop-header'>
        - For Sale - 
        <div className='shop-header-text'>
          Click the button below to visit my Etsy shop to purchase the artwork displayed here!
        </div> 

        <div className='header-shop-link'>
          <a href="https://www.etsy.com/shop/LifeGivesYouPencils?ref=simple-shop-header-name&listing_id=1381970399&fbclid=IwAR2KCd9LjWqQy2qXBVXTdVV1JZbmUE-8AmEKxyXZoi8IAcDFk1lcUvir-7I" target="_blank" rel="noopener noreferrer" class='shop-link'>
            <button className='btn'>Online Shop</button>
          </a>
        </div>
      </div> 
      
      <div className='for-sale-rotating-images'>
        <RotatingFrame images={images} interval={2900} width='700px'/>
      </div>     
    </div>
  );
};

export default ShopTwo;