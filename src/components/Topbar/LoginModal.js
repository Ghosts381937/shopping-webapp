import '../ProductManageModal.css';
import React from 'react';
import { useState } from 'react';
import  {Button,Modal,Form}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "../Axios";
const LoginModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    axios.post("/auth/login",null,{params:{username: username,password: password},withCredentials: true})
    .then((response) => {
        alert(response.data);response.data === "Success!" ? window.location.replace("/") : window.location.reload()
      }
    );
  } 
        
    return (
      <Modal show={props.isShow}>
        <Modal.Header>
          <Modal.Title>登入</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {handleSubmit();e.preventDefault();}}>
            <Form.Group className="mb-3">
              <Form.Label>帳號</Form.Label>
              <div className='product_outside'>
                <Form.Control className='product' placeholder="Enter ID" onChange={(e) => setUsername(e.target.value)} required/>
              </div>
              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>密碼</Form.Label>
              <div className='product_outside'>
                <Form.Control className='product' type = "password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required/>  
              </div>
              
            </Form.Group>
            <div className='product_outside'>
              <Button variant='secondary' className="close" onClick={props.handleClose}>Close</Button>
              <Button variant="primary" type="submit" className="submit">Submit</Button>
            </div>
            
          </Form>
        </Modal.Body>
      </Modal>
    )
};

export default LoginModal;
