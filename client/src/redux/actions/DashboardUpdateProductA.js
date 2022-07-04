import axios from "axios";

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const UpdateProductA = (id, payload) => {
    return async function (dispatch) {
        const response = (await axios.put(`/ProductDetail/${id}`,payload)).data;
        // console.log("acciones", response)
        return dispatch({ type: UPDATE_PRODUCT, payload: response })
    }
}


