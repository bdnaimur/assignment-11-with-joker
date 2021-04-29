import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBody.css'
const HomeBody = () => {

    return (
        <div className="home-header">
        <div className="homeBody-container">
            <h1 className='body-text-left'>Enjoy Vacation With <span className='body-text-right'>Vraman Bilash</span></h1>
            <p>Travel to the any corner of the world, without going around in circles.</p>
            <br/>
            <button className='btn btn-warning'><Link to="/bookings">Book A Tour</Link></button>

        </div>
        </div>
    );
};

export default HomeBody;