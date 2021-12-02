import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import cn from 'classnames';
import classes from './TodoList.module.scss';

const TodoList = ({ todos, onTaskComplete, onTaskImportant, onTaskDelete }) => {
	return (
		<ul className={cn(classes.todoList)}>
			{todos.length ? (
				todos.map(({ id, ...item }) => {
					return (
						<li key={id}>
							<TodoListItem
								{...item}
								onTaskComplete={() => onTaskComplete(id)}
								onTaskImportant={() => onTaskImportant(id)}
								onTaskDelete={() => onTaskDelete(id)}
							/>
						</li>
					);
				})
			) : (
				<h2 className={cn(classes.notFound)}>TASKS NOT FOUND</h2>
			)}
		</ul>
	);
};

export default TodoList;
