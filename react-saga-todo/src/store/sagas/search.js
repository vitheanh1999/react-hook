import { call, put } from 'redux-saga/effects';
import API from '../../utils/API';
import axios from 'axios';
import { fetchSuccessSearch, fetchAfterSearch } from '../actions/search';

export function* fetchInitSearch() {
    try {
        const data = yield call(API.fetchInitSearch);
        yield put (fetchSuccessSearch(data))
    } catch (error) {
        
    }
}
export function* fetchDataSearch(action){
    try {
        const params  = action.data;
        // const data = yield call(API.fetchAfterSearch(params));
        const data = yield axios.get(`http://hn.algolia.com/api/v1/search?query=${params}`).then((result) => {
		 return result.data;
	    })
        yield put (fetchSuccessSearch(data))
    } catch (error) {
        
    }
}