import '../scss/site.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.querySelector('.app'));

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        /*eslint-disable */
        const App = require('./containers/App').default;
        /*eslint-enable */

        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
            , document.querySelector('.app'));
    });
}

if (process.env.NODE_ENV !== 'production') {
    /*eslint-disable */
    const showDevTools = require('./devTools/showDevTools');
    /*eslint-enable */

    showDevTools(store);
}
