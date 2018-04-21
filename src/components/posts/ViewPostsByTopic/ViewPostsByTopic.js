import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsByTopic from '../PostsByTopic';
import './ViewPostsByTopic.css';

class ViewPostsByTopic extends Component {
    
    render() {
        this.loggedInUserId = 1;
        if (this.props &&
            this.props.initialInfo &&
            this.props.initialInfo.data &&
            this.props.initialInfo.data.currentTopic &&
            this.props.initialInfo.data.currentTopic.topic_id && 
            this.loggedInUserId) {
            return (
                <div>
                    <PostsByTopic topicId={this.props.initialInfo.data.currentTopic.topic_id} userId={this.loggedInUserId}/>
                </div>
            );
        } else {
            return (<div/>);
        }
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(ViewPostsByTopic);


