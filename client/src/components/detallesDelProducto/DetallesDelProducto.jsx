import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux'
import style from './assets/DetallesDelProducto.module.css';
import { getOneProduct } from '../../redux/actions/detailProductA';
import noImage from './assets/no-image.jpg';
import { addProductCarrito } from '../../redux/actions/carritoA';
import Alerta from '../alertas/Alerta';

function Producto({ getOneProduct }) {
    const dispatch = useDispatch();
    const productsInCarrito = useSelector((state) => state.carrito.productosCarrito);
    const location = useLocation();
    const idProduct = location.pathname.substring(8, location.pathname.length);
    const productDetail = useSelector((state) => state.detailProduct.product);
    const [cantidad, setCantidad] = useState(1);
    const [modal, setModal] = useState({
        open: false,
        type: '',
        text: ''
    });

    useEffect(() => {
        getOneProduct(idProduct)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function stockDisponible() {
        if (productDetail.stock > 0) return (<p className={style.stockDisponible}>Stock disponible</p>)
        else return (<p className={style.stockNoDisponible}> Stock no disponible </p>)
    }

    function tipoEnvio() {
        if (productDetail.freeShipping) return (<p className={style.envio}>Envio gratis</p>)
        else return (<p className={style.envio}>Calcule su envio <Link to='/'>aquí</Link></p>)
    }

    let precioConDescuento = productDetail.price;
    function descuento() {
        if (productDetail.discount > 0) {
            let oferta = (productDetail.discount / 100) * productDetail.price
            precioConDescuento = (productDetail.price - oferta);
            return (
                <div>
                    <p className={style.antes}>ANTES: ${(productDetail.price).toFixed(2)}</p>
                    <p className={style.despues}>AHORA: ${(productDetail.price - oferta).toFixed(2)} <span className={style.green}>%{productDetail.discount} OFF</span></p>
                </div>
            )
        }
        else return (<p className={style.despues}>${productDetail.price}</p>)
    }

    function handleCarrito() {
        const check = productsInCarrito.some(e => e.id === productDetail.id);
        if (check) return setModal({ ...modal, open: true, type: 'error', text: 'Producto ya en carrito' })
        else if (productDetail.stock < 1) document.getElementById('btnCarrito').disabled = true;
        else {
            dispatch(addProductCarrito({
                id: productDetail.id,
                name: productDetail.name,
                image: productDetail.image,
                price: precioConDescuento,
                stock: productDetail.stock,
                description: productDetail.description,
                category: productDetail.category,
                quantity: cantidad
            }))
            setModal({ ...modal, open: true, type: 'success', text: 'Producto agregado a carrito' })
        }
    }


    function incrementarCantidad() {
        if (productDetail.stock === cantidad) return setCantidad(productDetail.stock)
        else setCantidad(cantidad + 1);
    }

    function decrementarCantidad() {
        if (cantidad === 1) return setCantidad(1)
        else setCantidad(cantidad - 1);
    }

    return (
        <>
            <div className={style.body}>
                <p className={style.categories}><Link to='/products'>Productos</Link> {'>'} <Link to='/products'>{productDetail.categories}</Link> </p>

                <div className={style.productCard}>
                    <img src={productDetail.image} className={style.cardImg} alt='Imagen producto' onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = `${noImage}`;
                    }} />
                    <div className={style.container}>
                        <h1 className={style.nombreProducto}>{productDetail.name}</h1>
                        <div className={style.subContainer}>
                            {stockDisponible()}
                        </div>
                        <div className={style.subContainer}>
                            {tipoEnvio()}
                        </div>
                        <div className={style.subContainer}>
                            {descuento()}
                        </div>
                        <div>
                        </div>
                        <p className={style.descripcion}>{productDetail.description}</p>
                        {
                            (productDetail.stock === 0) ? <></>
                                : <div className={style.containerCantidad}>
                                    <button onClick={() => decrementarCantidad()}>-</button>
                                    <p>{cantidad}</p>
                                    <button onClick={() => incrementarCantidad()}>+</button>
                                </div>}
                        {
                            (productDetail.stock === 0)
                                ? <></>
                                : <button id='btnCarrito' onClick={handleCarrito} className={style.button}>Agregar al carrito</button>
                        }
                    </div>
                </div>
            </div>
            {
                (modal.open)
                    ? <Alerta setOpenModal={setModal} type={modal.type} text={modal.text} />
                    : <></>
            }
        </>
    )
}

export default connect(null, { getOneProduct })(Producto)