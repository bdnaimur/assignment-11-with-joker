import React, { useEffect, useState } from 'react';

const ShowAllOrdersDetails = ({ orders }) => {
    const [statusInfo, setStatusInfo] = useState([] || 1)
    const handleBlur = e => {
        const getValue = e.target.value;
        setStatusInfo(getValue);
    }
    const handleClick = id => {
        // const clickeIdStatusInfo = orders.filter(stInfo => stInfo._id === id);
        
            const url = "https://whispering-lowlands-13005.herokuapp.com/vramankaris";
            // console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const clickedData = data.find(dt => dt._id === id);
                    console.log(clickedData);
                    const newData = {statusInfo, ...clickedData};
                    setStatusInfo(newData);
                })
        
        // const dataInfo = {...clickeIdStatusInfo,...statusInfo};
        // console.log(clickeIdStatusInfo,dataInfo);
        const uri = `https://whispering-lowlands-13005.herokuapp.com/addStatus`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(statusInfo)
        })
            .then(res => console.log('server side response', res))
    
}
console.log(statusInfo);
return (
    <tr id="toHidden">
        <td>{orders.name}</td>
        <td>{orders.email}</td>
        <td>Price: {orders.price}</td>
        <td><img style={{ width: "50px", height: "50px" }} src={orders.imageURL} alt="" /></td>
        <td>
            <select onChange={handleBlur} id="orders">
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