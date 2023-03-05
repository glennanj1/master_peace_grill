import React, {useState, useContext, useEffect} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { Checkbox } from '@mui/material';

export default function ModalEditForm() {
    const [modalInfo, setModalInfo] = useState({
        id: 0,
        body: '',
        active: false,
        picture: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState('');
    const history = useNavigate();
	const { user } = useContext(UserContext);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
   
    useEffect(() => {
        fetchModal();
        !user ? history('/login') : console.log('welcome');
    }, [user, history])

	// get values from user input/changes to form

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setModalInfo((modalInfo) => {
            if (name === 'active' && value === 'true') {
                return {
                    ...modalInfo,
                    [name]: false,
                }
            } else if (name === 'active' && value === 'false') {
                return {
                    ...modalInfo,
                    [name]: true,
                }
            }
			return {
				...modalInfo,
				[name]: value,
			};
		});
	};

    	//custom toast for successful update
	const successNotify = (item) => toast.success(`Sucess! ${item} updated.`);

	//custom toast for error w/ update
	const errorNotify = () =>
		toast.error(`Error ${errors}. This item was not updated.`);

    async function fetchModal() {
        try {
          let res = await fetch(
            process.env.URL + "/modals/"
          );
    
          if (!res.ok) {
            const message = `Error occurred: ${res.status}`;
            throw new Error(message);
          }
    
          //set menu info w/ response from DB
          const modalData = await res.json();
          // console.log('MENU INFO:', menuData);
          setModalInfo(modalData?.modals);
        } catch (error) {
          console.error("ERROR:", error);
        }
    }
		//handle submitting any changes to each item form
    const handleSubmit = (e) => {
        e.preventDefault();
        //send this form data in a PATCH request to update values in DB
        setLoading(true);
        fetch(process.env.URL + `/${modalInfo.id}`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modalInfo),
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    setLoading(false);
                    successNotify('Modal Updated Successfully');
                });
            } else {
                res.json().then((err) => {
                    setLoading(false);
                    console.log('ERROR from PATCH', err);
                    setErrors(err.errors);
                    errorNotify();
                    //history('/login');
                });
            }
        });
    }

	return (
		<div className="menu-edit-category">
            <button className="see-menu-btn" onClick={() => history('/change/home')}>
				Back
			</button>
			<div className="form-container">
			<Toaster />
			<form className="item-edit-form" onSubmit={handleSubmit}>
				<div className="single-item-input">
					<label className="form-label">Modal Body</label>
					<input
						type="text"
						id="name"
						name="body"
						value={modalInfo?.body}
						onChange={handleOnChange}
						required
					/>
				</div>
				<div 
                  className="single-item-input"
                >
					<label className="form-label">Modal Active
                    </label>
                          <Checkbox onChange={handleOnChange} name="active" checked={modalInfo?.active} value={modalInfo?.active} {...label} />

				</div>
				<button className="submit-btn btn red" type="submit">
					{loading ? 'Loading...' : 'Submit Changes'}
				</button>
			</form>
		    </div>
		</div>
	);
};