import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MenuItemEdit = ({ item, category }) => {
	const history = useNavigate();
	const initialState = {
		name: item.name,
		price: item.price,
		category: category,
		details: item.details ? item.details : '',
		add_ons: item.add_ons ? item.add_ons : '',
	};
	const [formData, setFormData] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState('');

	// get values from user input/changes to form
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => {
			return {
				...formData,
				[name]: value,
			};
		});
	};

	//custom toast for successful update
	const successNotify = () => toast.success('Sucess! Menu item updated.');

	//custom toast for error w/ update
	const errorNotify = () =>
		toast.error(`Error ${errors}. This item was not updated.`);

	//handle submitting any changes to each item form
	const handleSubmit = (e) => {
		e.preventDefault();
		//send this form data in a PATCH request to update values in DB
		setLoading(true);

		//development fetch req
		// fetch(`https://master-peace-grill-backend.herokuapp.com/foods/${item.id}`
		// fetch(` http://localhost:3000/foods/${item.id}`

		fetch(`https://master-peace-grill-backend.herokuapp.com/foods/${item.id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		}).then((res) => {
			if (res.ok) {
				res.json().then((data) => {
					setLoading(false);
					setFormData(data);
					successNotify();
				});
			} else {
				res.json().then((err) => {
					setLoading(false);
					console.log('ERROR from PATCH', err);
					setErrors(err.errors);
					errorNotify();
					history('/login');
				});
			}
		});
	};

	return (
		<div className="form-container">
			<Toaster/>
			<form className="item-edit-form" onSubmit={handleSubmit}>
				<div className="single-item-input">
					<label className="form-label">Menu Item</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleOnChange}
						required
					/>
				</div>

				<div className="single-item-input">
					<label className="form-label">Price</label>
					<input
						type="price"
						id="price"
						name="price"
						value={formData.price}
						onChange={handleOnChange}
						required
					/>
				</div>
				<div className="single-item-input">
					<label className="form-label">Category</label>
					<select
						id="category"
						name="category_id"
						value={formData.category_id}
						onChange={handleOnChange}
						required>
						<option label={category?.name} value={category?.id}>
							{category?.name}
						</option>
					</select>
				</div>

				<div className="single-item-input">
					<label className="form-label">Details</label>
					<textarea
						type="text"
						id="details"
						name="details"
						rows="6"
						value={formData.details}
						onChange={handleOnChange}
					/>
				</div>
				<div className="single-item-input">
					<label className="form-label">Add-Ons</label>
					<textarea
						type="text"
						id="add_ons"
						name="add_ons"
						rows="6"
						value={formData.add_ons}
						onChange={handleOnChange}
					/>
				</div>
				<button className="submit-btn btn red" type="submit">
					{loading ? 'Loading...' : 'Submit Changes'}
				</button>
			</form>
		</div>
	);
};

export default MenuItemEdit;
