import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import axios from "../Axios";

const Cart = () => {
	let quantity = 0;
	let price = 0;
	const [item, setProducts] = useState([]);
	const [QT, setQT] = useState();//quantity
	const [PR, setPR] = useState();//price
	const handleGetProducts = () => {
		axios.post("/shoppingcart/showShoppingCart", null, { withCredentials: true })
			.then((response) => {
				for (let i = 0; i <= response.data.length - 1; i++) {
					quantity = quantity + parseInt(response.data[i].quantity);
					price = price + (parseInt(response.data[i].product.price) * parseInt(response.data[i].quantity));
				}
				if (response.data.length > 0) {
					var tmp = [];
					for (var i = 0; i < response.data.length; i++) {
						var quantityInCart = response.data[i].quantity;
						tmp.push(response.data[i].product);
						tmp[i].quantity = quantityInCart;

					}
					setProducts(tmp);
				}
				setQT(quantity);
				setPR(price);
			})
			.catch(function (error) {
				console.log(error);
			})
	};
	useEffect(() => {
		handleGetProducts();
	}, [])

	const handleRemove = (props) => {//控制移除
		axios.post("/shoppingcart/remove", null, {
			params: {
				id: props
			}, withCredentials: true
		})
			.then((response) => {
				alert(response.data);
				window.location.reload();
			}
			);
	}

	return (
		<div className="container">
			<div className="cart">
				<table>
					<tbody>
						<tr className="collection-item avatar">
							<th colspan="2"><center>商品</center></th>
							<th><center>單價</center></th>
							<th><center>數量</center></th>
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

									<Button variant="contained" onClick={() => { handleRemove(product.id) }}>取消</Button>
								</td>
							</tr>

						))}
						<tr className="collection-item avatar">
							<td colspan="2">總共</td>
							<td className="item-price">
								{PR}
							</td>
							<td className="item-desc">
								{QT}
							</td>
							<td className="item-desc"><Button variant="outlined" onClick={() => { alert("Success") }}>結帳</Button></td>
						</tr>
					</tbody>
				</table>
			</div>


		</div>

	);

};

export default Cart;