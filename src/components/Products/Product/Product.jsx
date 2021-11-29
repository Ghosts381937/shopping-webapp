import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from "./styles";

const styles = {
    media: {
        height: 0,
        paddingTop: "56.25%",
        marginTop: "30"
    }
}

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image = {product.image} title = {product.name} style = {styles.media} />
            <CardContent>
                <div className = {classes.cardContentName}>
                    <Typography variant = "h4" gutterBottom>
                        {product.name}
                    </Typography>
                </div>
                <div className = {classes.cardContent}>
                    <Typography variant = "h5" gutterBottom>
                        數量: {product.num}
                    </Typography>
                    <Typography variant = "h5" gutterBottom>
                        {product.price}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label = "Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product
