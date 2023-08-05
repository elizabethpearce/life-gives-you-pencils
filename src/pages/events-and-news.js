import React from 'react';

const EventsAndNews = () => {
 
    return (
      <div className='events-and-news-wrapper'>
        
        <div className='events-and-news-header-wrapper'>
          - Events & News -
        </div>
        <div className='events-and-news-text-wrapper'>
          <div className='events-wrapper'>
            - CURRENT EVENTS -<br/><br/>
            Check back soon for my current events!
          </div>
          <div className='news-wrapper'>
            - NEWS -<br/><br/>
            Check back soon for the latest news!
          </div>
        </div>     
    </div>
  );
}

  export default(EventsAndNews);