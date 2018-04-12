import React, { Component } from 'react';
import store from '../../state/store';
import { connect } from 'react-redux';
import UserDetailsList from './userDetailsList/userDetailsList';


class User extends Component {
    render() {
        return (
            <div>
                <UserDetailsList topicdata={this.props.initialInfo.data.loggedInUserDetails} />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(User);



