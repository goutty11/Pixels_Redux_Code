import axios from 'axios';
import { GET_VOTER_INFO } from '../common/constants';


export const getVoterInfoByPost = (postid) => {
    return {
        type: GET_VOTER_INFO,
        payload: axios.get(`http://localhost:8080/getvoterinfobypost/${postid}`)
                .then((response) => {
                    return response.data; 
                })
                .catch((error) => {
                    return { error }
                })
    }
};