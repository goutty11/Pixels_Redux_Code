import React, { Component } from 'react';
import BestPostListItem from './BestPostListItem/BestPostListItem';

class BestPostList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {
                    this.props.postDetails && this.props.postDetails.map(post => {
                        return <BestPostListItem key={post.post_id}  postlistDetails={post} />
                    })
                }
            </div>
        );
    }
}

export default BestPostList;