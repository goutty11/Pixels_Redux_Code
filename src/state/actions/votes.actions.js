import axios from 'axios';
import {
    PIXELS_API_URL,
    POST_ADD_VOTE
} from '../../common/constants';



export const AddVote = (postid, userid) => {
    return {
        type: POST_ADD_VOTE,
        payload: axios.post(`${PIXELS_API_URL}/add_vote/${postid}/${userid}`)
    }
};