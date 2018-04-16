import React, { Component } from 'react';
import './PostsListItem.css';

import { updateVote } from '../../../../state/actions/votes.actions';
import store from '../../../../state/store';

class PostsListItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            voteId: null,
            postId: null,
            userId: null
        };
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            voteId: this.props.post.vote_id,
            
        })
    }

    vote = () => {
        store.dispatch(updateVote(
                this.props.post.post_id, 
                this.props.post.user_id,
                this.props.post.vote_id
            ));
    };

    render() {
        return (
            <div className="post">
                <span><h1>{this.props.post.Posted_by}</h1></span>    
                <span>{this.props.post.post_id}</span>
                <div className="ImageSize"><img src={this.props.post.url}/></div>
                <span><h1>Description</h1></span>
                <span>{this.props.post.post_description}</span>
                <span>
                    {
                        this.props.post.vote_id 
                            ? <h1 className="voted" onClick={this.vote}>You voted</h1> 
                            : <button onClick={this.vote}>vote now</button>
                    }
                </span>
                <div><p>#votes</p><span>{this.props.post.Vote_count}</span></div>
            </div>
        );
    }
}


export default PostsListItem;