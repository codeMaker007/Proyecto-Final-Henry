import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { Button } from "@material-ui/core";
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import noImage from '../productCard/assets/no-image.jpg';
import { addProductCarrito } from '../../redux/actions/carritoA';

export default function MediaControlCard({ booleano, bestSellers }) {
    const dispatch = useDispatch();
    const [value, setValue] = useState(2);
    const productsInCarrito = useSelector((state) => state.carrito.productosCarrito);
    // const productsInFavoritos = useSelector((state) => state.favoritos.productosFavoritos);
    // const [isFavorite, setIsFavorite] = useState(false);
    // const [modal, setModal] = useState({
    //     open: false,
    //     type: '',
    //     text: ''
    // });
    // console.log(bestSellers)

    function handleCarrito() {
        const check = productsInCarrito.some(e => e.id === bestSellers.id);
        if (bestSellers.stock < 1) return alert('Producto sin stock')
        if (check) return alert('Producto ya en carrito')
        else {
            dispatch(addProductCarrito({
                id: bestSellers?.id,
                name: bestSellers?.name,
                image: bestSellers?.image,
                price: bestSellers?.price,
                stock: bestSellers?.stock,
                description: bestSellers?.description,
                category: bestSellers?.category,
                quantity: bestSellers?.quantity,
                amountSold: bestSellers?.amountSold
            }))
            alert('Producto agregado a carrito')
        }
    }
    return (
        <>
            {
                (booleano)
                    ? < Card sx={{ display: 'flex', padding: 3, height: '85%' }}>
                        {
                            (bestSellers?.image)
                                ? <img src={bestSellers?.image} alt='imagenProduct' width='50%' height='70%' style={{ borderRadius: 5, alignSelf: 'center' }} />
                                : <img src={noImage} alt='imagenProduct' width='50%' height='100%' style={{ borderRadius: 5 }} />
                        }
                        < Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <div style={{
                                    textAlign: 'left',
                                }}>
                                    <Typography component="div" variant="h5">
                                        {bestSellers?.name}
                                    </Typography>
                                </div>
                                <div style={{
                                    textAlign: 'justify',
                                }}>
                                    <Typography variant="subtitle2" component="div">
                                        ${bestSellers?.price}
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                        {bestSellers?.description}
                                    </Typography>

                                </div>
                            </CardContent>
                            <Box sx={{ display: 'flex', pl: 1, pb: 1, flexDirection: 'column' }}>
                                <Rating name="read-only" value={value} readOnly size="small" sx={{ pb: 1.5 }} />
                                <div onClick={handleCarrito}>
                                    <Button disableElevation color="primary" variant="contained" >
                                        Comprar
                                    </Button>
                                </div>
                            </Box>
                        </Box>


                    </Card >
                    : < Card sx={{ display: 'flex', padding: 3, height: '70%' }}>
                        {
                            (bestSellers?.image)
                                ? <img src={bestSellers.image} alt='imagenProduct' width='40%' height='100%' style={{ borderRadius: 5 }} />
                                : <img src={noImage} alt='imagenProduct' width='40%' height='100%' style={{ borderRadius: 5 }} />

                        }
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <div style={{
                                    textAlign: 'left',
                                }}>
                                    <Typography component="div" variant="h7">
                                        {bestSellers?.name}
                                    </Typography>
                                </div>
                                <div style={{
                                    textAlign: 'justify',
                                }}>
                                    <Typography variant="subtitle2" component="div">
                                        ${bestSellers?.price}
                                    </Typography>
                                </div>
                            </CardContent>
                            <Box sx={{ display: 'flex', pl: 1, pb: 1, flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Rating name="read-only" value={value} readOnly size="small" sx={{ pb: 0.9 }} />
                                <div onClick={handleCarrito} style={{ marginBottom: -5 }}>
                                    <Button size="small" disableElevation color="primary" variant="contained" >
                                        Comprar
                                    </Button>
                                </div>
                            </Box>
                        </Box>


                    </Card >
            }
        </>
    );
}