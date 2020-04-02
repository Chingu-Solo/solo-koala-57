import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../actions/actionCard';
import { updateFontSize } from '../actions/actionFont';
import { updateSearch } from '../actions/actionSearch';

class MajorNav extends Component {

    searchChange = (e) => {
        this.props.updateSearch(e.target.value);
    }

    sampleTextChange = (e) => {
        e.target.value ? this.props.updateCard(e.target.value) : this.props.updateCard("Then came the night of the first falling star.");
    }

    fontSizeChange = (e) => {
        this.props.updateFontSize(e)
    }

    render() {
        const { size } = this.props;
        return (
            <div className="row container">
                <form className="col s12">
                    <div className="">
                        <div className="input-field col s3 valign-wrapper">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" className="validate" onChange={this.searchChange}/>
                            <label htmlFor="icon_prefix">Search fonts</label>
                        </div>
                        <div className="input-field col s3 valign-wrapper border-left">
                            <input id="icon_telephone" type="tel" className="validate" onChange={this.sampleTextChange}/>
                            <label htmlFor="icon_telephone">Type something</label>
                        </div>
                        <div className="input-field col s3 center-align border-left">
                            <a className='dropdown-trigger btn' href='#!' data-target='dropdown1'>{size}px <i className="material-icons drop-arrow">arrow_drop_down</i></a>
                            <ul id='dropdown1' className='dropdown-content'>
                                <li><a href="#!1" onClick={() => this.fontSizeChange(20)}>20px</a></li>
                                <li><a href="#!2" onClick={() => this.fontSizeChange(24)}>24px</a></li>
                                <li><a href="#!3" onClick={() => this.fontSizeChange(32)}>32px</a></li>
                                <li><a href="#!4" onClick={() => this.fontSizeChange(40)}>40px</a></li>
                            </ul>
                        </div>
                        <div className="input-field col s1 switch center-align">
                            <label className="valign-wrapper">
                            <input type="checkbox" />
                            <span className="lever"></span>
                            </label>
                        </div>
                        <div className="input-field col s1 center-align">
                            <a href="#!"><i className="material-icons black-text">format_list_bulleted</i></a>
                        </div>
                        <div className="input-field col s1 center-align">
                            <a href="#!"><i className="material-icons black-text">refresh</i></a>
                        </div>
                    </div>
                </form>
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
        updateSearch: (search) => dispatch(updateSearch(search)),
        updateCard: (change) => dispatch(updateCard(change)),
        updateFontSize: (size) => dispatch(updateFontSize(size))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MajorNav);