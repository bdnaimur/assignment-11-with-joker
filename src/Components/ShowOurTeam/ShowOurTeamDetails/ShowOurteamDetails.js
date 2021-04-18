import React from 'react';

const ShowOurteamDetails = ({team}) => {
    return (
        <div className="col-md-3">
            <div class="card">
                <img style={{maxHeight:"180px"}} class="card-img-top" src={team.imageURL} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{team.name}</h5>
                    <div className="d-flex">
                        {/* <h5 class="card-text">{team.name}</h5> */}
                        <h6 class="card-text">{team.price}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowOurteamDetails;