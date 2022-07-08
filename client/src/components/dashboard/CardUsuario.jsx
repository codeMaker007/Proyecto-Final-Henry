import React from "react";
// import style from "./Card.module.css";


export default function Card ({id, username, name, lastName, dni, email, celphone, banned, isAdmin }){
    return (
        <div >

            <p >ID: {id}.
            USUARIO: {username}. 
            NOMBRE: { name}. 
            {/* DNI: {dni}.  */}
            EMAIL: { email}. 
            TEL.: { celphone}.
            ADMIN: { isAdmin}
            BLOQUEADO: { banned}
            </p>
          
            
           
            
                      
        </div>
    );
}