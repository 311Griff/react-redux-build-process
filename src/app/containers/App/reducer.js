import {
    ADD_NUM,
    SUBTRACT_NUM,
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
    loading: false,
    error: false,
    testNum: 0,
});

function appReducer(state = initialState, action) {
    switch (action.type) {
    case ADD_NUM:
        return state
          .set('testNum', state.get('testNum') + 1);
    case SUBTRACT_NUM:
        return state
          .set('testNum', state.get('testNum') - 1);
    default:
        return state;
    }
}

export default appReducer;
