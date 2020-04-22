import React from 'react';
import { connect } from 'react-redux';
import { updateGrid } from "../../actions/actionGrid";

const Grid = (props) => {

    const {gridIcon, updateGrid } = props;

    return (
        <div className="input-field center-align list-layout">
            <button className="btn" onClick={updateGrid}><i className="material-icons icon">{gridIcon}</i></button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        gridIcon: state.gridIcon
    }
}

export default connect(mapStateToProps, {updateGrid})(Grid);