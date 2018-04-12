import {
    GET_INITIAL_INFO_PENDING,
    GET_INITIAL_INFO_FULFILLED,
    GET_INITIAL_INFO_REJECTED
} from '../../common/constants';

const initialInformationState = {
    fetching: false,
    fetched: false,
    error: null,
    data: {}
};

export const initialInfo = (state = initialInformationState, action) => {
    switch (action.type) {
        case GET_INITIAL_INFO_PENDING:
            return { ...state, fetching: true };
        case GET_INITIAL_INFO_FULFILLED:
            return { ...state, fetching: false, data: action.payload.data };
        case GET_INITIAL_INFO_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};