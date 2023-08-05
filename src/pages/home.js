import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LogoHeader from './components/home/logo-header';
import WelcomeSection from './components/home/welcome-section';
import ArtSection from './components/home/art-section';

const Home = ({isLoggedIn, handleLogout}) => {
  const location = useLocation();

  useEffect(() => {
    console.log('Home component re-rendered, isLoggedIn:', isLoggedIn);
  }, [isLoggedIn, location]);

  useEffect(() => {
    console.log('isLoggedIn prop in Home component:', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className='home-page-wrapper'>

      <div className='logo-header-wrapper'>
        <LogoHeader />
      </div>

      <div className='welcome-section-wrapper'>
        <WelcomeSection />
      </div>

      <div className='art-section-wrapper'>
        <ArtSection />
      </div>      
    </div>
  );
};

export default Home;
