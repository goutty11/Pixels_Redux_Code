import {
    POST_ADD_VOTE,
} from '../../common/constants';


const voteResponseDefaultState = {
    response: ''
}


export const addVote = (state = voteResponseDefaultState, action) => {
    switch (action.type) {
        case POST_ADD_VOTE:
            return { ...state, fetching: false, reponse: action.payload.response };
        default:
            return state;
    }
};







