import React from 'react';
import { connect } from 'react-redux';
import { updateSearch } from '../../actions/actionSearch';


const Search = (props) => {

    const searchChange = (e) => {
        props.updateSearch(e.target.value);
    }
        return (
            <div id="search" className="input-field text-input">
                <i id="act" className="material-icons prefix">search</i>
                <input id="search-input" type="text" onChange={searchChange} placeholder="Search fonts"/>
            </div>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearch: (search) => dispatch(updateSearch(search)),
    }
}

export default connect(null, mapDispatchToProps)(Search);