import { combineReducers } from 'redux';
import { initialInfo } from './common.reducer';
import { postsByTopic, postsByUser, post, bestPost } from './posts.reducer';
import { updateUser } from './users.reducer';
import { topicInfo } from './topics.reducer'; 

export default combineReducers({
    initialInfo,
    postsByTopic,
    postsByUser,
    post,
    bestPost,
    updateUser,
    topicInfo
});
