import React, { useEffect, useState } from 'react';
import './Home.css'
import Pithas from '../Pithas/Pithas';
import HomeBody from './HomeBody/HomeBody';
import Bookings from './Bookings/Bookings';
import Review from '../Review/Review';
import ReviewHomePage from '../ReviewHomePage/ReviewHomePage';
import ShowOurTeam from '../ShowOurTeam/ShowOurTeam'
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Footer from '../Footer/Footer';
import WhoWeAre from '../WhoWEAre/WhoWeAre';
import ModalForEdit from '../ModalForEdit/ModalForEdit';
const Home = () => {
    const [pitha, setPitha] = useState([]);
    
    useEffect(()=>{
        const url = `http://localhost:5055/vramankaris`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPitha(data))
    },[])
    return (
        <div >
            {/* <div className="container">
            <div className="row">
                {pitha.length === 0 && <div style={{textAlign:"center"}}>
                                            <div class="spinner-border text-info" role="status">
                                            <span class="sr-only">Loading...</span>
                                            </div>
                                        </div>}
            {pitha.map(pth => <Pithas pitha = {pth}></Pithas>)}
            </div>
        </div> */}
            <HomeBody></HomeBody>
            <Bookings/>
            <ReviewHomePage/>
            <ShowOurTeam/>
            <WhoWeAre/>
            <Footer/>
        </div>
    );
};

export default Home;