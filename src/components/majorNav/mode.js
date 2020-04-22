import React from 'react';
import { connect } from 'react-redux';
import { updateMode } from '../../actions/actionMode';

const Mode = (props) => {

    const {updateMode} = props;

    return (
        <div className="input-field switch center-align" onChange={updateMode}>
            <label id="switch-label" className="valign-wrapper">
                <input id="mode-switch" type="checkbox" />
                <span className="lever grey lighten-1"></span>
            </label>
        </div>
    )
}

export default connect(null, {updateMode})(Mode);