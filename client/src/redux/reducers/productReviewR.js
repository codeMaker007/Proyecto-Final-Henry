import { GET_ALL_REVIEWS, GET_USER_REVIEWS } from "../actions/productReviewA";

const initialState = {
    productReviews: [],
    userReviews: []
}

const productReviewR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_REVIEWS :
            return {
                ...state,
                productReviews: payload
            }
        case GET_USER_REVIEWS :
            return {
                ...state,
                userReviews: payload
            }
        default:
            return state;
    }
}
export default productReviewR;