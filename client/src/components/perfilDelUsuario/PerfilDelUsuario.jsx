// import {  React, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import {useDispatch, useSelector} from "react-redux";
// import {PerfilDelUsuarioA} from "../../redux/actions/PerfilDelUsuarioA"
// import style from "./PerfilDelUsuario.module.css";

// // function PerfilDelUsuario({ PerfilDelUsuarioA }) {
// //     const location = useLocation();
// //     const idProduct = location.pathname.substring(8, location.pathname.length);
// //     const usuario = useSelector((state) => state.perfilDelUsuario)


// //     useEffect(() => {
// //         PerfilDelUsuarioA(idProduct)
// //         // eslint-disable-next-line react-hooks/exhaustive-deps
// //     }, [])



// export default function PerfilDelUsuario(){
//     // console.log (props)
//     const dispatch = useDispatch()
//     const {username} = useParams()

//     const usuario = useSelector ((state)=> state.PerfilDelUsuarioR.perfilDelUsuario);

//     useEffect(() => {
//         dispatch (PerfilDelUsuarioA(username));
//         // console.log (PerfilDelUsuarioA(username))
//         // return dispatch
//     },[dispatch, username ]);





// // console.log("componente", usuario)   

// return (

// <div>
//    {usuario?  
//      <div className = {style.DetailContainer}> 

//         {/* <h2 className = {style.DetailContainer}>{usuario[0].isAdmin ? "Perfil del Administrador"  : "Perfil del Usuario" }</h2> */}
//         {usuario.image? <img className = {style.foto} src = {usuario.image} alt = "" /> : <img className = {style.foto} src = "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png" alt = "" />}

//         <h2 className = {style.usuario}>Usuario: {usuario.username}</h2> 
//         <h2 className = {style.nombre}>Bienvenido {usuario.name}  {usuario.lastName}. </h2>                

//         <h3 className = {style.datos}>Email:  {usuario.email} </h3> {/* <h3>Contraseña:  {usuario[0].password}.</h3> */}
//         <h3 className = {style.datos}>DNI:   {usuario.dni}  Telefono:  {usuario.celphone}</h3> 
//         {/*<h3 className = {style.h3}>Direccion: </h3> 

//         <h4 className = {style.h4}>Calle: {usuario[0].address}.    Numero:  {usuario[0].number}. 
//             CP: {usuario[0].zipCode}.    Provincia:  {usuario[0].province}.
//             Localidad: {usuario[0].location}.    Departamento:  {usuario[0].apartment}. </h4> 

//         <h5 className = {style.h5}>  Descripcion: {usuario[0].description}.   </h5>  */}

//         <Link to = "/" > <button className = {style.volver}>Volver</button> </Link> 
//         <Link to = "/" > <button className = {style.volver}>Cambiar datos</button> </Link>  
//         <Link to = "/login" > <button className = {style.volver}>Cambiar de usuario</button> </Link>
//         <Link to = "/" > <button className = {style.volver}>Salir</button> </Link>

//     </div> 
//       :  "Loading"} 
// </div>

// )
// }

// /////////
// // export default connect(null, { PerfilDelUsuarioA })(PerfilDelUsuario)

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./PerfilDelUsuario.module.css";
// import { Link } from 'react-router-dom';
import Logout from '../logout/Logout'
import { useSelector } from "react-redux"

export default function PerfilDelUsuario() {
    const { user, isAuthenticated, isLoading } = useAuth0()
    const allUser = useSelector((state) => state.DashboardUsersR.allUsers);
    if (isLoading) {
        return <p> Loading... </p>
    }

    return (
        isAuthenticated && (
            <div className={style.DetailContainer}>
                <img src={user.picture} alt={user.name} className={style.foto} />
                <h2 className={style.nombre}>Bienvenido {user.name}!!</h2>
                {allUser.dni}
                {user.email ? <p className={style.datos}>Email: {user.email}</p> : ""}
                {allUser.dni ? <p className={style.datos}>DNI: {allUser.dni}</p> : ""}
                {user.celphone ? <p className={style.datos}>Telefono: {user.celphone}</p> : ""}
                {/* {user.isAdmin = true? <p className = {style.datos}> Perfil del Administrador {user.username} </p> : <p className = {style.datos}> Perfil del Usuario {user.username}</p>}    */}



                <Logout className={style.volver} />
                {/* <Link to = "/products" > <button className = {style.volver}>Ver productos</button> </Link>  */}
                {/* <Link to = "/login" > <button className = {style.volver}>Cambiar de usuario</button> </Link> */}
            </div>
        )
    )
}