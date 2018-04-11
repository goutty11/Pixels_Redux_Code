import {
    POST_ADD_VOTE,
    POST_ADD_VOTE_PENDING,
    POST_ADD_VOTE_FULFILLED,
    POST_ADD_VOTE_REJECTED,
    GET_VOTE_COUNT,
    GET_VOTE_COUNT_PENDING,
    GET_VOTE_COUNT_FULFILLED,
    GET_VOTE_COUNT_REJECTED
} from '../../common/constants';


const voteResponseDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    response: ''
};

const voteCountDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    votecount: ''
};


export const addVote = (state = voteResponseDefaultState, action) => {
    switch (action.type) {
        case POST_ADD_VOTE_PENDING:
            return { ...state, fetching: true };
        case POST_ADD_VOTE_FULFILLED:
            return { ...state, fetching: false, reponse: action.payload.response };
        case POST_ADD_VOTE_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};


export const getVoteCount = (state = voteCountDefaultState, action) => {
    switch(action.type) {
        case GET_VOTE_COUNT_PENDING:
            return { ...state, fetching: true };
        case GET_VOTE_COUNT_FULFILLED:
            return { ...state, fetching: false, votecount: action.payload.response };
        case GET_VOTE_COUNT_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};







