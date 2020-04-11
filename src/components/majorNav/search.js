import React from 'react';
import { connect } from 'react-redux';
import { updateSearch } from '../../actions/actionSearch';


const Search = (props) => {

    const searchChange = (e) => {
        props.updateSearch(e.target.value);
    }
        return (
            <form action="" id="search">
            <div className="input-field col s3 valign-wrapper">
                <i id="act" className="material-icons prefix">search</i>
                <input id="icon_prefix" type="text" onChange={searchChange}/>
                <label htmlFor="icon_prefix">Search fonts</label>
            </div>
            </form>            
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearch: (search) => dispatch(updateSearch(search)),
    }
}

export default connect(null, mapDispatchToProps)(Search);