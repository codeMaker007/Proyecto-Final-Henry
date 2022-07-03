import React from "react";
import { useState, } from "react";
import style from './assets/Dashboard.module.css';
import CreateProduct from "../createProduct/CreateProduct";
import AdminProd from "./AdminProducts";
import DashboardUsers from './DashboardUsers';
import DashboardHistoryShopping from './DashboardHistoryShopping';
import DashboardHistorySearch from './DashboardHistorySearch';


const Dashboard = () => {
    

    const [isShown, setIsShown] = useState(false);
    const [buttIndex, setButtIndex] = useState(null);

    const handleClick = event => {
        event.preventDefault();
        // toggle shown state
        setIsShown(current => !current);
        setButtIndex(Number(event.target.id))
        
    };
    
    return (
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
            
            <div>
                <button id={4} onClick={handleClick} className={style.btn}>Historial de compra</button>
                {isShown && buttIndex === 4 && <div><p className={style.provisorio}>Solo falta que el Back mande la ruta.. mientras tanto tenes los usuarios una vez mas {"-->"}</p><DashboardHistoryShopping /></div>}
            </div>
            
            <div>
                <button id={5} onClick={handleClick} className={style.btn}>Historial de busqueda</button>
                {isShown && buttIndex === 5 && <div><p className={style.provisorio}>Solo falta que el Back mande la ruta.. mientras tanto tenes los usuarios una vez mas {"-->"}</p> <DashboardHistorySearch/></div>}
            </div>
        </div>
        
    )
}

export default Dashboard;