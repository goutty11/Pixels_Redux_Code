import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import PostsByUser from "..//posts/PostsByUser";
import PostsByTopic from '../posts/PostsByTopic';
import userDetails from "../userDetails/userDetails";

import store from '../../state/store';
import { getInitialInfo } from '../../state/actions/common.actions';

class App extends React.Component {
    componentWillMount() {
        store.dispatch(getInitialInfo(1));
    }

    render() {
        return (
            <div className="App">
                { /*<PostsByUser userId={1} /> */}
                { /* <PostsByTopic topicId={this.props.initialInfo.data.topic_id} />  */}
                <userDetails details={this.props.getInitialInfo.data.loggedInUserDetails} />                
            </div>
        );
    }
}

 const mapStateToProps = (state) => state;
 export default connect(mapStateToProps)(App);



