// return async function () {
//     const response = (await axios.get(`/orderMP?merchant_order_id=${term}`)).data;
// }
import axios from 'axios';

export const getOrder = (orderId) => {
    return async function (dispatch) {
        const response = (await axios.get(`/orderMP?merchant_order_id=${orderId}`)).data;
        console.log(response);
        dispatch(controlStock(response.items));
        dispatch(createOrder(orderId, response));
    }
}

const controlStock = (response) => {
    return async function () {
        console.log(response)
        let result = response.forEach(async e => {
            await axios.put(`/ProductDetail/${e.id}`, ({ quantity: e.quantity }))
        })
        console.log(result)
    }
}

const createOrder = (orderId) => {
    return async function () {
        const result = await axios.post(`/createOrderMP`, {
            payment_status: 'approved',
            merchant_order_id: orderId,
            userId: 1
        })
        console.log(result)
    }
}