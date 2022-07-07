// import React from 'react';
// // import { Link } from 'react-router-dom';
// // import style from './assets/CardsLanding.module.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// // import Badge from '@mui/material/Badge';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// export default function CardsLanding({ name, image, price, description, category, stock, id, addProductCarrito, favorito = false, addFavorite, removeFavorite }) {
//     let imageProduct
//     if (image.length < 30) imageProduct = noImage;
//     else imageProduct = image


//     return (
//         // <div id={id} className={style.card}>
//         //     <img src={image} className={style.cardImg} alt='Imagen producto' onError={({ currentTarget }) => {
//         //         currentTarget.onerror = null; // prevents looping
//         //         currentTarget.src = `${noImage}`;
//         //     }} />
//         //     <Link to={`/`} className={style.linkTo}><p className={style.textTitle}>{name.charAt(0).toUpperCase() + name.slice(1)}</p></Link>


//         //     <div className={style.footer}>
//         //         {/* <span className={style.textTitle}>${price}</span> */}
//         //     </div>
//         // </div>
//         <>
//             <Card sx={{ maxWidth: 250 }}>
//                 <CardActionArea>
//                     <CardMedia
//                         component="img"
//                         height="200"
//                         image={imageProduct}
//                         alt={name}
//                     />
//                     <div style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         marginBottom: 50
//                     }}>
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="div">
//                                 {name}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 {description}

//                             </Typography>
//                         </CardContent>
//                     </div>
//                 </CardActionArea>
//                 <FavoriteBorderIcon />
//             </Card>
//         </>
//     )
// }


import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import noImage from '../carrito/assets/no-image.jpg';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton, CardMedia, Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavorite, removeFavorite } from '../../redux/actions/favoritosA';
import { addProductCarrito } from '../../redux/actions/carritoA';

export default function CardsLanding({ name, image, price, description, category, stock, id, discount, favorito = false, quantity, amountSold }) {
    const [value, setValue] = useState(2);
    const dispatch = useDispatch();
    const productsInFavoritos = useSelector((state) => state.favoritos.productosFavoritos);
    const productsInCarrito = useSelector((state) => state.carrito.productosCarrito);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (productsInFavoritos == null) return
        if (productsInFavoritos.some(element => element.id === id)) setIsFavorite(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let imageProduct
    if (image.length < 30) imageProduct = noImage;
    else imageProduct = image

    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    }));

    const Descuento = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: '#b2ff59',
        borderRadius: 7,
        padding: 2,
        margin: 5
    }));

    function handleCarrito() {
        const check = productsInCarrito.some(e => e.id === id);
        if (stock < 1) return alert('Producto sin stock')
        if (check) return alert('Producto ya en carrito')
        else {
            dispatch(addProductCarrito({
                id: id,
                name: name,
                image: image,
                price: price,
                stock: stock,
                description: description,
                category: category,
                quantity: quantity,
                amountSold: amountSold
            }))
            alert('Producto agregado a carrito')
        }
    }

    function checkFavorite() {
        if (isFavorite) {
            dispatch(removeFavorite(id));
            setIsFavorite(false)
        } else {
            dispatch(addFavorite(id));
            setIsFavorite(true)
        }
    }

    let oferta = (discount / 100) * price
    let precioConDescuento = (price - oferta);
    return (
        <Card>
            <div style={{
                position: 'absolute',
                left: 8,
            }}>
                <Descuento>-{discount}%</Descuento>
            </div>
            <div style={{
                position: 'absolute',
                right: 0
            }}>
                <IconButton aria-label="favorite">
                    {
                        (isFavorite)
                            ? <div onClick={checkFavorite} ><FavoriteIcon /></div>
                            : <div onClick={checkFavorite} ><FavoriteBorderIcon onClick={checkFavorite} /></div>
                    }
                </IconButton>
            </div>
            <div style={{
                padding: 10
            }}>
                <CardMedia style={{ height: "245px", backgroundSize: 'contain' }} image={imageProduct} />
            </div>

            <div style={{
                height: 120,
                overflow: "hidden"
            }}>
                <CardHeader
                    title={name}

                // subheader={description}
                />
            </div>
            <CardContent>
                <Rating name="read-only" value={value} readOnly size="small" />

                <Divider light />
            </CardContent>
            <CardActions>
                <div style={{
                    display: 'flex',
                    padding: 0,
                    margin: 0,
                    textDecoration: 'line-through',
                    color: 'gray',
                    maxWidth: 58
                }}>
                    <Div>${price}</Div>
                </div>
                <Div>${Math.trunc(precioConDescuento)}</Div>
                <div onClick={handleCarrito}>
                    <Button disableElevation color="primary" variant="contained" >
                        Comprar
                    </Button>
                </div>
            </CardActions >
        </Card >
    );
};
