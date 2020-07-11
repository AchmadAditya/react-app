import React from 'react';

function AboutContact() {
    return(
        <div>
          <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer" className='btn blue waves-effect light darken-3'><span className="fa fa-facebook white-text" style={{marginRight: 10}}></span> Facebook  </a>
          <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer" style={{marginLeft: 10}} className='btn pink waves-effect light'><span className="fa fa-instagram white-text" style={{marginRight: 10}}></span>Instagram</a>
          <a href='https://twitter.com/explore' target='_blank' rel="noopener noreferrer" style={{marginLeft: 10}} className='btn light-blue waves-effect light'><span className="fa fa-twitter white-text" style={{marginRight: 10}}></span>Twitter</a>
        </div>
    )
};

export default AboutContact;