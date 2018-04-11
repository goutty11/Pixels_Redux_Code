import React from 'react';
import './PostsListItem.css';
import { UpdateVote } from '../../../../state/actions/votes.actions';
import store from '../../../../state/store';

const vote = (postid, userid, voteid ) => {
    store.dispatch(UpdateVote(postid, userid, voteid));
};

const PostsListItem = (props) => (
    <div className="post">
        <span><h1>{props.post.Posted_by}</h1></span>    
        <span>{props.post.post_id}</span>
        <div className="ImageSize"><img src={props.post.URL}/></div>
        <span><h1>Description</h1></span>
        <span>{props.post.post_description}</span>
        <span>{ props.post.vote_id 
                    ? <h1 className="voted">You voted</h1> 
                    : <button onClick={this.vote(props.post.post_id, 1, props.post.vote_id)}>vote now</button>
               }
        </span>
        <div><p>#votes</p><span>{props.post.Vote_count}</span></div>
    </div>
);


export default PostsListItem;