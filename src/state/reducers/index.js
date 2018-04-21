import { combineReducers } from 'redux';
import { initialInfo } from './common.reducer';
import { postsByTopic, postsByUser, bestPost, post } from './posts.reducer';
import { updateUser } from './users.reducer';
import { topicInfo } from './topics.reducer'; 
import { updateVote } from './votes.reducer';

export default combineReducers({
    initialInfo,
    postsByTopic,
    postsByUser,
    post,
    bestPost,
    updateUser,
    topicInfo,
    updateVote
});
