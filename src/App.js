import classes from './App.module.scss';
import cn from 'classnames';
import { Component } from 'react';
import Header from './components/Header/Header';
import Panels from './components/Panels/Panels';
import TodoList from './components/TodoList/TodoList';
import NewTask from './components/NewTask/NewTask';

class App extends Component {
	state = {
		todoData: [
			this.createTodo('Learn javascript'),
			this.createTodo('Buy bread'),
			this.createTodo('Implement backend for the todo app'),
		],
		searchQuery: '',
		filterParam: 'all',
	};

	createTodo(label) {
		return {
			label,
			important: false,
			completed: false,
			id: Date.now() + Math.random(),
		};
	}

	copyArray(arr) {
		return JSON.parse(JSON.stringify(arr));
	}

	countOfActiveAndCompletedTodos(arr) {
		const completed = arr.filter((item) => item.completed).length;
		const active = arr.length - completed;

		return { completed, active };
	}

	onSearchTasks = (arr, query) => {
		if (!query) return arr;

		return arr.filter(({ label }) => {
			return label.toLowerCase().includes(query);
		});
	};

	onFilterTasks = (arr, param) => {
		switch (param) {
			case 'all':
				return arr;
			case 'active':
				return arr.filter((item) => !item.completed);
			case 'completed':
				return arr.filter((item) => item.completed);
			default:
				return arr;
		}
	};

	filterAndSearchTasks(arr, query, param) {
		const filteredArray = this.onFilterTasks(arr, param);
		return this.onSearchTasks(filteredArray, query);
	}

	toggleProp(arr, id, prop) {
		const arrayCopy = this.copyArray(arr);
		const index = arrayCopy.findIndex((item) => item.id === id);
		arrayCopy[index][prop] = !arrayCopy[index][prop];

		return arrayCopy;
	}

	completeTask = (id) => {
		this.setState(({ todoData }) => {
			const newArray = this.toggleProp(todoData, id, 'completed');

			return { todoData: newArray };
		});
	};

	importantTask = (id) => {
		this.setState(({ todoData }) => {
			const newArray = this.toggleProp(todoData, id, 'important');

			return { todoData: newArray };
		});
	};

	deleteTask = (id) => {
		this.setState(({ todoData }) => {
			const arrayCopy = this.copyArray(todoData);
			const index = arrayCopy.findIndex((item) => item.id === id);
			arrayCopy.splice(index, 1);

			return { todoData: arrayCopy };
		});
	};

	addTask = (label) => {
		const buildNewTodo = this.createTodo(label);

		this.setState(({ todoData }) => {
			return {
				todoData: [...todoData, buildNewTodo],
			};
		});
	};

	render() {
		const { todoData, searchQuery, filterParam } = this.state;
		const activeAndCompleted =
			this.countOfActiveAndCompletedTodos(todoData);

		const filteredTodoData = this.filterAndSearchTasks(
			todoData,
			searchQuery,
			filterParam
		);

		return (
			<div className={cn(classes.todoApp)}>
				<Header {...activeAndCompleted} />
				<Panels
					setState={this.setState.bind(this)}
					onSearchTasks={this.onSearchTasks}
					onFilterTasks={this.onFilterTasks}
				/>

				<TodoList
					todos={filteredTodoData}
					onTaskComplete={this.completeTask}
					onTaskImportant={this.importantTask}
					onTaskDelete={this.deleteTask}
				/>

				<NewTask onNewTask={this.addTask} />
			</div>
		);
	}
}

export default App;
