import { ADMIN_PRODUCTS } from "../actions/adminProductsA";

const initialState = {
    products: [],
}

const adminProductsR = (state = initialState, {type, payload}) => {
    switch (type) {
      case ADMIN_PRODUCTS:
        return {
          ...state,
          products: payload,
        };
      default:
        return state;
    }
}

export default adminProductsR;