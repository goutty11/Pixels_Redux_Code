import { combineReducers } from 'redux';
import { initialInfo } from './common.reducer';
import { postsByTopic } from './posts.reducer';

export default combineReducers({
    initialInfo,
    postsByTopic
});
