import { GET_NEWEST_PRODUCTS } from "../actions/landingPageNewestA";

const initialState = {
    newestProducts: [],
}

const landingPageNewestR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_NEWEST_PRODUCTS:
            // console.log("Reducer", GET_NEWEST_PRODUCTS, payload)
            return {
                ...state,
                newestProducts: payload
               
            }

        default:
            return state;
    }
}


export default landingPageNewestR;