import axios from "axios";

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
// export const ORDER_PRICE = 'ORDER_PRICE';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const ORDER_PRICE_ASC = 'ORDER_PRICE_ASC';
export const ORDER_PRICE_DESC = 'ORDER_PRICE_DESC';
export const ORDER_AZ = 'ORDER_AZ';
export const ORDER_ZA = 'ORDER_ZA';

export const RANGO_PRICE = 'RANGO_PRICE';
export const DISCOUNT = 'DISCOUNT';
export const ENVIOS = 'ENVIOS';
export const GET_BRAND = 'GET_BRAND';
export const SIN_COSTO = 'SIN_COSTO';
export const CON_COSTO = 'CON_COSTO';

export const getAllProducts = () => {
    return async function (dispatch) {
        const response = (await axios.get('/catalog')).data;
        return dispatch({ type: GET_ALL_PRODUCTS, payload: response })
    }
}

export const getByCategory = (data) => {
    return async function (dispatch) {
        const response = (await axios.get(`/filterCategory/${data}`)).data;
        return dispatch({ type: FILTER_CATEGORY, payload: response })
    }
}
export function rangoByPrice(minimo, maximo) {
    return async function (dispatch) {
        let response = (await axios.get(`/filterPriceRange/${minimo}/${maximo}`)).data;
        return dispatch({ type: RANGO_PRICE, payload: response })
    }
}

export function byDiscount(payload) {
    return async function (dispatch) {
        var json = await axios.get(`/filterDiscount/${payload}`);
        return dispatch({
            type: DISCOUNT,
            payload: json.data
        })
    }
}

export function getbrand(payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`/filterBrand/${payload}`);
            return dispatch({
                type: GET_BRAND,
                payload: json.data

            })
        } catch (error) {

            alert("No tenemos esa marca.")

        }
    }
}

export const order = (data) => {
    if (data === 'ASC') return { type: ORDER_PRICE_ASC, payload: null }
    else if (data === 'DESC') return { type: ORDER_PRICE_DESC, payload: null }
    else if (data === 'A-Z') return { type: ORDER_AZ, payload: null }
    else return { type: ORDER_ZA, payload: null }
}

export function byEnvios(payload) {
    if (payload === 'true') return { type: SIN_COSTO, payload: null }
    else return { type: CON_COSTO, payload: null }
}