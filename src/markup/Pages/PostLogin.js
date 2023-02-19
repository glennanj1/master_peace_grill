import React, {useContext, useState} from 'react'
import '../../css/login.css'
import Header2 from '../Layout/Header2.js'
import { useHistory } from "react-router-dom";
import { UserContext } from './../../context/UserContext';
import MenuEditForm from './MenuComponentsFolder/MenuEditForm';
function PostLogin() {
    let history = useHistory();
    const { user } = useContext(UserContext);  
    !user ? history.push('/login') : console.log("welcome");
    
    const [editMenu, setEditMenu] = useState(false);

    const handleEditMenu = () => {
        setEditMenu(true);
        console.log(editMenu);
    }

    if (editMenu) return <MenuEditForm /> 
    
    return (
        <div className="post-login-page" style={{backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/background.jpg)", backgroundSize: "cover"}} >
            <Header2 />
            <div className="post-login-header">
                <h3>Welcome, {user.email}</h3>
            </div>
            <div className="buttons-parent">
                <button className="margin-right" onClick={handleEditMenu}>Edit Menu</button>
                <button disabled='true'>Edit Modal</button>
            </div>
        </div>
    )
}

export default PostLogin;