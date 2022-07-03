import { DISCOUNTS } from "../actions/landingPageDiscountsA";


const initialState = {
    discounts: [],
}

const landingPageR = (state = initialState, { type, payload }) => {
    switch (type) {
        case DISCOUNTS:
            // console.log("Reducer", GET_NEWEST_PRODUCTS, payload)
            return {
                ...state,
                discounts: payload
               
            }

        default:
            return state;
    }
}


export default landingPageR;