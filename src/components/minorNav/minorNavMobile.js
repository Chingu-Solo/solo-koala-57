import React from 'react';
import { Link } from 'react-router-dom';

const MinorNavMobile = () => {
    return (
            <div className="sidenav" id="slide-out">
                <ul>
                <ul className="nav-mobile">
                    <li><Link to="/" className='logo-lockup'><span className="google-logo"></span></Link></li>
                    <li><Link to="/" className='logo-lockup' id='font-logo'><span className="logo-font">Fonts</span></Link></li>
                </ul>
                    <li><Link to="/">CATALOG</Link></li>
                    <li><Link to="/features">FEATURES</Link></li>
                    <li><Link to="/articles">ARTICLES</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                </ul>
            </div>
    )
}

export default MinorNavMobile;