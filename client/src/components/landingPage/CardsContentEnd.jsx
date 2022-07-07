import React, { useState } from "react";
import noImage from '../carrito/assets/no-image.jpg';
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardMedia } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Rating from '@mui/material/Rating';
// import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function CardsLanding({ name, image, price, description, category, stock, id, addProductCarrito, favorito = false, addFavorite, removeFavorite }) {
    const [value, setValue] = useState(2);

    let imageProduct
    if (image.length < 30) imageProduct = noImage;
    else imageProduct = image

    return (
        <Card>
            <NavLink to={`/detail/${id}`}>
                <div style={{
                    padding: 6
                }}>
                    <CardMedia style={{ height: '120px', backgroundSize: 'contain' }} image={imageProduct} />
                </div>
            </NavLink>
            <CardContent>
                <div style={{
                    height: 45
                }}>
                    <Typography variant="caption" display="block" width={'140px'} overflow='hidden'>
                        {name}
                    </Typography>
                </div>
                <Rating name="read-only" value={value} readOnly size="small" />
                <Divider light />
            </CardContent>
        </Card >
    );
};