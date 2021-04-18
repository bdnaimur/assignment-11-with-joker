import React from 'react';
import { Link } from 'react-router-dom';

const BookingDetails = ({ service }) => {
    console.log(service._id);
    return (
        <div className="col-md-4">
            <div class="card">
                <img class="card-img-top" src={service.imageURL} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Refrash with {service.name}</h5>
                    <div className="d-flex">
                    <Link to={`/CheckOut/${service._id}`}><button  className="btn btn-warning me-5 mr-5">Book Now</button></Link>
                    <div className="price ms-5 ml-5 pe-3"><strong>$ </strong>{service.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;