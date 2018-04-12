import React from 'react';

const UserDetails = (props) => {
    return (
        <div className="Details">
            {props.details.first_name}
        </div>
    );
};


export default UserDetails;
