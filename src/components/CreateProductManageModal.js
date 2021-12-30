import React, {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import "./ProductManageModal.css";
import axios from './Axios';

const ProductManageModal = (props) => {
    const [productName, setProductName] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [myImg,setImage] = useState({});

    const handleSetImage = (e) => {
        let image_as_url = URL.createObjectURL(e.target.files[0]);
        let image_as_file = e.target.files[0];
        setImage({"image_preview":image_as_url,"image_file":image_as_file});
    }
    const handleSubmit = () => {
        let formData = new FormData();
        formData.append("file", myImg.image_file);
        axios.post("/productManagement/add", formData, {params:{name: productName, quantity: productQuantity, price: productPrice, description: productDescription}, 
        headers: {
            "Content-Type": "multipart/form-data"
        }, withCredentials: true})
        .then((response) => {
            alert(response.data);response.data === "Success!" ? window.location.replace("/") : window.location.reload()
        });
    } 

    return (
        <Modal show = {props.isShow}>
            <Modal.Header>
                <Modal.Title>新增產品</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {(e) => {handleSubmit(); e.preventDefault();}}>
                    <Form.Label>產品名稱</Form.Label>
                    <div className='product_outside'>
                        <Form.Control className='product' placeholder = "Enter product name" onChange = {(e) => {setProductName(e.target.value)}} required />
                    </div>
                    <Form.Label>產品數量</Form.Label>
                    <div className='product_outside'>
                        <Form.Control className='product' placeholder = "Enter product name" onChange = {(e) => {setProductQuantity(e.target.value)}} required />
                    </div>
                    <Form.Label>產品價格</Form.Label>
                    <div className='product_outside'>
                        <Form.Control className='product' placeholder = "Enter product name" onChange = {(e) => {setProductPrice(e.target.value)}} required />
                    </div>
                    <Form.Label>產品描述</Form.Label>
                    <div className='product_outside'>
                        <Form.Control as = "textarea" rows = {3} className='product' placeholder = "Enter product name" onChange = {(e) => {setProductDescription(e.target.value)}} required />
                    </div>
                    <Form.Label>產品圖片</Form.Label>
                    <div>
                        {/* image preview */}
                        <div className="img">
                            <img className="img_real" src={myImg.image_preview} alt="preview"/>
                        </div>

                        {/* image input field */}
                        <input type="file" onChange={handleSetImage} />
                    </div>
                    <div className='product_outside'>
                        <Button className="close" variant='secondary' onClick={props.handleClose}>Close</Button>
                        <Button className="submit" variant="primary" type="submit">Submit</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ProductManageModal;
