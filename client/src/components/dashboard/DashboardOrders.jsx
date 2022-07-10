import React, { useEffect } from 'react'
import { adminOrders } from '../../redux/actions/adminOrdersA'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const DashboardOrders = () => {

    const dispatch = useDispatch()

    const allOrders = useSelector ((state) => state.adminOrdersR.adminOrders)
    useEffect(()=>{
        dispatch(adminOrders())
    },[dispatch]) 
    console.log(allOrders);

  return (
    <div>
        {allOrders? allOrders.map((o, index) => {
            return(
                <div key={index}>
                    {(o.payment_status === 'approved')? <span>Estado de la compra: Aprobada </span> : <span>Estado de la compra: Rechazada </span>}
                    <span>Identificador de orden: {o.merchant_order_id} </span>
                    <span>email del comprador: {o.Users[0].email} </span>
                    <Link to = {"/orderDetail/" + o.merchant_order_id}> Ver detalles </Link>
                </div>
            )
        }): <p>Aún no hay ordenes</p>}
    </div>
  )
}

export default DashboardOrders