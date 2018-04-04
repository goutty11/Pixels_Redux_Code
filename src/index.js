import React from 'react';
import ReactDOM from 'react-dom';
import LandingPageList from './Components/LandingPageList';
import { Provider } from 'react-redux';
import store from './store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <LandingPageList />
    </Provider>,
document.getElementById('root'));



