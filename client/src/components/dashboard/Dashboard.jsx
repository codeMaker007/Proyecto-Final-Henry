import React, { useState, useEffect } from "react";
import style from './assets/Dashboard.module.css';
import CreateProduct from "../createProduct/CreateProduct";
import AdminProd from "./AdminProducts";
import DashboardUsers from './DashboardUsers';
// import DashboardHistoryShopping from './DashboardHistoryShopping';
// import DashboardHistorySearch from './DashboardHistorySearch';
// import Favoritos from "./FavoritosAdmin";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { DashboardUsersA } from '../../redux/actions/DashboardUsersA';
import { refresh } from '../../redux/actions/detailProductA';


const Dashboard = () => {
    const dispatch = useDispatch();
    const detail = useSelector ((state) => state.detailProduct.product);

    useEffect(() => {
        dispatch(refresh())
        dispatch(DashboardUsersA())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const users = useSelector((state) => state.DashboardUsersR.allUsers);

    const { user, isAuthenticated } = useAuth0();
    let findedUser;
    if (isAuthenticated) {
        findedUser = users.filter(e => e.username === user.nickname).shift()
    }
    // console.log(findedUser)

    const [isShown, setIsShown] = useState(false);
    const [buttIndex, setButtIndex] = useState(null);

    const handleClick = event => {
        event.preventDefault();
        // toggle shown state
        setIsShown(current => !current);
        setButtIndex(Number(event.target.id))

    };

    return (
        <>
            {
                (isAuthenticated && findedUser?.isAdmin)
                    ?
                     <div className={style.container}>
                        <h1>Dashboard</h1>
                        <div>
                            <button id={1} onClick={handleClick} className={style.btn}>Crear productos</button>
                            {isShown && buttIndex === 1 && <CreateProduct />}
                        </div>
                        <div>
                            <button id={2} onClick={handleClick} className={style.btn}>Catalogo producto</button>
                            {isShown && buttIndex === 2 && <AdminProd />}
                        </div>
                        <div>
                            <button id={3} onClick={handleClick} className={style.btn}>Usuarios</button>
                            {isShown && buttIndex === 3 && <DashboardUsers />}
                        </div>

                        {/* <div>
                    <button id={4} onClick={handleClick} className={style.btn}>Historial de compra</button>
                    {isShown && buttIndex === 4 && <div><p className={style.provisorio}>Solo falta que el Back mande la ruta.. mientras tanto tenes los usuarios una vez mas {"-->"}</p><DashboardHistoryShopping /></div>}
                    </div>

                    <div>
                    <button id={5} onClick={handleClick} className={style.btn}>Historial de busqueda</button>
                    {isShown && buttIndex === 5 && <div><p className={style.provisorio}>Solo falta que el Back mande la ruta.. mientras tanto tenes los usuarios una vez mas {"-->"}</p> <DashboardHistorySearch/></div>}
                </div> */}
                        {/* <div>
                    <button id={6} onClick={handleClick} className={style.btn}>Poductos favoritos</button>
                    {isShown && buttIndex === 6 && <Favoritos/>}
                </div> */}

                    </div>
                    : <h1>No eres administrador</h1>

            }
        </>
    )
}


export default Dashboard;