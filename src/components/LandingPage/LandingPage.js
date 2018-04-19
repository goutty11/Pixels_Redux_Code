import React, { Component } from 'react';
import ViewPostsByTopic from '../ViewPostsByTopic/ViewPostsByTopic';
import "./LandingPage.css";


class LandingPage extends Component {
    render() {
        return (
            <div>
                <ViewPostsByTopic />
            </div>
        );
    }
}

export default LandingPage;