import { createStore, applyMiddleware, compose } from 'redux';
import { getComments } from '../Actions/geCommentsAction';
import { getInitialInfo } from '../Actions/getInitialInfoAction';
import { getPostByTopic, getPostsByUser } from '../Actions/getPostsAction';
import { getUserDetails } from '../Actions/getUserDetails';
import { getVoterInfoByPost } from '../Actions/getVoterInfoAction';
import { getPostsByTopicReducer } from '../Reducers/getPostsByTopicReducer';
import { getInitialInfoReducer } from '../Reducers/getInitialInfoReducer';
import { combineReducers } from 'redux';
import Reducers from '../Reducers/index';
import thunk from 'redux-thunk';
import { createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        postdetail: getPostsByTopicReducer,
        initialInformation: getInitialInfoReducer
    }),
    composeEnhancers(applyMiddleware(createLogger(), thunk, promise())));

//const middlewarefile = applyMiddleware(logger(), thunk, promise());

//const store = createStore(FetchDataReducer, applyMiddleware(logger(), thunk, promise()));


store.dispatch(getInitialInfo(2));
store.dispatch(getPostByTopic(2));
// store.dispatch(getPostsByUser(1));
//store.dispatch(getUserDetails(2));
//store.dispatch(getVoterInfoByPost(2));
//store.dispatch(getComments(1, 1));

console.log(store.getState());
export default store;