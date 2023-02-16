import React from 'react';
import MenuItemEdit from './MenuItemEdit';

const MenuCategoryEditForm = ({ menu }) => {

	const itemEditForm = menu
		.map((item) => {
			return <MenuItemEdit item={item} key={item.id} />;
		})
		.sort((a, b) => {
			return a.id > b.id;
		});

	return (
		<div className="menu-edit-category">
			<h2>{menu[0]?.category}</h2>
			<div>{itemEditForm}</div>
		</div>
	);
};

export default MenuCategoryEditForm;
