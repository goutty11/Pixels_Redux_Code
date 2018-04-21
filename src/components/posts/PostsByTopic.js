import React, { Component } from 'react';
import store from '../../state/store';
import PostsList from './PostsList/PostsList';
import { connect } from 'react-redux';

import { getPostByTopic } from '../../state/actions/posts.actions';
import { updateVote } from '../../state/actions/votes.actions';

class PostsByTopic extends Component {
    componentWillMount() {
        this.updatePostsByTopic();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.topicId !== nextProps.topicId ||
            this.props.userId !== nextProps.userId) {
                this.updatePostsByTopic();
            } 
    }

    updatePostsByTopic() {
        store.dispatch(getPostByTopic(this.props.topicId, this.props.userId));
    }

    updateVote (postId, voteId) {
        this._updating = true;

        store
            .dispatch(updateVote(postId, this.props.userId, voteId))
            .then((result) => {
                this.updatePostsByTopic();
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        let posts = this.props.postsByTopic.posts;
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
                <PostsList items={ posts } updateVote={ this.updateVote.bind(this) } />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(PostsByTopic);