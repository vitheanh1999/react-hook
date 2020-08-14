import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import configureStore from './store/configureStore';
import { fetchTodos } from './store/actions/todos';
import { fetchInitSearch } from './store/actions/search';
import AppRouter from './router/AppRouter';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

function renderApp (){
	 store.dispatch(fetchTodos());
	//  store.dispatch(fetchInitSearch());
	return(
		<Provider store={store}>
			<AppRouter />
		</Provider>
	)
}
ReactDOM.render(renderApp(), document.getElementById('root'));

// ReactDOM.render(<p>loading...</p>, document.getElementById('root'));
registerServiceWorker();

renderApp();