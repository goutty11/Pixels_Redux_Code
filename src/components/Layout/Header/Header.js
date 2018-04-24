import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

import store from '../../../state/store';
import { getInitialInfo } from '../../../state/actions/common.actions';

import UploadPost from '../../posts/UploadPost/UploadPost';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: 1
        };
        
    }
    

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

    goHomePage = () => {
        this.props.history.push('/');
    }

    uploadWidget() {
        window.cloudinary.openUploadWidget(
            { cloud_name: 'pixelsapp', upload_preset: 'a5gcujfl', tags:[]},
            (error, result) => {
                if (error) {

                } else {
                    this.refs.newPostComponent.showModal(result && result.length > 0 ? result[0] : null);
                    
                }
            });
    }

    render() {
         
        if(this.props && 
            this.props.initialInfo &&
            this.props.initialInfo.data &&
            this.props.initialInfo.data.currentTopic) {
            return(
                <div className="app header">
                    <div onClick ={this.goHomePage} className="app-title">PIXELS</div>
                    <div className="posts-actions">
                        <div className="add-post" onClick={this.uploadWidget.bind(this)}>
                            <i className="fas fa-camera"></i> New post
                            <UploadPost ref="newPostComponent" topicId={this.props.initialInfo.data.currentTopic.topic_id} userId={this.state.userId}/>
                        </div>
                        <div className="view-my-posts" onClick={this.viewUserPosts}><i className="far fa-images"></i> View my posts</div>
                    </div>
                    <div className="user-actions">
                        <span className="user-name" onClick={this.goToUserProfile}><i className="fas fa-user-circle"></i> Mano</span>&nbsp;&nbsp;
                        <span className="log-out"><i className="fas fa-sign-out-alt"></i> Log out</span> 
                    </div>
                </div>
            );
        }
        else{
            return (<div/>);
        }
    }

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(withRouter(Header));

//export default withRouter(Header);