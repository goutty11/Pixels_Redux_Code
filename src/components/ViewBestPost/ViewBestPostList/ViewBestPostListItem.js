import React, { Component } from 'react';
import './ViewBestPostListItem.css';

class ViewBestPostListItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="result">
                {this.props.postlistDetails.post_id}
            </div>
        );
    }
}

export default ViewBestPostListItem;