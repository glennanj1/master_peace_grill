import React, {Component} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index2 from './Pages/Index2';

import About from './Pages/About';

import NotFound from './Pages/NotFound';

import Ourmenustyle3 from './Pages/Ourmenustyle3';




class Markup extends Component{
	
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Index2} />
			
					<Route path='/about' exact component ={About} />

					<Route path='/menu' exact component={Ourmenustyle3} />
					
					<Route component={NotFound} />

				</Switch>
			</ BrowserRouter>
		)
		
	}
}

export default Markup;