import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index2 from './Pages/Index2';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

import Menu from './Pages/Ourmenustyle3';

import Login from './Pages/Login';
import PostLogin from './Pages/PostLogin';
import { UserProvider } from '../context/UserContext';
import MenuEditForm from './Pages/MenuComponentsFolder/MenuEditForm';
import ModalEditForm from './Pages/ModalComponentsFolder/ModalEdit';

function Markup() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path='/' exact element={ <Index2 />} />
				<Route path='/about' exact element={ <About />} />
				<Route path='/menu' exact element={ <Menu />} />

				{/* Utilizing Layouts with React Router Dom 6 */}
				<Route element={<UserProvider />}>
					<Route path='/login' exact element={ <Login /> } />
					<Route path="/change/home" element={<PostLogin/>} />
					<Route path="/change/menu" element={<MenuEditForm/>} />
					<Route path="/change/modal" element={<ModalEditForm/>} />
				</Route>
				{/* Need to fix this */}
				<Route element={ <NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Markup;