import { combineReducers } from 'redux';
import { initialInfoReducer } from './common.reducer';
import { postsByTopicReducer } from './posts.reducer';

export default combineReducers({
    initialInfoReducer,
    postsByTopicReducer
});
