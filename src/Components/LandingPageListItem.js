import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LandingPageListItem.css';

class LandingPageListItem extends Component {
    render() {
        return (
            <div className="Result">
                {this.props.result}
            </div>
        );
    }
}


export default LandingPageListItem;