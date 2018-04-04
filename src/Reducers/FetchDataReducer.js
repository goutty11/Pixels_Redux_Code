
export const FetchDataReducer = (state=[], action) => {
    switch(action.type){
        case 'GET_INITIAL_INFO':
            return [
                    ...state,
                    action.payload
                ];
        case 'GET_POST':
            return[
                ...state,
                action.payload
            ];
        case 'GET_POST_BY_USER':
            return[
                ...state,
                action.payload
            ];
        case 'GET_USER_DETAILS':
            return [
                ...state,
                action.payload
            ];
        case 'GET_VOTER_INFO':
            return [
                ...state,
                action.payload
            ];
        case 'GET_COMMENTS':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
        }
    };

