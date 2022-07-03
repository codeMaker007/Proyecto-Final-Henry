import axios from "axios";

export const ADD_PRODUCT_FAVORITO = 'ADD_PRODUCT_FAVORITO';
export const REMOVE_PRODUCT_FAVORITO = 'REMOVE_PRODUCT_FAVORITO';

export const addFavorite = (id) => {
    return async function (dispatch) {
        const response = (await axios.get(`/ProductDetail/${id}`)).data;
        localStorageFavorites(response, true)
        return dispatch({ type: ADD_PRODUCT_FAVORITO, payload: response })
    }
}

export const removeFavorite = (id) => {
    let favorites = getFavorites();
    favorites = favorites.filter(e => e.id !== id);
    localStorageFavorites(favorites, false);
    return { type: REMOVE_PRODUCT_FAVORITO, payload: null }
}


function getFavorites() {
    let storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites === null) return storedFavorites = []
    else return JSON.parse(storedFavorites);
}

function localStorageFavorites(data, add) {
    if (add) {
        let listFavorites = getFavorites();
        listFavorites.push(data)
        localStorage.setItem('favorites', JSON.stringify(listFavorites));
    } else {
        localStorage.setItem('favorites', JSON.stringify(data));
    }
}