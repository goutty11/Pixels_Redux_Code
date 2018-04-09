import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import store from "../../state/store";
import PostsList from "../PostsList/PostsList";

import { getPostByTopic } from "../../state/actions/posts.actions";

class App extends React.Component {
    componentWillMount () {
        store.dispatch(getPostByTopic(2));
    }

    render () {
        return (
            <div className="App">
                {/* <Header />
    
                <Footer /> */}
    
                <PostsList items={ this.props.postsByTopic.posts } />
            </div>
        );
    }
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);