import React, {  useState } from 'react';
import { useDispatch } from 'react-redux'
import style from './assets/UpdateProduct.module.css';
import { UpdateUserA } from '../../redux/actions/DashboardUpdateUserA'; ////
import {useLocation} from "react-router-dom";


export default function UpdateBanned() {
 
    const location = useLocation()
    let id = (location.pathname.substring(13,location.pathname.length))
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({}) 
    const [input, setInput] = useState({banned: "", })

    function handleSubmit(e) {
        e.preventDefault()

        if (input.banned !== "All"
        && input.banned)
        {
        dispatch(UpdateUserA(id, input))//////
        alert("Usuario modificado")
    }
    else {
        alert('Elige una opción.')

    }
    }

    function handlebanned(e) {
      
            setInput({
                ...input,
                banned: e.target.value
            })
        
    }

    return (
        <div>

            <form className={style.contenedor} onSubmit={(e) => handleSubmit(e)} >
                    
                <select onChange={e => handlebanned(e)} value={input.banned} className={style.envio} >

                    <option value="All" hidden>¿Bloquear usuario?</option>

                    <option value="false">Desbloquear usuario</option>
                    <option value="true">Bloquear usuario</option>
                </select> <br /><br />

                
                <button className={style.boton1} type='submit'>Aceptar</button>
                <br />
              
            </form>
        </div>
    )
}