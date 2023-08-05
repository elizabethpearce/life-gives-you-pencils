// import React, { Component } from 'react';
// import headerLogo from '../../../static/assets/images/Life Gives You Pencils Website Header.png'

// export default class LogoHeader extends Component {
//   render() {
//     return (
//       <div className='logo-header'>
//         <img class='logo-header-img'src={headerLogo}  alt="Life Gives You Pencils Logo Header" ></img>
//       </div>

      
//     );
//   }
// }

import React from 'react';
import headerLogo from '../../../static/assets/images/Life Gives You Pencils Website Header.png';

const LogoHeader = () => {
  return (
    <div className='logo-header'>
      <img className='logo-header-img' src={headerLogo} alt="Life Gives You Pencils Logo Header" ></img>
    </div>
  );
};

export default LogoHeader;