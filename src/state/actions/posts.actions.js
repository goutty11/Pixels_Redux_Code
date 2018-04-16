import axios from 'axios';
import {
    PIXELS_API_URL,
    GET_POSTS_BY_TOPIC,
    GET_POSTS_BY_USER
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