import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { UpdateUserA } from '../../redux/actions/DashboardUpdateUserA'; //   UpdateProductR.UpdateProduct
import {useLocation,  useNavigate, useParams} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import style from './assets/PerfilDelUsuario.module.css'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


export default function LoginData() {
 
  const navigate = useNavigate ()
  const dispatch = useDispatch()

  
  const {user, isAuthenticated, isLoading} = useAuth0()
  const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 

  
  const usuario = allUser.find  (u =>u.email === user?.email)
   const id = usuario?.id
 console.log ("id", id)

  const location = useLocation()
  let idd = (location.pathname.substring(14,location.pathname.length)) 
  console.log ("idd", idd)

  let [state, setState] = useState(false);
  const [input, setInput] = useState({ name: "", username: "", dni: "", celphone:  "", picture: "" })

  useEffect(()=>(setInput({
    name: usuario?.name,
    username: usuario?.username,
    dni: usuario?.dni,
    celphone: usuario?.celphone,
    picture: usuario?.picture,
  })),[]
  )

  function handleSubmit(e) {
      e.preventDefault()
        if(input.name !== usuario?.name
        || input.dni !== usuario?.dni
        || input.picture !== usuario?.picture
        || input.celphone !== usuario?.celphone
        || input.username !== usuario?.username

     ){
        dispatch(UpdateUserA(id, input))
        alert ("Cambios realizados con exito")
        navigate('/')}
    else {
        alert ("Debe modificar algún campo")
    }
    
  }

  function handleChange(e) {
      e.preventDefault();
      setInput({
          ...input,
          [e.target.name]: e.target.value,
      });
  }



  if (idd == id){



  return (

    <div>

      <form  onSubmit={(e) => handleSubmit(e)} >
      <Box  sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" },width: '62ch', my: "5%", mx: "30%", maxWidth: "100%", bgcolor:'#d8d8d8', borderRadius: "10px" }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" }, maxWidth: "100%", bgcolor:'#d8d8d8', borderRadius: "10px" }}
          noValidate
          autoComplete="off"
        >
       
            <div>
                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#dee2e6',  borderRadius: "10px" }}
                id="outlined-helperText"
                label={usuario.name? "Nombre actual: " + usuario.name : "Nombre: "} 
                htmlFor="name"
                value={input.name}
                name="name"
                onChange={(e) => handleChange(e)}
                defaultValue= {usuario.name? "" : "Ingrese un nombre"}
                helperText=""
                InputLabelProps={{
                  shrink: true,
              }}
                />
                </div>
                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-helperText"
                label={usuario.username? "Usuario actual: " + usuario.username : "Usuario: "}
                htmlFor="username"
                value={input.username}
                onChange={(e) => handleChange(e)}
                name="username"
                defaultValue={usuario.username? "" : "Ingrese un usuario"}
                helperText=""
                InputLabelProps={{
                  shrink: true,
              }}
                />
                </div>
                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400', borderRadius: "10px" }}
                id="outlined-number"
                label={usuario.celphone? "Telefono actual: " + usuario.celphone : "Telefono:"}
                htmlFor="celphone"
                value={input.celphone}
                onChange={(e) => handleChange(e)} 
                name="celphone"
                defaultValue= {usuario.celphone? "" : "Ingrese un telefono"}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                </div>
                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-number"
                label={usuario.dni? "DNI actual: " + usuario.dni : "Ingrese un DNI:"}
                htmlFor="dni"
                value={input.dni}
                onChange={(e) => handleChange(e)}                      
                name="dni"
                type="number"
                defaultValue= {usuario.dni? "" : "Ingrese un DNI"}
                InputLabelProps={{
                    shrink: true,
                }}
                />
              </div>
              <div>
 
              <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="input-with-icon-textfield"
                label={usuario.picture? "" : "Foto:"}
                htmlFor="picture"
                value={input.picture}
                onChange={(e) => handleChange(e)}  
                name="picture"
                defaultValue= {usuario.picture? "" : "Ingrese una foto por Url:"}
                InputProps={{
                  shrink: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      {usuario.picture? <img src={usuario.picture} className= {style.fotoBtn} alt= ""/>: <img className= {style.fotoBtn} src={user.picture} alt= ""/> }
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              
              </div>  
            </div>
            </Box>
            <Stack direction="row" spacing={2} >

            <Button sx={{ m: 1, width: '70ch', color: '#022335', bgcolor:'#fff', borderColor:'#022335',  borderRadius: "10px"}} type='submit' className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
                Modificar datos
            </Button>
            </Stack>
            
            <Stack direction="row" spacing={2} >
            <Link to= "/profile" className= {style.modificar}><Button sx={{ m: 1, width: '68ch', color: '#022335', bgcolor:'#fff', borderColor:'#022335',  borderRadius: "10px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
               volver
            </Button></Link> 

            </Stack>
       
            </Box>
                <br />
           

        </form>
    </div>

  );

} else 
{return <p>No puedes modificar estos datos ya que no es tu usuario</p>}

}