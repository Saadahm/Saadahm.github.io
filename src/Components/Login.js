import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import "../assets/css/Login.css";

function Login() {
    // programmatically change the url
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // No refreshing
        e.preventDefault()

        // Firebase login stuff
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('./')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        // Firebase register stuff
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Succesfully created a new user with email and password
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-4d2d81aefcf296bc100d9edc114c2ea5.png" alt="Dunzo"/>
            </Link>

            <div className="login__container">
                <h1>Login</h1>
                <form>
                    <h5>E-mail</h5>
                    {/* e.target.value = whatever user type in email */}
                    <input type="text" placeholder="enter your email..." value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" placeholder="enter your password..." value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to Dunzo Conditions of Use & Sale.</p>

                <button onClick={register} className="login__registerButton">Create your Dunzo Account</button>
            </div>
        </div>
    )
}

export default Login
