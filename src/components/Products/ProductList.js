import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Product from "./Product/Product";
import axios from "../Axios";

const Products = () => {
    const [products, setProducts] = useState([]);
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
    },[])
    return (
        <main>
            <Grid container justifyContent = "center" spacing = {4}>
                {products.map((product) => (
                    <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                        <Product product = {product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;