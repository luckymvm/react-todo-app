import React, { Component } from 'react';
import classes from './ItemStatusFilter.module.scss';
import cn from 'classnames';

class ItemStatusFilter extends Component {
	state = {
		activeButton: 'all',
	};

	onHandleClick = (key) => {
		this.setState({
			activeButton: key,
		});

		const { setState } = this.props;
		setState({
			filterParam: key,
		});
	};

	render() {
		const buttons = [
			{ children: 'All', key: 'all' },
			{ children: 'Active', key: 'active' },
			{ children: 'Done', key: 'completed' },
		];

		const { activeButton } = this.state;

		return (
			<span className={cn(classes.panelButtons)}>
				{buttons.map((button) => {
					return (
						<button
							key={button.key}
							className={cn({
								[classes.active]: activeButton === button.key,
							})}
							onClick={() => this.onHandleClick(button.key)}
						>
							{button.children}
						</button>
					);
				})}
			</span>
		);
	}
}

export default ItemStatusFilter;
