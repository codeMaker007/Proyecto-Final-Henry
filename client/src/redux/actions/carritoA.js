export const ADD_PRODUCT_CARRITO = 'ADD_PRODUCT_CARRITO';
export const DELETE_PRODUCT_CARRITO = 'DELETE_PRODUCT_CARRITO';

export const addProductCarrito = (data) => {
    return { type: ADD_PRODUCT_CARRITO, payload: data }
}

export const deleteProductCarrito = (data) => {
    return { type: DELETE_PRODUCT_CARRITO, payload: data }
}
