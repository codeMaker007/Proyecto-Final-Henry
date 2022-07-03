import React from 'react';
import style from './assets/TerminarCompra.module.css';

export default function TerminarCompra() {

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
