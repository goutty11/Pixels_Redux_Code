import axios from 'axios';
import {
    PIXELS_API_URL,
    GET_POSTS_BY_TOPIC,
    GET_POSTS_BY_USER,
    GET_POST,
    GET_BEST_POST,
    ADD_POST
} from '../../common/constants';


export const addPost = (userId, topicId, filecontext, description, nextTopic) => {
    return {
        type: ADD_POST,
        payload: axios.post(`${PIXELS_API_URL}/upload_post`, { 
            user_id: userId, 
            topic_id: topicId, 
            url: filecontext,
            description: description,
            next_topic: nextTopic
        })
    }
};


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


export const getBestPost = (topicId) => {
    return {
        type: GET_BEST_POST,
        payload: axios.get(`${PIXELS_API_URL}/get_best_post/${topicId}`)
    }
};