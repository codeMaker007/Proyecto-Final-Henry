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
import { useSnackbar } from 'notistack';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#FFC400'),
    backgroundColor: '#FFC400',
    '&:hover': {
        backgroundColor: '#FFC400',
    },
}));

export default function CardsLanding({ name, image, price, description, category, stock, id, discount, favorito = false, quantity, amountSold }) {
    const { enqueueSnackbar } = useSnackbar();
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
        backgroundColor: '#FFC400',
        borderRadius: 7,
        padding: 2,
        margin: 5
    }));


    function handleCarrito() {
        const check = productsInCarrito.some(e => e.id === id);
        if (stock < 1) return enqueueSnackbar('Producto sin stock', { variant: 'warning' });
        if (check) return enqueueSnackbar('Producto ya en carrito', { variant: 'error' });
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
            enqueueSnackbar('Producto agregado al carrito', { variant: 'success' });
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
                <IconButton aria-label="favorite" onClick={checkFavorite} >
                    {
                        (isFavorite)
                            ? <div><FavoriteIcon /></div>
                            : <div><FavoriteBorderIcon /></div>
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
                <ColorButton onClick={handleCarrito} color='primary' disableElevation variant="contained" >
                    Comprar
                </ColorButton>
            </CardActions >
        </Card >
    );
};
