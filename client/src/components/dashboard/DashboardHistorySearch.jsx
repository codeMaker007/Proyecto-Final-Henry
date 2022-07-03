import React, { Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import  {searchHistoryA}  from '../../redux/actions/DashboardHistorySearchA';
import CardUsuario from './CardUsuario';

// import style from './assets/Dashboard.module.css';



export default function DashboardHistorySearchA() {

    const dispatch = useDispatch()
    const allSearch = useSelector ((state) => state.searchHistoryR.allSearch); 

    useEffect(()=>{
        dispatch (searchHistoryA())
    },[dispatch]) 

    return (
        <div>
                     
            <div>    
            {allSearch.map(e => {

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
