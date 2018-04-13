import { combineReducers } from 'redux';
import { initialInfo } from './common.reducer';
import { postsByTopic, postsByUser } from './posts.reducer';
import { updateVote } from './votes.reducer';

export default combineReducers({
    initialInfo,
    postsByTopic,
    postsByUser,
    updateVote
});
