import React, { Component } from 'react';
import MajorNav from './majorNav';
import PreviewCard from './previewCard';

class Catalog extends Component {
    componentDidMount() {
        let elems = window.document.querySelectorAll('.dropdown-trigger');
        const options = {coverTrigger: false};
        window.M.Dropdown.init(elems, options);
    }
    
    render() {
        return (
            <div className="container">
                <MajorNav />
                <PreviewCard />
            </div>
        )
    }
}

export default Catalog;