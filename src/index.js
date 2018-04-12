import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';

import App from './components/App/App';
import User from './components/UserDetails/User';


ReactDOM.render(
    <Provider store={store}>
        <User />
    </Provider>,
document.getElementById('root'));