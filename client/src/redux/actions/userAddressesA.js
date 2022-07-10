import axios from "axios";

export const USER_ADDRESSES = 'USER_ADDRESSES'
export const POST_ADDRESS = 'POST_ADDRESS'

export const  userAddressesA = (id) => {
    return async function (dispatch) {
        var json = await axios.get(`/users/addresses/${id}`);
        return dispatch({
            type: USER_ADDRESSES,
            payload: json.data,
        })
    }
}

export const postAddress = (payload) => {
    return async function (dispatch) {
        var json = await axios.post(`/users/CreateAddress`, payload);
        return json
    }
}

export const updateAddress = (userId, payload) => {
    return async function (dispatch) {
        await axios.put(`/users/${userId}/addresses`, payload);
    }
}