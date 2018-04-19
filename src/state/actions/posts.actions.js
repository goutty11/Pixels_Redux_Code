import axios from 'axios';
import {
    PIXELS_API_URL,
    GET_POSTS_BY_TOPIC,
    GET_POSTS_BY_USER,
    GET_POST
} from '../../common/constants';


export const getPostByTopic = (id, userId) => {
    return {
        type: GET_POSTS_BY_TOPIC,
        payload: axios.get(`${PIXELS_API_URL}/get_posts_by_topic/${id}/${userId}`)
    }
};


export const getPostByUser = (userId, loggedInUserId) => {
    return {
        type: GET_POSTS_BY_USER,
        payload: axios.get(`${PIXELS_API_URL}/get_posts_by_user/${userId}/${loggedInUserId}`)
    }
};

export const getPost = (postId, loggedInUserId) => {
    return {
        type: GET_POST,
        payload: axios.get(`${PIXELS_API_URL}/get_post/${postId}/${loggedInUserId}`)
    }
};


export const getBestPost = () => {
    return {
        type: GET_BEST_POST,
        payload: axios.get(`${PIXELS_API_URL}/get_post/${postId}/${loggedInUserId}`)
    }
}