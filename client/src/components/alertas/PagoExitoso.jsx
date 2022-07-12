import React from 'react';
import style from './assets/PagoExitoso.module.css';

export default function PagoExitoso({ type }) {

    setTimeout(() => {
        window.location.href = 'http://localhost:3000/';
    }, 2500);

    return (
        <>
            {
                (type === 'exitoso')
                    ? <div className={style.body}>
                        <div className={style.cartel}>
                            Pago Exitoso
                            <p>Será redirigido al catalogo</p>
                        </div>
                    </div>
                    : <div className={style.bodyCancel}>
                        <div className={style.cartel}>
                            Pago cancelado
                            <p>Será redirigido al catalogo</p>
                        </div>
                    </div>
            }
        </>
    )
}
