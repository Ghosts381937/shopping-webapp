import './Topbar.css';
import React from 'react';
import { useState } from 'react';
import  {Button}  from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import LoginModal from './LoginModal';
import LogoutButton from './LogoutButton'
const Topbar = () => {
  const navigate = useNavigate();
  const [isShow,setIsShow] = useState(false);
  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);
  const handleRegisterClick = () => navigate('/register');

  return (
    <div className='topbar'>
        <div className='title'>ShrimPC</div>
        <SearchBar />
        <div className='memberService'> 
            <Button className='redColorNoBorder' onClick={handleRegisterClick}>註冊</Button>
            <div className='seperator'></div>
            <Button className='redColorNoBorder' onClick={handleShow}>登入</Button>
            {/*<LogoutButton />*/}
        </div>
        <LoginModal isShow = {isShow} handleClose = {handleClose}/>
    </div>
    
  )
  
};

export default Topbar;
