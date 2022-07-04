import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import style from './assets/UpdateProduct.module.css';
import { UpdateUserA } from '../../redux/actions/DashboardUpdateUserA'; ////
import { useLocation } from "react-router-dom";


export default function UpdateAdmin() {

    const location = useLocation()
    let id = (location.pathname.substring(13, location.pathname.length))
    const dispatch = useDispatch()
    // const [errors, setErrors] = useState({}) 
    const [input, setInput] = useState({ isAdmin: "", })



    function handleSubmit(e) {
        e.preventDefault()

        if (input.isAdmin !== "All"
            && input.isAdmin) {
            dispatch(UpdateUserA(id, input))//////
            alert("Usuario modificado")
        }
        else {
            alert('Elige una opción.')

        }
    }

    function handleisAdmin(e) {

        setInput({
            ...input,
            isAdmin: e.target.value
        })

    }

    return (
        <div>

            <form className={style.contenedor} onSubmit={(e) => handleSubmit(e)} >

                <select onChange={e => handleisAdmin(e)} value={input.isAdmin} className={style.envio} >

                    <option value="All" hidden>¿Hacer Administrador?</option>

                    <option value="false">No</option>
                    <option value="true">Si</option>
                </select> <br /><br />


                <button className={style.boton1} type='submit'>Aceptar</button>
                <br />

            </form>
        </div>
    )
}