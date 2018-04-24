import React, { Component } from 'react';
import * as utils from '../../../../../common/utils';
import './BestPostListItem.css';

class BestPostListItem extends Component {
    constructor(props){
        super(props);

        //  this.state = {
        //      url: utils.updateCloudinaryUrlForSize(this.props.postlistDetails.url)
        //  };
    }
    render() {
        return (
            <div className="postDetails">
                <div className="bestPic">Best Find From previous week</div>
                <div className="postURL">
                     <img src ={this.props.postlistDetails.url} alt="post"/>
                    
                </div>
                <div className="postValues">
                    <div className="winner">
                        <span className="postedBy">Post By</span>
                        <span className="Name">{this.props.postlistDetails.Posted_by}</span>
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