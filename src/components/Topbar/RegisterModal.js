import '../ProductManageModal.css';
import React from 'react';
import { useState } from 'react';
import  {Button,Modal,Form}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "../Axios";

const RegisterModal = (props) => {
  const [R_username, R_setUsername] = useState("");
  const [R_useremail, R_setUseremail] = useState("");
  const [R_password, R_setPassword] = useState("");
  const [R_passwordcheck, R_setPasswordcheck] = useState("");


  const R_handleSubmit = () => {
    if (R_password === R_passwordcheck){
      axios.post("/member/register", null , {params:{
        username: R_username,
        password: R_password,
        email: R_useremail
      },withCredentials: false})
      
      .then((response) => {
          alert(response.data); response.data === "Success!" ? window.location.replace("/") : window.location.reload()
        }
      );
    }
    else {
      alert("密碼不一致");
    }
    
  } 
        
    return (
      <Modal show={props.isShow_R}>
        <Modal.Header>
          <Modal.Title>註冊</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {R_handleSubmit();e.preventDefault();}}>
            <Form.Group className="mb-3">
              <Form.Label>帳號</Form.Label>
              <div className='product_outside'>
                <Form.Control className='product' placeholder="Enter ID" onChange={(e) => R_setUsername(e.target.value)} required/>
              </div>
              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>電子信箱</Form.Label>
              <div className='product_outside'>
                <Form.Control className='product'type="email" placeholder="Enter Email" onChange={(e) => R_setUseremail(e.target.value)} required/>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>密碼</Form.Label>
              <div className='product_outside'>
                <Form.Control className='product' type="password" placeholder="Enter Password" onChange={(e) => R_setPassword(e.target.value)} required/>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>再次確認密碼</Form.Label>
              <div className='product_outside'>
                <Form.Control className='product' type="password" placeholder="Enter Password" onChange={(e) => R_setPasswordcheck(e.target.value)} required/>
              </div>
            </Form.Group>

            <div className='product_outside'>
              <Button variant='secondary' className="close" onClick={props.handleRegisterClose}> Close </Button>
              <Button variant="primary" className="submit" type="submit">Submit</Button>
            </div>
  
          </Form>
        </Modal.Body>
      </Modal>
    )
};

export default RegisterModal;
