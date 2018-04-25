import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import store from '../../../state/store';
import './UserProfileList.css';
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

    goToHomePage = () => {
        this.props.history.push('/')
    }

    editDetails = () => {
        store.dispatch(updateUser(
                        this.state.userId, 
                        this.state.firstName,
                        this.state.lastName,
                        this.state.mailId
                      ));

        this.goToHomePage();
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
                        <img src="http://res.cloudinary.com/pixelsapp/image/upload/c_scale,h_274,w_274/v1524549212/Manoj_dp.jpg" alt="profile pic"/> 
                    </div>
                    <div className="profile">
                        <div className="name">
                            <span className="key">First Name</span>
                            <input type="text" className="firstName" value={this.state.firstName} 
                                onChange={this.onChange.firstName}
                            />
                        </div>
                        <div className="name">
                            <span className="key">Last Name</span>
                            <input type="text" className="lastName" value={this.state.lastName} 
                                onChange={this.onChange.lastName}
                            />
                        </div>
                        <div className="name">
                            <span className="key">Mail ID</span>
                                <input type="text" className="userEmail" value={this.state.mailId} 
                                    onChange={this.onChange.mailId}
                                />
                        </div>
                        <div className="postCount">
                            <span className="post-count">Total number of posts:</span>
                            <span className = "total-count">
                                {this.state.postCount}
                            </span>
                        </div>
                        <div className="user-actions">
                            <div className="home" onClick={this.goToHomePage}>Back to Home</div>
                            <div className="save" onClick={this.editDetails}>Save</div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter(UserProfileList);