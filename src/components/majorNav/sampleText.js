import React from 'react';
import { connect } from 'react-redux';
import { updateSampleText } from '../../actions/actionSampleText';


const SampleText = (props) => {

    const sampleTextChange = (e) => {
        e.target.value ? props.updateSampleText(e.target.value) : props.updateSampleText("Then came the night of the first falling star.");
    }

    return (
        <form action="" id="sample">
        <div className="input-field col s3 valign-wrapper border-left border-right">
            <input id="icon_telephone" type="text" onChange={sampleTextChange}/>
            <label htmlFor="icon_telephone">Type something</label>
        </div>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSampleText: (change) => dispatch(updateSampleText(change)),
    }
}

export default connect(null, mapDispatchToProps)(SampleText);