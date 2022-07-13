
import axios from 'axios';

export const getOrder = (orderId, userID, type) => {
    if (type === 'mp') {
        return async function (dispatch) {
            const response = (await axios.get(`/orderMP?merchant_order_id=${orderId}`)).data;
            dispatch(controlStock(response.items));
            dispatch(createOrder(orderId, response.status, userID));
        }
    }
    else if (type === 'pp') {
        return async function (dispatch) {
            const response = (await axios.get(`/orderDetails/${orderId}`)).data;
            console.log(response.purchase_units[0].items)
            console.log(userID, response.purchase_units[0].items, response.purchase_units[0].payee.merchant_id, response.status)
            dispatch(createOrderPP(response.status, response.purchase_units[0].payee.merchant_id, response.purchase_units[0].items, userID))
            dispatch(controlStockPP(response.purchase_units[0].items));
        }
    }
}

const controlStock = (response) => {
    return async function () {
        response.forEach(async e => {
            console.log(e)
            await axios.put(`/ProductDetail/${e.id}`, ({ quantity: e.quantity }))
        })
    }
}

const controlStockPP = (response) => {
    return async function () {
        response.forEach(async e => {
            const nombre = await axios.get(`/Catalog?name=${e.name}`)
            await axios.put(`/ProductDetail/${nombre.data[0].id}`, ({ quantity: Number(e.quantity) }))
        })
    }
}

const createOrder = (orderId, status, userID) => {
    return async function () {
        await axios.post(`/createOrderMP`, {
            payment_status: status,
            merchant_order_id: orderId,
            userId: userID
        })
    }
}

const createOrderPP = (status, mechantID, items, userID) => {
    return async function () {
        await axios.post(`/create-order-pp`, {
            payment_status: status,
            merchant_id: mechantID,
            items: items,
            userId: userID
        })
    }
}