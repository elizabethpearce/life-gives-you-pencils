// import React, { Component } from 'react';

// export default class NavBarLogo extends Component {
//   render() {
//     return (
//       <div className='nav-bar-logo-wrapper'>
//       </div>     
//     );
//   }
// }

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLogo = () => {
  return (
    <div className='nav-bar-logo-wrapper'>
      <NavLink exact to='/' className="logo-home-page-link"></NavLink>
    </div>
  )
}

export default NavBarLogo;