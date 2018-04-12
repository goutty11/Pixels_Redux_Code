import React from 'react';
import './UserDetails.css';

const UserDetails = (props) => {
    return (
        <div className="Details">
            {props.userinformation.first_name}
        </div>
    );
};


export default UserDetails;
