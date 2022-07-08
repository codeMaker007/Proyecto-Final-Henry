import React, { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux'
import style from './assets/UpdateProduct.module.css';
import { UpdateUserA } from '../../redux/actions/DashboardUpdateUserA'; ////
import { useAuth0 } from "@auth0/auth0-react";


export default function UpdateAdmin() {
    const {user, isAuthenticated, isLoading} = useAuth0()
    const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 

    const usuario = allUser.find  (u =>u.email === user.email) 
    const id = usuario.id

    // const allUser = useSelector ((state) => state.DashboardUsersR.allUsers);
    // const id = allUser[0].id

    // const location = useLocation()
    // let id = (location.pathname.substring(1, location.pathname.length))
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