import React from 'react';

const TodoForm = props => {
	return (
		<form>
			<input 
				type='text'
				placeholder='enter new task to do'
				onChange={event => props.onInputChange(event)}
				value={props.content}
			/>
			<button onClick={() => props.onAddClick(props.content)}>+</button>
		</form>
	);
}

export default TodoForm;

const Todo = props => {
	return (
		<li className={style.Todo}>
			<div>{props.todo.text}</div>
			<button onClick={() => props.onDeleteClick(props.todo.id)}>-</button>
		</li>
	);
}