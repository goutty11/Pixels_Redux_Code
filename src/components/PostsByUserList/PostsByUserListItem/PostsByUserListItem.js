import React, { Component } from 'react';
import './PostsByUserListItem.css';
import store from "../../../state/store";
import { AddVote } from '../../../state/actions/votes.actions';
import { AddVote } from '../../../state/actions/votes.actions';

// const PostsByUserListItem = (props) => (
//     <div className="postDetails">
        
//         <span><h1>{props.postItem.posted_by}</h1></span>    
//         <span>{props.postItem.post_id}</span>
//         <div className="ImageSize"><img src={props.postItem.URL}/></div>
//         <span><h1>Description</h1></span>
//         <span>{props.postItem.post_description}</span>
//         <div><h1>Number of votes</h1><span>{props.postItem.vote_count}</span></div> 
//     </div>
// );

class PostsByUserListItem extends Component {
    constructor(props){
        super(props);

        this.votehere = this.votehere.bind(this);
    }

    votehere = () => {
        store.dispatch(AddVote({id: props.postItem.post_id }));
    }

    render() {
        return (
            <div className="postDetails">
                <span><h1>{props.postItem.posted_by}</h1></span>    
                <span>{props.postItem.post_id}</span>
                <div className="ImageSize"><img src={props.postItem.URL}/></div>
                <button onClick={this.votehere}>Vote here</button>
                <span><h1>Description</h1></span>
                <span>{props.postItem.post_description}</span>
                <div><h1>Number of votes</h1><span>{props.postItem.vote_count}</span></div> 
            </div>
        );
    }
}


export default PostsByUserListItem;