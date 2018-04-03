import { createStore, applyMiddleware, compose } from 'redux';
import { FetchData, getPostByTopic, getPostsByUser, getUserDetails } from '../Actions/FetchDataAction';
import { FetchDataReducer } from '../Reducers/FetchDataReducer';
import thunk from 'redux-thunk';
// import Common from './Common/Common';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(FetchDataReducer, composeEnhancers(applyMiddleware(thunk)));

// store.dispatch(FetchData());
//store.dispatch(getPostByTopic(2));
// store.dispatch(getPostsByUser(1));
store.dispatch(getUserDetails(2));

console.log(store.getState());
export default store;