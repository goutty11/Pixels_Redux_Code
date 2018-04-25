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

    // componentWillMount() {
    //     store.dispatch(getTopic(this.props.topicId, this.state.limit))
    // }
    render() {

        if (this.props &&
            this.props.initialInfo &&
            this.props.initialInfo.data &&
            this.props.initialInfo.data.currentTopic
            ) {
            return (
                <div>
                    <TopicList topicDetails={this.props.initialInfo.data.currentTopic} />
                </div>
            );
        } else {
            return (<div/>);
        }
    }

}


const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Topic);