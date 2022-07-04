import React from 'react';
import style from './assets/Alertas.module.css';
import checked from './assets/checked.svg';
import error from './assets/error.svg';
import warning from './assets/warning.svg';

export default function Alerta({ setOpenModal, type, text }) {
    // const [state, setState] = useState();

    setTimeout(() => {
        setOpenModal(false)
    }, 1500);

    function tipoAlerta() {
        switch (type) {
            case 'success':
                return (
                    <div className={style.success}>
                        <img src={checked} alt="checked" className={style.svgChecked} />
                        <div className={style.titleCloseBtn}>{text}</div>
                    </div>
                )
            case 'error':
                return (
                    <div className={style.error}>
                        <img src={error} alt="error" className={style.svgChecked} />
                        <div className={style.titleCloseBtn}>{text}</div>
                    </div>
                )
            case 'warning':
                return (
                    <div className={style.warning}>
                        <img src={warning} alt="warning" className={style.svgChecked} />
                        <div className={style.titleCloseBtn}>{text}</div>
                    </div>
                )
            default:
                break;
        }
    }

    return (
        <>
            {tipoAlerta()}
        </>
    );
}
