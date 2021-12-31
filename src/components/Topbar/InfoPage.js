import './InfoPage.css'
import '../ProductManageModal.css';
import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "../Axios";

const EditModal = (props) => {
    const [email, setEmail] = useState(props.info.email);
    const [username, setUsername] = useState(props.info.username);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const handleSubmit = () => {
        if(newPassword === confirmNewPassword) {
            axios.post("/member/updateMemberInfo", null, { params: { newUsername: username, newEmail: email, password: currentPassword, newPassword: newPassword }, withCredentials: true })
            .then((response) => {
                alert(response.data);window.location.reload();
            });
        }
        else {
            alert('新密碼不一致');
        }
    }
    return (
        <Modal show={props.isShow}>
            <Modal.Header>
                <Modal.Title>編輯個人資料</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { handleSubmit(); e.preventDefault(); }}>
                    <Form.Group className="mb-3">
                        <Form.Label>電子信箱</Form.Label>
                        <div className='product_outside'>
                            <Form.Control className='product' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} defaultValue={email} required />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>帳號</Form.Label>
                        <div className='product_outside'>
                            <Form.Control className='product' placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} defaultValue={username} required />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>當前密碼</Form.Label>
                        <div className='product_outside'>
                            <Form.Control className='product' type='password' placeholder="Enter CurrentPassword" onChange={(e) => setCurrentPassword(e.target.value)} required />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>新密碼</Form.Label>
                        <div className='product_outside'>
                            <Form.Control className='product' type='password' placeholder="Enter NewPassword" onChange={(e) => setNewPassword(e.target.value)} required />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>再次確認新密碼</Form.Label>
                        <div className='product_outside'>
                            <Form.Control className='product' type='password' placeholder="Enter NewPassword" onChange={(e) => setConfirmNewPassword(e.target.value)} required />
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
const InfoPage = () => {
    const [isShow,setIsShow] = useState(false);
    const handleShow = () => setIsShow(true);
    const handleClose = () => setIsShow(false);

    const [userInfo, setUserInfo] = useState(null);
    const handleGetUserInfo = () => {
        axios.post("/member/requestMemberInfo", null, { withCredentials: true })
            .then((response) => {
                setUserInfo(response.data);
            })
    }
    useEffect(handleGetUserInfo, []);
    if(userInfo == null)
        return null;
    return (
        <div className='userInfo'>
            <div className='Label'>電子信箱</div>
            <p className='Text'>{userInfo.email}</p>
            <div className='Label'>帳號</div>
            <p className='Text'>{userInfo.username}</p>
            <div className='Label'>密碼</div>
            <p className='Text'>**************</p>
            <br></br>
            <br></br>
            <Button className='redColorButton' size='lg' onClick={handleShow}>編輯</Button>
            <EditModal isShow = {isShow} handleClose = {handleClose} info = {{email: userInfo.email, username: userInfo.username}}/>
        </div>
    );
}
export default InfoPage;