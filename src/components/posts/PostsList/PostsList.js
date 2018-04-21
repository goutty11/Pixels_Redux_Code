import React from 'react';
import _ from 'lodash';

import './PostsList.css';
import PostsListItem from './PostsListItem/PostsListItem';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: this.props.items || []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(!_.isEqual(this.props, nextProps)) {
            this.setState({
                items: nextProps.items || []
            });
        }
    }
    
    render() {
        return (
            <div className="posts list">
                {
                    this.state.items && this.state.items.map(post => {
                        return <PostsListItem key={post.post_id} post={post} updateVote={this.props.updateVote.bind(this)} />;
                    })
                }
            </div>
        );
    }
}

export default Posts;