import axios from 'axios';
import { GET_INITIAL_INFO, PIXELS_API_URL } from '../../common/constants';

export const getInitialInfo = (userid) => {
    return {
        type: GET_INITIAL_INFO,
        payload: axios.get(`${PIXELS_API_URL}/get_initial_info/${userid}`)
    }
};