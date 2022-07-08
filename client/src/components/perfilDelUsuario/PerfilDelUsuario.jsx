import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import style from "./assets/PerfilDelUsuario.module.css";
import { Link } from 'react-router-dom';
import Logout from '../logout/Logout'
import {useSelector} from "react-redux"
import {Grid, Box} from '@material-ui/core';
import {Button } from '@material-ui/core';

export default function PerfilDelUsuario(){
    const {user, isAuthenticated, isLoading} = useAuth0()
    const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 
    if(isLoading){
        return <p> Loading... </p>
    }
    const usuario = user && allUser.find  (u =>u.email === user.email) 


    return (

        isAuthenticated && (
        // <div >{/*className = {style.DetailContainer} */}
            <Box>
            <Grid container spacing={2}>
            
                <Grid item xs= {12} >
                    <Box 
                    sx={{  
                    width : 200,
                    color : "#022335",
                    backgroundColor : "#FFC400"
                    // border = {2}
                    }}
                   
                    >
                        {/* <Button>
                            Funciona este boton??
                        </Button> */}
                        {usuario.picture? <img src={usuario.picture} alt= ""/>: <img src={user.picture} alt= ""/> }
                        <h2 >Bienvenido {usuario.name}!!</h2>
                        {usuario.isAdmin === true? <p > Perfil del Administrador {usuario.username} </p> : ""}
                    </Box>
              
                    <Box 
                    sx={{  
                    width : 200,
                    color : "#022335",
                    backgroundColor : "#FFC400"
                    // border = {2}
                    }}
                   
                    >
                        <h2> Datos personales</h2>
                        {usuario.email !== null? <p >Email: {usuario.email}</p> 
                        : <p >Complete su Email</p>}

                        {usuario.dni !== null? <p >DNI: {usuario.dni}</p> 
                        : <p >Complete su DNI</p>}

                        {usuario.celphone !== null? <p >Telefono: {usuario.celphone}</p> 
                        : <p >Complete su Telefono</p>}

                        <Link to = {"/loginData/" + usuario.id}> <button >Modificar datos</button> </Link>
                        <Link to = {"/loginAddress/" + usuario.id}> <button >Modificar datos</button> </Link>
                    </Box>

                    

                </Grid>

            |   <Grid item xs= {12} >
                    <Box 
                    sx={{  
                    width : 200,
                    color : "#022335",
                    backgroundColor : "#FFC400"
                    // border = {2}
                    }}
                   
                    >
                        <Logout />
                    </Box>        
                </Grid>
            </Grid>
            </Box>
        // </div>
        )
    )
}