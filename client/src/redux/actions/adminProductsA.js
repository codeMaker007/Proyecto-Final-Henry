import axios from "axios";

export const ADMIN_PRODUCTS = 'ADMIN_PRODUCTS';

export const adminProducts = () => {
    return async function (dispatch){
        var json = await axios.get('/Admin/Catalog')
        return dispatch ({
          type: ADMIN_PRODUCTS,
          payload: json.data
        })
    } 
};