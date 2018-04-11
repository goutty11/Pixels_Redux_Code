import React, { Component } from 'react';
import './PostsByUserListItem.css';
import store from "../../../state/store";
import { AddVote, getVoteCount } from '../../../state/actions/votes.actions';


class PostsByUserListItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            isVote: false 
        };
        this.vote = this.vote.bind(this);
    }

    componentWillMount () {
        store.dispatch(getVoteCount({postid: this.props.postItem.post_id}))
    }

    vote = () => {
        store.dispatch(AddVote({postid:this.props.postItem.post_id, userid: 5 }));
        
        this.setState({
            isVote: !this.state.isVote
        });
    }

    render() {
        return (
            <div className="postDetails">
                <span><h1>{this.props.postItem.posted_by}</h1></span>    
                <span>{this.props.postItem.post_id}</span>
                <div className="ImageSize"><img src={this.props.postItem.URL}/></div>
                <button onClick={this.vote}>Vote</button>
                {this.state.isVote ? <p>you voted</p>: <p>Didn't vote</p> }
                <span><h1>Description</h1></span>
                <span>{this.props.postItem.post_description}</span>
                <div><h1>Number of votes</h1><span>{this.props.postItem.vote_count}</span></div> 
            </div>
        );
    }
}


export default PostsByUserListItem;