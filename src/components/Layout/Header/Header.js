import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';

import store from '../../../state/store';
import { getInitialInfo } from '../../../state/actions/common.actions';

class Header extends Component {

    componentWillMount() {
        // TODO: Read the cookie and get the user id
        store.dispatch(getInitialInfo(1));
    }

    goToUserProfile = () => {
        this.props.history.push('/UserProfile')
    }

    viewUserPosts = () => {
        this.props.history.push(`/postsByUser`)
    }

    goToHomePage = () => {
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="app header">
                <div onClick ={this.goToHomePage} className="app-title">PIXELS</div>
                <div className="posts-actions">
                    <div className="add-post"><i class="fas fa-camera"></i> New post</div>
                    <div className="view-my-posts" onClick={this.viewUserPosts}><i class="far fa-images"></i> View my posts</div>
                </div>
                <div className="user-actions">
                    <span className="user-name" onClick={this.goToUserProfile}><i class="fas fa-user-circle"></i> Mano</span>&nbsp;&nbsp;
                    <span className="log-out"><i class="fas fa-sign-out-alt"></i> Log out</span> 
                </div>
            </div>
        );
    }
}

export default withRouter(Header);