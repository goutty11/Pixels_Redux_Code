import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserProfileList from './UserProfileList/UserProfileList';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <UserProfileList userDetails={this.props.initialInfo.data.loggedInUserDetails} />
            </div>
        );
    }
        
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(UserProfile);