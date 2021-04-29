import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import '../Admin/Admin.css'
import AllData from '../AllData/AllData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Dashboard = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const[render, setRender] = useState(false);
  const [imageURL, setIMageURL] = useState(null);
  const [pithaWithUser, setPithaWithUser] = useState([]);
  const [clicked, setClicked] = useState({
    manage: false,
    add: false,
    edit: false
  });

  useEffect(()=>{
    const url = `http://localhost:5055/reviews`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
      console.log(data);
      const newRender = true;
      setRender(render);
      setPithaWithUser(data)})
},[render])
  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
      price: data.price,
      displayName: loggedInUser.displayName
    };
    console.log(eventData);
    const url = `http://localhost:5055/addReviews`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'd19020804cf08b620bfc1f44127a586c');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const handleAddClick = e =>{
    const addclicked = {...clicked};
    addclicked.add = true;
    addclicked.manage = false;
    setClicked(addclicked);
  }
  const handleManageClick = e =>{
    const addclicked = {...clicked};
    addclicked.manage = true;
    addclicked.add = false;
    setClicked(addclicked);
  }
  const handleEditClick = e =>{
    const addclicked = {...clicked};
    addclicked.edit = true;
    addclicked.add = false;
    setClicked(addclicked);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 manage-product">
          <span onClick={handleManageClick}><span className="icon-style"><FontAwesomeIcon icon={faTasks} /></span><span>Manage Product</span></span><br/>
            <span onClick={handleAddClick}><span className="icon-style"><FontAwesomeIcon icon={faPlusSquare} /></span><span>Review</span></span><br/>
            
          </div>
          
            <div className="col-md-8">
            
              {pithaWithUser.length === 0 && <div style={{textAlign:"center"}}>
                                                <div class="spinner-border text-info" role="status">
                                                <span class="sr-only">Loading...</span>
                                                </div>
                                              </div>}

                                              
            {clicked.add ? 
              <form className="shadow p-5" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Tour Package Name</label>
                    <input name="name" type="text" class="form-control" id="inputEmail4" placeholder="Add Name" ref={register} />
                  </div>
                  <br/>
                  <div class="form-group col-md-6">
                    <label for="price">Review Details</label>
                    <textarea type="textarea" name="price" class="form-control" id="price" placeholder="Add Comment" ref={register} />
                  </div>
                </div>
                <br />
                <input className="btn btn-info" type="submit" />
              </form>
               :<h6 style={{backgroundColor:"lightCyan", textAlign:"center", padding:"5px 0px"}}>Please Select any Option</h6>}
               {clicked.manage ? <div>
                                      <h1>Payment Option</h1>  
                                      <ProcessPayment/>   
                                </div> : <h6 style={{backgroundColor:"lightCyan", textAlign:"center", padding:"5px 0px"}}>Please Select Manage if you want to Edit or Delete</h6>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
