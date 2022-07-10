import axios from "axios";

export const GET_ALL_REVIEWS  = 'GET_ALL_REVIEWS';
export const GET_USER_REVIEWS  = 'GET_USER_REVIEWS';

export const postReview = (payload) => {
    return async function (dispatch) {
        var json = await axios.post(`/reviews/Create`, payload);
        return json
    }
}

export const getAllReviews = (id) => {
    return async function (dispatch) {
        var json = await axios.get(`/reviews/product/${id}`);
        return dispatch({
            type: GET_ALL_REVIEWS,
            payload: json.data,
        })
    }
}

export const getUserReviews = (id) => {
    return async function (dispatch) {
        var json = await axios.get(`/reviews/user/${id}`)
        return dispatch({
            type: GET_USER_REVIEWS,
            payload: json.data
        })
    }
}