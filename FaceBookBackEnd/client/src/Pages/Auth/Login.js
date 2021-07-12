import React from 'react'
import "./../../Style/Login.css";
import { auth, provider } from "../../firebase";
function Login() {
    const signIn =() => {
        // sign in ...
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result.user);}).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt=""/>
                 <img
                src="https://logos-marques.com/wp-content/uploads/2020/04/Facebook-logo.png"
                alt=""/>

            </div>
            <button type="submit" onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
