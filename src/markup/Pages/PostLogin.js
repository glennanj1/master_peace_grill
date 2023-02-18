import React from 'react'
import '../../css/login.css'
import Header2 from '../Layout/Header2.js'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function PostLogin({user}) {
    let history = useHistory();

    !user ? history.push('/login') : console.log("welcome");

    return (
        <div className="post-login-page" style={{backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/background.jpg)", backgroundSize: "cover"}} >
            <Header2 />
            <div className="post-login-header">
                <h3>Welcome, {user.email}</h3>
            </div>
            <div className="buttons-parent">
                <Link to={'/menu/edit'}>
                    <button className="margin-right">Edit Menu</button>
				</Link>
                <button disabled='true'>Edit Modal</button>
            </div>
        </div>
    )
}

export default PostLogin;