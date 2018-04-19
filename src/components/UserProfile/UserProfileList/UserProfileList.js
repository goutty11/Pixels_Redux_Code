import React, { Component } from 'react';
import './UserProfileList.css';
import store from '../../../state/store';
import { updateUser } from '../../../state/actions/users.actions';

class UserProfileList extends Component {
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
            profilePic: this.props.userDetails.profile_pic,
            postCount: this.props.userDetails.no_of_posts
        };

        this.editDetails = this.editDetails.bind(this);
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

    render() {
        return (
            <div className="userInfo">
                    <div className="profilePicture">
                        Profile pic
                        {/* <img src={this.state.profilePic}/> */}
                    </div>
                    <div className="profile">
                            <div className="Name">
                                <span className="key">First Name</span>
                                <input type="text" className="firstName" value={this.state.firstName} 
                                    onChange={this.onChange.firstName}
                                />
                            </div>
                            <div className="Name">
                                <span className="key">Last Name</span>
                                <input type="text" className="lastName" value={this.state.lastName} 
                                    onChange={this.onChange.lastName}
                                />
                            </div>
                            <div className="Name">
                                <span className="key">Mail ID</span>
                                    <input type="text" className="userEmail" value={this.state.mailId} 
                                        onChange={this.onChange.mailId}
                                    />
                            </div>
                            <div className="postCount">
                                <span>Total number of posts:</span>
                                <span className = "totalCount">
                                    {this.state.postCount}
                                </span>
                            </div>
                            <div className="save" onClick={this.editDetails}>Save</div>
                        </div>
                
                
                { /*<div className="totalPosts">
                    <span>Total number of posts:</span>
                    <span className = "postsCount">
                        {this.state.postCount}
                     </span>
                </div>
                
        <button className="save" onClick={this.editDetails}>Save</button> */ }
            </div>
        );
    }
}

export default UserProfileList;