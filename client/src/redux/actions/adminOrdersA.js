import axios from "axios";

export const ADMIN_ORDER  = 'ADMIN_ORDER';
export const USER_DETAIL  = 'USER_DETAIL';

export const  adminOrders = ()=> {
    return async function (dispatch) {
        var json = await axios.get(`/getAdminOrders`);
        return dispatch({
            type: ADMIN_ORDER,
            payload: json.data,
            
        })
    }
}