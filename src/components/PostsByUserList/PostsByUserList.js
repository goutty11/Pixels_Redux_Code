import React from 'react';
import './PostsByUserList.css';
import PostsByUserListItem from './PostsByUserListItem/PostsByUserListItem';

const Posts = (props) => {
    return (
        <div className="Wrapper">
            {
                props.items && props.items.map(post => {
                    return <PostsByUserListItem postItem={post} />;
                })
            }
        </div>
    );
};

export default Posts;