import React, { Component } from 'react';
import { link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {

    goToUserProfile = () => {
        this.props.history.push('/UserProfile')
    }

    viewUserPosts = () => {
        this.props.history.push('/postsByUser')
    }

    goToHomePage = () => {
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="header">
                <div onClick ={this.goToHomePage} className="appTitle">PIXELS</div>
                <div className="addPost">
                    Post
                </div>
                <div className="viewMyPosts" onClick={this.viewUserPosts}>View my posts</div>
                <span className="UserName" onClick={this.goToUserProfile}>Mano</span>
                <span className="logOut">log out</span> 
            </div>
        );
    }
}

export default withRouter(Header);