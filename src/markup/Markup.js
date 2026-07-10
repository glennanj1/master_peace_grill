import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index2 from './Pages/Index2';

import About from './Pages/About';

import NotFound from './Pages/NotFound';

import Menu from './Pages/Ourmenustyle3';

import Login from './Pages/Login';

import CateringPopup from './Element/CateringPopup';

function Markup() {

	return (
		<BrowserRouter>
			<CateringPopup />
			<Routes>
				<Route path='/' element={<Index2 />} />

				<Route path='/about' element={<About />} />

				<Route path='/menu' element={<Menu />} />

				<Route path='/login' element={<Login />} />

				<Route path='*' element={<NotFound />} />

			</Routes>
		</BrowserRouter>
	)
}

export default Markup;