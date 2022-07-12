import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { resetTotal } from '../../redux/actions/carritoA';
import { useAuth0 } from "@auth0/auth0-react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Comprobaciones from './Comprobaciones';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
}));

const Img = styled('img')({
    // display: 'block',
    width: 150,
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

export default function Checkout({ setCheckout }) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.carrito);
    // const users = useSelector((state) => state.DashboardUsersR.allUsers)
    const { isAuthenticated } = useAuth0();
    const [value, setValue] = useState('mercadopago');

    const [personalData, setPersonalData] = useState({ name: "", username: "", dni: "", celphone: "", caracteristica: "" })

    const [addressData, setAddressData] = useState({ street: "", number: "", zipCode: "", province: "", location: "", apartment: "", description: "" });

    useEffect(() => {
        return () => {
            dispatch(resetTotal());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handlePayment = async () => {
        if (personalData.name?.length < 2 || personalData.username?.length < 2 || personalData.dni?.length < 2 || personalData.celphone?.length < 2 || personalData.caracteristica?.length < 2) return enqueueSnackbar('Faltan completar datos', { variant: 'info' });
        if (addressData.street?.length < 2 || addressData.number?.length < 2 || addressData.zipCode?.length < 2 || addressData.province?.length < 2 || addressData.location?.length < 2) return enqueueSnackbar('Faltan completar datos', { variant: 'info' });
        if (value === 'mercadopago') {
            let data = (products.productosCarrito.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    category: e.category,
                    quantity: e.quantity,
                    price: e.price,
                    cost: 500
                }
            }));
            const response = await axios.post('/payments', data);
            window.location.href = `${response.data.init_point}`;
        }
        else if (value === 'paypal') {
            let data = products.productosCarrito.map(e => {
                return {
                    name: e.name,
                    description: e.description,
                    quantity: e.quantity,
                    unit_amount: {
                        currency_code: 'USD',
                        value: e.price
                    }
                }
            });
            const response = await axios.post('/create-order', data);
            const id = response.data.id;
            localStorage.setItem('idOrderPP', JSON.stringify(id));
            window.location.href = `${response.data.links[1].href}`;
        }
    };

    return (
        <Box sx={{ width: 1, marginTop: 3 }}>
            <Grid container direction='column'>
                <Grid container justifyContent='center' spacing={2} >
                    <Grid item md={7} lg={7} xl={6}>
                        <Item sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }} elevation={1}>
                            {
                                (!(isAuthenticated))
                                    ? <div> <br />
                                        <h1>Logueate para continuar con la compra... </h1>
                                    </div>
                                    : (
                                        <>
                                            < Typography variant='subtitle2' mb={4}>CHECK OUT</Typography>
                                            <Box sx={{ width: 1, borderBottom: 'solid', borderBottomWidth: 1, borderColor: '#e1e1e1', marginLeft: -0.4, marginTop: 0.5 }}>
                                                < Grid container justifyContent='center' >
                                                    {/* < Grid item md={12} lg={12} xl={12} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', overflow: 'hidden' }}> */}
                                                    {/* </Grid > */}
                                                    <Comprobaciones personalData={personalData} setPersonalData={setPersonalData} addressData={addressData} setAddressData={setAddressData} />
                                                </Grid >
                                            </Box >
                                            <div style={{ display: 'flex' }}>
                                                <ColorButton onClick={() => setCheckout(false)} sx={{ margin: 1, borderRadius: 1, fontSize: 10 }}>Volver al carrito</ColorButton>
                                            </div>
                                        </>)
                            }
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={10.5} md={3} lg={3} xl={2.5}>
                        {/* 
                        <Item sx={{ marginTop: 2, textAlign: 'right', borderBottom: '1px solid', borderColor: '#022335' }} elevation={1} >

                        </Item> */}
                        {
                            (!(isAuthenticated))
                                ? <> </>
                                :
                                <>
                                    <Item sx={{ marginTop: 3 }}>
                                        <Grid container spacing={0.5} sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingTop: 3 }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', height: 50 }}>
                                                <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>Envio</Typography></div>
                                                <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>$500</Typography></div>
                                            </div>
                                            <Divider />
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', height: 50, marginTop: 10 }}>
                                                <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>Total</Typography></div>
                                                <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>${products.totalCarrito.toFixed(2)}</Typography></div>
                                            </div>
                                            <Divider />
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', height: 50, marginTop: 30 }}>
                                                <div style={{ width: '50%' }}> <Typography variant="button" display="block" gutterBottom>Metodos de pago</Typography></div>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center', alignContent: 'center' }}>
                                                <FormControl >
                                                    <RadioGroup
                                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                                        name="controlled-radio-buttons-group"
                                                        value={value}
                                                        onChange={handleChange}
                                                    >
                                                        <FormControlLabel value="mercadopago" control={<Radio />} label={<Img src='https://sexualidadyeducacion.com/wp-content/uploads/2020/04/mercadopago-button.png' alt='Mercadopago' />} />
                                                        <FormControlLabel value="paypal" control={<Radio />} label={<Img src='https://www.paypalobjects.com/webstatic/mktg/merchant/pages/express-checkout/express-checkout-hero-sg.png' alt='Paypal' />} />
                                                    </RadioGroup>
                                                </FormControl>

                                            </div>
                                        </Grid>
                                    </Item>
                                    <ColorButton sx={{ marginTop: 1, width: '100%', borderRadius: 2 }} onClick={handlePayment}>Pagar</ColorButton>
                                </>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}
