import React from 'react';
import './PostsByUserListItem.css';

const PostsByUserListItem = (props) => (
    <div className="postDetails">
        
        <span><h1>{props.postItem.posted_by}</h1></span>    
        <span>{props.postItem.post_id}</span>
        <div className="ImageSize"><img src={props.postItem.URL}/></div>
        <span><h1>Description</h1></span>
        <span>{props.postItem.post_description}</span>
        <div><h1>Number of votes</h1><span>{props.postItem.vote_count}</span></div> 
    </div>
);


export default PostsByUserListItem;