import React, {useEffect, useState} from 'react';
import BookingDetails from '../BookingDetails/BookingDetails';

// const Bookings = () => {

//     const [services, setServices] = useState(null)
//     useEffect(()=>{
//         const url = `http://localhost:5055/services`;
//         fetch(url)
//         .then(res =>res.json())
//         .then(data =>{
//           console.log(data);
//           setServices(data)
//     },[])
//     console.log(services);
//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 {services.map(service =><BookingDetails service = {service}></BookingDetails>)}
//             </div>
//         </div>
//     );
// };

// export default Bookings;
// import React from 'react';

const Bookings = () => {
    const [services, setServices] = useState([])
    let [render, setRender] = useState(false)
    if(services.length > 0){
        setRender = true;
    }
//     useEffect(()=>{
//         const url = `http://localhost:5055/services`;
//         fetch(url)
//         .then(res =>res.json())
//         .then(data =>{
//           console.log(data);
//           setServices(data)
//     },[])
//     console.log(services);

useEffect(()=>{
    const url = `http://localhost:5055/services`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setServices(data))

},[render])
        console.log();
    return (
        <div className="container mt-5">
            <div className="row">
               {services.map(service =><BookingDetails service = {service}></BookingDetails>)}
            </div>
         </div>
    );
};

export default Bookings;