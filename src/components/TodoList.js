import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	const todos = props.todoList.map(item => <Todo todo={item} key={item.id} onDeleteClick={props.onDeleteClick} />);
	return <ol>{todos}</ol>;
}

export default TodoList;