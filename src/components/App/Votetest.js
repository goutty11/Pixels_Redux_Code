import React, { Component } from 'react';
import store from "../../state/store";
import { postAddVote } from '../../state/actions/votes.actions';

class Votetest extends Component {
    constructor(props){
        super(props);
   
        this.vote = this.vote.bind(this);
    }

    vote = () => {
        store.dispatch(postAddVote(2,1));
    }

    render() {
        return (
            <div>
                <div onClick={this.vote}>Vote</div>
            </div>
        );
    }
}

export default Votetest;