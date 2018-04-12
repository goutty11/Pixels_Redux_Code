import React from 'react';
import './UserDetails.css';

const User = (props) => {
    return (
        <div className="Details">
            {props.userinformation.first_name}
        </div>
    );
};


export default User;
