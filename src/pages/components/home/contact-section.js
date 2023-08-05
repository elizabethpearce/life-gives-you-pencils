import React from 'react';

const ContactSection = () => {
  return (
    <center><div className='contact-wrapper'>     
      <div className='contact-text'>
        Contact<br />
        Email: info@lifegivesyoupencils.com<br/>
        Mailing:<br/>
        P.O. Box 536<br/>
        Peyton, CO 80831
      </div>

      <div className='social-media-section-wrapper'>
          <a href="https://www.facebook.com/profile.php?id=100089246615299" target="_blank" rel="noopener noreferrer" class='facebook-link'>My Facebook Page</a>
      </div>
    </div></center>
  );
};

export default ContactSection;
