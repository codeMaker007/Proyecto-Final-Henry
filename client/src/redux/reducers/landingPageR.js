import { DISCOUNTS, NEW_PRODUCTS, BEST_SELLERS } from "../actions/landingPageA";


const initialState = {
    discounts: [],
    newestProducts: [],
    bestSellers: []
}

const landingPageR = (state = initialState, { type, payload }) => {
    switch (type) {
        case DISCOUNTS:
            return {
                ...state,
                discounts: payload
            }
        case NEW_PRODUCTS:
            return {
                ...state,
                newestProducts: payload
            }
        case BEST_SELLERS:
            return {
                ...state,
                bestSellers: payload
            }

        default:
            return state;
    }
}


export default landingPageR;