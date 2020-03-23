import React from 'react';
import { Link } from 'react-router-dom';

const MinorNav = () => {
    return (
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Google</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">CATALOG</Link></li>
                <li><Link to="/features">FEATURES</Link></li>
                <li><Link to="/articles">ARTICLES</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default MinorNav;