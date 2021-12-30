import './Topbar.css';
import React from 'react';
import { useState } from 'react';
import {Button}  from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import LogoutButton from './LogoutButton';


const Topbar = (props) => {
  const navigate = useNavigate();
  const [isShow,setIsShow] = useState(false);

  const [isShow_R,setIsShow_R] = useState(false);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  const handleRegisterShow = () => setIsShow_R(true);
  const handleRegisterClose = () => setIsShow_R(false);


  // const handleRegisterClick = () => navigate('/register');

  return (
    <div className='topbar'>
        <div className='title' onClick={()=> navigate('/')}>ShrimPC</div>

        <SearchBar searchResult = {props.searchResult} handleSearchResult = {(result) => props.handleSearchResult(result)}/>
		
        <div className='memberService'> 
            <Button className='redColorNoBorder' onClick={handleRegisterShow}>註冊</Button>
            <div className='seperator'></div>
            <Button className='redColorNoBorder' onClick={handleShow}>登入</Button>
            {/*<LogoutButton />*/}
			<div className='seperator'></div>
			<Button className='redColorNoBorder' onClick={()=> navigate('/Cart')}>購物車</Button>
        </div>

        <LoginModal isShow = {isShow} handleClose = {handleClose}/>
        <RegisterModal isShow_R = {isShow_R} handleRegisterClose = {handleRegisterClose}/>

    </div>
    
  )
  
};

export default Topbar;
