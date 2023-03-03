import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index2 from './Pages/Index2';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Menu from './Pages/Menu';
import Login from './Pages/LoginSignUpFolder/Login';
import Signup from './Pages/LoginSignUpFolder/Signup'
import PostLogin from './Pages/LoginSignUpFolder/PostLogin';
import { UserProvider } from '../context/UserContext';
import MenuEditForm from './Pages/MenuComponentsFolder/MenuEditForm';

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
					<Route path="/signup" element={<Signup />} />
					<Route path="/change/home" element={<PostLogin/>} />
					<Route path="/change/menu" element={<MenuEditForm/>} />
				</Route>
				{/* Need to fix this */}
				<Route element={ <NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Markup;