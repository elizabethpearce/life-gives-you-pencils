import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

  const NavBar = ({ isLoggedIn, handleLogout }) => {
    const navigate = useNavigate(); 

  
    const handleLogoutClick = () => {
      localStorage.removeItem('authToken');
      handleLogout();
      navigate('/');
    };

  return (
    <div className="nav-bar-button-wrapper">
      <NavLink exact to="/" className="btn-special-nav-bar">Home</NavLink>
      <NavLink to="/shop" className="btn">Shop</NavLink>
      <NavLink to="/services" className="btn">Services</NavLink>
      <NavLink to="/gallery" className="btn">Gallery</NavLink>
      <NavLink to="/events-news" className="btn">Events & News</NavLink>
      <NavLink to="/about" className="btn">About</NavLink>
      <NavLink to="/contact" className="btn">Contact</NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/img-management" className="btn">Admin</NavLink>
          <button onClick={handleLogoutClick} className="btn-special-nav-bar">Logout</button>
        </>
      )}
    </div>
  );
};

export default NavBar;