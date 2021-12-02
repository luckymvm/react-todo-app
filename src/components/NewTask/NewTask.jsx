import React, { Component } from 'react';
import classes from './NewTask.module.scss';
import cn from 'classnames';

class NewTask extends Component {
	state = {
		label: '',
	};

	onHandleSubmit = (e) => {
		e.preventDefault();
		const { label } = this.state;
		label && this.props.onNewTask(label);

		this.setState({
			label: '',
		});
	};

	onHandleChange = (e) => {
		this.setState({ label: e.target.value });
	};

	render() {
		return (
			<form
				onSubmit={this.onHandleSubmit}
				className={cn(classes.newTask)}
			>
				<input
					type="text"
					className={cn(classes.taskInput)}
					placeholder="Title of a new task"
					onChange={this.onHandleChange}
					value={this.state.label}
				/>
				<button type="submit">Add task</button>
			</form>
		);
	}
}

export default NewTask;
