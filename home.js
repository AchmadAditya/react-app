import React from 'react';
import Postcard from './home_post';

function Home() {
    return(
        <div className="container">
            <header>
                <h1>Welcome!</h1>
                <h5>This is my website</h5>
            </header>
            <br/> <br/> <br/> <br/> <br/>
            {/* insert post component */}
            <Postcard />
        </div>
    )
};

export default Home;
