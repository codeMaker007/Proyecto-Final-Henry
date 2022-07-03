import { MOST_SELLED_PRODUCTS } from "../actions/landingPageMostSelledA";

const initialState = {
    mostSelledProducts: [],
}

const landingPageR = (state = initialState, { type, payload }) => {
    switch (type) {
        case MOST_SELLED_PRODUCTS:
            // console.log("Reducer", GET_NEWEST_PRODUCTS, payload)
            return {
                ...state,
                mostSelledProducts: payload
               
            }

        default:
            return state;
    }
}


export default landingPageR;