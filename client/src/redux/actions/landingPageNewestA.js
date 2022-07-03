import axios from "axios";

export const GET_NEWEST_PRODUCTS = 'GET_NEWEST_PRODUCTS';

export const  getNewestProducts = ()=> {
    return async function (dispatch) {
        var json = await axios.get('/newestProducts');
        // console.log ("acciones",json.data)
        return dispatch({
            type: GET_NEWEST_PRODUCTS,
            payload: json.data,
            
        })
    }
}