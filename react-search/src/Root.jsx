import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Search from './components/Search'
import SearchReducer from './reducers/search'

export default function Root() {
    const store = createStore(SearchReducer);
    return (
        <Provider store={store}>
            <Search></Search>
        </Provider>
    )
}
