import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import store from "../../state/store";
import PostsList from "../PostsList/PostsList";
import PostsByUserList from "../PostsByUserList/PostsByUserList";

import { getPostByTopic, getPostByUser } from "../../state/actions/posts.actions";


 class App extends React.Component {
    

     componentWillMount () {
         store.dispatch(getPostByTopic(2));
        //store.dispatch(getPostByUser(2));
     }

     

     render () {
         return (
             <div className="App">
                
                 
    
                  {/* <PostsList items={ this.props.postsByTopic.posts } /> */}
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