import React from 'react';
import UserDetailsListItem from './UserDetailsListItem/UserDetailsListItem';

const UserDetails = () => (
        <div>
            <UserDetailsListItem userDetails = {this.props.UserDetails} />
        </div>
);

export default UserDetails;