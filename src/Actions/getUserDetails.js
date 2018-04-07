import axios from 'axios';

import { GET_USER_DETAILS } from '../common/constants';


export const getUserDetails = (userid) => {
    return {
        type: GET_USER_DETAILS,
        payload: axios.get(`http://localhost:8080/getuserDetails/${userid}`)
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};