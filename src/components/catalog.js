import React, { Component } from 'react';
import MajorNav from './majorNav';
import PreviewCard from './previewCard';
import FixedButton from './fixedButton';

class Catalog extends Component {
    componentDidMount() {
        let elems = window.document.querySelectorAll('.dropdown-trigger');
        const options = {coverTrigger: false};
        window.M.Dropdown.init(elems, options);

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
            </div>
        )
    }
}

export default Catalog;