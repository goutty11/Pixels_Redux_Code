import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(createLogger(), thunk, promise())));

export default store;