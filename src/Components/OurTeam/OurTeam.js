import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import '../Admin/Admin.css';

const OurTeam = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [render, setRender] = useState(false);
    const [imageURL, setIMageURL] = useState(null);
    const [pithaWithUser, setPithaWithUser] = useState([]);
    const [clicked, setClicked] = useState({
        manage: false,
        add: false,
        edit: false
    });

    useEffect(() => {
        const url = `https://whispering-lowlands-13005.herokuapp.com/ourTeams`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newRender = true;
                setRender(render);
                setPithaWithUser(data)
            })
    }, [render])
    const onSubmit = (data, e) => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price
        };
        console.log(eventData);
        const url = `https://whispering-lowlands-13005.herokuapp.com/addOurTeams`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
        e.target.reset();
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
    return (
        <form className="shadow p-5" onSubmit={handleSubmit(onSubmit)}>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Team Member Name</label>
                    <input name="name" type="text" class="form-control" id="inputEmail4" placeholder="Add Member Name" ref={register} />
                </div>
                <div class="form-group col-md-6">
                    <label for="price">Job Description</label>
                    <input type="text" name="price" class="form-control" id="price" placeholder="Add Job Description" ref={register} />
                </div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile1">Add Image </label>
                <br />
                <input name="exampleRequired" type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleImageUpload} />
            </div>
            <br />
            <input className="btn btn-info" type="submit" />
        </form>
    );
};


export default OurTeam;