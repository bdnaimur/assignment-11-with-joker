import { Link } from 'react-router-dom';
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

const Signup = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        email: '',
        password: '',
        error: '',
        name: ''        
    });
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    // const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const googleSignin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                user.isSigned = true;
                setUser(user);
                setLoggedInUser(user);
                if (loggedInUser) {
                    history.replace(from);
                }
            }).catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    // const facebookSignIn = () => {
    //     firebase.auth().signInWithPopup(facebookProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             user.isSigned = true;
    //             setUser(user);
    //             setLoggedInUser(user);
    //             if (loggedInUser) {
    //                 history.replace(from);
    //             }
    //         })
    //         .catch((error) => {
    //             // const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorMessage);
    //         });
    // }
    const hanldeCreateSubmit = (e) => {
        const {displayName, email, password } = user;
        console.log(user);
        console.log(displayName);       
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const newUser = userCredential.user;
                    const allInfo = {...user}
                    allInfo.isSigned = true;
                    setUser(allInfo);
                    setLoggedInUser(allInfo);                       
                    updateUserName(user.displayName);
                    console.log(loggedInUser);
                    if (loggedInUser) {
                        history.replace(from);
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    const user = {};
                    user.error = errorMessage;
                    setUser(user);
                    setLoggedInUser(user);
                    console.log(user);
                });
            e.preventDefault();
            e.target.reset()
        }else{
            const typeError = {...user}
            typeError.error = "Password must be at least one number and 7 charecters or more";
            setUser(typeError);
            setLoggedInUser(typeError);
        }
        e.preventDefault();
    }

    const updateUserName = name =>{
        const user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });
      }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const userSignInfo = { ...user };
            userSignInfo[e.target.name] = e.target.value;
            setUser(userSignInfo);
            setLoggedInUser(userSignInfo);
        }
    }
    console.log(loggedInUser);

    return (
        <div className="form-styling">
            {user.error && <h6 style={{color:'red', textAlign:"center"}}>{user.error}</h6>}
            <form onSubmit={hanldeCreateSubmit} className="form-style" >
                <h3>Create an account</h3>
                <input onBlur={handleBlur} type="text" name="displayName" id="" placeholder="Name" required />
                <input onBlur={handleBlur} type="email" name="email" id="inputEmail4" placeholder="Email" required />
                <input onBlur={handleBlur} type="password" name="password" id="" placeholder="Password" required />
                <input onBlur={handleBlur} type="password" name="repassword" id="" placeholder="Confirm Password" required />
                <input className="login-btn" type="submit" value="Login" />
                <p><small>Already have an account? <Link to="/signin"><span><strong>Login</strong></span></Link></small></p>
            </form>
            <div className="social-signin">
                <br />
                <p>or</p>
                <button onClick={googleSignin} className='btn btn-light w-100'><FontAwesomeIcon className="icon1" icon={["fab", "facebook"]} /> Continue with Facebook</button>
                {/* <br />
                <br />
                <button onClick={facebookSignIn} className='btn btn-light w-100'><FontAwesomeIcon className="icon2" icon={["fab", "google"]} />Continue with Google</button> */}
            </div>
        </div>
    );
};

export default Signup;