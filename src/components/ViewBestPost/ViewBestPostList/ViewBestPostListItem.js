import React, { Component } from 'react';

class ViewBestPostListItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.postlistDetails.post_id}
            </div>
        );
    }
}

export default ViewBestPostListItem;