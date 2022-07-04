import React from 'react';
import style from './assets/TerminarCompra.module.css';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export default function TerminarCompra() {
    const { user } = useAuth0();
    const allUser = useSelector((state) => state.DashboardUsersR.allUsers);
    // console.log(allUser)
    const actualUser = allUser.filter(e => e.username === user.nickname).shift()
    console.log(actualUser)
    // let address = axios.get(`user/${actualUser.id}`);
    // console.log(address)


    const address = async function () {
        return (await axios.get(`users/${actualUser.username}`)).data;
    };
    // let result = (async function address() {
    //     return (await axios.get(`users/${actualUser.username}`)).data;
    // })();

    // address()
    // console.log(result)

    const printAddress = async () => {
        const a = await address();
        console.log(a);
    };

    printAddress();

    return (
        <div className={style.container}>
            <div>
                <h2>¿Cómo querés recibir o retirar tu compra?</h2>
                <div className={style.cardContainer}>
                    <p>Domicilio: Argentina, Buenos Aires</p>
                </div>
                <h3>Recibir compra</h3>
                <form>
                    <div className={style.cardContainer}>
                        <div>GRATIS</div>
                    </div>
                    <div>
                    </div>
                    <h3>Retirar compra</h3>
                    <div className={style.cardContainer}>
                        GRATIS
                    </div>
                </form>
            </div>
            {/* <button onClick={() => handleClick()}>Volver al carrito</button> */}
        </div>
    )
}
