import React, { Component } from 'react';
import ViewBestPostListItem from './ViewBestPostListItem';

class ViewBestPostList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {
                    this.props.postDetails && this.props.postDetails.map(post => {
                     return <ViewBestPostListItem key={post.post_id}  postlistDetails={post} />
                   })
                }
            </div>
        );
    }
}

export default ViewBestPostList;