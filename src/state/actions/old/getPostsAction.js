import axios from 'axios';
import { PIXELS_BASE_URL, GET_POSTS_BY_TOPIC, GET_POSTS_BY_USER } from '../common/constants';


export const getPostByTopic = (id) => {
    return {
          type: GET_POSTS_BY_TOPIC,
          payload:axios.get(`${PIXELS_BASE_URL}/getpostsbytopic/${id}`)
                 .then((response) => {
                    return { response } 
                 })
                 .catch((error) => {
                    return { error }
                 })
    }
};


export const getPostsByUser = (userid) => {
    return {
        type: GET_POSTS_BY_USER,
        payload: axios.get(`${PIXELS_BASE_URL}/getpostsbyUser/${userid}`)
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};