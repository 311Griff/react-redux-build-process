import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
);

export default function configureStore(initialState) {

    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    const store = createStore(rootReducer, initialState, enhancer);

    // Hot reload reducers (requires Webpack HMR to be enabled)
    if (module.hot) {
        /*eslint-disable */
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
        /*eslint-enable */
    }

    return store;
}
