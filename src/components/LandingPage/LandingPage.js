import React, { Component } from 'react';
import ViewPostsByTopic from '../posts/ViewPostsByTopic/ViewPostsByTopic';
import ViewBestPost from '../posts/ViewBestPost/ViewBestPost';
import Topic from '../Topic/Topic';
import './LandingPage.css';


class LandingPage extends Component {
    render() {
        return (
            <div>
                <ViewBestPost />
                <ViewPostsByTopic />
                <Topic />
            </div>
        );
    }
}

export default LandingPage;