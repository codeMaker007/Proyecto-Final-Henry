import React, { useState, useEffect } from 'react';
import noImage from './assets/no-image.jpg';
import { incrementTotal, decrementTotal, deleteProductCarrito, incrementeQuantity, decrementeQuantity } from '../../redux/actions/carritoA';
import { useDispatch } from 'react-redux';
import close from './assets/cross-close.svg';
import style from './assets/CarritoCards.module.css';

function CarritoCards({ id, name, image, price, description, categories, stock, freeShipping, brand, discount, quantity }) {
    const dispatch = useDispatch();
    const [cantComprar, setCantComprar] = useState(quantity)

    useEffect(() => {
        // dispatch(resetTotal());
        dispatch(incrementTotal(price * cantComprar));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const incrementar = () => {
        if (cantComprar === stock) setCantComprar(stock)
        else {
            setCantComprar(cantComprar + 1)
            dispatch(incrementTotal(price));
            dispatch(incrementeQuantity(id));
        }
    }

    const decrementar = () => {
        if (cantComprar === 1) setCantComprar(1)
        else {
            setCantComprar(cantComprar - 1)
            dispatch(decrementTotal(price));
            dispatch(decrementeQuantity(id));
        }
    }

    function handleDelete(e) {
        dispatch(decrementTotal(price * cantComprar));
        dispatch(deleteProductCarrito(e));
    }

    return (
        <div className={style.card}>
            <div className={style.containerImg}>
                <img className={style.productImg} src={image} alt='Imagen producto' onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${noImage}`;
                }} />
            </div>
            <div className={style.containerDetails}>
                <p className={style.nameProduct}>{name}</p>
                <p className={style.priceProduct}>${(price) ? price.toFixed(2) : price}c/u</p>
            </div>
            <div className={style.containerStock}>
                <button className={style.btn} onClick={decrementar}>-</button>
                <p>{cantComprar}</p>
                <button className={style.btn} onClick={incrementar}>+</button>
            </div>
            <img className={style.cancelBtn} src={close} onClick={() => handleDelete(id)} alt='Close' />
        </div>
    )
}


export default CarritoCards