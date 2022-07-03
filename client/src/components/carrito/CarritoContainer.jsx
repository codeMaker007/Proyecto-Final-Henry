import React, { useState, useEffect } from 'react';
import Carrito from './Carrito';
import { useSelector, useDispatch } from 'react-redux';
import TerminarCompra from './TerminarCompra';
import style from './assets/Carrito.module.css';
import Alert from '../alertas/Alerta';
import { resetTotal } from '../../redux/actions/carritoA';
import Checking from './Checking';
import { useAuth0 } from "@auth0/auth0-react";

export default function CarritoContainer() {
    const dispatch = useDispatch();
    const [isCheckout, setIsCheckout] = useState(true);
    const [pedido, setPedido] = useState(false);
    const products = useSelector((state) => state.carrito);
    const [alert, setAlert] = useState({
        warning: false,
        error: false
    });

    const { isAuthenticated } = useAuth0();

    function handleClick() {
        if (products.productosCarrito.length === 0) return setAlert({ ...alert, warning: true });
        if (!isAuthenticated) return setAlert({ ...alert, error: true });
        else if (isCheckout === true) return setIsCheckout(false);
        else if (isCheckout === true) return setPedido(false);
        else setPedido(true);
    }

    useEffect(() => {
        return () => {
            dispatch(resetTotal());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={style.body}>
            <div className={style.container}>
                {
                    (isCheckout)
                        ? <Carrito />
                        : (pedido)
                            ? <Checking />
                            : <TerminarCompra />
                }
                {
                    (pedido)
                        ? <></>
                        : <div className={style.containerTotal}>
                            <div className={style.cardTotal}>
                                <p className={style.total}>Total</p>
                                <h2>${products.totalCarrito.toFixed(2)}</h2>

                                <button id='btnNext' className={style.comprarBtn} onClick={() => handleClick()}>Continuar</button>
                            </div>
                        </div>
                }
            </div>
            {
                (alert.warning) ? <Alert type='warning' setOpenModal={setAlert} text='No hay productos en el carrito' /> :
                    (alert.error)
                        ? <Alert type='error' setOpenModal={setAlert} text='No estas logeado' />
                        : <></>
            }
        </div>
    )
}
