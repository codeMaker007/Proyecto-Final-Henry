
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import CardCarrito from './CardCarrito';
import Divider from '@mui/material/Divider';
import { resetTotal } from '../../redux/actions/carritoA';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#FFC400'),
    borderRadius: 0,
    backgroundColor: '#FFC400',
    '&:hover': {
        backgroundColor: '#ffa800',
    },
}));


export default function BasicGrid() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.carrito);

    useEffect(() => {
        return () => {
            dispatch(resetTotal());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function renderCheckout() {
        if (products.productosCarrito.length === 0) return alert('No hay productos en el carrito')
        navigate('/checkout')
    }

    return (
        <Box sx={{ width: 1, marginTop: 3 }}>
            <Grid container direction='column'>
                <Grid container justifyContent='center' spacing={2} >
                    <Grid item md={7} lg={7} xl={6}>
                        <Item sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }} elevation={1}>
                            {
                                (products.productosCarrito.length === 0)
                                    ? <div> <br />
                                        <h1>No has agregado productos al carrito... </h1>
                                    </div>
                                    : (
                                        <>
                                            < Typography variant='subtitle2' mb={4}>CARRITO</Typography>
                                            <Box sx={{ width: 1, borderBottom: 'solid', borderBottomWidth: 1, borderColor: '#e1e1e1', marginLeft: -0.4, marginTop: 0.5 }}>
                                                < Grid container justifyContent='center' >
                                                    < Grid item md={12} lg={12} xl={12} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', overflow: 'hidden' }}>
                                                        <div style={{ display: 'flex', flexDirection: 'column', width: '10%', height: 20, justifyContent: 'center', alignItems: 'center', hover: '#FFC400' }}>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', width: '15%', height: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}></div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', width: '25%', height: 20, flexWrap: 'wrap', textAlign: 'left', justifyContent: 'center', marginBottom: 4 }}>
                                                            <Typography variant="button" display="block" gutterBottom>Producto</Typography>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', width: '15%', height: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
                                                            <Typography variant="button" display="block" gutterBottom>Precio</Typography>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', width: '20%', height: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
                                                            <Typography variant="button" display="block" gutterBottom>Cantidad</Typography>
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', width: '15%', height: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 4 }}>
                                                            <Typography variant="button" display="block" gutterBottom>Total</Typography>
                                                        </div>
                                                    </Grid >
                                                </Grid >
                                            </Box >
                                            <div>

                                                {products.productosCarrito.map(e => (
                                                    <CardCarrito
                                                        key={e.id}
                                                        id={e.id}
                                                        name={e.name}
                                                        image={e.image}
                                                        price={e.price}
                                                        stock={e.stock}
                                                        quantity={e.quantity}
                                                    />
                                                ))}
                                            </div>
                                        </>)
                            }

                            {
                                (products.productosCarrito.length === 0)
                                    ? <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 10 }}>Ver productos</ColorButton></Link>
                                    : <div style={{ display: 'flex' }}>
                                        <Link to="/products" style={{ textDecoration: 'none', color: 'black' }} ><ColorButton sx={{ margin: 1, borderRadius: 1, fontSize: 10 }}>Continuar comprando</ColorButton></Link>
                                    </div>
                            }

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={10.5} md={3} lg={3} xl={2.5}>
                        {/* 
                        <Item sx={{ marginTop: 2, textAlign: 'right', borderBottom: '1px solid', borderColor: '#022335' }} elevation={1} >

                        </Item> */}
                        <Item sx={{ marginTop: 3 }}>
                            <Grid container spacing={0.5} sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingTop: 3 }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', height: 50 }}>
                                    <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>Subtotal</Typography></div>
                                    <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>${products.totalCarrito.toFixed(2)}</Typography></div>
                                </div>
                                <Divider />
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', height: 50, marginTop: 30 }}>
                                    <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>Total</Typography></div>
                                    <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>${products.totalCarrito.toFixed(2)}</Typography></div>
                                </div>
                                <ColorButton onClick={renderCheckout} sx={{ alignSelf: 'center', width: '102%' }}>Check out</ColorButton>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Grid >
        </Box >
    );
}
