import React, { useEffect, useState } from 'react';

const ShowAllOrdersDetails = ({ orders,handleBlur,handleClick }) => {
    
return (
    <tr id="toHidden">
        <td>{orders.name}</td>
        <td>{orders.email}</td>
        <td>Price: {orders.price}</td>
        <td><img style={{ width: "50px", height: "50px" }} src={orders.imageURL} alt="" /></td>
        <td>Current Status: {orders.status}</td>
        <td>
            <select onChange={handleBlur} id="orders">
                <option disabled value="pending">Pending</option>
                <option value="ongoing">Ongoing</option>                
                <option value="done">Done</option>
            </select>
        </td>
        <td><button onClick={(e) => { handleClick(orders._id) }} className="btn btn-info">Change Status</button></td>
    </tr>
);
};

export default ShowAllOrdersDetails;