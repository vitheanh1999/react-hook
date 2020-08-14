import React, {Fragment, useState} from 'react';
import { useSelector, useDispatch} from "react-redux"
import * as actions from '../../store/actions/search'
import { fetchInitSearch, fetchAfterSearch } from '../../store/actions/search';
import Counter from './Counter';

function SearchList() {
    const [query, setQuery] = useState('')
    const state = useSelector(state => state.search);
    const dispatch = useDispatch();
    const doFetch = (query) =>{ 
         dispatch(fetchAfterSearch(query));
    };
    const onEnter = (event) =>{
        dispatch(fetchAfterSearch(event.target.value));
    }
    return (
        <Fragment>
            <Counter></Counter>
            <div className="App">
                <input 
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    onKeyUp={(event) => onEnter(event)}
                    ></input>
                <button 
                    type="button"
                    onClick={() => doFetch(query)}
                    
                    >Click</button>
                { state.isLoading ? ( <div>Loading...</div>) 
                :
                (
                    <ul>
                    {
                        state.data.map(item => (
                            item.title && (
                            <li key={item.objectID}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                            ))
                        )  
                    }
                    
                </ul>
                )
                }
                
            </div>
        </Fragment>
    )
}

export default SearchList

