import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFontSize } from '../../actions/actionFont';

class FontSize extends Component {

    fontSizeChange = (e) => {
        this.props.updateFontSize(e)
    }

    render() {

        const { size } = this.props;

        return (
            <div className="input-field col s3 center-align  drop-menu">
                <a className='dropdown-trigger btn' href='#!' data-target='dropdown1'>{size}px <span className="material-icons drop-arrow">arrow_drop_down</span></a>
                <ul id='dropdown1' className='dropdown-content'>
                    <li><a className="size-choice" href="#!1" onClick={() => this.fontSizeChange(20)}>20px</a></li>
                    <li><a className="size-choice" href="#!2" onClick={() => this.fontSizeChange(24)}>24px</a></li>
                    <li><a className="size-choice" href="#!3" onClick={() => this.fontSizeChange(32)}>32px</a></li>
                    <li><a className="size-choice" href="#!4" onClick={() => this.fontSizeChange(40)}>40px</a></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        size: state.fontSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFontSize: (size) => dispatch(updateFontSize(size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FontSize);