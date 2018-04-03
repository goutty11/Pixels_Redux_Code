import { createStore, applyMiddleware, compose } from 'redux';
import { FetchData, getPostById } from '../Actions/FetchDataAction';
import { FetchDataReducer } from '../Reducers/FetchDataReducer';
import thunk from 'redux-thunk';
// import Common from './Common/Common';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(FetchDataReducer, composeEnhancers(applyMiddleware(thunk)));

// store.dispatch(FetchData());
store.dispatch(getPostById(16));

// store.subscribe(() => {
//     console.log("store changed", store.getState());
// })


console.log(store.getState());
export default store;