import axios from 'axios';
import {
    PIXELS_API_URL,
    GET_POSTS_BY_TOPIC
} from '../../common/constants';


export const getPostByTopic = (id) => {
    return {
        type: GET_POSTS_BY_TOPIC,
        payload: axios.get(`${PIXELS_API_URL}/get_posts_by_topic/${id}`)
    }
};