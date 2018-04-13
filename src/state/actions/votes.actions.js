import axios from 'axios';
import {
    PIXELS_API_URL,
    PUT_UPDATE_VOTE,
    GET_VOTE_COUNT
} from '../../common/constants';



export const UpdateVote = (postId, userId, voteId) => {
    return {
        type: PUT_UPDATE_VOTE,
        payload: axios.put(`${PIXELS_API_URL}/update_vote`, {
            postId,
            userId,
            voteId
        })
    }
};

