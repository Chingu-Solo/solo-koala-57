import React from 'react';
import { connect } from 'react-redux';
import { updateGrid } from "../../actions/actionGrid";

const Grid = (props) => {

    const { updateGrid } = props;

    return (
        <div className="input-field center-align">
            <button className="btn" onClick={updateGrid}><i className="material-icons icon">reorder</i></button>
        </div>
    )
}

export default connect(null, {updateGrid})(Grid);