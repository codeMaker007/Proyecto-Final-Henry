import { ADD_PRODUCT_FAVORITO, REMOVE_PRODUCT_FAVORITO } from "../actions/favoritosA";

const initialState = {
    productosFavoritos: (JSON.parse(localStorage.getItem('favorites')) === null) ? [] : JSON.parse(localStorage.getItem('favorites')),
}

const favoritosR = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_FAVORITO:
            return {
                ...state,
                productosFavoritos: state.productosFavoritos.concat(payload)
            }
        case REMOVE_PRODUCT_FAVORITO:
            return {
                ...state,
                productosFavoritos: state.productosFavoritos = JSON.parse(localStorage.getItem('favorites'))
            }

        default:
            return state;
    }
}

export default favoritosR;