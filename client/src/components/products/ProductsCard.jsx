import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from "@material-ui/core/Divider";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import noImage from '../landingPage/assets/no-image.jpg';
import { addProductCarrito } from '../../redux/actions/carritoA';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addFavorite, removeFavorite } from '../../redux/actions/favoritosA';
import { useSnackbar } from 'notistack';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#FFC400'),
    backgroundColor: '#FFC400',
    '&:hover': {
        backgroundColor: '#FFC400',
    },
}));

const ColorButton2 = styled(Button)(({ theme }) => ({
    color: '#8d959d',
    borderColor: '#6c757d',
    marginTop: 5,
    '&:hover': {
        borderColor: '#6c757d',
    },
}));

export default function BasicCard({ id, name, price, category, image, description, stock, quantity, discount }) {
    const { enqueueSnackbar } = useSnackbar();
    const productsInCarrito = useSelector((state) => state.carrito.productosCarrito);
    const dispatch = useDispatch();

    const [isFavorite, setIsFavorite] = useState(false);
    const productsInFavoritos = useSelector((state) => state.favoritos.productosFavoritos);
    function checkFavorite() {
        if (isFavorite) {
            dispatch(removeFavorite(id));
            return setIsFavorite(false)
        } else {
            dispatch(addFavorite(id));
            return setIsFavorite(true)
        }
    }

    useEffect(() => {
        if (productsInFavoritos == null) return
        if (productsInFavoritos.some(element => element.id === id)) setIsFavorite(true)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let imageProduct
    if (image.length < 10) imageProduct = noImage;
    else imageProduct = image;

    let precioConDescuento = price;
    if (discount > 0) {
        let oferta = (discount / 100) * price
        precioConDescuento = (price - oferta);
    }

    function handleCarrito(variant) {
        const check = productsInCarrito.some(e => e.id === id);
        if (stock < 1) return enqueueSnackbar('Producto sin stock', { variant: 'warning' });
        if (check) return enqueueSnackbar('Producto ya en carrito', { variant });
        else {
            dispatch(addProductCarrito({
                id: id,
                name: name,
                image: image,
                price: price,
                stock: stock,
                description: description,
                category: category,
                quantity: quantity
            }))
            enqueueSnackbar('Producto agregado al carrito', { variant: 'success' });
        }
    }

    return (
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <div style={{
                position: 'absolute',
                zIndex: 1
            }}>
                <IconButton aria-label="favorite" onClick={checkFavorite}>
                    {
                        (isFavorite)
                            ? <div  ><FavoriteIcon /></div>
                            : <div  ><FavoriteBorderIcon /></div>
                    }
                </IconButton>
            </div>
            <Card variant="outlined" square elevation={0}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/detail/${id}`}><CardActionArea>
                    <CardMedia style={{ height: '245px', backgroundSize: 'contain' }} image={imageProduct} alt="image product" />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            <div style={{ height: '65px', overflow: 'hidden' }}>
                                {name}
                            </div>
                        </Typography>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <Rating name="read-only" value={1} readOnly size="small" sx={{ marginTop: 5, marginBottom: 1 }} />
                            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                {
                                    (discount > 0)
                                        ? <>
                                            <Typography variant="h6" style={{ textAlign: 'left' }} gutterBottom component="div">${precioConDescuento.toFixed(2)}</Typography>
                                            <Div style={{ textAlign: 'left', marginLeft: 6, marginTop: 0, padding: 0, textDecoration: 'line-through', color: 'gray' }}>${price.toFixed(2)}</Div>
                                        </>
                                        : <>
                                            <Typography variant="h6" style={{ textAlign: 'left' }} gutterBottom component="div">${price.toFixed(2)}</Typography>
                                        </>
                                }

                            </div>
                        </div>
                        <Divider light />
                    </CardContent>
                </CardActionArea></Link>
                <CardActions>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <ColorButton onClick={() => handleCarrito('error')} variant='contained' disableElevation size='medium'>
                            {
                                (stock > 0) ? 'Añadir al carrito' : 'Sin stock'
                            }
                        </ColorButton>
                        <Link style={{ textDecoration: 'none' }} to={`/detail/${id}`}><ColorButton2 style={{ width: '100%' }} variant='outlined' disableElevation size='medium'>
                            Detalles
                        </ColorButton2></Link>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    );
}
