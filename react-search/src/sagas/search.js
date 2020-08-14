import {
    takeLatest,
    call,
    put,
    fork,
} from 'redux-saga/effects';
import { fetchSuccess } from '../actions/search';

export function* fetchListData(action){
    try {
        const result = yield call('http://hn.algolia.com/api/v1/search?query=redux');
        action.fetchSuccess(action);
    } catch (error) {
        action.isError(error);
    }
} 