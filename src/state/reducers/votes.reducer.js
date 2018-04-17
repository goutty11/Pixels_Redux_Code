import {
    UPDATE_VOTE_PENDING,
    UPDATE_VOTE_FULFILLED,
    UPDATE_VOTE_REJECTED
} from '../../common/constants';

import store from './state/store';
import { getPost } from '../actions/posts.actions';

const voteResponseDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    response: ''
};

export const updateVote = (state = voteResponseDefaultState, action) => {
    switch (action.type) {
        case UPDATE_VOTE_PENDING:
            return { ...state, fetching: true };
        case UPDATE_VOTE_FULFILLED:
            return { ...state, fetching: false, reponse: action.payload.response };
        case UPDATE_VOTE_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};







