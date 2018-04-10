import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store';

import Votetest from './components/App/Votetest';
//import App from './components/App/App';
//import PostsByTopic from './components/PostsByTopic/PostsByTopic';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));