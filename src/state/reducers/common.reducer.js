import {
    GET_INITIAL_INFO_PENDING,
    GET_INITIAL_INFO_FULFILLED,
    GET_INITIAL_INFO_REJECTED
} from '../../common/constants';

const initialInformationState = {
    fetching: false,
    fetched: false,
    error: null,
    initialInformation: []
};

export const initialInfoReducer = (state = initialInformationState, action) => {
    switch (action.type) {
        case GET_INITIAL_INFO_PENDING:
            return { ...state, fetching: true };
        case GET_INITIAL_INFO_FULFILLED:
            return { ...state, fetching: false, initialInformation: action.payload };
        case GET_INITIAL_INFO_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};