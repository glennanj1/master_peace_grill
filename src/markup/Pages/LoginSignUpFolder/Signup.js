import React, { useState } from 'react';
import { Link } from "react-router-dom";
import mpgLogo from '../../../images/mpgLogo.png'
import PostLogin from './PostLogin'
import { useNavigate } from 'react-router-dom';


const Signup = ({ user}) => {
    // All of the state logic that handles the sign up fields and information
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setErrors(["Passwords do not match"]);
      setIsLoading(false);
      return;
    }

    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password}),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((userData) => {
          user(userData);
        });
        history('/change/home')
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const formErrorMsg = errors.map((err) => (
    <li key={err}>{err}</li>
  ))

  return (
    <div className='signup-page' style={{ backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/background.jpg)", backgroundSize: "cover" }}>
      <img src={mpgLogo} alt="logo" />
      <form className='signup-form' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          id="confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        <p> Have an account? </p>
        <Link to='/login'>
          <button >Login!</button>
        </Link>
      </form>

    <ul>{formErrorMsg}</ul>

    </div>
  )
}

export default Signup