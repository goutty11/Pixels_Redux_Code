import React from 'react';
import ReactDOM from 'react-dom';
import LandingPageList from './Components/LandingPageList';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/configureStore';

// const WrappedComponent = (
//     <Provider store={store}>
//         <LandingPageList />
//     </Provider>
// );

ReactDOM.render(
    <Provider store={store}>
        <LandingPageList />
    </Provider>,
document.getElementById('root'));



