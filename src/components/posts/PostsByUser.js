import React, { Component } from 'react';
import store from '../../state/store';
import PostsList from './PostsList/PostsList';
import { connect } from 'react-redux';

import { getPostByUser } from '../../state/actions/posts.actions';

class PostsByUser extends Component {
    componentWillMount() {
        this.updatePostsByUser();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.userId != nextProps.userId) {
                this.updatePostsByUser();
            } 
    }

    updatePostsByUser() {
        store.dispatch(store.dispatch(getPostByUser(this.props.userId)));
    }
    
    render() {
        return (
            <div>
                <PostsList items={ this.props.postsByUser.posts } />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(PostsByUser);