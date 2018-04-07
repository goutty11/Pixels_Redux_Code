import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import { Provider } from 'react-redux';
import store from './store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <LandingPage />
    </Provider>,
document.getElementById('root'));



