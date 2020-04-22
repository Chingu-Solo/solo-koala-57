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
        const filterData = Object.values(data).filter(d => d.family.toUpperCase().includes(search));
        const cardList = filterData.length ? (
            filterData.map((dataset) => {
                return (
                    <LazyLoad className={!this.props.grid ? "grid-item" : null} height={100} key={filterData.indexOf(dataset)}>
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                    <span className="card-title col s11">{dataset.family}</span>
                                    <a href="#!"><span className="black-text small material-icons add-circle col s1">add_circle</span></a>
                                </div>
                                <div className="row">
                                    <style>@import url({`https://fonts.googleapis.com/css?family=${dataset.family}&display=swap`})</style>  
                                    <p className="col s12" style={{fontFamily: `${dataset.family}`, fontSize:`${size}px`}}>{card}</p>
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
            <div className={!this.props.grid ? "grid-container" : null}>
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
        search: state.search,
        grid: state.grid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {   
        updateFontData: (fontData) => dispatch(updateFontData(fontData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewCard);