import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Buscador from '../buscador/Buscador'
import style from './assets/Navbar.module.css';
import shopCart from './assets/shop-cart.svg'
import account from './assets/account-circle.svg'
// import Logout from '../logout/Logout'
import { useAuth0 } from "@auth0/auth0-react";
// import Filtrado from '../products/Filtrado';
import { useDispatch } from 'react-redux';
import { DashboardUsersA } from '../../redux/actions/DashboardUsersA';

export default function Navbar() {
    const productsCart = useSelector((state) => state.carrito.productosCarrito)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DashboardUsersA())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const users = useSelector((state) => state.DashboardUsersR.allUsers)

    let number = productsCart.length;

    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    console.log(user)

    let isAdmin;
    if (isAuthenticated) {
        let findedUser = users.find(e => e.email === user.email);
        (findedUser?.isAdmin) ? isAdmin = true : isAdmin = false;
        console.log(findedUser)
    }
    // console.log(findedUser)


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
                {(isAuthenticated && isAdmin) ? <NavLink to='/dashboard' className={style.active}><p className={style.dashboard}>Dashboard</p></NavLink> : <></>}
                {(isAuthenticated) ? <NavLink to='/profile'><img src={account} alt='MiAccount' className={style.account} /></NavLink> : <img onClick={() => { loginWithRedirect() }} src={account} alt='MiAccount' className={style.account} />}
                <NavLink to='/carrito'><img src={shopCart} alt='Carrito' className={style.changuito} /></NavLink>
                <span className={style.notiCantChanguito}></span>
                <p className={style.cantChanguito}>{number}</p>
            </span>

            {/* <Link to='/createProduct'><button className={style.btnCreateProduct}>Crear producto</button></Link> */}
        </div>
    )
}
