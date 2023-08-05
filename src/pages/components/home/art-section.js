import React from 'react';
import { NavLink } from 'react-router-dom';
import imageOne from '../../../static/assets/images/Artwork_Homepage_Spot_1.jpg';
import imageTwo from '../../../static/assets/images/Artwork_Homepage_Spot_2.jpg';

const ArtSection = () => {
  return (
    <div className='art-section'>
      <div className='art-spot-one'>
        <img className='image-one' src={imageOne} alt='For Sale'></img>
        <div className='for-sale-btn-wrapper'>
          <NavLink to='/shop' className='btn'>For Sale</NavLink>
        </div>
      </div>

      <div className='art-spot-2'>
        <img className='image-two' src={imageTwo} alt='All Artwork'></img>
        <div className='all-artwork-button-wrapper'>
          <NavLink to='/gallery' className='btn'>All Artwork</NavLink>
        </div>
      </div>
    </div>
  );
};

export default(ArtSection);