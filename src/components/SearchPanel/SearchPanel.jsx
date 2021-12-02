import React from 'react';
import classes from './SearchPanel.module.scss';
import cn from 'classnames';

const SearchPanel = ({ setState }) => {
	return (
		<input
			type="text"
			className={cn(classes.searchInput)}
			placeholder="Search"
			onChange={(e) => setState({ searchQuery: e.target.value.trim() })}
		/>
	);
};

export default SearchPanel;
