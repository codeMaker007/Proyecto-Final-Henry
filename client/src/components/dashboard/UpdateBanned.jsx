import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import style from './assets/UpdateProduct.module.css';
import { UpdateUserA } from '../../redux/actions/DashboardUpdateUserA'; ////
import { useAuth0 } from "@auth0/auth0-react";


export default function UpdateBanned() {
    const {user, isAuthenticated, isLoading} = useAuth0()
    const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 

    const usuario = allUser.find  (u =>u.email === user.email) 
    const id = usuario.id

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