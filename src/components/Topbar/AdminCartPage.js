import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import axios from "../Axios";
import ProductManageModal from "../CreateProductManageModal";
import EditProductManageModal from '../EditProductManageModal';
import "./AdminCartPage.css";
import Base64 from '../Base64';
const AdminCart = () => {
    const [isShow,setIsShow] = useState(false);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [editProduct, setEditProduct] = useState([]);
    const handleShow = () => setIsShow(true);
    const handleClose = () => setIsShow(false);
    const handleShowEdit = () => setIsShowEdit(true);
    const handleCloseEdit = () => setIsShowEdit(false);
	const [item, setProducts] = useState([]);
	const [scroll, setScroll] = useState(window.scrollY);
	const [scrollUp, setScrollUp] = useState(true);

	
	const handleScroll = () => {
		if (window.scrollY - scroll < 0) {
			setScrollUp(true);
		}
		else {
			setScrollUp(false);
		}
		setScroll(window.scrollY);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, {passive: true});
		return () => {window.removeEventListener("scroll", handleScroll)};
	}, [scroll])

	const handleGetProducts = () => {
		axios.get("/product/showProduct")
			.then((response) => {
				setProducts(response.data);
			})
			.catch(function (error) {
				console.log(error);
			})
	};
	useEffect(() => {
		handleGetProducts();
	}, [])

	const handleRemove = (props) => {//控制移除
		axios.post("/productManagement/delete", null, {
			params: {
				id: props
			}, withCredentials: true
		})
			.then((response) => {
				alert(response.data);
				response.data === "Success!" ? window.location.reload() : window.location.reload()
			}
			);
	}

	const buttonShow = () => {
		if (isShow === false && scrollUp === true && isShowEdit === false) {
			return (
				<button className='addProduct' onClick={handleShow}></button>
			);
		}
	}

	return (
		<div className="container">
			<div className="cart">
				<table>
					<tbody>
						<tr className="collection-item avatar">
							<th colSpan="2"><center>商品</center></th>
							<th><center>單價</center></th>
							<th><center>剩餘數量</center></th>
							<th><center>操作</center></th>
						</tr>
						{item.map((product) => (
							<tr className="collection-item avatar" key={product.id}>
								<td className="item-img">
									<img src={"data: image; base64," + product.image} alt={product.name} className="" />
								</td>
								<td className="item-title">
									<span className="title">{product.name}</span>
								</td>
								<td className="item-price">
									<p><b>{product.price}</b></p>
								</td>
								<td className="item-desc">
									<p><b>{product.quantity}</b></p>
								</td>
								<td className="item-desc">
									<Button className='Edit' variant = "contained" onClick={() => {product["blob"] = Base64.b64toBlob(product.image, 'jpg'); handleShowEdit(); setEditProduct(product);}}>編輯</Button>
									<Button className='Delete' variant="contained" onClick={() => { handleRemove(product.id) }}>取消</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{buttonShow()}
            <ProductManageModal isShow = {isShow} handleClose = {handleClose}/>
            <EditProductManageModal isShow = {isShowEdit} product = {editProduct} handleClose = {handleCloseEdit} />
		</div>
	);
};

export default AdminCart;