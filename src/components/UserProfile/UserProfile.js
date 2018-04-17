import React from 'react';
import UserProfileList from './UserProfileList/UserProfileList';

const UserProfile = (props) => (
        <div>
            <UserProfileList userDetails={props.userDetails} />
        </div>
);

export default UserProfile;