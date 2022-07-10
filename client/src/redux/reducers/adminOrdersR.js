import { ADMIN_ORDER} from "../actions/adminOrdersA";

const initialState = {
    adminOrders: []
}

const adminOrdersR = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADMIN_ORDER :
            return {
                ...state,
                adminOrders: payload
               
            }
        default:
            return state;
    }
}
export default adminOrdersR;