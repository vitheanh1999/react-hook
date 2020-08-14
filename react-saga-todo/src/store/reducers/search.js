import actions from '../actions/actionTypes';

let initialState = {
    data: [],
    isLoading: false,
    isError: false
}
const SearchReducers = ( state = initialState, action) =>{
    switch (action.type) {
        case actions.DATA_INIT:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case actions.DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:action.data.hits
            }
        case actions.FETCH_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}
export default SearchReducers;