import axios from 'axios';

import { GET_POSTS_BY_TOPIC, GET_POSTS_BY_USER } from '../common/constants';


export const getPostByTopic = (id) => {
        
    return {
          type: GET_POSTS_BY_TOPIC,
          payload:axios.get(`http://localhost:8080/getpostsbytopic/${id}`)
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
        payload: axios.get(`http://localhost:8080/getpostsbyUser/${userid}`)
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};