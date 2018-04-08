import { combineReducers } from 'redux';
import { getPostsByTopicReducer } from './getPostsByTopicReducer';
import { getInitialInfoReducer } from './getInitialInfoReducer';

export default combineReducers({ initialInfoDetails:getInitialInfoReducer, postDetail: getPostsByTopicReducer });
