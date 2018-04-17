import React from 'react';
import UserDetailsListItem from './UserDetailsListItem/UserDetailsListItem';

const UserDetails = (props) => (
        <div>
            <UserDetailsListItem userDetails={props.details} />
        </div>
);

export default UserDetails;