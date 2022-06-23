import axios from "axios";

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const ORDER_PRICE = 'ORDER_PRICE';

export const getAllProducts = () => {
    return async function (dispatch) {
        const response = (await axios.get('/Catalog')).data;
        return dispatch({ type: GET_ALL_PRODUCTS, payload: response })
    }
}
export const orderByPrice = (data) => {
    return async function (dispatch) {
        let response;
        if (data === 'ASC') response = (await axios.get(`/order/${data}`)).data;
        if (data === 'DESC') response = ((await axios.get(`/order/ASC`)).data).reverse()
        return dispatch({ type: ORDER_PRICE, payload: response })
    }
}
