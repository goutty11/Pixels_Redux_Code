import axios from 'axios';

import {
    PIXELS_API_URL,
    GET_TOPIC
} from '../../common/constants';


export const getTopic = (topicId, limit) => {
    return {
        type: GET_TOPIC,
        payload: axios.get(`${PIXELS_API_URL}/get_topic/${topicId}/${limit}`)
    }
};