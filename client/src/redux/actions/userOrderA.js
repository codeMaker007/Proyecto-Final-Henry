import axios from "axios";

export const USER_ORDER  = 'USER_ORDER';
export const USER_DETAIL  = 'USER_DETAIL';

export const  userOrderA = (id)=> {
    return async function (dispatch) {
        var json = await axios.get(`/getUserOrders/${id}`);
        return dispatch({
            type: USER_ORDER,
            payload: json.data,
            
        })
    }
}

export const  userDetail = (id)=> {
    return async function (dispatch) {
        var json = await axios.get(`/orderMP?merchant_order_id=${id}`);
        return dispatch({
            type: USER_DETAIL,
            payload: json.data,
            
        })
    }
}