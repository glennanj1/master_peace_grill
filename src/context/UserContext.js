import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const updateUser = (value) => {
		setUser(value);
	};

	useEffect(() => {
		fetch('http://localhost:3000/me', {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => updateUser(user));
			} else {
				res.json().then((data) => console.log(data.errors));
			}
		});
	}, []);

    useEffect(() => {
        fetch('https://master-peace-grill-backend.herokuapp.com/me', {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(user => updateUser(user))
                }
                else {
                    res.json().then(data => console.log(data.errors))
                }
            })
    }, [])

    return (
        <UserContext.Provider
            value={{ user, updateUser }}
        >
            {children}
        </UserContext.Provider>
    )
}
