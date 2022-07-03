import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import  {DashboardUsersA}  from '../../redux/actions/DashboardUsersA';
import CardUsuario from './CardUsuario';

// import style from './assets/Dashboard.module.css';



export default function DashboardUsers() {

    const dispatch = useDispatch()
    const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 

    useEffect(()=>{
        dispatch (DashboardUsersA())
    },[dispatch]) 

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
                        lastName={e.lastName}
                        dni={e.dni}
                        email={e.email}
                        celphone={e.celphone}
                    />
                    </Fragment>
                )
            })} 
            </div>
      

        </div>
        
    )
}
