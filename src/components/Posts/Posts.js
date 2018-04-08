import React from 'react';
import './Posts.css';

const Posts = (props) => {
    return (
        <div className="Landing">
            {
                props.items && props.items.map(post => {
                    return <span />;
                })
            }
        </div>
    );
};

export default Posts;