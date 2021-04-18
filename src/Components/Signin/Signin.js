// import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Signin.css';


import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../Login1/firebase.config'
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Signin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        superAdmin: 'bdnaimur@gmail.com',
        email: '',
        password: '',
        name: ''
    });
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    // const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const googleSignin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const users = result.user;
               if( user.superAdmin == users.email){
                   user.superAdmin = true;
               }

                users.isSigned = true;
                setUser(users);
                setLoggedInUser(users);
                if (loggedInUser) {
                    history.replace(from);
                }
            }).catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const hanldeSignInSubmit = (e) => {
        const { email, password } = user;
        firebase.auth().signInWithEmailAndPassword(email, password)            
            .then(res => {
                const user = res.user;
                user.isSigned = true;
                setUser(user);
                console.log(user)
                setLoggedInUser(user);  
                if (loggedInUser) {
                    history.replace(from);
                }
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        e.preventDefault();
        e.target.reset()
    }
    const handleBlur = (e) => {
        if (e.target.name === 'email') {
            const userSignInfo = { ...user };
            userSignInfo[e.target.name] = e.target.value;
            setUser(userSignInfo);
            setLoggedInUser(userSignInfo);
        }
        if (e.target.name === 'password') {
            const userSignInfo = { ...user };
            userSignInfo[e.target.name] = e.target.value;
            setUser(userSignInfo);
            setLoggedInUser(userSignInfo);
        }
        
    }
    console.log(loggedInUser,user);
    return (
        <div className="form-styling">
            <form onSubmit={hanldeSignInSubmit} className="form-style" >
                <h3>Login</h3>
                <input type="email" name="email" id="" onBlur={handleBlur} placeholder="Email" required />
                <input type="password" name="password" id="" onBlur={handleBlur} placeholder="Password" required />
                <div className="checkbox">
                    <div className="chcekbox-label">
                        <input type="checkbox" name="checkbox" id="checkboxId"  required/>
                        <label htmlFor="checkboxId">Remember me</label>
                    </div>
                    <Link to='/home'><div className="forget">Forgot Password</div></Link>
                </div>
                <input className="login-btn" type="submit" value="Login" />
                <p><small>Don't have an account? <Link to="/signup"><span><strong>Create a new account</strong></span></Link></small></p>
            </form>
            <div className="social-signin">
                <br/>
                <p>or</p>
                {/* <button onClick={facebookSignIn} className='btn btn-light w-100'><FontAwesomeIcon className="icon1" icon={["fab", "facebook"]} /> Continue with Facebook</button>
                <br/> */}
                {/* <br/> */}
                <button onClick={googleSignin} className='btn btn-light w-100'><FontAwesomeIcon className="icon2" icon={["fab", "google"]} />Continue with Google</button>
            </div>
        </div>
    );
};

export default Signin;