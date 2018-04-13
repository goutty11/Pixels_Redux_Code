import React, { Component } from 'react';
import './PostsListItem.css';

import { updateVote } from '../../../../state/actions/votes.actions';
import store from '../../../../state/store';



// const PostsListItem = (props) => (
//     <div className="post">
//         <span><h1>{props.post.Posted_by}</h1></span>    
//         <span>{props.post.post_id}</span>
//         <div className="ImageSize"><img src={props.post.URL}/></div>
//         <span><h1>Description</h1></span>
//         <span>{props.post.post_description}</span>
//         <span>{ props.post.vote_id 
//                     ? <h1 className="voted">You voted{props.post.vote_id}</h1> 
//                     : <button onClick={this.vote(props.post.post_id, props.post.user_id, props.post.vote_id)}>vote now</button>
//                }
//         </span>
//         <div><p>#votes</p><span>{props.post.Vote_count}</span></div>
//     </div>
// );

class PostsListItem extends Component {
    constructor(props){
        super(props);
    }

    vote = (postid, userid, voteid) => {
        store.dispatch(updateVote(
                this.props.post.postid, 
                this.props.post.userid,
                this.props.post.voteid
            ));
    };

    render() {
        return (
            <div className="post">
                <span><h1>{this.props.post.Posted_by}</h1></span>    
                <span>{this.props.post.post_id}</span>
                <div className="ImageSize"><img src={this.props.post.URL}/></div>
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