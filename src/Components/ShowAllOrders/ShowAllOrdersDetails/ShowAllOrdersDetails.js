import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import ModalForEdit from '../../ModalForEdit/ModalForEdit';

const ShowAllOrdersDetails = ({ orders, deleteItem, onSubmit, editItem, modalIsOpen, closeModal, editItems, handleClick, handleChange}) => {

    return (
        <tr id="toHidden">
            <td>{orders.name}</td>
            <td>{orders.email}</td>
            <td>Price: {orders.price}</td>
            <td><button onClick={() => editItem(orders._id)} className="btn btn-warning">Edit</button></td>
            <td><ModalForEdit editItem={editItems} onSubmit={onSubmit} orders={orders} modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalForEdit></td>
            <td><button onClick={(event) => deleteItem(event, orders._id)} className="btn btn-danger">Delete</button></td>
            <td><img style={{ width: "50px", height: "50px" }} src={orders.imageURL} alt="" /></td>
            <td>Current Status: {orders.status}</td>
            <td>
                <select onChange={handleChange} id="orders">
                    <option disabled selected >Select</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="done">Done</option>
                </select>
            </td>
            <td><button onClick={(e) => { handleClick(orders._id) }} className="btn btn-info">Change Status</button></td>
        </tr>
    );

    
};

export default ShowAllOrdersDetails;