import { GET_ALL_PRODUCTS, ORDER_PRICE_DESC, FILTER_CATEGORY, RANGO_PRICE, DISCOUNT, ENVIOS, GET_BRAND, ORDER_PRICE_ASC, ORDER_AZ, ORDER_ZA, SIN_COSTO, CON_COSTO } from "../actions/productsA";
import { GET_PRODUCT_BY_NAME } from '../actions/productName';

const initialState = {
    products: [],
    totalProducts: 0,
    productsCopy: []
}

const productsR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload,
                productsCopy: payload,
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
                productsCopy: payload,
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
        case ORDER_AZ:
            return {
                ...state,
                products: state.products.sort((a, b) => -1 * a.name.localeCompare(b.name))
            }
        case ORDER_ZA:
            return {
                ...state,
                products: state.products.sort((a, b) => a.name.localeCompare(b.name))
            }
        case SIN_COSTO:
            return {
                ...state,
                products: state.productsCopy.filter(e => e.freeShipping === true)
            }
        case CON_COSTO:
            return {
                ...state,
                products: state.productsCopy.filter(e => e.freeShipping !== true)
            }
        default:
            return state;
    }
}

export default productsR;