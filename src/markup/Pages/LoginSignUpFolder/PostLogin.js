import React, { useContext, useEffect } from 'react'
import '../../../css/login.css'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../context/UserContext';
import LogoutButton from '../../Element/LogoutButton';

function PostLogin() {
    let history = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        !user ? history('/login') : console.log("welcome");
    }, [user])
    // removed history from reload ^^
    
    return (
        <div className="post-login-page" style={{ backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/background.jpg)", backgroundSize: "cover" }} >
            <div className="post-login-header">
                <p>Welcome, {user?.email}</p>
            </div>
            <div className="buttons-parent">
                <button className="margin-right" onClick={() => history('/change/menu/')}>Edit Menu</button>
                <button className="margin-right" disabled="true">Edit Modal</button>
                <button className="margin-right" onClick={() => history('/menu')}>See Menu</button>
                <LogoutButton />
            </div>
        </div>
    )
}

export default PostLogin;