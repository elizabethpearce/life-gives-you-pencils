import React from 'react';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';

const Cart = () => {
 
    return (
      <div className='cart-page-wrapper'>
      <div className='nav-bar-header-wrapper'>
        <div className='logo-wrapper'>
          <NavBarLogo />
        </div>
        <div className='nav-bar-wrapper'>
          <NavBar />
        </div>
      </div>
      <div>
        Cart!
      </div>
      <div className='contact-section-wrapper'>
        <ContactSection />
      </div>
      </div>
    );
  }

  export default(Cart);