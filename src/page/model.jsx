
import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

export default function ForgetPasswordModel({show,handleClose,email,setEmail,handleClick}){
    return(
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
             <Form.Label>Enter Your Email</Form.Label>
             <Form.Control
               type="email"
               placeholder="Enter Email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary"
              onClick={handleClose}>Cancel</Button>
         <Button variant="primary"
           onClick={()=>{handleClick();
             handleClose()}}>Send Reset Link</Button>
        </Modal.Footer>
    </Modal>

)
}