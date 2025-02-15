import React, { useState, useContext } from 'react';
import { UserContext } from './../../context/UserContext';
import '../../css/login.css'
import Header2 from '../Layout/Header2.js'


// import { useHistory } from 'react-router-dom';

function Login() {

    const { updateUser, user } = useContext(UserContext)

    const [userData, setUserData] = useState({ email: "", password: "" })
    const [error, setError] = useState(null)

    // let history = useHistory();

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        setUserData({
            ...userData, [key]: value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-cache",
            redirect: "follow",
            referrerPolicy: "no-referrer",
            credentials: "include",
            body: JSON.stringify(userData)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                    })
                    // history.push('/menu')
                }
                else {
                    res.json().then(data => setError(data.errors))
                }
            })

        setUserData({
            email: "",
            password: ""
        })
    }

    // const loginUser = (user) => {
    //     updateUser(user)
    // }

    if (user) {
        console.log(user)
    }

    return (
        <div className="login-page" style={{backgroundImage: "url(" + require('https://strapi.glennan.cloud/uploads/home2_f64d42ef8e.png') + ")", backgroundSize: "cover"}}>
            <Header2 />
            {user ?

                <h3>Welcome, {user.email}</h3> :
                                
                <form className='login-form' onSubmit={handleLogin} >
                <h3>Login</h3>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={handleFormChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleFormChange}
                    />
                    <button type="submit">Submit</button>
                    {error && <p>{error}</p>}
                </form>
            }

        </div>
    )
}

export default Login;