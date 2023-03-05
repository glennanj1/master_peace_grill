import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function MenuCategoryEdit({category, categoryNameChange}) {
	const history = useNavigate();
	const initialState = {
		name: category?.name,
		description: category?.description ? category.description : '',
		add_ons: category?.add_ons ? category.add_ons : '',
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
	const successNotify = (item) => toast.success(`Sucess! ${item} updated.`);

	//custom toast for error w/ update
	const errorNotify = () =>
		toast.error(`Error ${errors}. This item was not updated.`);

	const handleSubmit = (e) => {
		e.preventDefault();
		//send this form data in a PATCH request to update values in DB
		setLoading(true);

		fetch(
			process.env.REACT_APP_PROD_URL + `/${category.id}`,
			{
				method: 'PATCH',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			}
		).then((res) => {
			if (res.ok) {
				res.json().then((data) => {
                    categoryNameChange(data);
					setLoading(false);
					successNotify(data.name);
				});
			} else {
				res.json().then((err) => {
					setLoading(false);
					console.error('ERROR from PATCH', err);
					setErrors(err.errors);
					errorNotify();
					history('/login');
				});
			}
		});
	};

	return (
		<div className="form-container">
			<Toaster />
			<form className="item-edit-form" onSubmit={handleSubmit}>
				<div className="single-item-input">
					<label className="form-label">Category Name</label>
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
					<label className="form-label">Description</label>
					<input
						type="text"
						id="description"
						name="description"
						value={formData.description}
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
}
