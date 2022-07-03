import axios from "axios";

export const HISTORY_SHOPPING = 'HISTORY_SHOPPING';

export const  historyShoppingA = ()=> {
    return async function (dispatch) {
        var json = await axios.get('/users');
    
        return dispatch({
            type: HISTORY_SHOPPING,
            payload: json.data,
            
        })
    }
}