import React from 'react';

const userDetails = (props) => {
    return (
        <div className="Details">
            {props.details.first_name}
        </div>
    );
};


export default userDetails;
