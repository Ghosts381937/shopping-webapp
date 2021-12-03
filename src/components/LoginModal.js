import '../App.css';
import React from 'react';
import { useState } from 'react';
import  {Button,Modal,Form}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const LoginModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    axios.post("http://localhost:8080/auth/login",null,{params:{username: username,password: password},withCredentials: true})
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>帳號</Form.Label>
              <Form.Control placeholder="Enter ID" onChange={(e) => setUsername(e.target.value)} required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>密碼</Form.Label>
              <Form.Control  placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Button variant='secondary' onClick={props.handleClose}>Close</Button>
            <Button variant="primary" type="submit" className="set_rightbottom" onClick={(e) => {handleSubmit();e.preventDefault();}}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
};

export default LoginModal;
