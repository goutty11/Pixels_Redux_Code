import React, { Component } from 'react';

class UserDetails extends Component {
    render() {
        return (
            <div>
                {this.props.details.mail_id}
            </div>
        );
    }
}

export default UserDetails;