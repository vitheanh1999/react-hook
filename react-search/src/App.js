import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import './App.css';

const dataFetchReducer = (state,action) =>{
  switch(action.type){
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading:true,
        isError:false
      };
    case 'FETCH_SUCCESS':
      return{
        ...state,
        isLoading:false,
        isError:false,
        data:action.payload
      }
    case 'FETCH_FAILURE':
      return{
        ...state,
        isLoading:false,
        isError:true
      };
      default:
      throw new Error();
  }
}
const useDataApi = (initUrl,initData) =>{
  const [url, setUrl] = useState(initUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading:false,
    isError:false,
    data:initData,
  });

  useEffect(() =>{
    const fetchData = async () =>{
      dispatch({type:'FETCH_INIT'});
      try {
        const result = await axios(url);
        dispatch({
          type:'FETCH_SUCCESS',
          payload: result.data
        });
      } catch (error) {
        if(error){
          dispatch({
            type:'FETCH_FAILURE',
          })
        }
      }
    }
    fetchData();
  },[url]);
  return [state,setUrl];
};

function App() {
  const [query, setQuery] = useState('');
  const [state, doFetch] = useDataApi(
    'http://hn.algolia.com/api/v1/search?query=redux',
    {hits: []},
  );
  function onEnter(event){
    if(event.keyCode === 13){
      doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
    }
  };
  return (
    <div className="App">
      <input 
      type="text"
      value={query}
      onChange={event => setQuery(event.target.value)}
      onKeyUp={event => onEnter(event)}
      ></input>
      <button 
      type="button"
      onClick={() => doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)}
      >Click</button>
      {state.isError && <div>Something went wrong ...</div>}
      {state.isLoading ? (
        <div>Loading...</div>
      ) :(
        <ul>
        {state.data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default App;
