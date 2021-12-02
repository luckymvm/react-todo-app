import React from 'react';
import { ReactComponent as LogoIcon } from './logo.svg';
import cn from 'classnames';
import classes from './Header.module.scss';

const Header = ({ active, completed }) => {
	return (
		<header className={cn(classes.header)}>
			<a href="/">
				<LogoIcon />
			</a>
			<span className={cn(classes.todoInfo)}>
				{active} more to do, {completed} done
			</span>
		</header>
	);
};

export default Header;
