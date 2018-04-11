import React from 'react';
import './PostsList.css';
import PostsListItem from './PostsListItem/PostsListItem';

const Posts = (props) => {
    return (
        <div className="Landing">
            {
                props.items && props.items.map(post => {
                    return <PostsListItem key={post.post_id} post={post} />;
                })
            }
        </div>
    );
};

export default Posts;