import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

const DarkMode = (props) => {

    return (
        <div>
            <Helmet>
                <body className={!props.mode ? "App" : "night"} />
            </Helmet>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mode: state.mode
    }
}

export default connect(mapStateToProps)(DarkMode);