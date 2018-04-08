import axios from 'axios';
import { GET_COMMENTS_BY_POST } from '../common/constants';



export const getComments = (postid, limit) => {
    return {
        type: GET_COMMENTS_BY_POST,
        payload: axios.get(`http://localhost:8080/getcommentsbypost/${postid}/${limit}`)
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};


