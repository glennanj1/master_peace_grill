import React, { useState } from 'react';

const MenuItemEdit = ({ item }) => {
	const initialState = {
		name: item.name,
		price: item.price,
		category: item.category,
		details: item.details ? item.details : '',
		add_ons: item.add_ons ? item.add_ons : '',
	};
	const [formData, setFormData] = useState(initialState);

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

    //NEED to make handle submit function to submit changes

	return (
		<div>
			<form className="item-edit-form" onSubmit="">
				<div className="mb-3">
					<label>Menu Item</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange=""
						required
					/>
				</div>

				<div className="mb-3">
					<label>Price</label>
					<input
						type="price"
						id="price"
						name="price"
						value={formData.price}
						onChange=""
						required
					/>
				</div>

				<div className="mb-3">
					<label>Category</label>
					<input
						type="text"
						id="category"
						name="category"
						value={formData.category}
						onChange=""
						required
					/>
				</div>

				<div className="mb-3">
					<label>Details</label>
					<textarea
						type="text"
						id="details"
						name="details"
						rows="6"
						value={formData.details}
						onChange=""
						required
					/>
				</div>
				<div className="mb-3">
					<label>Add-Ons</label>
					<textarea
						type="text"
						id="add_ons"
						name="add_ons"
						rows="6"
						value={formData.add_ons}
						onChange=""
						required
					/>
				</div>

				<button className="submit-btn" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default MenuItemEdit;
