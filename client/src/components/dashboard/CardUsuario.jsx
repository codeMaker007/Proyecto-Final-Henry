import React from "react";
// import style from "./Card.module.css";


export default function Card ({id, username, name, lastName, dni, email, celphone, banned, isAdmin }){
    return (
        <div >

            <p >ID: {id}.
            USERNAME: {username}. 
            NOMBRE: { name}. 
            {/* APELLIDO: {lastName}.  */}
            {/* DNI: {dni}.  */}
            {/* EMAIL: { email}.  */}
            {/* TELEFONO: { celphone}. */}
            </p>
            {/* {banned? <p>Usuario Bloqueado. </p> : ""}
            {isAdmin === true? <p>Administrador </p> : ""}
             */}
                      
        </div>
    );
}