import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../state/store';
import { getInitialInfo } from '../../../state/actions/common.actions';
import PostsByUser from '../PostsByUser';

class ViewPostsByUser extends Component {
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
                this.props.initialInfo.data.loggedInUserDetails &&
                this.loggedInUserId) 
            {
            return (
                <div>
                    <PostsByUser userId={this.loggedInUserId}/> 
                </div>
            );
        }
        else {
            return <div />;
        }

    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ViewPostsByUser);

