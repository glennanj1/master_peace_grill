import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index2 from './Pages/Index2';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import { userProvider } from '../context/UserContext';

function Markup() {

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Index2} />

				<Route path='/about' exact component={About} />

				<Route path='/menu' exact component={Menu} />
				
				<Route path='/login' exact component={userProvider(Login)} />
			
				<Route component={NotFound} />

			</Switch>
		</ BrowserRouter>
	)
}

export default Markup;