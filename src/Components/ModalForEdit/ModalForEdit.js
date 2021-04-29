import React from 'react';
import { useForm } from 'react-hook-form';


import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const ModalForEdit = ({modalIsOpen, closeModal, orders, onSubmit, editItem}) => {
    const { register, handleSubmit, errors } = useForm();

    // const onSubmit = (data, e) => {
    //     const id = orders._id;
    //     console.log("clicked", data, id);
    //     fetch(`http://localhost:5055/update/${id}`, {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result) {
    //                 console.log(result);
    //             }
    //         }) 
    //     e.target.reset();
    // }

    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >   
            <h3 className="text-secondary">Edit the Below</h3>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} defaultValue={editItem.name} name="name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} defaultValue={editItem.price} name="price" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <br/>

                    <div className="form-group text-right d-flex">
                        <button type="submit" className="btn btn-info me-5">Send</button>
                        <button className="btn btn-primary" onClick={closeModal}>close</button>
                    </div>
                </form>
                
            </Modal>
        </div>
    );
};

export default ModalForEdit;