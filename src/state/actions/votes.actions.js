import axios from 'axios';
import {
    PIXELS_API_URL,
    UPDATE_VOTE
} from '../../common/constants';



export const updateVote = (postId, userId, voteId) => {
    return {
        type: UPDATE_VOTE,
        meta: { postId, userId },
        payload: axios.put(`${PIXELS_API_URL}/update_vote`, { 
            post_id: postId, 
            user_id: userId, 
            vote_id: voteId 
        })
    }
};

