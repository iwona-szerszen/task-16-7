import React from 'react';

const TodoForm = props => {
	return (
		<form onSubmit={event => props.onFormSubmit(event)}>
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