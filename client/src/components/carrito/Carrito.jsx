import React from 'react';
import { useSelector, connect } from 'react-redux';
import { deleteProductCarrito } from '../../redux/actions/carritoA';
import style from './assets/Carrito.module.css';
import close from './assets/cross-close.svg';

function Carrito({ deleteProductCarrito }) {
    const products = useSelector((state) => state.carrito.productosCarrito);
    let total
    if (products.length <= 0) total = 0
    else total = Math.trunc(products.map(e => e.price).reduce((prevValue, currentValue) => prevValue + currentValue)) // Saca el total de los productos dentro del carrito

    function handleDelete(e) {
        deleteProductCarrito(e);
    }

    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.products}>
                    {products.map(e => (
                        <div key={e.id} className={style.card}>
                            <img src={e.image} alt='Imagen producto' width='50px' />
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <img className={style.cancelBtn} src={close} onClick={() => handleDelete(e)} alt='Close' />
                        </div>
                    ))}
                </div>
                <div className={style.containerTotal}>
                    <div className={style.cardTotal}>
                        <p>Total</p>
                        <h2>${total}</h2>
                        <button className={style.comprarBtn}>Terminar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(null, { deleteProductCarrito })(Carrito)
