import React from 'react';
import { connect } from 'react-redux';
import { updateSampleText } from '../../actions/actionSampleText';


const SampleText = (props) => {

    const sampleTextChange = (e) => {
        e.target.value ? props.updateSampleText(e.target.value) : props.updateSampleText("Then came the night of the first falling star.");
    }

    return (
        <div id="sample" className="input-field text-input">
            <input id="sample-input" type="text" onChange={sampleTextChange} placeholder="Type something"/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSampleText: (change) => dispatch(updateSampleText(change)),
    }
}

export default connect(null, mapDispatchToProps)(SampleText);