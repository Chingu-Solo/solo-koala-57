import React from 'react';

const FixedButton = () => {

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div id="to-top" className="fixed-action-btn hide">
            <button className="btn-floating btn-large" onClick={toTop}><i className="large material-icons">arrow_upward</i></button>
        </div>
    )
}

export default FixedButton;