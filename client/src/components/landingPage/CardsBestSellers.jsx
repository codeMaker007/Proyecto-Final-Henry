import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import { Button } from "@material-ui/core";
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Rating from '@mui/material/Rating';
import noImage from '../productCard/assets/no-image.jpg';
import { addProductCarrito } from '../../redux/actions/carritoA';
import { styled } from '@mui/material/styles';
import { useSnackbar } from 'notistack';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#FFC400'),
    backgroundColor: '#FFC400',
    '&:hover': {
        backgroundColor: '#FFC400',
    },
}));

export default function MediaControlCard({ booleano, bestSellers }) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    // const [value, setValue] = useState(bestSellers?.averageScore);
    const productsInCarrito = useSelector((state) => state.carrito.productosCarrito);

    function handleCarrito() {
        const check = productsInCarrito.some(e => e.id === bestSellers.id);
        if (bestSellers.stock < 1) return enqueueSnackbar('Producto sin stock', { variant: 'warning' });
        if (check) return enqueueSnackbar('Producto ya en carrito', { variant: 'error' });
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
            enqueueSnackbar('Producto agregado al carrito', { variant: 'success' });
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
                                {/* <Rating name="read-only" value={value} readOnly size="small" sx={{ pb: 1.5 }} /> */}
                                <div onClick={handleCarrito}>
                                    <ColorButton disableElevation color='primary' variant="contained" >
                                        Comprar
                                    </ColorButton>
                                </div>
                            </Box>
                        </Box>


                    </Card >
                    : < Card sx={{ display: 'flex', padding: 0, height: '100%' }}>
                        {
                            (bestSellers?.image)
                                ? <img src={bestSellers.image} alt='imagenProduct' width='40%' height='70%' style={{ borderRadius: 5, alignSelf: 'center' }} />
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
                                {/* <Rating name="read-only" value={value} readOnly size="small" sx={{ pb: 0.9 }} /> */}
                                <div onClick={handleCarrito} style={{ marginBottom: -5 }}>
                                    <ColorButton size="small" color='primary' disableElevation variant="contained" >
                                        Comprar
                                    </ColorButton>
                                </div>
                            </Box>
                        </Box>


                    </Card >
            }
        </>
    );
}