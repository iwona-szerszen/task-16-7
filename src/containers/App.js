import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { hot } from 'react-hot-loader';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTask: '',
			data: [
				{
					id: 1,
    				text: 'clean room'
				},
				{
					id: 2,
					text: 'wash the dishes'
				},
				{
					id: 3,
					text: 'feed my dog'
				},
				{
					id: 4,
					text: 'do the shopping'
				}
			]
		}
	}
	onInputChange(event) {
		let newTask = event.target.value;
		this.setState( {newTask} );
	}
	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4()
		};
		const data = [...this.state.data, todo];
		this.setState({
			newTask: '',
			data: data
		});
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}
	render() {
		return (
			<div className={style.TodoApp}>
				<Title title='To Do List' todosNumber={this.state.data.length} />
				<TodoForm 
					onInputChange={this.onInputChange.bind(this)}
					onAddClick={this.addTodo.bind(this)}
					content={this.state.newTask}
				/>
				<TodoList todoList={this.state.data} onDeleteClick={this.removeTodo.bind(this)} />
			</div>
		);
	}
}







export default hot(module)(App);