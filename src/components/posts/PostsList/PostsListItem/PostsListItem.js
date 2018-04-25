import React, { Component } from 'react';
import './PostsListItem.css';
import * as utils  from '../../../../common/utils';

class PostsListItem extends Component {
    render() {
        return (
            <div className="post-container">
                <div className="post-header">
                    {/* {this.props.post.posted_by_id} */}
                    <span className="profile-pic">
                        <img src={this.props.post.profile_pic} />
                        {/* <img src={this.props.post ? utils.updateUserProfilePic(this.props.post.profile_pic) : null} /> */}
                    </span>
                    <span className="user-name">{this.props.post.Posted_by}</span>
                </div>
                <div className="post-content">
                    <div className="post-content-image">
                        {/* {this.props.post.post_id} */}
                        <img src={this.props.post.url} alt="post"/>
                    </div>
                    <div className="post-content-description">
                        <span className="user-name">{this.props.post.Posted_by}</span>
                        { /*{this.props.post.post_description} */ }
                        <span className="post-description">Gigantic walk ! #Wildlife#Iphone#DaringPic</span>
                    </div>
                </div>
                <div className="post-actions">
                    <span className="post-actions-vote" onClick={(e) => this.props.updateVote(this.props.post.post_id, this.props.post.vote_id)}>
                        {
                            this.props.post.is_voted === 1
                                ? <i className="fas fa-heart"></i>
                                : <i className="far fa-heart"></i> 
                        }
                    </span>
                    <span> {this.props.post.vote_count} votes</span>
                </div>
            </div>
        );
    }   
}


export default PostsListItem;