import React, { Component } from 'react';
import './UserDetailsListItem.css';
import store from '../../../state/store';
import { updateUser } from '../../../state/actions/users.actions';

class UserDetailsListItem extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            userId: 1,
            firstName: this.props.userDetails.first_name,
            lastName: this.props.userDetails.first_name,
            mailId : this.props.userDetails.mail_id
        };

        this.editDetails = this.editDetails.bind(this);
    }

    editDetails = () => {
        store.dispatch(updateUser(
                        this.state.userId, 
                        this.state.firstName,
                        this.props.userDetails.last_name,
                        this.props.userDetails.mail_id
                    ));
    };

    render() {
        return (
            <div className="userProfile">
                <div>{this.state.firstName}</div>
                <div>{this.state.lastName}</div>
                <div>{this.state.mailId}</div>
                
                <button onClick={this.editDetails}>Save</button>
            </div>
        );
    }
}

export default UserDetailsListItem;