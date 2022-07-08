import { GET_PRODUCT_ID, REFRESH} from "../actions/detailProductA";

const initialState = {
    product: [],
}

const detailProductR = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_ID:
            return {
                ...state,
                product: payload
            }
        case REFRESH:
            return {
                ...state,
                product: []
            }
            
        default:
            return state;
    }
}

export default detailProductR;