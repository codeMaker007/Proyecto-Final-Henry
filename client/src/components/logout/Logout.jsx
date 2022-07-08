import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../perfilDelUsuario/assets/PerfilDelUsuario.module.css"; //toma los mismos que del perfil del usuario

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} className = {style.volver}>
      Cerrar Sesión
    </button>
  );
};

export default Logout