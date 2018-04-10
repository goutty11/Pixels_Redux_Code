import {
    GET_POSTS_BY_TOPIC_PENDING,
    GET_POSTS_BY_TOPIC_FULFILLED,
    GET_POSTS_BY_TOPIC_REJECTED,
} from '../../common/constants';

const postsByTopicInitialState = {
    fetching: false,
    fetched: false,
    error: null,
    posts: []
};

const postsByUserInitialState = {
    fetching: false,
    fetched: false,
    error: null,
    Userposts: []
};

export const postsByTopic = (state = postsByTopicInitialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_TOPIC_PENDING:
            return { ...state, fetching: true };
        case GET_POSTS_BY_TOPIC_FULFILLED:
            return { ...state, fetching: false, posts: action.payload.data.items };
        case GET_POSTS_BY_TOPIC_REJECTED:
            return { ...state, fetching: false, error: action.payload.data.error };
        default:
            return state;
    }
};

export const postsByUser = (state = postsByUserInitialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_USER_PENDING:
            return { ...state, fetching: true};
        case GET_POSTS_BY_USER_FULFILLED:
            return { ...state, fetching: false, Userposts: action.payload.data.items };
        case GET_POSTS_BY_USER_REJECTED:
            return { ...state, fetching: false, error: action.payload.data.error };
        default:
            return state;
        }
};


