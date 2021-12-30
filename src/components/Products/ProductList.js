import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Product from "./Product/Product";
import axios from "../Axios";

const Products = (props) => {
    return (
        <main>
            <Grid container justifyContent = "center" spacing = {4}>
                {props.searchResult.map((product) => (
                    <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                        <Product product = {product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;