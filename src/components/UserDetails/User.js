import React, { Component } from 'react';
import './UserDetails.css';

class User extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.userinformation.first_name}
            </div>
        );
    }
}

export default User;



