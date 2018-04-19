import React, { Component } from 'react';

class ViewBestPostList extends Component {
    render() {
        return (
            <div>
                {this.props.postDetails}
            </div>
        );
    }
}

export default ViewBestPostList;