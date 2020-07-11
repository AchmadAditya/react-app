import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import Clock from './navbar_clock';

function Navbar() {
    return(
        <div>
            <nav className="nav-wrapper green darken-2">
                <div className="container">
                    <Link to="/" className="brand-logo">Bruhland</Link>
                    <ul className='right hide-on-med-and-down'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/post">Post</NavLink></li>
                        <li>
                            <Clock />
                            {/* <input disabled className='white' type="text" placeholder='Search machine broke' style={{textIndent: 10, marginLeft: 10}} /> */}
                            {/* insert search component inside onSubmit method in above input */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;