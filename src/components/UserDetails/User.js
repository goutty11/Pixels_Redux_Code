import React, { Component } from 'react';
import store from '../../state/store';
import { connect } from 'react-redux';


class User extends Component {
    render() {
        return (
            <div>
                {this.props.initialInfo.data.currentTopic.topic_id}
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(User);



