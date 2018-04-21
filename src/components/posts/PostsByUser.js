import React, { Component } from 'react';
import store from '../../state/store';
import PostsList from './PostsList/PostsList';
import { connect } from 'react-redux';

import { getPost, getPostByUser } from '../../state/actions/posts.actions';

class PostsByUser extends Component {
    componentWillMount() {
        store.dispatch(getPostByUser(this.props.userId));
        //this.updatePostsByUser();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.userId !== nextProps.userId) {
                this.updatePostsByUser();
            } 
    }

    updatePostsByUser() {
        store.dispatch(store.dispatch(getPostByUser(this.props.userId)));
    }

    updatePost (postId) {
        this._updating = true;

        store.dispatch(
            getPost(
                postId, 
                this.props.initialInfo.data.loggedInUserDetails.userId || 1
            )
        );
    }
    
    render() {
        let posts = this.props.postsByUser.posts;
        let updatedPost = this.props.post.post;

        if (this._updating === true && this.props.post.fetching === false) {
            posts = 
                posts.map(post => {
                    if (post.post_id === updatedPost.post_id){
                        return updatedPost;
                    } else {
                        return post;
                    }
                });
        }

        return (
            <div>
                <PostsList items={ posts } updatePost={ this.updatePost.bind(this) } />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(PostsByUser);