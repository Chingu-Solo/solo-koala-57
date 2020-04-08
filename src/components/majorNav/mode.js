import React from 'react';
import { connect } from 'react-redux';
import { updateMode } from '../../actions/actionMode';

const Mode = (props) => {

    // const darkMode = (e) => {
    //     props.updateMode(e)
    // }

    const {mode, updateMode} = props;

    return (
        <div className="input-field col s1 switch center-align" onChange={updateMode}>
            <label className="valign-wrapper">
                <input type="checkbox" />
                <span className="lever grey lighten-1"></span>
            </label>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateMode: () => dispatch(updateMode())
//     }
// }

export default connect(null, {updateMode})(Mode);