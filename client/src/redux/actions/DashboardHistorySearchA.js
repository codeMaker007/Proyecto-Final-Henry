import axios from "axios";

export const SEARCH_HISTORY  = 'SEARCH_HISTORY';

export const  searchHistoryA = ()=> {
    return async function (dispatch) {
        var json = await axios.get('/users');
        // console.log ("acciones",json.data)
        return dispatch({
            type: SEARCH_HISTORY,
            payload: json.data,
            
        })
    }
}
