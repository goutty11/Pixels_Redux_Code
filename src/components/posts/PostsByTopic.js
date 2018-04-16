import React, { Component } from 'react';
import store from '../../state/store';
import PostsList from './PostsList/PostsList';
import { connect } from 'react-redux';

import { getPostByTopic } from '../../state/actions/posts.actions';

class PostsByTopic extends Component {
    componentWillMount() {
        this.updatePostsByTopic();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.topicId != nextProps.topicId ||
            this.props.userId != nextProps.userId) {
                this.updatePostsByTopic();
            } 
    }

    updatePostsByTopic() {
        store.dispatch(getPostByTopic(this.props.topicId, this.props.userId));
    }

    render() {
        return (
            <div>
                <PostsList items={ this.props.postsByTopic.posts } />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(PostsByTopic);