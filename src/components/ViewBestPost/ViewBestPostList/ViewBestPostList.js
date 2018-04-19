import React, { Component } from 'react';

class ViewBestPostList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.postDetails.post_id}
            </div>
        );
    }
}

export default ViewBestPostList;