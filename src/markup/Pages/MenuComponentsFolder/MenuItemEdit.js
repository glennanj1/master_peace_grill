import React, { useState } from 'react';

const MenuItemEdit = ({ item }) => {
	const initialState = {
		name: item.name,
		price: item.price,
		category: item.category,
		details: item.details ? item.details : '',
		add_ons: item.add_ons ? item.add_ons : '',
        id: item.id
	};
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState([]);

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

    //handle submitting any changes to each item form
    const handleSubmit = (e) => {
        e.preventDefault();
        //send this form data in a PATCH request to update values in DB
        console.log(formData)

        // fetch(`/`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then((res) => {
        //   if (res.ok) {
        //     res.json().then((data) => {
        //         console.log(data)
        //     });
        //   } else {
        //     res.json().then((err) => setErrors(err.errors))
        //   }
        // })
        
    }
	return (
		<div className='form-container'>
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
					<input
						type="text"
						id="category"
						name="category"
						value={formData.category}
						onChange={handleOnChange}
						required
					/>
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
					Submit Changes
				</button>
			</form>
		</div>
	);
};

export default MenuItemEdit;
