import { takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchTodosSaga, addNewTodoSaga, editTodoSaga, removeTodoSaga, completeTodoSaga } from './todosSagas';
import { fetchInitSearch, fetchDataSearch } from './search';
import actions from '../actions/actionTypes';

export function* watchTodos() {
	yield takeLatest(actions.FETCH_TODOS_START, fetchTodosSaga);
	yield takeLatest(actions.ADD_TODO_START, addNewTodoSaga);
	yield takeLatest(actions.EDIT_TODO_START, editTodoSaga);
	yield takeLatest(actions.REMOVE_TODO_START, removeTodoSaga);
	yield takeLatest(actions.COMPLETE_TODO_START, completeTodoSaga);
	yield takeLatest(actions.DATA_INIT, fetchInitSearch);
	yield takeLatest(actions.DATA_SEARCH, fetchDataSearch);
}