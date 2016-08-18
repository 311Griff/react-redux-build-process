import {
    ADD_NUM,
    SUBTRACT_NUM,
} from './constants';

export function addToNum() {

    return {
        type: ADD_NUM,
    };
}

export function subtractFromNum() {

    return {
        type: SUBTRACT_NUM,
    };
}
