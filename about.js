import React from 'react';
import AboutContact from './about_contact';

function About() {
    return(
        <div className="container">
            <h3>About</h3>
            <p>This is website is about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt perspiciatis, animi quisquam nostrum voluptatum ad aliquid dolorem voluptates eaque consequuntur ipsum eum porro enim, assumenda quas velit odit voluptatem amet.</p>
            
            <h3>Hit me up @ :</h3>
            <AboutContact />
        </div>
    )
};

export default About;
