import {
    FETCH_SUCCESS,
    FETCH_INIT,
    FETCH_FAILURE
} from '../constants/search';
export const fetchSuccess = (result) => ({
    type:'FETCH_SUCCESS',
    payload: result.data
});

export const isLoading = () =>({
    type:'FETCH_SUCCESS'
});

export const isError = () =>({
    type:'FETCH_FAILURE'
});