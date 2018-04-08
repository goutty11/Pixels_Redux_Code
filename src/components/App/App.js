import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import store from "../../state/store";
import Posts from "../Posts/Posts";

import { getPostByTopic } from "../../state/actions/posts.actions";

class App extends React.Component {
    componentWillMount () {
        store.dispatch(getPostByTopic(1));
    }

    render () {
        return (
            <div className="App">
                {/* <Header />
    
                <Footer /> */}
    
                <Posts items={ this.props.posts } />
            </div>
        );
    }
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);