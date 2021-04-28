import React, { useEffect, useState } from 'react';
import ShowAllOrdersDetails from './ShowAllOrdersDetails/ShowAllOrdersDetails';

const ShowAllOrders = () => {
    const [allOrders, setAllOrders] = useState([] || 1)
    useEffect(() => {
        const url = `http://localhost:5055/vramankaris`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllOrders(data)
            })
    }, [])
    const [statusInfo, setStatusInfo] = useState([] || 1)
    const handleBlur = e => {
        const getValue = e.target.value;
        setStatusInfo(getValue);
    }
    const handleClick = id => {
        const productWithStatus = {
            newStatus : statusInfo
        };
        console.log(productWithStatus);
        const uri = `http://localhost:5055/updateStatus/${id}`;
        fetch(uri, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productWithStatus)
        })
            .then(res => {
                console.log(res);
            })
    
}
    return (
        <div>
            <h1>All Orders</h1>
            <table class="m-5 table table-hover shadow">
                <tbody>
                    {allOrders.map(allOrder => <ShowAllOrdersDetails handleBlur={handleBlur} handleClick={handleClick} orders={allOrder}></ShowAllOrdersDetails>)}
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllOrders;