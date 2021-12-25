import React, {useState} from 'react'  // Temp need delete useState(for test)!!!
import {Card, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";
import useStyles from "./styles";
import { useNavigate } from 'react-router-dom';
import EditProductManageModal from '../../EditProductManageModal';  // Temp need delete(for test)!!!

const Product = ({product}) => {
    const [isShow,setIsShow] = useState(false);  // Temp need delete(for test)!!!
    const handleShow = () => setIsShow(true);  // Temp need delete(for test)!!!
    const handleClose = () => setIsShow(false);  // Temp need delete(for test)!!!

    const navigate = useNavigate();
    const classes = useStyles();
    
    return (
        <Card className = {classes.root}>
            {/*onClick need to recover. Now is for test!!!*/}
            <CardActionArea onClick={handleShow/*() => {navigate("/productpage", {state: {product: product}}); window.location.replace("/productpage");}*/}>
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
            <EditProductManageModal isShow = {isShow} product = {product} handleClose = {handleClose} />
            {/*EditProductManageModal. Now is for test!!!*/}
            </CardActionArea>
        </Card>
    );
}
export default Product
