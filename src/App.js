import './App.css';
import React from 'react';
import { useState } from 'react';
import  {Button,Modal,Form}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/search_bar';
import Submit from './components/Submiit';
function App() {
  
  const [show,setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const MyModal = () => {
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>µn¤J</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>±b¸¹</Form.Label>
              <Form.Control type="email" placeholder="Enter ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>±K½X</Form.Label>
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
    <div className='app'>
      <div className='topbar'>
        <h1>ShrimPC</h1>
        <Button className='login' onClick={handleShow}>µn¤J</Button>
        <MyModal/>
        <SearchBar/>
      </div>
<<<<<<< HEAD
      <SearchBar />
      <Submit />
=======
>>>>>>> ceaf850bacab6f613d219af901a9c62b9f533183
    </div>
  )
  
};

export default App;
