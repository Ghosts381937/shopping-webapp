import React, {useState, useEffect} from 'react';
import {Button, Modal, Form} from "react-bootstrap";
import "./ProductManageModal.css";
import axios from './Axios';

const EditProductManageModal = (props) => {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [myImg,setImage] = useState([]);

    const handleSetImage = (e) => {
        let image_as_url = URL.createObjectURL(e.target.files[0]);
        let image_as_file = e.target.files[0];
        setImage({"image_preview":image_as_url,"image_file":image_as_file});
    }
    const handleSubmit = () => {
        let formData = new FormData();
        formData.append("file", myImg.image_file);
        axios.post("/productManagement/update", formData, {params:{id:productId, name: productName, quantity: productQuantity, price: productPrice, description: productDescription}, 
        headers: {
            "Content-Type": "multipart/form-data"
        }, withCredentials: true})
        .then((response) => {
            alert(response.data); window.location.reload();
        });
    }
    

    const hanleRefreshProduct = () => {
        setProductId(props.product.id);
        setProductName(props.product.name);
        setProductQuantity(props.product.quantity);
        setProductPrice(props.product.price);
        setProductDescription(props.product.description);
        
        setImage({"image_preview": "data: image; base64," + props.product.image, "image_file": props.product.blob});
    }

    useEffect(() => {
        hanleRefreshProduct();
    }, [props.product]);

    return (
        <Modal show = {props.isShow}>
            <Modal.Header>
                <Modal.Title>新增產品</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {(e) => {handleSubmit(); e.preventDefault();}}>
                    <Form.Label>產品名稱</Form.Label>
                    <div className='product_outside'>
                        <Form.Control className='product' placeholder = "Enter product name" value={productName} onChange = {(e) => {setProductName(e.target.value)}} required />
                    </div>
                    <Form.Label>產品數量</Form.Label>
                    <div className='product_outside'>
                        <Form.Control className='product' placeholder = "Enter product quantity" value={productQuantity} onChange = {(e) => {setProductQuantity(e.target.value)}} required />
                    </div>
                    <Form.Label>產品價格</Form.Label>
                    <div className='product_outside'>
                        <Form.Control className='product' placeholder = "Enter product price" value={productPrice} onChange = {(e) => {setProductPrice(e.target.value)}} required />
                    </div>
                    <Form.Label>產品描述</Form.Label>
                    <div className='product_outside'>
                        <Form.Control as = "textarea" rows = {3} className='product' placeholder = "Enter product description" value={productDescription} onChange = {(e) => {setProductDescription(e.target.value)}} required />
                    </div>
                    <Form.Label>產品圖片</Form.Label>
                    <div>
                        {/* image preview */}
                        <div className="img">
                            <img className="img_real" src={myImg.image_preview} alt="preview"/>
                        </div>

                        {/* image input field */}
                        <input type="file" value="" onChange={handleSetImage} />  {/* this line will cause a warning because the value is uncontroled */}
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

export default EditProductManageModal;
