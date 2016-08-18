import { combineReducers } from 'redux-immutable';
import AppReducer from './reducers';

const rootReducer = combineReducers({
    hmsdin: AppReducer,
});

export default rootReducer;
