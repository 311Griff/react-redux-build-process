import { combineReducers } from 'redux-immutable';
import SharedReducer from './shared';

const rootReducer = combineReducers({
    sharedStore: SharedReducer,
});

export default rootReducer;
