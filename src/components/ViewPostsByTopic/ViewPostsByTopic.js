import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsByTopic from '../posts/PostsByTopic';
import store from '../../state/store';
import { getInitialInfo } from '../../state/actions/common.actions';
import UserProfile from '../../components/UserProfile/UserProfile';
import Topic from '../Topic/Topic';
import './ViewPostsByTopic.css';

class ViewPostsByTopic extends Component {
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

        // if (this.props &&
        //     this.props.initialInfo &&
        //     this.props.initialInfo.data &&
        //     this.props.initialInfo.data.loggedInUserDetails &&
        //     this.loggedInUserId) 
        // {
            return (
                <div>
                    <PostsByTopic topicId={this.props.initialInfo.data.currentTopic.topic_id} userId={this.loggedInUserId}/> */}
                    {/*<UserProfile userDetails={this.props.initialInfo.data.loggedInUserDetails} /> */}1
                    {/*<Topic topicId={this.props.initialInfo.data.currentTopic.topic_id} /> */}
                </div>
            );
        }
        else {
            return (<div/>);
        }
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ViewPostsByTopic);


