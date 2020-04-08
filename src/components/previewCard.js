import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateFontData } from '../actions/actionFontData';
import LazyLoad from 'react-lazyload';

class PreviewCard extends Component {
    componentDidMount() {
        axios.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD71hRk61pHyu12HxOfydoWW6SH8gdFlLg&sort=popularity")
            .then((res) => {
                this.props.updateFontData(res.data.items);
            })
    }
    render() {
        const { card, size, data, search } = this.props;
        const filterData = Object.values(data).filter(d => d.family.includes(search));
        const cardList = filterData.length ? (
            filterData.map((dataset) => {
                return (
                    <LazyLoad height={100} key={filterData.indexOf(dataset)}>
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                    <span className="card-title col l11">{dataset.family}</span>
                                    <a href="#!"><span className="black-text small material-icons add-circle col l1">add_circle</span></a>
                                </div>
                                <div className="row">
                                <style>
                                    @import url({`https://fonts.googleapis.com/css?family=${dataset.family}&display=swap`});
                                </style>  
                                    <p className="col l12" style={{fontFamily: `${dataset.family}`, fontSize:`${size}px`}}>{card}</p>
                                </div>
                            </div>
                        </div>
                    </LazyLoad>
                )
            })
        ) : (
            <div className="center">Loading fonts...</div>
        )
        return (
            <div>
                {cardList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.card,
        size: state.fontSize,
        data: state.data,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {   
        updateFontData: (fontData) => dispatch(updateFontData(fontData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewCard);