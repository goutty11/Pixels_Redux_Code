import React, { Component } from 'react';
import ViewPostsByTopic from '../posts/ViewPostsByTopic/ViewPostsByTopic';
import ViewBestPost from '../posts/ViewBestPost/ViewBestPost';
import "./LandingPage.css";


class LandingPage extends Component {
    render() {
        return (
            <div>
                <ViewBestPost />
                <ViewPostsByTopic />
            </div>
        );
    }
}

export default LandingPage;