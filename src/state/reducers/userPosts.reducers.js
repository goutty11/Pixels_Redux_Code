import { 
    GET_POSTS_BY_USER_PENDING,
    GET_POSTS_BY_USER_FULFILLED,
    GET_POSTS_BY_USER_REJECTED
} from '../../common/constants';

const postsByUserInitialState = {
    fetching: false,
    fetched: false,
    error: null,
    UserPosts: []
}

export const postsByUser = (state = postsByUserInitialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_USER_PENDING:
            return { ...state, fetching: true};
        case GET_POSTS_BY_USER_FULFILLED:
            return { ...state, fetching: false, UserPosts: action.payload.data.items };
        case GET_POSTS_BY_USER_REJECTED:
            return { ...state, fetching: false, error: action.payload.data.error };
        default:
            return state;
        }
};