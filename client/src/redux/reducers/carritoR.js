import { ADD_PRODUCT_CARRITO, DELETE_PRODUCT_CARRITO, INCREMENT_TOTAL, DECREMENT_TOTAL, RESET_TOTAL, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CLEAN_CART } from "../actions/carritoA";

const initialState = {
    productosCarrito: (JSON.parse(localStorage.getItem('carrito')) === null) ? [] : JSON.parse(localStorage.getItem('carrito')),
    totalCarrito: 0
}

const carritoR = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_CARRITO:
            return {
                ...state,
                productosCarrito: state.productosCarrito.concat(payload)
            }
        case DELETE_PRODUCT_CARRITO:
            return {
                ...state,
                productosCarrito: state.productosCarrito = JSON.parse(localStorage.getItem('carrito'))
            }
        case CLEAN_CART:
            return {
                ...state,
                productosCarrito: []
            }
        case INCREMENT_TOTAL:
            return {
                ...state,
                totalCarrito: state.totalCarrito + payload
            }
        case DECREMENT_TOTAL:
            return {
                ...state,
                totalCarrito: state.totalCarrito - payload
            }
        case RESET_TOTAL:
            return {
                ...state,
                totalCarrito: 0
            }
        case INCREMENT_QUANTITY:
            let productIncrement = state.productosCarrito.find(e => e.id === payload);
            let quantity = productIncrement.quantity + 1;
            productIncrement = { ...productIncrement, quantity: quantity }
            return {
                ...state,
                productosCarrito: state.productosCarrito.map(e => {
                    if (e.id === payload) return productIncrement
                    else return e
                })
            }
        case DECREMENT_QUANTITY:
            let productDecrement = state.productosCarrito.find(e => e.id === payload);
            let cantidad = productDecrement.quantity - 1;
            productDecrement = { ...productDecrement, quantity: cantidad }
            return {
                ...state,
                productosCarrito: state.productosCarrito.map(e => {
                    if (e.id === payload) return productDecrement
                    else return e
                })
            }

        default:
            return state;
    }
}

export default carritoR;