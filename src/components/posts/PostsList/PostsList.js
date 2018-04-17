import React from 'react';
import _ from 'lodash';

import './PostsList.css';
import PostsListItem from './PostsListItem/PostsListItem';

import store from "../../../state/store";
import { getPost } from "../../../state/actions/posts.actions";

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

    updatePost(postId) {
        store.dispatch(getPost(postId, this.props.initialInfo.data.loggedInUserDetails.userId || 1));
    }

    render() {
        return (
            <div className="Landing">
                {
                    this.state.items && this.state.items.map(post => {
                        return <PostsListItem key={post.post_id} post={post} updatePost={this.updatePost} />;
                    })
                }
            </div>
        );
    }
}

export default Posts;