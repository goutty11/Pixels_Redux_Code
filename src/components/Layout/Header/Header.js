import React, { Component } from 'react';
import { link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';




class Header extends Component {

    goToUserProfile = () => {
        this.props.history.push('/UserProfile')
    }

    render() {
        return(
            <div className="header">
                <div className="appTitle">PIXELS</div>
                <div onClick={() => this.refs.child.openModal()} className="addPost">
                    <ImagesModal ref="child" />    
                    Post
                </div>
                <span className="UserName" onClick={this.GoToUser}>Mano</span>
                <span className="logOut">log out</span> 
            </div>
        );
    }
}

export default Header;