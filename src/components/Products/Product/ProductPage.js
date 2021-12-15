import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import "./ProductPage.css"
import axios from "../../Axios"

const ProductPage = () => {
    const {state} = useLocation();
    const {product} = state;
    const [current_num, setCurrent_num] = useState(1);

    const add = () => {
        if (current_num < product.quantity) {
            setCurrent_num(current_num + 1);
        }
    }

    const sub = () => {
        if (current_num > 1) {
            setCurrent_num(current_num - 1);
        }
    }

    const handle_submit = () => {
        axios.post("/shoppingcart/add", null, {params: {id: product.id, quantity: current_num}, withCredentials: true})
        .then((response) => {
            alert(response.data);
            response.data === "Success!" ? window.location.reload() : window.location.reload()
        })
    }

    return (
        <div>
            <div className='productpage'>
                <img className='image' src={`data:image/png;base64, ${product.image}`} alt={product.name} />
                <div className='info'>
                    <h1 className='h1'>{product.name}</h1>
                    <h1 className='h1'>價格: NT{product.price}</h1>
                    <div className='selectBar'>
                        <button className='buttonSub' onClick={sub}>-</button>
                        <div className='book_num'>{current_num}</div>
                        <button className='buttonPlus' onClick={add}>+</button>
                    </div>
                    <h1 className='h1'>剩餘: {product.quantity}</h1>
                    <button className='addCart' onClick={handle_submit}>加入購物車</button>
                </div>
            </div>
            <div className='line'></div>
            <div className='describe'>
                {product.description}
            </div>
        </div>
    )
}

export default ProductPage
