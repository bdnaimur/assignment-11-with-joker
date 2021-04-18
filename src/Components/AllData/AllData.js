import React, { useEffect, useState } from 'react';

const AllData = (props) => {
    console.log(props);
    const [display, setDisplay] = useState({
        yes: true
    });
    const pitha = props.pitha;
    const deletePitha = (event, id) => {


        console.log(event.currentTarget);
        console.log(id);
        fetch(`http://localhost:5055/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    console.log(data);
                    const newDisplay = { ...display };
                    newDisplay.yes = false;
                    setDisplay(newDisplay);
                    // const getNode = document.getElementById("toHidden");
                    // getNode.style.display = 'none';
                }
            })
    }
    return (
        <tr id="toHidden">
            <td>{pitha.name}</td>
            <td>{pitha.email}</td>
            <td>Price: {pitha.price}</td>
            <td><img style={{ width: "50px", height: "50px" }} src={pitha.imageURL} alt="" /></td>
            <td><button className="btn btn-warning">Edit</button></td>
            <td><button onClick={(event) => deletePitha(event, pitha._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default AllData;