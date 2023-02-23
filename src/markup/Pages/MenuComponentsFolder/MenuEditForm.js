import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import MenuCategoryEditForm from './MenuCategoryEditForm';
import LogoutButton from '../../Element/LogoutButton';
import './menuEdit.css';

const MenuEditForm = () => {
	let history = useHistory();
	const { user } = useContext(UserContext);
	!user ? history.push('/login') : console.log('welcome');

	const [menuInfo, setMenuInfo] = useState([]);
	// const [errors, setErrors] = useState([]);

	//fetch menu info from db to pre-populate form for editing
	useEffect(() => {
		fetchCurrentMenu();
	}, []);

	//function to get all menu data from food_model
	async function fetchCurrentMenu() {
		try {
			let res = await fetch('https://master-peace-grill-backend.herokuapp.com/foods');
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
	if (menuInfo.length === 0) {
		return <h1>Loading...</h1>;
	}

	console.log('full-menu', menuInfo);

	const appMenu = menuInfo.filter((item) =>
		item.category.name.includes('Appetizers') ? item : false
	);
	//WINGS
	const wingMenu = menuInfo.filter((item) =>
		item.category.name.includes('Wings') ? item : false
	);
	//SALADS
	const saladMenu = menuInfo.filter((item) =>
		item.category.name.includes('Salads') ? item : false
	);
	//WRAPS
	const wrapMenu = menuInfo.filter((item) =>
		item.category.name.includes('Wraps') ? item : false
	);
	// //TripleDeckerClubs
	const clubMenu = menuInfo.filter((item) =>
		item.category.name.includes('Triple') ? item : false
	);
	//CheeseSteaks
	const cheeseSteakMenu = menuInfo.filter((item) =>
		item.category.name.includes('CheeseSteak') ? item : false
	);
	// //Burgers
	const burgerMenu = menuInfo.filter((item) =>
		item.category.name.includes('Burgers') ? item : false
	);

	// // //Hoagies and Grinders
	const hoagieAndGrinderMenu = menuInfo.filter((item) =>
		item.category.name.includes('Hoagies') ? item : false
	);

	// // //Sandwichees
	const sandwichesMenu = menuInfo.filter((item) =>
		item.category.name.includes('Sandwiches') ? item : false
	);

	// // //Grilled Cheese
	const grilledCheeseMenu = menuInfo.filter((item) =>
		item.category.name.includes('Grilled') ? item : false
	);

	const cateringMenu = menuInfo.filter((item) =>
		item.category.name.includes('Catering') ? item : false
	);

	//menuInfo.map((item) => console.log(item.category.name));


	return (
		<div className="menu-edit-form-page">
			<button className="return-home-btn " onClick={() => history.push('/')}>
				Home
			</button>
			<LogoutButton css={'logout-btn'} />
			<MenuCategoryEditForm menu={appMenu} />
			<MenuCategoryEditForm menu={wingMenu} />
			<MenuCategoryEditForm menu={saladMenu} />
			<MenuCategoryEditForm menu={wrapMenu} />
			<MenuCategoryEditForm menu={clubMenu} />
			<MenuCategoryEditForm menu={cheeseSteakMenu} />
			<MenuCategoryEditForm menu={burgerMenu} />
			<MenuCategoryEditForm menu={hoagieAndGrinderMenu} />
			<MenuCategoryEditForm menu={sandwichesMenu} />
			<MenuCategoryEditForm menu={grilledCheeseMenu} />
			<MenuCategoryEditForm menu={cateringMenu} />
		</div>
	);
};

export default MenuEditForm;
