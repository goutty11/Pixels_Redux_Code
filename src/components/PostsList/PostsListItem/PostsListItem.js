import React from 'react';
import './PostsListItem.css';

const PostsListItem = (props) => (
    <div className="post">
        <span><h1>{props.post.posted_by}</h1></span>    
        <span>{props.post.post_id}</span>
        <div className="ImageSize"><img src={props.post.URL}/></div>
        <span><h1>Description</h1></span>
        <span>{props.post.post_description}</span>
        <div><h1>Number of votes</h1><span>{props.post.vote_count}</span></div>
    </div>
);


export default PostsListItem;