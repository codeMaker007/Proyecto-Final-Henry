// return async function () {
//     const response = (await axios.get(`/orderMP?merchant_order_id=${term}`)).data;
// }
import axios from 'axios';

export const getOrder = (orderId) => {
    return async function (dispatch) {
        const response = (await axios.get(`/orderMP?merchant_order_id=${orderId}`)).data;
        dispatch(controlStock(response.items));
        dispatch(createOrder(orderId));
    }
}

const controlStock = (response) => {
    return async function () {
        response.forEach(async e => {
            await axios.put(`/ProductDetail/${e.id}`, ({ quantity: e.quantity }))
        })
    }
}

const createOrder = (orderId) => {
    return async function () {
        await axios.post(`/createOrderMP`, {
            payment_status: 'approved',
            merchant_order_id: orderId,
            userId: 1
        })
    }
}