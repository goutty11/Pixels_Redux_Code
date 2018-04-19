import React, { Component } from 'react';
import './BestPostListItem.css';

class BestPostListItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="postDetails">
                <div className="bestPic">Best Pic of previous week</div>
                <div className="postURL">
                   <img src={this.props.postlistDetails.url} />
                </div>
                <div className="postValues">
                    <div className="winner">
                        <span className="postedBy">Post By</span>
                        <span className="firstName">{this.props.postlistDetails.first_name}</span>
                    </div>
                    <div className="totalVotes">
                        <span className="votes">Votes</span>
                        <span className="voteCount">{this.props.postlistDetails.vote_count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default BestPostListItem;