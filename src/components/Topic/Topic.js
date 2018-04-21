import React, { Component } from 'react';
import { getTopic } from '../../state/actions/topics.actions';
import store from '../../state/store';
import { connect } from 'react-redux';
import { TopicList } from './TopicList/TopicList';

class Topic extends Component {
    constructor(props){
        super(props);

        this.state = {
            limit: 1
        };
    }

    componentWillMount() {
        store.dispatch(getTopic(this.props.topicId, this.state.limit))
    }
    render() {

        if (this.props &&
            this.props.topicInfo &&
            this.props.topicInfo.data &&
            this.props.topicInfo.data.currentTopicInfo
            ) 
            {
                return (
                    <div>
                        <TopicList topicDetails={this.props.topicInfo.data.currentTopicInfo} />
                    </div>
                );
            }
        else {
            return <div/>;
        }
    }

}


const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Topic);