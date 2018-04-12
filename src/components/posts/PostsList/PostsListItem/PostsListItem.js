import React from 'react';
import './PostsListItem.css';

const PostsListItem = (props) => (
    <div className="post">
        <span><h1>{props.post.Posted_by}</h1></span>    
        <span>{props.post.post_id}</span>
        <div className="ImageSize"><img src={props.post.URL}/></div>
        <span><h1>Description</h1></span>
        <span>{props.post.post_description}</span>
        <span>{ props.post.vote_id 
                    ? <h1 className="voted">You voted{props.post.vote_id}</h1> 
                    : <button>vote now</button>
               }
        </span>
        <div><p>#votes</p><span>{props.post.Vote_count}</span></div>
    </div>
);


export default PostsListItem;