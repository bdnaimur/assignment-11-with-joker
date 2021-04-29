import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import ShowAllOrdersDetails from './ShowAllOrdersDetails/ShowAllOrdersDetails';

const ShowAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [editItems, setEditItems] = useState([]);
    const [depdency, setdependency] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5055/vramankaris`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })
    }, [depdency])

    const deleteItem = (event, id) => {
        console.log(event.currentTarget);
        console.log(id);
        fetch(`http://localhost:5055/deleteItems/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    const remainItem = allOrders.filter( item => item._id !== id);
                    setAllOrders(remainItem);
                }
            })
    }
    function openModal() {
        setIsOpen(true);

    }

    const editItem = (id) => {
        console.log(id);
        openModal()
        const clickedItem = allOrders.filter(item => item._id === id);
        console.log(clickedItem[0]);
        setEditItems(clickedItem[0]);
    }

    function closeModal() {
        setIsOpen(false);
        setdependency(false)
    }
    const onSubmit = (data, e) => {
        console.log(editItems);
            const id = editItems._id;
            console.log("clicked", data, id);
            fetch(`http://localhost:5055/update/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        setdependency(true)
                    }
                }) 
                closeModal();
        }
    return (
        <div>
            <h1>All Orders : {allOrders.length}</h1>
            <table class="m-5 table table-hover shadow">
                <tbody>
                    {allOrders.map(allOrder => <ShowAllOrdersDetails editItem={editItem} onSubmit={onSubmit} deleteItem={deleteItem} orders={allOrder} modalIsOpen={modalIsOpen} closeModal={closeModal} editItems={editItems}></ShowAllOrdersDetails>)}
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllOrders;