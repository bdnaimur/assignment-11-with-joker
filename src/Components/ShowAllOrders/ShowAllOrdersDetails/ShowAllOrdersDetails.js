import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import ModalForEdit from '../../ModalForEdit/ModalForEdit';

const ShowAllOrdersDetails = ({ orders, deleteItem, onSubmit, editItem, modalIsOpen, closeModal, editItems }) => {

    const [allOrders, setAllOrders] = useState([] || 1);

    useEffect(() => {
        const url = `http://localhost:5055/vramankaris`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllOrders(data)
            })
    }, [])

    const [statusInfo, setStatusInfo] = useState([] || 1)
    const handleChange = e => {
        const getValue = e.target.value;
        setStatusInfo(getValue);
    }
    const history = useHistory();

    const handleClick = id => {
        const url = "http://localhost:5055/vramankaris";
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const clickedData = data.find(dt => dt._id === id);
                console.log(clickedData);
                const newData = { statusInfo, ...clickedData };
                setStatusInfo(newData);
            })

        const uri = `http://localhost:5055/addStatus`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(statusInfo)
        })
            .then(res => console.log('server side response', res))

    }

    // console.log(statusInfo);
    return (
        <tr id="toHidden">
            <td>{orders.name}</td>
            <td>{orders.email}</td>
            <td>Price: {orders.price}</td>
            <td><button onClick={() => editItem(orders._id)} className="btn btn-warning">Edit</button></td>
            <td><ModalForEdit editItem={editItems} onSubmit={onSubmit} orders={orders} modalIsOpen={modalIsOpen} closeModal={closeModal}></ModalForEdit></td>
            <td><button onClick={(event) => deleteItem(event, orders._id)} className="btn btn-danger">Delete</button></td>
            <td><img style={{ width: "50px", height: "50px" }} src={orders.imageURL} alt="" /></td>
            <td>
                <select onChange={handleChange} id="orders">
                    <option value="ongoing">Ongoing</option>
                    <option value="pending">Pending</option>
                    <option value="done">Done</option>
                </select>
            </td>
            <td><button onClick={(e) => { handleClick(orders._id) }} className="btn btn-info">Change Status</button></td>
        </tr>
    );
};

export default ShowAllOrdersDetails;