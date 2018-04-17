import React, { Component } from 'react';

class UserDetailsListItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div>{this.props.userDetails.mail_id}</div>
            </div>

        );
    }
}

export default UserDetailsListItem;