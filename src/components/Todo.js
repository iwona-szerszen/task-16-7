import React from 'react';
import style from './Todo.css';

const Todo = props => {
	return (
		<li className={style.Todo}>
			<div>{props.todo.text}</div>
			<button onClick={() => props.onDeleteClick(props.todo.id)}>-</button>
		</li>
	);
}

export default Todo;

