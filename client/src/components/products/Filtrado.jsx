import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { orderByPrice, getByCategory, rangoByPrice, byDiscount, byEnvios, getAllProducts } from '../../redux/actions/productsA';
import style from './assets/Filtrado.module.css';
import BuscadorMarcas from "./BuscadorMarcas";


function Filtrado({ orderByPrice, getByCategory, rangoByPrice, byEnvios, byDiscount, getAllProducts }) {
    const [state, setState] = useState({
        price: '',
        categoria: '',
        rango: "",
        discount: "",
        envio: "",
        marcas: "",
    })

    useEffect(() => {
        if (state.categoria.length > 2) getByCategory(state.categoria)
        if (state.rango.length > 2) rangoByPrice(state.rango)////////
        if (state.discount.length > 2) byDiscount(state.discount)////////
        if (state.envio.length > 2) byEnvios(state.envio)////////
        setTimeout(() => {
            if (state.price.length > 2) orderByPrice(state.price)
        }, 500);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    function resetStates() { // PROVISORIO PROVISORIO PROVISORIO PROVISORIO PROVISORIO PROVISORIO
        setState({
            price: '',
            categoria: '',
            rango: "",
            discount: "",
            envio: "",
            marcas: ""
        })
        getAllProducts();
    }

    return (
        <div>
            <form className={style.container}>
                <p>Ordenar productos</p>
                <label htmlFor='asc/desc'>
                    <select className={style.selectorForm} value={state.price} onChange={(e) => setState({ ...state, price: e.target.value })}>
                        <option value={''} hidden>Precio</option>
                        <option value='ASC'>Ascendente</option>
                        <option value='DESC'>Descendente</option>
                    </select>
                </label>
                <label htmlFor='categorias'>
                    <select className={style.selectorForm} value={state.categoria} onChange={(e) => setState({ ...state, categoria: e.target.value })}>
                        <option value={''} hidden>Categoría</option>
                        <option value='MotherBoard'>MotherBoard</option>
                        <option value='RAM'>RAM</option>
                        <option value='Micro-procesador'>Micro-procesador</option>
                        <option value='SSD'>SSD</option>
                        <option value='HDD'>HDD</option>
                        <option value='M.2NVme'>M.2NVme</option>
                        <option value='Placa de video'>Placa de videos</option>
                        <option value='Monitor'>Monitores</option>
                        <option value='Fuente de alimentación'>Fuente de alimentación</option>
                        <option value='Teclados'>Teclados</option>
                        <option value='Auriculares'>Auriculares</option>
                        <option value='Mouse'>Mouse</option>
                        <option value='Mousepad'>Mousepad</option>
                        <option value='Sillas'>Sillas</option>
                        <option value='Gabinete'>Gabinetes</option>
                        <option value='Webcam'>Webcam</option>
                        <option value='Parlante'>Parlante</option>
                        <option value='Micrófono'>Microfonos</option>
                        <option value='Refrigeración'>Refrigeración</option>
                    </select>
                </label>

                <label htmlFor='byEnvios'>
                    <select className={style.selectorForm} value={state.envio} onChange={(e) => setState({ ...state, envio: e.target.value })}>
                        <option value={''} hidden>Envíos</option>
                        <option value='false'>Envíos con costo</option>
                        <option value='true'>Envío Gratis</option>
                    </select>
                </label>


                <label htmlFor='rangoPrecio'>
                    <select className={style.selectorForm} value={state.rango} onChange={(e) => setState({ ...state, rango: e.target.value })}>
                        <option value={''} hidden>Rango de precio</option>
                        <option value='-10mil'>-$10mil</option>
                        <option value='+10mil'>$10mil-$50mil</option>
                        <option value='+50mil'>+$50mil</option>

                    </select>
                </label>

                <label htmlFor='byDiscount'>
                    <select className={style.selectorForm} value={state.discount} onChange={(e) => setState({ ...state, discount: e.target.value })}>
                        <option value={''} hidden>Descuentos</option>
                        <option value='+05'>+5%</option>
                        <option value='+10'>+10%</option>
                        <option value='+15'>+15%</option>
                        <option value='+20'>+20%</option>
                        <option value='+25'>+25%</option>
                        <option value='+30'>+30%</option>
                    </select>
                </label>


            </form>
            <div className={style.container}>
                <BuscadorMarcas />
                <br />
                <button className={style.reset} onClick={() => resetStates()}>Reset</button>
            </div>
        </div>
    )
}

export default connect(null, { orderByPrice, getByCategory, rangoByPrice, byEnvios, byDiscount, getAllProducts })(Filtrado)