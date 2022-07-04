import axios from "axios";

export const USERS = 'USERS';

export const DashboardUsersA = () => {
    return async function (dispatch) {
        var json = await axios.get('/users');

        return dispatch({
            type: USERS,
            payload: json.data,

        })
    }
}