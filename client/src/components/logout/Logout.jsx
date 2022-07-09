import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';
// import style from "../perfilDelUsuario/assets/PerfilDelUsuario.module.css"; //toma los mismos que del perfil del usuario

const Logout = () => {
  const { logout } = useAuth0();

  return (

    <Stack direction="row" fontSize = "small" >
    <Button sx={{ml: 2,  bgcolor:  "#dee2e6 ",  borderRadius: "10px", color:'#FFC400 ' }} onClick={() => logout({ returnTo: window.location.origin })} startIcon={<LogoutIcon fontSize = "large"/>}>
    Cerrar Sesión
    </Button>

    </Stack>
    // <button onClick={() => logout({ returnTo: window.location.origin })} className = {style.volver}>
    //   Cerrar Sesión
    // </button>
  );
};

export default Logout