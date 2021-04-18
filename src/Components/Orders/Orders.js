import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import AllOrders from '../AllOrders/AllOrders';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [pitha, setPitha] = useState([]);
    let dependency = 0;
    useEffect(() => {
        const url = `https://whispering-lowlands-13005.herokuapp.com/pithaUser?email=${loggedInUser.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPitha(data))
            dependency = 1
    }, [dependency])
    console.log(pitha);
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
                    {pitha.map(pth => <AllOrders pitha={pth}></AllOrders>)}
                </tbody>
            </table>          
        </div>
    );
};

export default Orders;