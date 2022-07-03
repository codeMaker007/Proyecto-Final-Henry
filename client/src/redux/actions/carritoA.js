export const ADD_PRODUCT_CARRITO = 'ADD_PRODUCT_CARRITO';
export const DELETE_PRODUCT_CARRITO = 'DELETE_PRODUCT_CARRITO';
export const INCREMENT_TOTAL = 'INCREMENT_TOTAL';
export const DECREMENT_TOTAL = 'DECREMENT_TOTAL';
export const RESET_TOTAL = 'RESET_TOTAL';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const CLEAN_CART = 'CLEAN_CART';

export const addProductCarrito = (data) => {
    localStorageCarrito(data, true)
    return { type: ADD_PRODUCT_CARRITO, payload: data }
}

export const deleteProductCarrito = (id) => {
    let carritoProducts = getProductsCarrito();
    carritoProducts = carritoProducts.filter(e => e.id !== id);
    localStorageCarrito(carritoProducts, false);
    return { type: DELETE_PRODUCT_CARRITO, payload: null }
}

export const incrementTotal = (data) => {
    return { type: INCREMENT_TOTAL, payload: data }
}

export const decrementTotal = (data) => {
    return { type: DECREMENT_TOTAL, payload: data }
}

export const resetTotal = () => {
    return { type: RESET_TOTAL, payload: 0 }
}

export const incrementeQuantity = (id) => {
    return { type: INCREMENT_QUANTITY, payload: id }
}

export const decrementeQuantity = (id) => {
    return { type: DECREMENT_QUANTITY, payload: id }
}

export const limpiarCarrito = () => {
    localStorage.setItem('carrito', JSON.stringify([]));
    return { type: CLEAN_CART, payload: null }
}

function getProductsCarrito() {
    let storedCarrito = localStorage.getItem('carrito');
    if (storedCarrito === null) return storedCarrito = []
    else return JSON.parse(storedCarrito);
}

function localStorageCarrito(data, add) {
    if (add) {
        let listCarrito = getProductsCarrito();
        listCarrito.push(data)
        localStorage.setItem('carrito', JSON.stringify(listCarrito));
    } else {
        localStorage.setItem('carrito', JSON.stringify(data));
    }
}