import * as search from '../constants/search';

const dataFetchReducer = (state = [],action) =>{
    switch(action.type){
      case search.FETCH_INIT:
        return {
          ...state,
          isLoading:true,
          isError:false
        };
      case search.FETCH_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isError:false,
          data:action.payload
        }
      case search.FETCH_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError:true
        };
    }
  }
export default dataFetchReducer;