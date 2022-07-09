import React, { Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import  {userDetail}  from '../../redux/actions/userOrderA';
import {useLocation} from "react-router-dom";


export default function DashboardUsers() {

    const dispatch = useDispatch()

    const location = useLocation()
    let id = (location.pathname.substring(13,location.pathname.length)) 

    useEffect(()=>{
        dispatch (userDetail(id))
    },[dispatch])

    const list = useSelector ((state) => state.userOrderR.listOrder);
    console.log("usuario", list)
       

    return (
        <div>
            <p>Estado de la compra 
                {list.status}
            </p>
            <p>Items </p>
            {list.items.map (i=>
               <div>
                <li>
                Categorias:
                {i.category_id}
               </li>
               <li>
                Descripción:
                {i.description}
               </li>
               <li>
                Nombre:
                {i.title}
               </li>
               <li>
                Cantidad:
                {i.quantity}
               </li>
               <li>
                Precio unitario:
                {i.unit_price}
               </li>
              
            </div>       


                )}

        
        </div>
    )
}