import axios from "axios";

export const USERS = 'USERS';
export const FILTER_ADMIN = 'FILTER_ADMIN';
export const FILTER_BANNED = 'FILTER_BANNED';


export const DashboardUsersA = () => {
    return async function (dispatch) {
        var json = await axios.get('/users');

        return dispatch({
            type: USERS,
            payload: json.data,

        })
    }
}

export const filterAdmin = () => {
    return async function (dispatch) {
        var json = await axios.get('/users/admin');

        return dispatch({
            type: FILTER_ADMIN,
            payload: json.data,

        })
    }
}

export const filterBanned = () => {
    return async function (dispatch) {
        var json = await axios.get('/users/banned');

        return dispatch({
            type: FILTER_BANNED,
            payload: json.data,

        })
    }
}







// export function filterAdmin(payload){
//     return{
//         type: "FILTER_ADMIN",
//         payload
//     }
// }

// export function filterBanned(payload){
//     return{
//         type: "FILTER_BANNED",
//         payload
//     }
// }