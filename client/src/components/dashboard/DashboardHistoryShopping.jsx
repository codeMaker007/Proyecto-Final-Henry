import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import  {historyShoppingA}  from '../../redux/actions/DashboardHistoryShoppingA';
import CardUsuario from './CardUsuario';

// import style from './assets/Dashboard.module.css';



export default function DashboardHistoryShopping() {

    const dispatch = useDispatch()
    const allShopping = useSelector ((state) => state.historyShoppingR.allShopping); 

    useEffect(()=>{
        dispatch (historyShoppingA())
    },[dispatch]) 

    return (
        <div>
                     
            <div>    
            {allShopping.map(e => {

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
