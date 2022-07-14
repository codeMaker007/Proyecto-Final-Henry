import React, { useEffect } from 'react';
import { getOrder } from '../../redux/actions/createOrderA';
import { useDispatch } from 'react-redux';
import { limpiarCarrito } from '../../redux/actions/carritoA';
import style from './assets/success.module.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import CheckIcon from '@mui/icons-material/Check';

export default function Success() {
    let orderIdPayPal = JSON.parse(localStorage.getItem('idOrderPP'));
    let usuario = JSON.parse(localStorage.getItem('usuario'));


    const queryParams = new URLSearchParams(window.location.search);
    const orderId = queryParams.get("merchant_order_id");
    const payerId = queryParams.get("PayerID");


    const dispatch = useDispatch();

    useEffect(() => {
        if (orderId?.length > 1) dispatch(getOrder(orderId, usuario.id, 'mp'));
        else if (payerId?.length > 1) dispatch(getOrder(orderIdPayPal, usuario.id, 'pp'));
        dispatch(limpiarCarrito());
        setTimeout(() => {
            window.location.href = 'https://deployment-ruddy.vercel.app/';
        }, 1500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={style.body} >
            <div className={style.cartel}>
            </div>
            <Stack sx={{mt:'10%'}}>
            <Alert icon={<CheckIcon sx={{fontSize:'90px'}} />} severity="success" sx={{fontSize:'large', textAlign: 'center'}}>
            <AlertTitle sx={{pt:'20%', textAlign: 'center', width: '50vw', height:'50vh', fontSize:'200%'}}>Pago Aprobado</AlertTitle>
            Ahora será redirigido al inicio — <strong>Muchas Gracias!</strong>
            </Alert>
            </Stack>
        </div>
    )
}
