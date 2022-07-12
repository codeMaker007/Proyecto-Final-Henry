import React, { useEffect } from 'react';
import { getOrder } from '../../redux/actions/createOrderA';
import { useDispatch } from 'react-redux';
import { limpiarCarrito } from '../../redux/actions/carritoA';

export default function Success() {
    let orderIdPayPal = localStorage.getItem('idOrderPP');
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log(orderIdPayPal)


    const queryParams = new URLSearchParams(window.location.search);
    const orderId = queryParams.get("merchant_order_id");
    // const payerId = queryParams.get("PayerID");


    const dispatch = useDispatch();

    useEffect(() => {
        if (orderId?.length > 1) dispatch(getOrder(orderId, usuario.id, 'mp'));
        dispatch(limpiarCarrito());
        setTimeout(() => {
            window.location.href = 'http://localhost:3000/';
        }, 1500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>Pago exitoso</h1>
            <h3>Ahora será redirigido al inicio</h3>
        </div>
    )
}
