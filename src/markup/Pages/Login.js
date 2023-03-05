import React, { useState, useContext, useEffect } from 'react';
import '../../css/login.css'
import mpgLogo from '../../images/mpgLogo.png'
import { useNavigate } from "react-router-dom";
import { UserContext } from './../../context/UserContext';

function Login() {
    const history = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        !user ? console.log('not logged in') : history('/change/home');
    }, [user, history])
    

    const [userData, setUserData] = useState({ email: "", password: "" })
    const [error, setError] = useState(null)


    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setUserData({
            ...userData, [key]: value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        fetch(process.env.PROD_URL + '/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(userData)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                    console.log(user);
                    setError(null);
                    history('/change/home');
                })
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

    return (
        <div className="login-page" style={{ backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/background.jpg)", backgroundSize: "cover" }}>
            <img src={mpgLogo} alt="logo" />
            <form className='login-form' onSubmit={handleLogin} >
                <h3>Login</h3>
                <p className="error">{error}</p>
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
            </form>
        </div>
    )
}

export default Login;
