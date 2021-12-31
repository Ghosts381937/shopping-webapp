import './Topbar.css';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import LogoutButton from './LogoutButton';


const Topbar = (props) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [isShow_R, setIsShow_R] = useState(false);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  const handleRegisterShow = () => setIsShow_R(true);
  const handleRegisterClose = () => setIsShow_R(false);

  if (props.permission === "Fail!") {
    return (
      <div className='topbar'>
        <div className='title' onClick={() => navigate('/')}>ShrimPC</div>

        <SearchBar searchResult={props.searchResult} handleSearchResult={(result) => props.handleSearchResult(result)} />
        <div className='memberService'>
          <Button className='redColorNoBorder' onClick={handleRegisterShow}>註冊</Button>
          <div className='seperator'></div>
          <Button className='redColorNoBorder' onClick={handleShow}>登入</Button>
        </div>

        <LoginModal isShow={isShow} handleClose={handleClose} />
        <RegisterModal isShow_R={isShow_R} handleRegisterClose={handleRegisterClose} />

      </div>

    )
  }
  else if (props.permission === "member") {
    return (
      <div className='topbar'>
        <div className='title' onClick={() => navigate('/')}>ShrimPC</div>

        <SearchBar searchResult={props.searchResult} handleSearchResult={(result) => props.handleSearchResult(result)} />

        <div className='memberService'>
          <Button className='redColorNoBorder' onClick={() => navigate('/InfoPage')}><img src={"https://i.imgur.com/r3Wg4Yl.png"} style={{width: 28, height: 28, margin: '1vh'}} alt="member"/>{props.username}</Button>
          <div className='seperator'></div>
          <Button className='redColorNoBorder' onClick={() => navigate('/Cart')}><img src={"https://i.imgur.com/H9gCEii.png"} style={{width: 28, height: 28}} alt="cart"/></Button>
          <div className='seperator'></div>
          <LogoutButton />
        </div>
      </div>

    )
  }
  else if (props.permission === "admin") {
    return (
      <div className='topbar'>
        <div className='title' onClick={() => navigate('/')}>ShrimPC</div>

        <SearchBar searchResult={props.searchResult} handleSearchResult={(result) => props.handleSearchResult(result)} />

        <div className='memberService'>
          <Button className='redColorNoBorder' onClick={() => navigate('/InfoPage')}><img src={"https://i.imgur.com/PUSC2Bw.png"} style={{width: 28, height: 28, margin: '1vh'}} alt="admin"/>{props.username}</Button>
          <div className='seperator'></div>
          <Button className='redColorNoBorder' onClick={() => navigate('/AdminCartPage')}>產品管理</Button>
          <div className='seperator'></div>
          <LogoutButton />
        </div>

      </div>

    )
  }
  else {
    return null;
  }
  // return (
  //   <div className='topbar'>
  //     <div className='title' onClick={() => navigate('/')}>ShrimPC</div>

  //     <SearchBar searchResult={props.searchResult} handleSearchResult={(result) => props.handleSearchResult(result)} />

  //     <div className='memberService'>
  //       <Button className='redColorNoBorder' onClick={handleRegisterShow}>註冊</Button>
  //       <div className='seperator'></div>
  //       <Button className='redColorNoBorder' onClick={handleShow}>登入</Button>
  //       {/*<LogoutButton />*/}
  //       <div className='seperator'></div>
  //       <Button className='redColorNoBorder' onClick={() => navigate('/Cart')}>購物車</Button>
  //       <div className='seperator'></div>
  //       <Button className='redColorNoBorder' onClick={() => navigate('/InfoPage')}>個人資料</Button>
  //       <div className='seperator'></div>
  //       <Button className='redColorNoBorder' onClick={() => navigate('/Cart')}>購物車</Button>
  //       <div className='seperator'></div>
  //       <Button className='redColorNoBorder' onClick={() => navigate('/AdminCartPage')}>管理者編輯</Button>
  //     </div>

  //     <LoginModal isShow={isShow} handleClose={handleClose} />
  //     <RegisterModal isShow_R={isShow_R} handleRegisterClose={handleRegisterClose} />

  //   </div>

  // )

};

export default Topbar;
