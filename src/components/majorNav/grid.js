import React from 'react';
import { connect } from 'react-redux';
import { updateGrid } from "../../actions/actionGrid";

const Grid = (props) => {

    const { updateGrid } = props;

    return (
        <div className="input-field col s1 center-align">
            <a href="#!" onClick={updateGrid}><i className="material-icons icon">format_list_bulleted</i></a>
        </div>
    )
}

export default connect(null, {updateGrid})(Grid);