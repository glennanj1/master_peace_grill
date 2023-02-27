import React, {useState} from 'react';
import MenuItemEdit from './MenuItemEdit';
import MenuCategoryEdit from './MenuCategoryEdit';

const MenuCategoryEditForm = ({ menu, category }) => {
	const [readCategory, setCategory] = useState(category)
	
	const itemEditForm = menu
	.map((item) => {
		return <MenuItemEdit item={item} key={item.id} category={category} />;
	})

	const handleUpdatedName = (data) => {
		setCategory({...data})
	}

	return (
		<div className="menu-edit-category">
			<h2>{readCategory?.name}</h2>
			{/* {readCategory?.description ? <h3>Description: {readCategory?.description}</h3> : null}
			{readCategory?.add_ons ? <h3>Add Ons: {readCategory?.add_ons}</h3> : null} */}
			<div><MenuCategoryEdit category={category} categoryNameChange={handleUpdatedName} /></div>
			<div>{itemEditForm}</div>
		</div>
	);
};

export default MenuCategoryEditForm;
