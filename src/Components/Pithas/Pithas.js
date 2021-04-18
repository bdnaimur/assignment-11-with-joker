import React from 'react';
import { Link } from 'react-router-dom';
import './Pithas.css'

const Pithas = (props) => {
    const pitha = props.pitha;
    console.log(pitha,pitha._id);
    return (
        <div className="col-md-4 pitha-style">
            <div className="pitha-inner-style">
            <img src={pitha.imageURL} alt=""/>
            <h4>{pitha.name}</h4>
            <div className="row p-3">            
            <div className="col-md-6"><h6 className="price"><strong>BDT {pitha.price}</strong></h6></div>
            <div className="col-md-6"><button className="btn btn-success"><Link style={{color:"white"}}  to ={`/CheckOut/${pitha._id}`}>Buy Now</Link></button></div>
            </div>
            </div>
        </div>
    );
};

export default Pithas;