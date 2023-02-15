import React from 'react'
import '../../css/login.css'
import Header2 from '../Layout/Header2.js'


function PostLogin({user}) {

    return (
        <div className="post-login-page" style={{backgroundImage: "url(https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)", backgroundSize: "cover"}} >
            <Header2 />
            <div className="post-login-header">
                <h3>Welcome, {user.email}</h3>
            </div>
            <div className="buttons-parent jc-center">
                <button class=" margin-right">Edit Menu</button>
                <button>Edit Modal</button>
            </div>
        </div>
    )
}

export default PostLogin;