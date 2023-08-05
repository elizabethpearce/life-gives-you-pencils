import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';

const CustomJobs = () => {
  return (
    <div className='custom-jobs-wrapper'>
      <div className='nav-bar-header-wrapper'>
        <div className='logo-wrapper'>
          <NavBarLogo />
        </div>
        <div className='nav-bar-wrapper'>
          <NavBar />
        </div>
      </div>

      custom jobs

      <div className='contact-section-wrapper'>
          <ContactSection />
        </div>
    </div>
  );
}

export default(CustomJobs);