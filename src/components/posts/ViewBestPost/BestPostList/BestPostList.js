import React, { Component } from 'react';
import BestPostListItem from './BestPostListItem/BestPostListItem';

class BestPostList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <BestPostListItem  postlistDetails={this.props.postDetails} />
            </div>
        );
    }
}

export default BestPostList;