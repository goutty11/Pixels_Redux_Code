import {
    UPDATE_USER_PENDING,
    UPDATE_USER_FULFILLED,
    UPDATE_USER_REJECTED
} from '../../common/constants';

const userDetailsDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    response: []
};

export const updateUser = (state=userDetailsDefaultState, action) => {
    switch(action.type){
        case UPDATE_USER_PENDING:
            return { ...state, fetching: true };
        case UPDATE_USER_FULFILLED:
            return { ...state, fetching: false, response: action.payload.response };
        case UPDATE_USER_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};

