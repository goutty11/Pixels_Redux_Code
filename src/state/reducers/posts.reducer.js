import {
    GET_POSTS_BY_TOPIC_PENDING,
    GET_POSTS_BY_TOPIC_FULFILLED,
    GET_POSTS_BY_TOPIC_REJECTED
} from '../../common/constants';

const postsByTopic = {
    fetching: false,
    fetched: false,
    error: null,
    posts: []
};

export const postsByTopicReducer = (state = postsByTopic, action) => {
    switch (action.type) {
        case GET_POSTS_BY_TOPIC_PENDING:
            return { ...state, fetching: true };
        case GET_POSTS_BY_TOPIC_FULFILLED:
            return { ...state, fetching: false, posts: action.payload.items };
        case GET_POSTS_BY_TOPIC_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};