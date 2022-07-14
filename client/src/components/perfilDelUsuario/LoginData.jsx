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
import  Loading  from '../loading/Loading.jsx';
import { useSnackbar } from 'notistack';

export default function LoginData() {
 
  const navigate = useNavigate ()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar();
  
  const {user, isAuthenticated, isLoading} = useAuth0()
  const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 

  
  const usuario = allUser.find  (u =>u.email === user?.email)
   const id = usuario?.id
 console.log ("id", id)

  const location = useLocation()
  let idd = (location.pathname.substring(11,location.pathname.length)) 
  console.log ("idd", idd)

  let [state, setState] = useState(false);
  const [input, setInput] = useState({ name: "", username: "", dni: "", celphone:  "", picture: "" })
  const [imageChosen, setImageChosen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

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
        enqueueSnackbar('Cambios realizados con exito', { variant: 'success' });
        setTimeout(() => {
          window.location.href='http://localhost:3000/profile'
      }, 1000);
      }
    else {
      enqueueSnackbar("Debe modificar algún campo", { variant: 'error' });
    }
    
  }

  function handleChange(e) {
      e.preventDefault();
      setInput({
          ...input,
          [e.target.name]: e.target.value,
      });
  }

  async function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset','ecommerce');
    setImageChosen(true);
    setLoading(true);

    const res = await fetch('https://api.cloudinary.com/v1_1/hentech/image/upload', {
        method: 'POST',
        body: data
    });

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
    setInput({...input, picture: file.secure_url});
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
                <TextField sx={{ bgcolor:'#fff ', color: '#fff',  borderRadius: "10px" }}
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
                defaultValue= {usuario.picture ? "" : "Ingrese una foto"}
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
              
              <input className={style.seleccionarArchivo} type="file" name="file" onChange={uploadImage} ></input>
          
              {
                  imageChosen && (!loading ?  (<img  className={style.seleccionarArchivo}src={image} style={{width:'50%'}} alt="Usuario"/>) : <Loading className={style.loading}/>)
              }
              </div>  
            </div>
            </Box>

            <Box sx={{ maxWidth: "100%"}}>
            <Stack direction="row" spacing={2} >
            <Button sx={{ m: 1, width: '70ch', color: '#022335', bgcolor:'#fff', borderColor:'#022335',  borderRadius: "10px"}} type='submit'  variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
                Modificar datos
            </Button>
            </Stack>
            <Link to= "/profile" className= {style.modificar}>
            <Stack direction="row" spacing={2} >
            <Button sx={{ m: 1, width: '68ch', color: '#022335', bgcolor:'#fff', borderColor:'#022335',  borderRadius: "10px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
               volver
            </Button>
            </Stack></Link> 
            </Box>
       
            </Box>
                <br />
           

        </form>
    </div>

  );

} else 
{return <p>No puedes modificar estos datos ya que no es tu usuario</p>}

}