import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Buscador from '../buscador/Buscador'
import style from './assets/Navbar.module.css';
import shopCart from './assets/shop-cart.svg'
import account from './assets/account-circle.svg'
// import Logout from '../logout/Logout'
import { useAuth0 } from "@auth0/auth0-react";
// import Filtrado from '../products/Filtrado';

export default function Navbar() {
    const productsCart = useSelector((state) => state.carrito.productosCarrito)

    let number = productsCart.length;

    const { user, isAuthenticated, loginWithRedirect } = useAuth0()

    // user.picture
    return (
        <div className={style.navbar}>

            <NavLink to='/'><div className={style.logo}>LOGO</div></NavLink>
            <NavLink to='/products' className={style.active}><p className={style.btnProducts}>PRODUCTOS</p></NavLink>
            <NavLink to='/favoritos' className={style.active}><p className={style.btnProducts}>FAVORITOS</p></NavLink>
            {/* <Logout /> */}
            <Buscador />
            {/* <NavLink to='/login'><button>Login</button></NavLink> */}
            <span className={style.containerNoti}>
                {(isAuthenticated) ? <NavLink to='/profile'><img src={account} alt='MiAccount' className={style.account} /></NavLink> : <img onClick={() => { loginWithRedirect() }} src={account} alt='MiAccount' className={style.account} />}
                <NavLink to='/carrito'><img src={shopCart} alt='Carrito' className={style.changuito} /></NavLink>
                <span className={style.notiCantChanguito}></span>
                <p className={style.cantChanguito}>{number}</p>
            </span>

            {/* <Link to='/createProduct'><button className={style.btnCreateProduct}>Crear producto</button></Link> */}
        </div>
    )
}
