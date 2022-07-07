import axios from "axios";

export const DISCOUNTS = 'DISCOUNTS';
export const NEW_PRODUCTS = 'NEW_PRODUCTS';
export const BEST_SELLERS = 'BEST_SELLERS';

export const getDiscountedProducts = () => {
    return async function (dispatch) {
        const response = (await axios.get(`/mostDiscountedProducts`)).data;
        return dispatch({ type: DISCOUNTS, payload: response })
    }
}

export const getBestSellers = () => {
    return async function (dispatch) {
        const response = (await axios.get(`/bestSellingProducts`)).data;
        return dispatch({ type: BEST_SELLERS, payload: response })
    }
}

export const getNewProducts = () => {
    return async function (dispatch) {
        const response = (await axios.get(`/newestProducts`)).data;
        return dispatch({ type: NEW_PRODUCTS, payload: response })
    }
}