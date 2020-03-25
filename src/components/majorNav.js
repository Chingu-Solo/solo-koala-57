import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../actions/actionCard';

class MajorNav extends Component {

    handleChange = (e) => {
        e.target.value ? this.props.updateCard(e.target.value) : this.props.updateCard("Then came the night of the first falling star.")
    }

    render() {
        return (
            <div className="row center">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s3 valign-wrapper">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" className="validate"/>
                            <label htmlFor="icon_prefix">Search fonts</label>
                        </div>
                        <div className="input-field col s3 valign-wrapper">
                            <input id="icon_telephone" type="tel" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="icon_telephone">Type something</label>
                        </div>
                        <div className="input-field col s3 center-align">
                            <a className='dropdown-trigger btn' href='#!' data-target='dropdown1'>Font Size <i className="material-icons drop-arrow">arrow_drop_down</i></a>
                            <ul id='dropdown1' className='dropdown-content'>
                                <li><a href="#!">20px</a></li>
                                <li><a href="#!">24px</a></li>
                                <li><a href="#!">32px</a></li>
                                <li><a href="#!">40px</a></li>
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

const dispatchToProps = (dispatch) => {
    return {
        updateCard: (change) => dispatch(updateCard(change))
    }
}

export default connect(null, dispatchToProps)(MajorNav);