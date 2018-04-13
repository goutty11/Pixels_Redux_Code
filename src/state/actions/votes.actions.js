import axios from 'axios';
import {
    PIXELS_API_URL,
    POST_ADD_VOTE,
    GET_VOTE_COUNT
} from '../../common/constants';



export const UpdateVote = (postId, userId, voteId) => {
    return {
        type: POST_ADD_VOTE,
        payload: axios.put(`${PIXELS_API_URL}/update_vote`, {
            postId,
            userId,
            voteId
        })
    }
};

// export const getVoteCount = ({postid}) => {
//     return {
//         type: GET_VOTE_COUNT,
//         payload: axios.post(`${PIXELS_API_URL}/get_vote_count/${postid}`)
//     }
// };