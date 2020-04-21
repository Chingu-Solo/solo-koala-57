import React from 'react';
import { Link } from 'react-router-dom';
import MinorNavMobile from './minorNavMobile';

const MinorNavDesktop = () => {

    return (
        <div>
        <nav>
            <div className="nav-wrapper">
                <ul>
                    <li><Link to="#" className="menu-button sidenav-trigger" data-target="slide-out"><i className="material-icons icon">menu</i></Link></li>
                    <li><Link to="/" className='logo-lockup'><span className="google-logo"></span></Link></li>
                    <li><Link to="/" className='logo-lockup' id='font-logo'><span className="logo-font">Fonts</span></Link></li>
                </ul>
                <ul className="side-nav right hide-on-med-and-down">
                    <li><Link to="/">CATALOG</Link></li>
                    <li><Link to="/features">FEATURES</Link></li>
                    <li><Link to="/articles">ARTICLES</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                </ul>
            </div>
        </nav>

        <MinorNavMobile />
        </div>
    )
}

export default MinorNavDesktop;