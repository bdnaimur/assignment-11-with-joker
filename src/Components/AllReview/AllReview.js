import React from 'react';

const AllReview = ({review}) => {
    return (
        <div className="col-md-6 mb-5 mt-3">
            <div class="card shadow">
                {/* <img class="card-img-top" src={service.imageURL} alt="Card image cap" /> */}
                <h2 className="text-warning text-center shadow">{review.displayName}</h2>
                <div class="card-body">
                    <h5 class="card-title">Valuable Review for {review.name}</h5>
                    <div className="d-flex">
                    {/* <Link to={`/CheckOut/${service._id}`}><button  className="btn btn-warning mr-5">Book Now</button></Link> */}
                    <div className="price ml-5 pe-3"><h6>{review.price}</h6></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllReview;