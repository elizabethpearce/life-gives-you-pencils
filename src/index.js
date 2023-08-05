import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ScrollToTop from './pages/components/scroll-to-top';
import './index.css';
import './main.scss';
import './fixed-nav.css';
import App from './App';
import Home from './pages/home';
import ShopTwo from './pages/shop-2';
import Services from './pages/services';
import Gallery from './pages/gallery';
import ArtSeriesOne from './pages/art-series-one';
import ArtSeriesTwo from './pages/art-series-two';
import CustomJobs from './pages/custom-jobs';
import MiscArt from './pages/misc-art';
import EventsAndNews from './pages/events-and-news';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import ImgManagementForm from './pages/img-mngmt-form';
import ErrorPage from './pages/error-page';
import reportWebVitals from './reportWebVitals';
import NavBar from './pages/components/home/nav-bar';
import NavBarLogo from './pages/components/home/nav-bar-logo';
import ContactSection from './pages/components/home/contact-section';

const AppWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken') ? true : false);
  const [numButtons, setNumButtons] = useState(isLoggedIn ? 9 : 7);

  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  useEffect(() => { 
    setNumButtons(isLoggedIn ? 9 : 7);
  }, [isLoggedIn]);

  useEffect(() => {
    const logoWidth = (numButtons * 2) + 6 + '%';
    const navBarWidth = (100 - parseFloat(logoWidth)) + '%';
 
    document.documentElement.style.setProperty('--logo-width', logoWidth);
    document.documentElement.style.setProperty('--nav-bar-width', navBarWidth);
  }, [numButtons]);

  useEffect(() => {
    console.log('isLoggedIn:', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="app-container">
            <div className="nav-bar-header-wrapper">
              <div className="logo-wrapper">
                <NavBarLogo />
              </div>
              <div className="nav-bar-wrapper">
                <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
              </div>
            </div>
      
            <div className="main-content">
        <Routes>
        <Route path="/" element={<App isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
          <Route path="home" element={<Home isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
          <Route path="shop" element={<ShopTwo />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="art-series-one" element={<ArtSeriesOne />} />
          <Route path="art-series-two" element={<ArtSeriesTwo />} />
          <Route path="custom-jobs" element={<CustomJobs />} />
          <Route path="misc-art" element={<MiscArt />} />
          <Route path="services" element={<Services />} />
          <Route path="events-news" element={<EventsAndNews />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="img-management" element={<ImgManagementForm />} />
          <Route path="*" element={<ErrorPage />} />      
        </Routes>
        </div>
      
        <div className='contact-section-wrapper'>
          <ContactSection />
        </div>
    </div>
  </BrowserRouter>
);
  };

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();