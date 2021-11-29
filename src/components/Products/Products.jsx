import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from "./Product/Product";
import axios from "./axios";

const products = [
    {id: 1, name: "shoes", num: "20", price: "NT200", image: "https://i.imgur.com/j0KmsPW.jpeg"}
]

const Products = () => {
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