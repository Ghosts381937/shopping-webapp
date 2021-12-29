import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import axios from "../Axios";


const AdminCart = () => {
	let quantity = 0;
	let price = 0;
	const [item, setProducts] = useState([]);
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
		axios.post("/shoppingcart/remove", null, {
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

	return (
		<div className="container">
			<div className="cart">
				<table>
                    <tr className = "item-desc">
                    <th colspan="2"><center>  </center></th>
                        <th><center><Button variant = "add" onClick = {()=>{}}>產品新增</Button></center> </th>                       
                    </tr>
					<tr className="collection-item avatar">
						<th colspan="2"><center>商品</center></th>
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
								<Button variant="add" onClick={() => { } }>編輯</Button>
								<Button variant="contained" onClick={() => { handleRemove(product.id); } }>取消</Button>
							</td>
						</tr>

					))}
				

				</table>
			</div>


		</div>

	);

};

export default AdminCart;