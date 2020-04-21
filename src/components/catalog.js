import React, { Component } from 'react';
import MajorNav from './majorNav';
import PreviewCard from './previewCard';
import FixedButton from './fixedButton';
import Footer from './footer';

class Catalog extends Component {
    componentDidMount() {
        const elems = window.document.querySelectorAll('.dropdown-trigger');
        const options = {coverTrigger: false};
        window.M.Dropdown.init(elems, options);

        const side_menu = document.querySelectorAll('.sidenav');
        const opt = {preventScrolling: true};
        window.M.Sidenav.init(side_menu, opt);

        window.onscroll = function() {handleScroll()};
        const handleScroll = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("to-top").className = "fixed-action-btn";
            } else {
                document.getElementById("to-top").className = "hide";
            }
        }
    }
    
    render() {
        return (
            <div>
                <MajorNav />
                <PreviewCard />
                <FixedButton />
                <Footer/>
            </div>
        )
    }
}

export default Catalog;