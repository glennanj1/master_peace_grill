import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
    let history = useHistory();
	const updateUser = (value) => {
		setUser(value);
	};

	useEffect(() => {
		fetch('https://master-peace-grill-backend.herokuapp.com/me', {
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
					console.log(data.errors);
					history.push('/login');
				});
			}
		});
	}, [history]);

    return (
        <UserContext.Provider
            value={{ user, updateUser }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const userProvider = (Component) => {
    return (props) => (
      <UserProvider>
        <Component {...props} />
      </UserProvider>
    )
}
