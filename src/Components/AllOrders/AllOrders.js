import React from 'react';
import { Link } from 'react-router-dom';

const AllOrders = ({pitha}) => {
    // const pitha = props.pitha;
    return (
        <tr>
            <td>{pitha.name}</td>
            <td>{pitha.price}</td>
            <td>{pitha.email}</td>
            <td>01</td>
            <td><img style={{ width: "50px", height: "50px", boxShadow: "5px 5px 15px lightGray", borderRadius: "50%" }} src={pitha.imageURL} alt="" /></td>
            <button className="w-70"><Link to="/userDashboard" className="btn btn-success">Payment</Link></button>
        </tr>
    );
};

export default AllOrders;