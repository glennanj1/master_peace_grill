import React, { useState, createContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    let history = useNavigate();
	
	const [user, setUser] = useState(null);

	const updateUser = (value) => {
		setUser(value);
	};

	useEffect(() => {
		fetch(process.env.REACT_APP_PROD_URL + '/me', {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => updateUser(user));
			} else {
				res.json().then((data) => {
					// toast to say please log in
					console.log(data.errors);
					history('/login');
				});
			}
		});
	}, [history]);

    return (
        <UserContext.Provider
            value={{ user, updateUser }}
        >
			<Outlet context={children} />
        </UserContext.Provider>
    )
}

