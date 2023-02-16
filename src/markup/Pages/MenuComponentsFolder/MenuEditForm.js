import React, { useEffect, useState } from 'react';
// import menuDb from '../../../menuDB.json';
import MenuCategoryEditForm from './MenuCategoryEditForm';
import './menuEdit.css';

const MenuEditForm = () => {
	const [menuInfo, setMenuInfo] = useState([]);
	const [errors, setErrors] = useState([]);

	//fetch menu info from db to pre-populate form for editing
	useEffect(() => {
		fetchCurrentMenu();
	}, []);

	//function to get all menu data
	async function fetchCurrentMenu() {
		try {
			// let res = await fetch('/https://master-peace-grill-backend.herokuapp.com/foods');
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
			setErrors(error);
		}
	}

	// filter menu categories to pass into each component
	// APPETIZERS
	const appMenu = menuInfo.filter((item) => {
		if (item.category === 'Appetizers') {
			return item;
		}
	});

	console.log('app menu:', appMenu);

	//WINGS
	const wingMenu = menuInfo.filter((item) => {
		if (item.category === 'Wings') {
			return item;
		}
	});
	//SALADS
	const saladMenu = menuInfo.filter((item) => {
		if (item.category === 'Salads') {
			return item;
		}
	});

	return (
		<div className="menu-edit-form-page">
			<h1>menu edit </h1>
			<MenuCategoryEditForm menu={appMenu} />
			<MenuCategoryEditForm menu={wingMenu} />
			<MenuCategoryEditForm menu={saladMenu} />
		</div>
	);
};

export default MenuEditForm;
