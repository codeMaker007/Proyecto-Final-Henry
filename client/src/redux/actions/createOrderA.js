
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
        console.log('...')
    }
}

const controlStock = (response) => {
    return async function () {
        response.forEach(async e => {
            await axios.put(`/ProductDetail/${e.id}`, ({ quantity: e.quantity }))
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