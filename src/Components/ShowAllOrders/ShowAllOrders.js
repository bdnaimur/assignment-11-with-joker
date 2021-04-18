import React, { useEffect, useState } from 'react';
import ShowAllOrdersDetails from './ShowAllOrdersDetails/ShowAllOrdersDetails';

const ShowAllOrders = () => {
    const [allOrders, setAllOrders] = useState([] || 1)
    useEffect(() => {
        const url = `https://whispering-lowlands-13005.herokuapp.com/vramankaris`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data)
            })
    }, [])
    return (
        <div>
            <h1>All Orders</h1>
            <table class="m-5 table table-hover shadow">
                <tbody>
                    {allOrders.map(allOrder => <ShowAllOrdersDetails orders={allOrder}></ShowAllOrdersDetails>)}
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllOrders;