import './Topbar.css';
import React from 'react';
import { useState } from 'react';
import  {Button,Modal,Form}  from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
const Topbar = () => {
  const navigate = useNavigate();
  const [show,setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleRegisterClick = () => navigate('/register');
  const MyModal = () => {
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>登入</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>帳號</Form.Label>
              <Form.Control type="email" placeholder="Enter ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
            <Button variant="primary" type="submit" className="set_rightbottom">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  };

  return (
    <div className='topbar'>
        <div className='title'>ShrimPC</div>
        <SearchBar />
        <div className='memberService'> 
            <Button className='redColorNoBorder' onClick={handleRegisterClick}>註冊</Button>
            <div className='seperator'></div>
            <Button className='redColorNoBorder' onClick={handleShow}>登入</Button>
        </div>
        <MyModal />
    </div>
    
  )
  
};

export default Topbar;
