import React, {useRef, useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from "./features/UserSlice";
import {userSelectors} from "./Store/UserSelectors"; // Import the updateUser action

const UserModalForm = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const {user} = useSelector(userSelectors);
    const  name = useRef(null);
    const  country = useRef(null);
    const  age = useRef(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
     const  user = {
         name : name.current.value,
         country : country.current.value,
         age : age.current.value,
       }
        dispatch(updateUser(user)); // Dispatch the updateUser action with the form data
        handleClose(); // Close the modal after submitting
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update User
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group  controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" ref={name} defaultValue={user.name}  />
                        </Form.Group>
                        <Form.Group controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter country" name="country" ref={country} defaultValue={user.country}  />
                        </Form.Group>
                        <Form.Group controlId="formAge">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Enter age" name="age" ref={age} defaultValue={user.age}  />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserModalForm;
