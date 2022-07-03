import { HISTORY_SHOPPING } from "../actions/DashboardHistoryShoppingA";

const initialState = {
    allShopping: [],
}

const historyShoppingR = (state = initialState, { type, payload }) => {
    switch (type) {
        case HISTORY_SHOPPING:
            return {
                ...state,
                allShopping: payload
               
            }

        default:
            return state;
    }
}


export default historyShoppingR;
