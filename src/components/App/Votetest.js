import React, { Component } from 'react';
import store from "../../state/store";


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
                <div onClick={this.vote}><input type="button">Vote</input></div>
            </div>
        );
    }
}

export default Votetest;