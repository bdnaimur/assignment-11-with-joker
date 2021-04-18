import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { userContext } from '../../../App';

const TourPlaces = ({ pithaWithUser, onSubmit, clicked, handleImageUpload }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [service, setService] = useState({
    name: '',
    price: null
});
  
  const handleBlur = (e) => {
    if (e.target.name === 'name') {
        const userSignInfo = { ...service };
        userSignInfo[e.target.name] = e.target.value;
        setService(userSignInfo);
        setLoggedInUser(userSignInfo);
    }
    if (e.target.name === 'price') {
        const userSignInfo = { ...service };
        userSignInfo[e.target.name] = e.target.value;
        setService(userSignInfo);
        setLoggedInUser(userSignInfo);
    }
    
}
console.log(loggedInUser);
  return (
    <div>

      {pithaWithUser.length === 0 && <div style={{ textAlign: "center" }}>
        <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>}
      {clicked.add ?
        // <form className="shadow p-5" onSubmit={handleSubmit(onSubmit)}>
        //   <div class="form-row">
        //     <div class="form-group col-md-6">
        //       <label for="inputEmail4">Tour Name</label>
        //       <input name="name" type="text" class="form-control" id="inputEmail4" placeholder="Add Tour Name" ref={register} />
        //     </div>
        //     <div class="form-group col-md-6">
        //       <label for="price">Package Price</label>
        //       <input type="text" name="description" class="form-control" id="price" placeholder="Short Description" ref={register} />
        //     </div>
        //   </div>
        //   <div class="form-group">
        //     <label for="exampleFormControlFile1">Tour Image </label>
        //     <br />
        //     <input name="exampleRequired" type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleImageUpload} />
        //   </div>
        //   <br />
        //   <input className="btn btn-info" type="submit" />
        // </form>

        <form className="shadow p-5" onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Tour Name</label>
              <input onBlur={handleBlur} name="name" type="text" class="form-control" id="inputEmail4" placeholder="Add Tour Name" required/>
            </div>
            <div class="form-group col-md-6">
              <label for="price">Package Price</label>
              <input onBlur={handleBlur} type="text" name="price" class="form-control" id="price" placeholder="Short Description" required/>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Tour Image </label>
            <br />
            <input name="exampleRequired" type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleImageUpload} />
          </div>
          <br />
          <input className="btn btn-info" type="submit" />
        </form>
        : <h6 style={{ backgroundColor: "lightCyan", textAlign: "center", padding: "5px 0px" }}>Please Select Add if you want to add product</h6>}
    </div>
  );
};

export default TourPlaces;