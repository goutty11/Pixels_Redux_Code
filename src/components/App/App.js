import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import PostsByUser from "..//posts/PostsByUser";
import PostsByTopic from '../posts/PostsByTopic';
import UserProfile from '../UserProfile/UserProfile';

import store from '../../state/store';
import { getInitialInfo } from '../../state/actions/common.actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        // TODO: remove hardcoding by getting userId from the login screen
        this.loggedInUserId = 1;
    }

    componentWillMount() {
        store.dispatch(getInitialInfo(this.loggedInUserId));
    }

    render() {
        // if (this.props &&
        //     this.props.initialInfo &&
        //     this.props.initialInfo.data &&
        //     this.props.initialInfo.data.currentTopic &&
        //     this.props.initialInfo.data.currentTopic.topic_id && 
        //     this.loggedInUserId) {

        if (this.props &&
            this.props.initialInfo &&
            this.props.initialInfo.data &&
            this.props.initialInfo.data.loggedInUserDetails &&
            this.props.initialInfo.data.loggedInUserDetails && 
            this.loggedInUserId) {
        

            return (
                <div className="App">
                    {/* <PostsByUser userId={1} /> */}
                    {/* <PostsByTopic topicId={this.props.initialInfo.data.currentTopic.topic_id} userId={this.loggedInUserId}/> */}
                    <UserProfile userDetails={this.props.initialInfo.data.loggedInUserDetails} /> 
                </div>
            );
        } else {
            return (<div />);
        }
    }
}

 const mapStateToProps = (state) => state;
 export default connect(mapStateToProps)(App);



