import React from 'react';
import './PostsListItem.css';

const PostsListItem = (props) => (
    <div className="post">
        <span><h1>{props.Posted_by}</h1></span>    
        <span>{props.post_id}</span>
        <div className="ImageSize"><img src={props.URL}/></div>
        <span><h1>Description</h1></span>
        <span>{props.post_description}</span>
        <div><h1>Number of votes</h1><span>{props.Vote_count}</span></div>
    </div>
);


export default PostsListItem;