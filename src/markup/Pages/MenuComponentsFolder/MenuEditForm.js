import React from 'react';
import menuDb from '../../../menuDB.json';
import MenuCategoryEditForm from './MenuCategoryEditForm';
import './menuEdit.css';



const MenuEditForm = () => {

    //filter menu categories to pass into each component
	//APPETIZERS
	const appMenu = menuDb.filter((item) => {
		if (item.category === 'Appetizers') {
			return item;
		}
	});
	//WINGS
	const wingMenu = menuDb.filter((item) => {
		if (item.category === 'Wings') {
			return item;
		}
	});
	//SALADS
	const saladMenu = menuDb.filter((item) => {
		if (item.category === 'Salads') {
			return item;
		}
	});
  return (
    <div className='menu-edit-form-page'>
    <MenuCategoryEditForm menu={appMenu}/>
    <MenuCategoryEditForm menu={wingMenu}/>
    <MenuCategoryEditForm menu={saladMenu}/>
    </div>
  )
}

export default MenuEditForm