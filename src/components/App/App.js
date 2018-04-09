import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import store from "../../state/store";
import PostsList from "../PostsList/PostsList";
import PostsByUserList from "../PostsByUserList/PostsByUserList";

import { getPostByTopic, getPostByUser } from "../../state/actions/posts.actions";
import { postAddVote } from '../../state/actions/votes.actions';

 class App extends React.Component {
    constructor(props){
        super(props);
   
        this.vote = this.vote.bind(this);
    }

     componentWillMount () {
         store.dispatch(getPostByTopic(2));
        //store.dispatch(getPostByUser(2));
     }

     vote = () => {
         store.dispatch(postAddVote(2,1));
     }

     render () {
         return (
             <div className="App">
                <div onClick={this.vote}><input type="button">Vote</input></div>
                 {/* <Header />
    
                 <Footer /> */}
    
                   <PostsList items={ this.props.postsByTopic.posts } />
                  {/* <PostsByUserList items= {this.props.postsByUser.postslist} /> */}

             </div>
         );
     }
 };

 const mapStateToProps = (state) => state;

// class App extends React.Component {
  //   componentWillMount () {
    //     store.dispatch(getPostByTopic(2));
//         store.dispatch(getPostByUser(2));
//     }

//     render () {
//         return (
//             <div className="App">
//                 {/* <Header />
    
//                 <Footer /> */}
    
//                  {/* <PostsList items={ this.props.postsByTopic.posts } />*/ } 
//                  <PostsByUserList items= {this.props.postslist} /> 

//             </div>
//         );
//     }
// };

// const mapStateToProps = (state) => {
//     return {
//         postsByUser: state.postsByUser
//     }
// }

export default connect(mapStateToProps)(App);