import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'

const Routes = () => {
	if (localStorage.getItem('token')) {
		return (
			<>
				<Redirect to='/' />
				<Route exact path='/' component={Dashboard} />
			</>
		);
	} else {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
			</Switch>
		);
	}
};

export default Routes;
