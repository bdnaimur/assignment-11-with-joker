import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import AllOrders from '../AllOrders/AllOrders';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);
    let dependency = 0;
    useEffect(() => {
        const url = `http://localhost:5055/pithaUser?email=${loggedInUser.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
            dependency = 1
    }, [dependency])
    // console.log(pitha);
    const deleteItem = (event, id) => {
        console.log(event.currentTarget);
        console.log(id);
        fetch(`http://localhost:5055/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    const remainItem = orders.filter( item => item._id !== id);
                    setOrders(remainItem);
                    // console.log(data);
                    // history.replace("/showAllOrders")
                    // const getNode = document.getElementById("toHidden");
                    // getNode.style.color = 'red';
                }
            })
    }
    return (
        <div>
            <h4>Welcome {loggedInUser.displayName}, Your Orders: </h4>
            <table class="table table-hover shadow m-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Email</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(pth => <AllOrders deleteItem={deleteItem}  pitha={pth}></AllOrders>)}
                </tbody>
            </table>          
        </div>
    );
};

export default Orders;