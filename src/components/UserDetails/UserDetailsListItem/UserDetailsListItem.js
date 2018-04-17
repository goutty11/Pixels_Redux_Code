import React, { Component } from 'react';
import './UserDetailsListItem.css';
import store from '../../../state/store';
import { updateUser } from '../../../state/actions/users.actions';

class UserDetailsListItem extends Component {
    constructor(props){
        super(props);
        
        this.onChange = {
            firstName: this.onHandleChange.bind(this, 'firstName'),
            lastName: this.onHandleChange.bind(this, 'lastName'),
            mailId: this.onHandleChange.bind(this, 'mailId')
        }

        this.state = {
            userId: 1,
            firstName: this.props.userDetails.first_name,
            lastName: this.props.userDetails.last_name,
            mailId : this.props.userDetails.mail_id,
            postCount: this.props.userDetails.total_no_of_posts
        };

        this.editDetails = this.editDetails.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }

    editDetails = () => {
        store.dispatch(updateUser(
                        this.state.userId, 
                        this.state.firstName,
                        this.state.lastName,
                        this.state.mailId
                    ));
    };

    onHandleChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }

    Cancel = (prevState) => {
        this.setState({
            firstName: prevState.firstName,
            lastName: prevState.lastName,
            mailId: prevState.mailId
        });
    }

    render() {
        return (
            <div className="user_profile">
                <div>
                    <input type="text" className="firstName" value={this.state.firstName} 
                        onChange={this.onChange.firstName}
                    />
                </div>
                <div>
                    <input type="text" className="lastName" value={this.state.lastName} 
                        onChange={this.onChange.lastName}
                    />
                </div>
                <div><input type="text" className="mailId" value={this.state.mailId} 
                        onChange={this.onChange.mailId}
                     />
                </div>
                <div>
                    Total number of posts: {this.state.postCount}
                </div>
                
                <button onClick={this.editDetails}>Save</button>
                <button onClick={this.Cancel}>Cancel</button>
            </div>
        );
    }
}

export default UserDetailsListItem;