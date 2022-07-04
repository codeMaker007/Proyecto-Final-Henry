import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './assets/Checking.module.css';
import { useSelector } from 'react-redux';
// import axios from 'axios';
// import mercadoPagoLogo from './assets/mercado-pago-logo.png';
// import paypalLogo from './assets/paypal-logo.png';
import Paypal from '../captureOrder/Paypal';
import PagoExitoso from '../alertas/PagoExitoso';
import { limpiarCarrito } from '../../redux/actions/carritoA';
import { useDispatch } from 'react-redux';

export default function Checking() {
    const dispatch = useDispatch();
    // const [checkout, setCheckOut] = useState(false);
    const products = useSelector((state) => state.carrito);
    console.log(products.productosCarrito)
    const [pago, setPago] = useState('');

    const navigate = useNavigate();

    function handleCancelOrder() {
        dispatch(limpiarCarrito());
        navigate('/products');
    }

    // useEffect(() => {
    //     return () => {
    //         setCheckOut(false)
    //     }
    // }, [])

    let data = (products.productosCarrito.map(e => {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            category: e.category,
            quantity: e.quantity,
            price: e.price,
            cost: 500,
            stock: e.stock
        }
    }));
    console.log(data)

    // async function handleConfirmOrder(paymentMethod) {
    //     let mercadoPago = (products.productosCarrito.map(e => {
    //         return {
    //             name: e.name,
    //             description: e.description,
    //             category: e.category,
    //             quantity: e.quantity,
    //             price: e.price,
    //             cost: 500
    //         }
    //     }));
    //     const response = await axios.post('/payments', mercadoPago);
    //     console.log(response.data.init_point);
    //     window.location.href = `${response.data.init_point}`;
    // }
    // else if (paymentMethod === 'paypal') {

    //     let dataPaypal = data.map(e => {
    //         return {
    //             name: e.name,
    //             description: e.description,
    //             quantity: e.quantity,
    //             unit_amount: {
    //                 currency_code: 'USD',
    //                 value: e.price
    //             }
    //         }
    //     });
    //     const response = await axios.post('/create-order', dataPaypal);
    //     window.location.href = `${response.data}`;
    // }
    // }

    // let total = products.totalCarrito
    return (
        <>
            {
                (pago === 'exitoso')
                    ? <PagoExitoso type='exitoso' />
                    : (pago === 'cancelado')
                        ? <PagoExitoso type='cancelado' />
                        : <div className={style.body}>
                            <div className={style.containerCard}>
                                {products.productosCarrito.map(e => {
                                    return (
                                        <div key={e.id} className={style.infoProduct}>
                                            <h3> {e.name} ${e.price} x {e.quantity} unidades </h3>
                                        </div>
                                    )
                                })}
                                <h1>${products.totalCarrito}</h1>
                                <button onClick={() => handleCancelOrder()}>Cancelar orden</button>
                                <h1>Pagar con:</h1>
                                <div className={style.methodsPayment}>
                                    {/* <button onClick={handleConfirmOrder} >MercadoPago</button> */}
                                    <Paypal data={data} total={products.totalCarrito} setPago={setPago} />
                                </div>
                            </div>
                        </div>
            }
        </>
    )
}
