import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';

import App from './components/App/App';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    }
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// document.getElementById('root'));

ReactDOM.render(jsx, document.getElementById('root'));