import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function MenuCategoryEdit({category}) {
    const history = useNavigate();

    const initialState = {
		name: category.name,
		description: category.description ? category.description : '',
		add_ons: category.add_ons ? category.add_ons : '',
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
    const handleSubmit = (e) => {
        e.preventDefault();
        //send this form data in a PATCH request to update values in DB
        console.log('form-data', formData) 

		//development fetch req
		// fetch(` http://localhost:3000/foods/${item.id}`
		
        fetch(`https://master-peace-grill-backend.herokuapp.com/${category.id}`, {
            method: "PATCH",
			credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((res) => {
          if (res.ok) {
            res.json().then((data) => {
				console.log('data after patch',data)
				
            });
          } else {
            res.json().then((err) => {
				console.log('ERROR from PATCH', err)
				// setErrors(err.errors)
				history('/login');
			})
          }
        })
    }

  return (
    <div className='form-container'>
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
            Submit Changes
        </button>
    </form>
</div>
  )
}
