import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import MenuCategoryEditForm from './MenuCategoryEditForm';
import './menuEdit.css';

const MenuEditForm = () => {
	const [menuInfo, setMenuInfo] = useState([]);
	// const [errors, setErrors] = useState([]);

	//get logged in user to make updates
	const loggedInUser = useContext(UserContext);
	const loggedInUserId = loggedInUser.user?.id;

	console.log(loggedInUserId);

	let history = useHistory();

	//fetch menu info from db to pre-populate form for editing
	useEffect(() => {
		fetchCurrentMenu();
	}, []);

	//function to get all menu datan from food_model
	async function fetchCurrentMenu() {
		try {
			// let res = await fetch('https://master-peace-grill-backend.herokuapp.com/foods');
			//for development run w/ ruby backend
			let res = await fetch('http://localhost:3000/foods');

			if (!res.ok) {
				const message = `Error occurred: ${res.status}`;
				throw new Error(message);
			}

			//set menu info w/ response from DB
			const menuData = await res.json();
			// console.log('MENU INFO:', menuData);
			setMenuInfo(menuData);
		} catch (error) {
			console.error('ERROR:', error);
		}
	}

	// filter menu categories to pass into each component
	// APPETIZERS
	const appMenu = menuInfo.filter((item) =>
		item.category === 'Appetizers' ? item : false
	);

	console.log('app menu:', appMenu);

	//WINGS
	const wingMenu = menuInfo.filter((item) =>
		item.category === 'Wings' ? item : false
	);

	//SALADS
	const saladMenu = menuInfo.filter((item) =>
		item.category === 'Salads' ? item : false
	);

	return (
		<div className="menu-edit-form-page">
			<button className="return-home-btn " onClick={() => history.push('/')}>
				Home
			</button>
			<MenuCategoryEditForm menu={appMenu} userId={loggedInUserId} />
			<MenuCategoryEditForm menu={wingMenu} userId={loggedInUserId} />
			<MenuCategoryEditForm menu={saladMenu} userId={loggedInUserId} />
		</div>
	);
};

export default MenuEditForm;
