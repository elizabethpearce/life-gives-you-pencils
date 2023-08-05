// import React, { Component } from 'react';

// export default class WelcomeSection extends Component {
//   render() {
//     return (
    
//       <div className='welcome-section'>
//             <center><h2>Welcome to Life Gives You Pencils!</h2><br />
//             Hello! My name is Rebekah Lamm and I'm delighted to be able to share my <br />
//             artwork with you. I hope it enriches your life!<br /><br />        

//             Currently, I have the "Cherished as the Lily" series available, which you can view by clicking<br />
//             the "For Sale" button below or if you'd like to see all my artowrk, click "All Artwork".<br /><br />
      
//             I also offer other services such as accepting custom art request as time allows and face painting.<br />
//             Check it out by clicking the "Services" button above!<br /><br />

//             Want to know what's new and exciting with me? Click the "Events & News" button above!<br /><br />
      
//             Thank you for stopping in, may you have a blessed day!</center>
//       </div>
//     );
//   }
// }

import React from 'react';

const WelcomeSection = () => {
  return (
    <div className='welcome-section'>
      <center>
        <h2>Welcome to Life Gives You Pencils!</h2>
        <br />
        Hello! My name is Rebekah Lamm and I'm delighted to be able to share my <br />
        artwork with you. I hope it enriches your life!
        <br />
        <br />
        Currently, I have the "Cherished as the Lily" series available, which you can view by clicking<br />
        the "For Sale" button below or if you'd like to see all my artwork, click "All Artwork".
        <br />
        <br />
        I also offer other services such as accepting custom art request as time allows and face painting.<br />
        Check it out by clicking the "Services" button above!
        <br />
        <br />
        Want to know what's new and exciting with me? Click the "Events & News" button above!
        <br />
        <br />
        Thank you for stopping in, may you have a blessed day!
      </center>
    </div>
  );
};

export default WelcomeSection;
