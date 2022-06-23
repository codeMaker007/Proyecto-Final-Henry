import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Buscador from '../buscador/Buscador'
import style from './assets/Navbar.module.css';
import shopCart from './assets/shop-cart.svg'
import account from './assets/account-circle.svg'

export default function Navbar() {
    const productsCart = useSelector((state) => state.carrito.productosCarrito)

    let number = productsCart.length

    return (
        <div className={style.navbar}>
            <NavLink to='/products' className={style.active}><p className={style.btnProducts}>PRODUCTOS</p></NavLink>
            <Buscador />
            {/* <NavLink to='/login'><button>Login</button></NavLink> */}
            <span className={style.containerNoti}>
                <NavLink to='/login'><img src={account} alt='MiAccount' className={style.account} /></NavLink>
                <NavLink to='/carrito'><img src={shopCart} alt='Carrito' className={style.changuito} /></NavLink>
                <span className={style.notiCantChanguito}></span>
                <p className={style.cantChanguito}>{number}</p>
            </span>
        </div>
    )
}
