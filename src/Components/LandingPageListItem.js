import React from 'react';
import './LandingPageListItem.css';

const LandingPageListItem = (props) => (
    <div>
        {props.post_id}
        {props.post_description}
        {props.URL}
        {props.Posted_by}
        {props.Vote_count}
    </div>
);


export default LandingPageListItem;