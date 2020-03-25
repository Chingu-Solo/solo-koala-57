import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateFontData } from '../actions/actionFontData';

class PreviewCard extends Component {
    componentDidMount() {
        axios.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD71hRk61pHyu12HxOfydoWW6SH8gdFlLg&sort=popularity")
            .then((res) => {
                this.props.updateFontData(res.data.items);
            })
    }
    render() {
        const { card, data } = this.props;
        const cardList = data.length ? (
            data.map((dataset) => {
                return (
                    
                    <div className="row" key={data.indexOf(dataset)}>
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">{dataset.family}</span>
                                    <style>
                                    @import url({`https://fonts.googleapis.com/css?family=${dataset.family}&display=swap`});
                                    </style> 
                                    <p style={{fontFamily: `${dataset.family}`}}>{card}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">Loading fonts...</div>
        )
        return (
            <div className="container">
                {cardList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.card,
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {   
        updateFontData: (fontData) => dispatch(updateFontData(fontData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewCard);