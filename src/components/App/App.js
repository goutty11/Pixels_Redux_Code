import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import PostsByUser from "..//posts/PostsByUser";
import PostsByTopic from '../posts/PostsByTopic';
//import User from '../UserDetails/User';

import store from '../../state/store';
import { getInitialInfo } from '../../state/actions/common.actions';

class App extends React.Component {
    componentWillMount() {
        store.dispatch(getInitialInfo(1));
    }

    render() {
        return (
            <div className="App">
                
                { /* <PostsByUser userId={this.props.initialInfo.data.loggedInUserDetails.currentTopic.topic_id} /> */}
                <PostsByTopic details={this.props.initialInfo.data.topic_id} /> 
                { /* <User/> */ }
            </div>
        );
    }
}

 const mapStateToProps = (state) => state;
 export default connect(mapStateToProps)(App);



