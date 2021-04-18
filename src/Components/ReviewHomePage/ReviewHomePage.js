import React, { useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';

const ReviewHomePage = () => {
    const [review, setReview] = useState([] || 1);
    useEffect(()=>{
        const url = `http://localhost:5055/reviews`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>{
          console.log(data);
          setReview(data)})
    },[])
    return (
        <div className="container mt-5">
            <h2 className="text-secondary text-center" >Reviews</h2>
            <div className="row">{review.map(rvw => <AllReview review = {rvw}></AllReview>)}</div>
        </div>
    );
};

export default ReviewHomePage;