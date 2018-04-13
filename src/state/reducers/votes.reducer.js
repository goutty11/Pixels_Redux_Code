import {
    POST_ADD_VOTE_PENDING,
    POST_ADD_VOTE_FULFILLED,
    POST_ADD_VOTE_REJECTED,
    PUT_UPDATE_VOTE_PENDING,
    PUT_UPDATE_VOTE_FULFILLED,
    PUT_UPDATE_VOTE_REJECTED
} from '../../common/constants';


const voteResponseDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    response: ''
};

export const updateVote = (state = voteResponseDefaultState, action) => {
    switch (action.type) {
        case PUT_UPDATE_VOTE_PENDING:
            return { ...state, fetching: true };
        case PUT_UPDATE_VOTE_FULFILLED:
            return { ...state, fetching: false, reponse: action.payload.response };
        case PUT_UPDATE_VOTE_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};







