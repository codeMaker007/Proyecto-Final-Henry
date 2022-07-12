import React, { useEffect } from 'react'
import { adminOrders } from '../../../../redux/actions/adminOrdersA'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const DashboardOrders = () => {

    const dispatch = useDispatch()

    const allOrders = useSelector ((state) => state.adminOrdersR.adminOrders)
    useEffect(()=>{
        dispatch(adminOrders())
    },[dispatch]) 
    console.log(allOrders);

    const { user, isAuthenticated } = useAuth0();
    const users = useSelector((state) => state.DashboardUsersR.allUsers);
    let findedUser;
    if (isAuthenticated) {
        findedUser = users.find(e => e.email === user.email)
    }

  return (
    <>
    {
    (isAuthenticated && findedUser?.isAdmin)?
    <div>
        {allOrders[0]? allOrders.map((o, index) => {
            return(
                <div key={index}>
                    {(o.payment_status === 'approved')? <span>Estado de la compra: Aprobada </span> : <span>Estado de la compra: Rechazada </span>}
                    <span>Identificador de orden: {o.merchant_order_id} </span>
                    <span>email del comprador: {o.Users[0].email} </span>
                    <Link to = {"/orderDetail/" + o.merchant_order_id}> Ver detalles </Link>
                </div>
            )
        }): <p>Aún no hay ordenes</p>}
    </div> : <h1>No eres administrador</h1>
    } 
    </>
  )
}

export default DashboardOrders