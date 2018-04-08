import {
    GET_INITIAL_INFO_PENDING,
    GET_INITIAL_INFO_FULFILLED,
    GET_INITIAL_INFO_REJECTED
} from '../common/constants';

const initialinformationstate = {
    fetching: false,
    fetched: false,
    error: null,
    initialInformation:[]
};

const ProcessinitialInfo = (details) => {
    return details.map(detail => {
        return detail;
    })
}

export const getInitialInfoReducer = (state=initialinformationstate, action) => {
    switch(action.type){
        case GET_INITIAL_INFO_PENDING:
            return{
                ...state,
                fetching: true
            };
        case GET_INITIAL_INFO_FULFILLED:
            return {
                ...state,
                fetching: false,
                initialInformation: ProcessinitialInfo(action.payload.response.data.result[0])
            };
        case GET_INITIAL_INFO_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
        }
    };

