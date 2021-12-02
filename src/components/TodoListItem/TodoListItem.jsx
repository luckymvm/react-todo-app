import React from 'react';
import { ReactComponent as DeleteIcon } from './delete.svg';
import { ReactComponent as ImportantIcon } from './important.svg';
import cn from 'classnames';
import classes from './TodoListItem.module.scss';

const TodoListItem = ({
	label,
	important,
	completed,
	onTaskComplete,
	onTaskImportant,
	onTaskDelete,
}) => {
	return (
		<>
			<span
				className={cn({
					[classes.important]: important === true,
					[classes.completed]: completed === true,
				})}
				onClick={onTaskComplete}
			>
				{label}
			</span>
			<span className={cn(classes.edit)}>
				<button onClick={onTaskDelete}>
					<DeleteIcon />
				</button>
				<button onClick={onTaskImportant}>
					<ImportantIcon />
				</button>
			</span>
		</>
	);
};

export default TodoListItem;
