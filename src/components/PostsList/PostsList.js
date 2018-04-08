import React from 'react';
import './PostsList.css';
import PostsListItem from './PostsListItem/PostsListItem';

const Posts = (props) => {
    return (
        <div className="Landing">
            {
                props.items && props.items.map(post => {
                    return <PostsListItem post={post} />;
                })
            }
        </div>
    );
};

export default Posts;