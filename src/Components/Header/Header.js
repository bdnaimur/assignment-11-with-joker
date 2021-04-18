import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState({
    })
    const handleClick = () => {
        const getData = {...loggedInUser};
        getData.isSigned = false;
        setLoggedInUser(getData);
    }

    const cpName = {
        fontWeight : "700",
        color: "darkGreen",
        marginTop: "20px",
        textShadow: "2px 2px 5px lightGray"
    }
    return (

        <section class="background-color">
            <nav class="navbar navbar-expand-lg navbar-light sticky-sm-top ml-end">
                <div class="container mt-4">
                    <a class="navbar-brand" href="#"><h1 style={cpName} className="cp-name">Vraman Bilash</h1>
                        <img class="logo border" src="logo/logo.jpg" alt="" />
                    </a>
                    <button class="navbar-toggler mt-4 border" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse margin ms-5" id="navbarNav">
                        <ul class="navbar-nav m-auto fw-bold">
                            <li class="nav-item">
                                {/* <a class="nav-link" aria-current="page" href="/home">Home</a> */}
                                <Link class="nav-link" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/orders">Orders</a> */}
                                <Link class="nav-link" to="/orders">Orders</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/orders">Orders</a> */}
                                <Link class="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="/deals">Deals</a> */}
                                <Link class="nav-link " to="/deals">Deals</Link>
                            </li>
                            {loggedInUser.isSigned && <li onClick={handleClick} className="nav-item btn btn-light">Sign Out</li>}
                            {loggedInUser.isSigned && <li className="nav-item btn btn-light"><Link to={`/userDashboard/${loggedInUser.email}`}>Dashboard</Link></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;