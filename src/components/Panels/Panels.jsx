import React from 'react';
import cn from 'classnames';
import classes from './Panels.module.scss';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import SearchPanel from '../SearchPanel/SearchPanel';

const Panels = ({ setState }) => {
	return (
		<div className={cn(classes.panels)}>
			<SearchPanel setState={setState} />
			<ItemStatusFilter setState={setState} />
		</div>
	);
};

export default Panels;
