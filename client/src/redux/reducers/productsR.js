import { GET_ALL_PRODUCTS, ORDER_PRICE_DESC, FILTER_CATEGORY, RANGO_PRICE, DISCOUNT, ENVIOS, GET_BRAND, ORDER_PRICE_ASC, ORDER_ALPHA } from "../actions/productsA";
import { GET_PRODUCT_BY_NAME } from '../actions/productName';

const initialState = {
    products: [],
    totalProducts: 0
}

const productsR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
                totalProducts: payload.length
            }
        case ORDER_PRICE_ASC:
            return {
                ...state,
                products: (state.products.sort((a, b) => { return a.price - b.price })).map(e => e)
            }
        case ORDER_PRICE_DESC:
            return {
                ...state,
                products: (state.products.sort((a, b) => { return a.price - b.price }).reverse()).map(e => e)
            }
        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                products: payload
            }
        case FILTER_CATEGORY:
            return {
                ...state,
                products: payload
            }
        case RANGO_PRICE:
            return {
                ...state,
                products: payload
            }

        case DISCOUNT:
            return {
                ...state,
                products: payload
            }

        case ENVIOS:
            return {
                ...state,
                products: payload
            }

        case GET_BRAND:
            return {
                ...state,
                products: payload
            }
        case ORDER_ALPHA:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}

export default productsR;