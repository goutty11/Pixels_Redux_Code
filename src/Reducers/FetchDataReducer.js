
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
        ]
        default:
            return state;
        }
    };

// export default FetchDataReducer;