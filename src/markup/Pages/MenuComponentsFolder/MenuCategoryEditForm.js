import React from 'react';
import MenuItemEdit from './MenuItemEdit';
import MenuCategoryEdit from './MenuCategoryEdit';

const MenuCategoryEditForm = ({ menu, category }) => {
	
	const itemEditForm = menu
	.map((item) => {
		return <MenuItemEdit item={item} key={item.id} category={category} />;
	})

	return (
		<div className="menu-edit-category">
			<h2>{category?.name}</h2>
			<div><MenuCategoryEdit category={category}/></div>
			<div>{itemEditForm}</div>
		</div>
	);
};

export default MenuCategoryEditForm;
