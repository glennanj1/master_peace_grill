import React from 'react'
import '../../css/login.css'
import Header2 from '../Layout/Header2.js'


function PostLogin({user}) {

    return (
        <div className="post-login-page" style={{backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/background.jpg)", backgroundSize: "cover"}} >
            <Header2 />
            <div className="post-login-header">
                <h3>Welcome, {user.email}</h3>
            </div>
            <div className="buttons-parent">
                <button className=" margin-right">Edit Menu</button>
                <button>Edit Modal</button>
            </div>
        </div>
    )
}

export default PostLogin;