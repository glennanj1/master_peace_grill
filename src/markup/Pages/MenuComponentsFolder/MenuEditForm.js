import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import MenuCategoryEditForm from './MenuCategoryEditForm';
import LogoutButton from '../../Element/LogoutButton';
import './menuEdit.css';

const MenuEditForm = ({ setEditMenu }) => {
	let history = useNavigate();
	const { user } = useContext(UserContext);
	

	const [menuInfo, setMenuInfo] = useState([]);
	// const [errors, setErrors] = useState([]);

	//fetch menu info from db to pre-populate form for editing
	useEffect(() => {
		fetchCurrentMenu();
		!user ? history('/login') : console.log('welcome');
	}, [user, history]);

	//function to get all menu data from food_model
	async function fetchCurrentMenu() {
		try {
			let res = await fetch(process.env.REACT_APP_PROD_URL + '/foods');
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

	if (menuInfo.length === 0) {
		return <h1>Loading...</h1>;
	}
	console.log('full-menu', menuInfo);

	// categories
	const categories = [];
	const foods = [];

	//menuInfo.map((item) => console.log(item.category.name));
	for (const item in menuInfo){
		if (item === 'categories') {
			menuInfo[item].map(c => {
				return categories.push(c)
			}) 
		} else if (item === 'foods') {
			menuInfo[item].map(f => {
			return foods.push(f)
			}) 
		}
	}

	return (
		<div className="menu-edit-form-page">
			<button className="see-menu-btn" onClick={() => history('/change/home')}>
				Back
			</button>
			{categories.map(c => {
				return <MenuCategoryEditForm menu={foods.filter(f => f.category_id === c.id)} category={c} />
          	})}
			<LogoutButton css={'logout-btn'} />
		</div>
	);
};

export default MenuEditForm;
