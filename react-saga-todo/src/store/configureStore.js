import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todosReducer from './reducers/todos';
import SearchReducers from './reducers/search';
import errorsReducer from './reducers/errors';
import { watchTodos } from './sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
	const store = createStore(
		combineReducers({
			todos: todosReducer,
			error: errorsReducer,
			search: SearchReducers,
		})
		, composeEnhancers(applyMiddleware(sagaMiddleware)) 
	);
	sagaMiddleware.run(watchTodos);
	return store;
}

