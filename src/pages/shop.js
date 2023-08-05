import React from 'react';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';
import shopImgOne from '../static/assets/images/cast-the-chains-watermark.jpg'
import shopImgTwo from '../../src/static/assets/images/bold-lions-watermark.jpg'
import shopImgThree from '../../src/static/assets/images/lily-pass-through-the-waters.jpg'
import shopImgFour from '../../src/static/assets/images/MarilynMonroeArt.jpg'
import shopImgFive from '../../src/static/assets/images/MarilynMonroeArt.jpg'
import shopImgSix from '../../src/static/assets/images/love-never-fails-watermark.jpg'

const Shop = () => {
 
    return (
      <div className='shop-page-wrapper'>
        <div className='nav-bar-header-wrapper'>
          <div className='logo-wrapper'>
            <NavBarLogo />
          </div>
          <div className='nav-bar-wrapper'>
            <NavBar />
          </div>
        </div>

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

        
        <div className='shop-art'>
          <div className='shop-section-one'>
            <div className='shop-one-art'>
                <img className='shop-image-one' src={shopImgOne} alt='Cast the Chains'></img>
              <div className='shop-button-wrapper'>
                - Cast the Chains -
              </div>
            </div>
            <div className='shop-two-art'>
                <img className='shop-image-two' src={shopImgTwo} alt='Bold Lions'></img>
              <div className='shop-button-wrapper'>
                - Bold Lions -
              </div>
            </div>
          </div>

          <div className='shop-section-two'>
            <div className='shop-three-art'>
                <img className='shop-image-three' src={shopImgThree} alt='Rising Waters'></img>
              <div className='shop-button-wrapper'>
                - Rising Waters -
              </div>
            </div>
            <div className='shop-four-art'>
                <img className='shop-image-four' src={shopImgFour} alt='Scars'></img>
              <div className='shop-button-wrapper'>
                - Scars -
              </div>
            </div>
          </div>

          <div className='shop-section-three'>
            <div className='shop-five-art'>
                <img className='shop-image-five' src={shopImgFive} alt='He Restores'></img>
              <div className='shop-button-wrapper'>
                - He Restores -
              </div>
            </div>
            <div className='shop-six-art'>
                <img className='shop-image-six' src={shopImgSix} alt='Love Never Fails'></img>
              <div className='shop-button-wrapper'>
                - Love Never Fails -
              </div>
            </div>
          </div>
        </div>
        
        <div className='contact-section-wrapper'>
          <ContactSection />
        </div>
      </div>
    );
  }

  export default(Shop);