import { GET_ALL_PRODUCTS, ORDER_PRICE } from "../actions/productsA";

const initialState = {
    products: [],
}

const carritoR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case ORDER_PRICE:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}

export default carritoR;