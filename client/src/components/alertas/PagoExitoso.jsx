import React from 'react';
import style from './assets/PagoExitoso.module.css';
import { useNavigate } from 'react-router-dom';

export default function PagoExitoso({ type }) {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/products')
    }, 2500);

    return (
        <>
            {
                (type === 'exitoso')
                    ? <div className={style.body}>
                        <div className={style.cartel}>
                            Pago Exitoso
                            <p>Será redirigido al Inicio</p>
                        </div>
                    </div>
                    : <div className={style.bodyCancel}>
                        <div className={style.cartel}>
                            Pago cancelado
                            <p>Será redirigido al Inicio</p>
                        </div>
                    </div>
            }
        </>
    )
}
