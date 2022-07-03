import axios from "axios";

export const DISCOUNTS = 'DISCOUNTS';

export const  getDiscounts = ()=> {
    return async function (dispatch) {
        var json = await axios.get('/mostDiscountedProducts'); 
        // console.log ("acciones",json.data)
        return dispatch({
            type: DISCOUNTS,
            payload: json.data,
            
        })
    }
}