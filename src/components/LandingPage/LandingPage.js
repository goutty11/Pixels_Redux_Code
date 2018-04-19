import React, { Component } from 'react';
import { connect } from 'react-redux';

import "./LandingPage.css";

import PostsByUser from "../posts/PostsByUser";
import PostsByTopic from "../posts/PostsByTopic";
import UserProfile from "../UserProfile/UserProfile";

import store from "../../state/store";
import { getinitialInfo } from "../../state/actions/common.actions";

class LandingPage extends Component {
    constructor(props){
        super(props);
        
        this.loggedInUserId = 1;
    }

    componentWillMount() {
        store.dispatch(getInitialInfo(this.loggedInUserId));
    }

    render() {
        if (this.props &&
            this.props.initialInfo &&
            this.props.initialInfo.data &&
            this.props.initialInfo.data.currentTopic &&
            this.props.initialInfo.data.currentTopic.topic_id && 
            this.loggedInUserId) 
        {
            return (
                <div className="App">
                    <PostsByTopic topicId={this.props.initialInfo.data.currentTopic.topic_id} userId={this.loggedInUserId}/>         
                </div>
            );
        }
        else {
            return (<div/>);
        }
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(LandingPage);