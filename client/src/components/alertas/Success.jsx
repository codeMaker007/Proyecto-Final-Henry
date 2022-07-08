import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOrder } from '../../redux/actions/createOrderA';
import { useDispatch } from 'react-redux';
import { limpiarCarrito } from '../../redux/actions/carritoA';

export default function Success() {
    const queryParams = new URLSearchParams(window.location.search);
    const orderId = queryParams.get("merchant_order_id");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (orderId?.length > 1) dispatch(getOrder(orderId));
        dispatch(limpiarCarrito());
        setTimeout(() => {
            navigate('/');
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
