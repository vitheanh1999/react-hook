import actions from './actionTypes';
export const fetchInitSearch = () => ({
    type: actions.DATA_INIT
})
export const fetchSuccessSearch = (data) => ({
    type: actions.DATA_SUCCESS,
    data: data
})
export const fetchAfterSearch = (data) =>({
    type: actions.DATA_SEARCH,
    data: data
})