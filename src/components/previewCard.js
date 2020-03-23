import React, { Component } from 'react';
import { connect } from 'react-redux';

class PreviewCard extends Component {
    render() {
        const { card } = this.props;
        return (
            <div class="row">
                <div class="col s12">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Card Title</span>
                            <p>{card}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        card: state.card
    }
}

export default connect(mapStateToProps)(PreviewCard);