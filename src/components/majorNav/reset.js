import React from 'react';
import { connect } from 'react-redux';
import { handleReset } from '../../actions/actionReset';

const Reset = (props) => {

    const resetChange = () => {
        document.getElementById("sample").reset();
        document.getElementById("search").reset();
        document.getElementById("mode-switch").checked = false;
        let elems = document.querySelectorAll(".active");
        [].forEach.call(elems, (el) => {
            el.classList.remove("active");
        });
        props.handleReset()
    }

    return (
        <div className="input-field center-align">
            <button className="btn" onClick={resetChange}><i className="material-icons icon">refresh</i></button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(handleReset())
    }
}

export default connect(null, mapDispatchToProps)(Reset);