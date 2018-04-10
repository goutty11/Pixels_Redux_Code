import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import store from "../../state/store";
import PostsList from "../PostsList/PostsList";
import PostsByUserList from "../PostsByUserList/PostsByUserList";

import { getPostByTopic, getPostByUser } from "../../state/actions/posts.actions";
import { AddVote } from "../../state/actions/votes.actions";

 class App extends React.Component {
    constructor(props){
        super(props);
   
        this.vote = this.vote.bind(this);
    }
     componentWillMount () {
        //store.dispatch(getPostByTopic(2));
        store.dispatch(getPostByUser(2));
     }

     vote = () => {
        store.dispatch(AddVote(2,1));
     }

     render () {
         return (
             <div className="App">
                  <button onClick={this.vote}>Vote</button>
                  {/* <PostsList items={ this.props.postsByTopic.posts } /> */}
                  <PostsByUserList items= {this.props.postsByUser.postsList} />  
             </div>
         );
     }
 };

 const mapStateToProps = (state) => state;

//  const mapStateToProps = (state) => {
//     return {
//         postslist: state.postslist
//     }   
//  }
 export default connect(mapStateToProps)(App);



