import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../state/store';
import { getBestPost } from '../../state/actions/posts.actions';
import  ViewBestPostList  from './ViewBestPostList/ViewBestPostList';

class ViewBestPost extends Component {
    componentWillMount() {
        store.dispatch(getBestPost());
    }
    render() {
        if (this.props &&
            this.props.bestPost.post &&
            this.props.bestPost.post.post_id &&
            this.props.bestPost.post.first_name &&
            this.props.bestPost.post.topic_id && 
            this.props.bestPost.post.url) 
            {
                return (
                    <div>
                        <ViewBestPostList postDetails={this.props.bestPost.post}/>
                    </div>
                );
            }
        else{
            return <div/>
        }
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ViewBestPost);