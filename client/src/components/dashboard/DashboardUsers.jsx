import React, { Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import  {DashboardUsersA}  from '../../redux/actions/DashboardUsersA';
import CardUsuario from './CardUsuario';
import UpdateAdmin from './UpdateAdmin';
import UpdateBanned from './UpdateBanned';
import style from './assets/Dashboard.module.css';


export default function DashboardUsers() {

    const dispatch = useDispatch()
    const allUser = useSelector ((state) => state.DashboardUsersR.allUsers);
    console.log("usuario", allUser)
       
    useEffect(()=>{
        dispatch (DashboardUsersA())
    },[dispatch]) 


    const [isShown, setIsShown] = useState(false);
    const [buttIndex, setButtIndex] = useState(null);

   
    const handleClick = event => {
        event.preventDefault();
        setIsShown(current => !current);
        setButtIndex(Number(event.target.id))

    };

    return (
        <div>
                     
            <div>    
            {allUser.map(e => {

                return(
                    <Fragment >
                    <CardUsuario
                        id={e.id}
                        key={e.id}
                        username={e.username}
                        name={e.name}
                        email = {e.email === null? "No registrado" : e.email}
                        celphone = {e.email === null? "No registrado" : e.celphone}
                        isAdmin = {e.isAdmin === true? "Si. " : "No. "}
                        banned = {e.banned === true? "Si. " : "No. "}
                         
                        
                    />
                       
                    
                        <button id={1} onClick={handleClick} className={style.btn}>Hacer administrador</button>
                            {isShown && buttIndex === 1 &&  <UpdateAdmin id={e.id} /> }
                        
                        <button id={2} onClick={handleClick} className={style.btn}>Bloquear usuario</button>
                            {isShown && buttIndex === 2 &&  <UpdateBanned id={e.id} /> }

                        
                    </Fragment>
                )
            })} 
            </div>


        </div>
        
    )
}
