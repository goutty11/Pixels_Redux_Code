
export const FetchDataReducer = (state=[], action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return [
                    ...state,
                    action.payload.data
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
        default:
            return state;
        }
    };

// export default FetchDataReducer;