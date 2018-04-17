import axios from 'axios';
import {
    PIXELS_API_URL,
    UPDATE_VOTE
} from '../../common/constants';



export const updateVote = (postId, userId, voteId) => {
    return {
        type: UPDATE_VOTE,
        payload: axios.put(`${PIXELS_API_URL}/update_vote`, { postId, userId, voteId })
    }
};

