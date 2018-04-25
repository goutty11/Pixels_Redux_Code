import React from 'react';
import './TopicList.css';

export const TopicList = (props) => (
    <div>
        <div className="current-topic">
            <div className="topic-content">Current Topic</div>
            <div className="topic-title">{props.topicDetails.topic_title}</div>
        </div>
        <div className="available-time">
            <span>Available till : 04.30.2018</span>
        </div>
    </div>
);
