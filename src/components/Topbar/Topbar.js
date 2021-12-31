import './Topbar.css';
import React from 'react';
import axios from "../Axios";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import LogoutButton from './LogoutButton';


var ID;
var Username;
const Topbar = () => {
  axios.post("/authorize", { withCredentials: true })
    .then((response) => {
      alert(response.data);
      ID = response.data;
    }
    );

  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const [isShow_R, setIsShow_R] = useState(false);

  const handleShow = () => setIsShow(true);
  const handleClose = () => setIsShow(false);

  const handleRegisterShow = () => setIsShow_R(true);
  const handleRegisterClose = () => setIsShow_R(false);

  if (ID === "Fail!") {
    return (
      <div className='topbar'>
        <div className='title' onClick={() => navigate('/')}>ShrimPC</div>

        <SearchBar />

        <div className='memberService'>
          <Button className='redColorNoBorder' onClick={handleRegisterShow}>註冊</Button>
          <div className='seperator'></div>
          <Button className='redColorNoBorder' onClick={handleShow}>登入</Button>
          {/*<LogoutButton />*/}
          <div className='seperator'></div>
          <Button className='redColorNoBorder' onClick={() => navigate('/Cart')}><img src={"https://i.imgur.com/H9gCEii.png"} style={{width: 28, height: 28}} alt="cart"/> &nbsp;</Button>

        </div>

        <LoginModal isShow={isShow} handleClose={handleClose} />
        <RegisterModal isShow_R={isShow_R} handleRegisterClose={handleRegisterClose} />

      </div>

    )
  }
  if (ID === "admin") {
    return (
      <div className='topbar'>
        <div className='title' onClick={() => navigate('/')}>ShrimPC</div>

        <SearchBar />

        <div className='memberService'>
          {/* <Button className='redColorNoBorder' onClick={handleRegisterShow}>註冊</Button>
              <div className='seperator'></div> */}
          <Button className='redColorNoBorder' onClick={handleShow}><img src={"https://i.imgur.com/PUSC2Bw.png"} style={{width: 28, height: 28}} alt="admin"/> &nbsp; ADMIN</Button> 
          {/* 不確定這邊的要跳去哪裡 */}
          {/*<LogoutButton />*/}
          <div className='seperator'></div>
          <Button className='redColorNoBorder' onClick={() => navigate('/Cart')}><img src={"https://i.imgur.com/u0UacNV.png"} style={{width: 28, height: 28}} alt="setting"/> &nbsp; SETTING</Button> 
          {/* 不確定這邊的要跳去哪裡 */}
        </div>

        <LoginModal isShow={isShow} handleClose={handleClose} />
        <RegisterModal isShow_R={isShow_R} handleRegisterClose={handleRegisterClose} />

      </div>

    )
  }
  if (ID === "member") {
    axios.post("/member/requestMemberInfo", { withCredentials: true })
    .then((response) => {
      Username = response.username;
    })
    return (
      <div className='topbar'>
        <div className='title' onClick={() => navigate('/')}>ShrimPC</div>

        <SearchBar />

        <div className='memberService'>
          {/* <Button className='redColorNoBorder' onClick={handleRegisterShow}>註冊</Button>
              <div className='seperator'></div> */}
          <Button className='redColorNoBorder' onClick={handleShow}><img src={"https://i.imgur.com/r3Wg4Yl.png"} style={{width: 28, height: 28}} alt="user"/> &nbsp; {Username}</Button>
          {/* 這裡應該是跳去InfoPage? */}
          {/*<LogoutButton />*/}
          <div className='seperator'></div>
          <Button className='redColorNoBorder' onClick={() => navigate('/Cart')}><img src={"https://i.imgur.com/H9gCEii.png"} style={{width: 28, height: 28}} alt="cart"/> &nbsp;</Button> 
        </div>
        <LoginModal isShow={isShow} handleClose={handleClose} />
        <RegisterModal isShow_R={isShow_R} handleRegisterClose={handleRegisterClose} />

      </div>

    )
  }
};

export default Topbar;
