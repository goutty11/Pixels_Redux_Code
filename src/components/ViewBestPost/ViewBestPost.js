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
            this.props.bestPost.post.result &&
            this.props.bestPost.post.result.post_id &&
            this.props.bestPost.post.result.first_name &&
            this.props.bestPost.post.result.topic_id && 
            this.props.bestPost.post.result.url) 
            {
                return (
                    <div>
                        <ViewBestPostList postDetails={this.props.bestPost.post.result}/>
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