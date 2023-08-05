import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';

const ArtSeriesOne = () => {
  return (

    <div className='art-series-one-wrapper'>
      <div className='nav-bar-header-wrapper'>
        <div className='logo-wrapper'>
          <NavBarLogo />
        </div>
        <div className='nav-bar-wrapper'>
          <NavBar />
        </div>
      </div>

      art section one

      <div className='contact-section-wrapper'>
          <ContactSection />
        </div>
    </div>
  );
}

export default(ArtSeriesOne);