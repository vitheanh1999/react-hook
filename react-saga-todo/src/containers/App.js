import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	Grid, 
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodoList from '../components/TodoList/TodoList';
import TodoListAddNew from '../components/TodoList/TodoListAddNew.js';
import { useDispatch } from 'react-redux';
import { fetchInitSearch }  from '../store/actions/search';
import  SearchList  from '../components/TodoList/SearchList';

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#eee',
		height: '100vh'
	},
	
	control:{
		padding: theme.spacing.unit * 2
	},
	paper: {
		height: '100px',
		width: '200px',
		padding: theme.spacing.unit * 3
	}
});

function App(classes){
	const dispatch = useDispatch();
    dispatch(fetchInitSearch());
		return (
		<Grid container className={classes.root} spacing={16}>
			<Grid item className={classes.control} xs={12}>
				<SearchList></SearchList>
				<TodoListAddNew />
				<TodoList />
			</Grid>
		</Grid>
		);
};

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(App));