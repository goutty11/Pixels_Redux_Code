import { combineReducers } from 'redux';
import { initialInfo } from './common.reducer';
import { postsByTopic } from './posts.reducer';
import { postsByUser } from './userPosts.reducers';

export default combineReducers({
    initialInfo,
    postsByTopic,
    postsByUser
});
