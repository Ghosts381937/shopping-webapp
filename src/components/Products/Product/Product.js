import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";
import useStyles from "./styles";
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
    const classes = useStyles();
    
    return (
        <Card className = {classes.root}>
            <CardActionArea onClick={() => {navigate("/productpage", {state: {product: product}}); window.location.replace("/productpage");}}>
                <CardMedia className = {classes.media} component = "img" src = {"data: image; base64," + product.image} title = {product.name} />
                <CardContent>
                    <div className = {classes.cardContentName}>
                        <Typography variant = "h4" gutterBottom>
                            {product.name}
                        </Typography>
                    </div>
                    <div className = {classes.cardContent}>
                        <Typography variant = "h5" gutterBottom>
                            數量: {product.quantity}
                        </Typography>
                        <Typography variant = "h5" gutterBottom>
                            NT: {product.price}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default Product
