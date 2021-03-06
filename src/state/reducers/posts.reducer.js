import {
    GET_POSTS_BY_TOPIC_PENDING,
    GET_POSTS_BY_TOPIC_FULFILLED,
    GET_POSTS_BY_TOPIC_REJECTED,
    GET_POSTS_BY_USER_PENDING,
    GET_POSTS_BY_USER_FULFILLED,
    GET_POSTS_BY_USER_REJECTED,
    GET_POST_PENDING,
    GET_POST_FULFILLED,
    GET_POST_REJECTED,
    GET_BEST_POST_PENDING,
    GET_BEST_POST_FULFILLED,
    GET_BEST_POST_REJECTED,
    ADD_POST_PENDING,
    ADD_POST_FULFILLED,
    ADD_POST_REJECTED
} from '../../common/constants';

const postsByInitialState = {
    fetching: false,
    fetched: false,
    error: null,
    posts: []
};

const postInitialState = {
    fetching: false,
    fetched: false,
    error: null,
    post: {
        "post_id": null,
        "url": null,
        "post_description": null,
        "posted_by_user_id": null,
        "Posted_by": null,
        "vote_id": null,
        "is_voted": null,
        "vote_count": 0,
        "comments_count": 0
    }
};

export const addPostInitialState = {
    fetching: false,
    fetched: false,
    error: null,
    response: {}
};

export const postsByTopic = (state = postsByInitialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_TOPIC_PENDING:
            return { ...state, fetching: true };
        case GET_POSTS_BY_TOPIC_FULFILLED:
            return { ...state, fetching: false, posts: action.payload.data.items };
        case GET_POSTS_BY_TOPIC_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};

export const postsByUser = (state = postsByInitialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_USER_PENDING:
            return { ...state, fetching: true};
        case GET_POSTS_BY_USER_FULFILLED:
            return { ...state, fetching: false, posts: action.payload.data.items };
        case GET_POSTS_BY_USER_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
    }
};

export const post = (state = postInitialState, action) => {
    switch (action.type) {
        case GET_POST_PENDING:
            return { ...state, fetching: true};
        case GET_POST_FULFILLED:
            return { ...state, fetching: false, post: action.payload.data };
        case GET_POST_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
        }
};

export const bestPost = (state = postInitialState, action) => {
    switch (action.type) {
        case GET_BEST_POST_PENDING:
            return { ...state, fetching: true};
        case GET_BEST_POST_FULFILLED:
            return { ...state, fetching: false, post: action.payload.data };
        case GET_BEST_POST_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
        }
};

export const addPost = (state = addPostInitialState, action) => {
    switch(action.type) {
        case ADD_POST_PENDING:
            return { ...state, fetching: true};
        case ADD_POST_FULFILLED:
            return { ...state, fetching: false, response: action.payload.data.post_id };
        case ADD_POST_REJECTED:
            return { ...state, fetching: false, error: action.payload.error };
        default:
            return state;
        }
};


